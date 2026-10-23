'use client'

import { useId, useRef, useState } from 'react'

import { DISCUSS_OPTIONS, EMAIL, TIMEFRAME_OPTIONS } from '@/content/site'

const FIELD =
  'w-full rounded-2xl border bg-white/70 px-4 py-3 font-sans text-[15px] text-dark-text transition-colors placeholder:text-dark-text/50 focus:border-coral/60'
const LABEL = 'mb-1.5 block font-sans text-[13px] font-medium text-dark-text/80'

/**
 * Where enquiries are POSTed, e.g. a Formspree form URL. When it is not set
 * the form falls back to drafting an email in the visitor's own mail app.
 * Either way the visitor is only told a message was sent if it really was.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? ''

type Field = 'name' | 'email' | 'discuss' | 'problem'
type Errors = Partial<Record<Field, string>>
type Status = 'idle' | 'submitting' | 'sent' | 'drafted' | 'error'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(data: FormData): Errors {
  const get = (k: string) => String(data.get(k) ?? '').trim()
  const errors: Errors = {}
  if (!get('name')) errors.name = 'Please enter your name.'
  if (!get('email')) errors.email = 'Please enter your email address.'
  else if (!EMAIL_PATTERN.test(get('email'))) errors.email = 'Please enter a valid email address, like name@company.com.'
  if (!get('discuss')) errors.discuss = 'Please choose what you would like to discuss.'
  if (get('problem').length < 10) errors.problem = 'Please add a sentence or two about what you are trying to solve.'
  return errors
}

function compose(data: FormData) {
  const get = (k: string) => String(data.get(k) ?? '').trim()
  return {
    subject: `Consultation request: ${get('discuss')}`,
    body: [
      `Name: ${get('name')}`,
      `Work email: ${get('email')}`,
      `Phone or WhatsApp: ${get('phone')}`,
      `Organisation: ${get('organisation')}`,
      `Would like to discuss: ${get('discuss')}`,
      `Preferred timeframe: ${get('timeframe')}`,
      '',
      get('problem'),
    ].join('\n'),
  }
}

/**
 * The consultation form, shared by the modal and the contact page.
 * `compact` drops the optional fields for the shorter contact-page version.
 */
