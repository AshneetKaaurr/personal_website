/**
 * Teaching and academic engagement, from the CV. Programmes, Teaching,
 * Executive Development, Speaking and Home all read from here.
 */

export interface TaughtProgramme {
  /** Each programme code counted on its own (PGPM and PGPDM are two). */
  codes: string[]
  name: string
  courses: string
  focus: string
}

/** SPJIMR, April 2023 to March 2026. "Standard Courses and Programs" on the CV. */
export const SPJIMR_PROGRAMMES: TaughtProgramme[] = [
  {
    codes: ['PGEMP'],
    name: 'Post Graduate Executive Management Programme',
    courses: 'Leadership',
    focus: 'Managing teams, developing leadership effectiveness and strengthening interpersonal influence among senior executives.',
  },
  {
    codes: ['PGPM', 'PGPDM'],
    name: 'Post Graduate Programme in Management and Post Graduate Program in Development Management',
    courses: 'Strategic People Management; Product Entrepreneurship Lab',
    focus: 'HR systems linked to social-impact outcomes for development-sector professionals; how ventures scale through people, capability building and founder-driven culture.',
  },
  {
    codes: ['PGDM'],
    name: 'Post Graduate Diploma in Management (two-year flagship)',
    courses: 'Strategic HRM; People & Performance; Talent Management; Managing High-Performing Teams',
    focus: 'Core and elective courses integrating behavioural science with practical HR decision-making.',
  },
  {
    codes: ['PGDM-Online'],
    name: 'Post Graduate Diploma in Management, Online',
    courses: 'Strategic Human Resource Management',
    focus: 'Digital-first HR systems and contemporary workforce practices for online MBA participants.',
  },
  {
    codes: ['SYB'],
    name: 'Start Your Business: Family Business and Entrepreneurship Program',
    courses: 'Scaling through people and systems',
    focus: 'Helping entrepreneurs build structured HR processes and leadership capability for venture growth.',
  },
  {
    codes: ['GMP'],
    name: 'Global Management Program (dual-degree global immersion)',
    courses: 'Organization Behaviour; Design Thinking & Innovation',
    focus: 'Cross-cultural collaboration, creativity and user-centric problem solving.',
  },
  {
    codes: ['FPM'],
    name: 'Fellowship Program in Management',
    courses: 'Strategic HRM',
    focus: 'Taught doctoral scholars, supervised MRes theses in the SHRM domain, and served as an external evaluator for research projects in organisational behaviour.',
  },
]

export const PROGRAMME_COUNT = SPJIMR_PROGRAMMES.reduce((n, p) => n + p.codes.length, 0)

export interface Theme {
  title: string
  detail: string
}

/** Customised programmes (MDPs) at SPJIMR: the four themes the CV lists. */
export const MDP_THEMES: Theme[] = [
  {
    title: 'Team leadership, collaboration and emotional intelligence',
    detail: 'Executive programmes for corporates, government bodies and social-sector organisations on team leadership, collaboration, emotional intelligence and managing high-performing teams.',
  },
  {
    title: 'Design thinking and innovation',
    detail: 'Programmes that helped managers apply human-centred problem solving to organisational challenges and strategic decision-making.',
  },
  {
    title: 'Artificial Intelligence and Human Resource Management',
    detail: 'Domain-specific programmes on AI-enabled HR processes, their ethical considerations, and technology-driven workforce transformation.',
  },
  {
    title: 'Stress and time management, strategic people systems, leadership development',
    detail: 'Capability-building interventions for senior and mid-level executives across industries.',
  },
]

export interface Course {
  title: string
  status: string
  description: string
  also?: string
}

/** Pedagogical innovations: new course designs. */
export const CO_DESIGNED_COURSES: Course[] = [
  {
    title: 'Netflix & Learn: The Art of Leadership through Movies',
    status: 'Elective, co-designed',
    description:
      'Integrates cinematic storytelling with leadership theories, enabling reflective and critical insight into leadership dynamics.',
    also: 'Also taught as a visiting course on the PGPM at Great Lakes Institute of Management, Chennai, in 2025.',
  },
  {
    title: 'Pitch to Boardroom: Lessons from Indian Cricket',
    status: 'Newly co-designed at SPJIMR, 2024',
    description:
      'Extracts strategic management and teamwork lessons from Indian cricket scenarios.',
  },
  {
    title: 'Resilience and Turnaround: Success Strategies from Indian Icons and Organizations',
    status: 'Elective, co-designed',
    description:
      'Turnaround stories and resilience strategies from prominent Indian figures and companies.',
  },
]

/** Teaching methods named on the CV. */
export const PEDAGOGY: string[] = [
  'Case studies',
  'Simulation',
  'Gamification',
  'Video-based learning',
  'Design thinking',
  'Rapid prototyping',
  'Cinema-based leadership education',
]

export interface Talk {
  title: string
  audience: string
  when: string | null
  detail: string
}

/** Invited lectures and workshops. */
export const INVITED_TALKS: Talk[] = [
  {
    title: 'Enhancing Research Impact: Tools and Techniques for Effective Publishing',
    audience: 'K.R. Mangalam University',
    when: null,
    detail: 'A two-hour online lecture with more than 100 participants; feedback 4.44 out of 5.',
  },
  {
    title: 'Lecture on innovative approaches to solving problems',
    audience: 'SK Associates and Group',
    when: 'February 2023',
    detail: 'Delivered to more than 100 students; received as one of the best lectures in the domain.',
  },
  {
    title: 'Lecture on design thinking',
    audience: 'Blind People Association (BPA), at IIM Ahmedabad',
    when: 'October 2022',
    detail: 'Delivered to fifty women of the Blind People Association, under the guidance of Prof Amit Karna and Prof Rajesh Chandwani.',
  },
]

/** Supervision, mentoring and evaluation. */
export const SUPERVISION: string[] = [
  'Supervised MRes theses in the strategic HRM domain on the SPJIMR Fellowship Program in Management.',
  'External evaluator for research projects in Organizational Behaviour.',
  'Mentored first-year PGDM students on effective mentoring practice in the Abhyudaya programme for underprivileged children, and evaluated the impact students created during their DoCC visits.',
]

/** Institution building and university service. */
export const INSTITUTION_BUILDING: string[] = [
  'FiNovate Entrepreneurship Program, SPJIMR (2024 onwards): entrepreneurial ecosystem building under the WISE Tech Acceleration vertical.',
  'Selection of participants across programmes (2023 onwards): panellist for PGDM, PGPM (one-year MBA), the Fellow Program in Management and executive programmes.',
  'University service at IIM Ahmedabad: PhD Representative to the Executive Committee, and Lab Representative.',
]

export const PODCAST =
  "Leads SPJIMR's video podcast series on AI and Digital Transformation, featuring top executives and exploring change management and capability development."

/** Editorial roles, track chairing and refereeing. */
export const SERVICE: string[] = [
  'Editor-in-Chief, NewsBlast, Academy of Management Entrepreneurship Division, May and September 2025 issues.',
  'Member of the Early Career Review Board, Employee Relations: The International Journal, from February 2025.',
  'Track Chair, HR/OB area, 3rd Annual Winter Conference on Sustainable Business (WCSB 2024), Great Lakes Institute of Management, Gurgaon, December 2024.',
  'Member and reviewer, Academy of Management, Human Resource Management and Entrepreneurship Divisions.',
  'Reviewer for international and national journals and conferences.',
  'Case reviewer for IIM Bangalore, IIM Raipur and Emerald Emerging Markets Case Studies.',
]
