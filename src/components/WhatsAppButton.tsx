import { WHATSAPP_CHAT_URL } from '@/content/site'

/** Floating "chat on WhatsApp" button, fixed to the bottom-right corner. */
export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_CHAT_URL}
      target="_blank"
      rel="noreferrer"
      className="group fixed right-4 bottom-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_12px_30px_-8px_rgba(18,140,126,0.6)] transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#128c7e] sm:right-6 sm:bottom-6"
    >
      <span aria-hidden="true" className="absolute inset-0 rounded-full bg-[#25d366] opacity-40 motion-safe:animate-ping motion-safe:[animation-duration:2.5s]" />
      <svg viewBox="0 0 24 24" aria-hidden="true" className="relative h-7 w-7 fill-current">
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35ZM12.04 21.5h-.01a9.5 9.5 0 0 1-4.83-1.32l-.35-.21-3.6.94.96-3.5-.23-.36a9.46 9.46 0 0 1-1.45-5.05c0-5.24 4.27-9.5 9.52-9.5a9.45 9.45 0 0 1 6.72 2.79 9.43 9.43 0 0 1 2.78 6.72c0 5.24-4.27 9.5-9.51 9.5Zm8.1-17.6A11.37 11.37 0 0 0 12.04.54C5.73.54.6 5.67.6 11.98c0 2.02.53 3.98 1.53 5.72L.5 23.46l5.9-1.55a11.4 11.4 0 0 0 5.63 1.44h.01c6.31 0 11.44-5.13 11.44-11.44 0-3.06-1.19-5.93-3.35-8.09Z" />
      </svg>
      <span className="sr-only">Chat with Dr Kaur on WhatsApp (opens in a new tab)</span>
    </a>
  )
}