export function ConsultationForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Errors>({})
  const [mailto, setMailto] = useState('')
  const formRef = useRef<HTMLFormElement>(null)
  const id = useId()
  const f = (name: string) => `${id}-${name}`

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const found = validate(data)
    setErrors(found)
    const first = Object.keys(found)[0]
    if (first) {
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus()
      return
    }

    // Honeypot: real visitors never see or fill this field.
    if (String(data.get('company_website') ?? '')) return

    const { subject, body } = compose(data)
    const link = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setMailto(link)

    if (!ENDPOINT) {
      window.location.href = link
      setStatus('drafted')
      return
    }

    setStatus('submitting')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...Object.fromEntries(data.entries()), _subject: subject }),
      })
      if (!res.ok) throw new Error(`Form endpoint answered ${res.status}`)
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="mt-7 rounded-2xl border border-dark-text/10 bg-white/60 p-6">
        <p className="font-serif text-[22px] text-dark-text">Thank you. Your message has been sent.</p>
        <p className="mt-2 font-sans text-[15px] leading-relaxed text-dark-text/80">
          It has reached Dr Kaur&apos;s inbox. If anything is urgent, you can also write to{' '}
          <a className="underline decoration-coral/50 underline-offset-4" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      </div>
    )
  }

  if (status === 'drafted') {
    return (
      <div role="status" className="mt-7 rounded-2xl border border-dark-text/10 bg-white/60 p-6">
        <p className="font-serif text-[22px] text-dark-text">Your message is ready in your email app.</p>
        <p className="mt-2 font-sans text-[15px] leading-relaxed text-dark-text/80">
          It has not been sent yet. Press send in your email app to deliver it. If no email app opened,{' '}
          <a className="underline decoration-coral/50 underline-offset-4" href={mailto}>try again</a> or write to{' '}
          <a className="underline decoration-coral/50 underline-offset-4" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-4 rounded-full border border-dark-text/15 bg-white/70 px-5 py-2 font-sans text-[13px] font-medium text-dark-text hover:bg-white"
        >
          Back to the form
        </button>
      </div>
    )
  }

  const fieldProps = (name: Field) => ({
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? f(`${name}-error`) : undefined,
    className: `${FIELD} ${errors[name] ? 'border-coral' : 'border-dark-text/10'}`,
  })
  const errorText = (name: Field) =>
    errors[name] ? (
      <p id={f(`${name}-error`)} className="mt-1.5 font-sans text-[13px] font-medium text-dark-text">
        <span aria-hidden="true" className="mr-1 text-coral">!</span>
        {errors[name]}
      </p>
    ) : null

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="relative mt-7 grid gap-4 sm:grid-cols-2">
      {status === 'error' ? (
        <div role="alert" className="rounded-2xl border border-coral/60 bg-white/70 p-4 font-sans text-[14px] leading-relaxed text-dark-text sm:col-span-2">
          Your message could not be sent. Please try again, or{' '}
          <a className="font-medium underline decoration-coral/50 underline-offset-4" href={mailto || `mailto:${EMAIL}`}>
            send it by email instead
          </a>
          .
        </div>
      ) : null}

      <div>
        <label htmlFor={f('name')} className={LABEL}>Your name <span aria-hidden="true">*</span></label>
        <input id={f('name')} name="name" required autoComplete="name" {...fieldProps('name')} />
        {errorText('name')}
      </div>
      <div>
        <label htmlFor={f('email')} className={LABEL}>Work email <span aria-hidden="true">*</span></label>
        <input id={f('email')} name="email" type="email" required autoComplete="email" {...fieldProps('email')} />
        {errorText('email')}
      </div>
      {!compact ? (
        <>
          <div>
            <label htmlFor={f('phone')} className={LABEL}>Phone or WhatsApp</label>
            <input id={f('phone')} name="phone" type="tel" autoComplete="tel" className={`${FIELD} border-dark-text/10`} />
          </div>
          <div>
            <label htmlFor={f('org')} className={LABEL}>Organisation</label>
            <input id={f('org')} name="organisation" autoComplete="organization" className={`${FIELD} border-dark-text/10`} />
          </div>
        </>
      ) : null}
      <div className="sm:col-span-2">
        <label htmlFor={f('discuss')} className={LABEL}>What would you like to discuss? <span aria-hidden="true">*</span></label>
        <select id={f('discuss')} name="discuss" required defaultValue="" {...fieldProps('discuss')}>
          <option value="" disabled>Choose one</option>
          {DISCUSS_OPTIONS.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        {errorText('discuss')}
      </div>
      {!compact ? (
        <div className="sm:col-span-2">
          <label htmlFor={f('time')} className={LABEL}>Preferred timeframe</label>
          <select id={f('time')} name="timeframe" defaultValue="" className={`${FIELD} border-dark-text/10`}>
            <option value="">No preference</option>
            {TIMEFRAME_OPTIONS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      ) : null}
      <div className="sm:col-span-2">
        <label htmlFor={f('problem')} className={LABEL}>Briefly, what are you trying to solve? <span aria-hidden="true">*</span></label>
        <textarea id={f('problem')} name="problem" required rows={4} {...fieldProps('problem')} className={`${fieldProps('problem').className} resize-y`} />
        {errorText('problem')}
      </div>

      {/* Honeypot for bots. Hidden from people and assistive tech. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor={f('hp')}>Leave this empty</label>
        <input id={f('hp')} name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <p className="font-sans text-[12.5px] text-dark-text/70 sm:col-span-2">Fields marked * are required.</p>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          aria-busy={status === 'submitting'}
          className="w-full rounded-full bg-dark-text/90 px-6 py-4 font-sans text-[14px] font-medium text-white shadow-lg transition-colors hover:bg-black disabled:opacity-70"
        >
          {status === 'submitting' ? 'Sending…' : ENDPOINT ? 'Send the request' : 'Draft the email'}
        </button>
        {!ENDPOINT ? (
          <p className="mt-2 font-sans text-[12.5px] text-dark-text/70">
            This opens your email app with your message filled in, ready for you to send.
          </p>
        ) : null}
      </div>
    </form>
  )
}
