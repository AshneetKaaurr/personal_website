import {
  Container,
  PageTitle,
  Section,
  Record,
  RecordList,
} from '@/components/Page'
import { ROUTE_HERE } from '@/content/record'
import { GraduationCap, Briefcase, Landmark, Building2, Users, MonitorPlay, LineChart, Shield } from 'lucide-react'

function InstituteBadge({ icon: Icon, imageSrc, name, role }: { icon: any, imageSrc?: string, name: string, role?: string }) {
  return (
    <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:bg-white/60 transition-all duration-300 group">
      <div className="p-1.5 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-all duration-300 text-dark-text/60 flex items-center justify-center overflow-hidden w-11 h-11 shrink-0">
        {imageSrc ? (
          <img src={imageSrc} alt={name} className="w-full h-full object-contain mix-blend-multiply" />
        ) : (
          <Icon size={18} strokeWidth={2} className="group-hover:text-coral transition-colors duration-300" />
        )}
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-bold text-dark-text leading-tight">{name}</span>
        {role && <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-coral mt-1 leading-tight">{role}</span>}
      </div>
    </div>
  )
}

export const metadata = {
  title: 'About',
  description:
    'From Deloitte, McKinsey and ATOS to a doctorate at IIM Ahmedabad and the classroom. Dr Ashneet Kaur on research, teaching and the route between them.',
}

export default function About() {
  return (
    <Container>
      <PageTitle>About</PageTitle>

      <Section>
        <div className="grid lg:grid-cols-[1fr_320px] gap-16 items-start mt-8">
          <div className="prose prose-lg prose-slate text-dark-text/80 leading-relaxed font-sans max-w-none space-y-6 lg:text-[1.1rem]">
            <p className="text-2xl font-serif text-coral leading-snug mb-8">
              I work on what happens to people when the systems around them change.
            </p>

            <p>
              My research sits where organisational behaviour meets technology:
              how AI-driven systems affect employee engagement, trust and the way
              a culture evolves, and what algorithmic decision-making does to
              privacy, fairness and well-being. I work mostly in fast-growing,
              digitally enabled and sustainability-focused firms, because that is
              where these questions arrive first and get answered worst.
            </p>

            <p>
              I came to research through practice, not around it. I founded my
              first venture, College Ki Knowledge, while I was still an
              undergraduate at Shri Ram College of Commerce, and co-founded a
              second, Start-up Pal, before I graduated. I audited US clients at
              Deloitte, then spent two years at McKinsey on the Strategy Analytics
              team, running knowledge sessions for partners and experts. I
              finished a master&apos;s at the Delhi School of Economics while I was
              there. At ATOS I built a human resource retention strategy across
              the UK, France and India offices and interviewed more than fifty
              stakeholders to do it.
            </p>

            <p>
              So when I teach strategic HR to executives, I am teaching work I
              have done. That matters more than it sounds. The gap between an HR
              system on paper and an HR system as experienced by the person inside
              it is the gap most of my research lives in, and I first saw it from
              the inside.
            </p>

            <p>
              I took my doctorate in Human Resource Management at IIM Ahmedabad.
              I taught at SPJIMR Mumbai across eight programmes, from the two-year
              flagship to the doctoral fellowship, and as visiting faculty at the
              University of Pécs, Great Lakes Chennai and Masters Union. I am now
              faculty in Organisational Behaviour at the Indian School of
              Business. In April 2026 I joined the board of Punjab Communications
              Limited as an independent director.
            </p>

            <p>
              In the classroom I use design thinking, rapid prototyping,
              cinema-based leadership education and gamified teaching. I
              co-designed three courses on that principle: one that teaches
              leadership through film, one that reads strategy off Indian cricket,
              and one built on Indian turnaround stories. The point is not
              novelty. It is that people remember an argument they have watched
              play out, and they will argue with a character in a way they will
              not argue with a framework.
            </p>
          </div>
          
          <div className="sticky top-32 space-y-10 bg-white/30 backdrop-blur-xl p-8 rounded-[2rem] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-coral mb-5 flex items-center gap-2">
                <Landmark size={14} /> Education
              </h3>
              <div className="space-y-3">
                <InstituteBadge imageSrc="/photos/iima.png" icon={Landmark} name="IIM Ahmedabad" role="Doctorate" />
                <InstituteBadge imageSrc="/photos/Delhi_school_economics.jpeg" icon={GraduationCap} name="Delhi School of Economics" role="Master's" />
                <InstituteBadge imageSrc="/photos/SRCC.png" icon={GraduationCap} name="Shri Ram College of Commerce" role="Undergrad" />
              </div>
            </div>

            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-coral mb-5 flex items-center gap-2">
                <Briefcase size={14} /> Practice
              </h3>
              <div className="space-y-3">
                <InstituteBadge imageSrc="/photos/McKinsey..webp" icon={LineChart} name="McKinsey & Co." role="Strategy Analytics" />
                <InstituteBadge imageSrc="/photos/Deloitte.webp" icon={Shield} name="Deloitte" role="Audit" />
                <InstituteBadge imageSrc="/photos/Atos_logo.png" icon={Building2} name="ATOS" role="HR Strategy" />
                <InstituteBadge imageSrc="/photos/PunjabCommun.webp" icon={Building2} name="Puncom" role="Board Director" />
              </div>
            </div>

            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-coral mb-5 flex items-center gap-2">
                <Users size={14} /> Faculty
              </h3>
              <div className="space-y-3">
                <InstituteBadge imageSrc="/photos/ISB.jpg" icon={Users} name="ISB" role="Current Faculty" />
                <InstituteBadge imageSrc="/photos/spjimr.png" icon={Users} name="SPJIMR Mumbai" role="Past Faculty" />
              </div>
            </div>
          </div>
        </div>


      </Section>

      <Section
        title="The route here"
        intro="Two of these overlap on purpose. The master's was taken while working at McKinsey, and the ATOS engagement sits inside the doctorate, which is why it runs a single month."
      >
        {/* Interactive vertical timeline */}
        <div className="relative ml-4 md:ml-0">
          {/* Vertical line */}
          <div className="absolute left-3 md:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-coral via-coral/30 to-transparent" />
          
          <ol className="space-y-0">
            {ROUTE_HERE.map((step, index) => (
              <li key={step.where} className="relative pl-12 md:pl-14 pb-8 last:pb-0 group">
                {/* Node */}
                <div className="absolute left-0 md:left-0.5 top-1 w-7 h-7 rounded-full bg-white border-2 border-coral/40 group-hover:border-coral group-hover:scale-110 transition-all duration-300 flex items-center justify-center z-10">
                  <span className="text-[10px] font-bold text-coral">{index + 1}</span>
                </div>
                {/* Content */}
                <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-4 md:p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] group-hover:bg-white/60 transition-all duration-300">
                  <span className="block leading-relaxed font-medium text-dark-text">{step.where}</span>
                  <span className="block text-sm text-sage mt-1">{step.when}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>

      </Section>

      <Section title="Credentials">
        <RecordList columns={2}>
          <Record label="Doctorate">
            PhD in Human Resource Management, IIM Ahmedabad, June 2018 to
            February 2023
          </Record>
          <Record label="Masters">
            M.Com, Delhi School of Economics, University of Delhi, June 2017
          </Record>
          <Record label="Undergraduate">
            B.Com (Honours), Shri Ram College of Commerce, Delhi University, May
            2015
          </Record>
          <Record label="Certification">
            SHRM Senior Certified Professional, August 2024 to August 2027
          </Record>
          <Record label="Faculty development">
            Wharton Global Faculty Development Programme, 2025, a four-day
            intensive on impactful research and the art of teaching with Martine
            Haas, Lori Rosenkopf, Rahul Kapoor and Matthew Bidwell
          </Record>
          <Record label="Teaching">
            Doctoral Consortium on Teaching, Centre for Teaching and Learning,
            IIM Bangalore, February 2022
          </Record>
        </RecordList>
      </Section>
    </Container>
  )
}
