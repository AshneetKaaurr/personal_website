/**
 * The CV record, as data.
 *
 * Everything here is transcribed from UpdatedCV_AshneetKaur_2026.pdf. Nothing
 * is inferred, rounded or embellished. Where the CV is silent, the field is
 * absent and the page says so rather than filling the gap.
 */

// ---------------------------------------------------------------------------
// Awards
// ---------------------------------------------------------------------------

export interface Award {
  title: string
  paper: string
  detail: string
  year: number
}

export const AWARDS: Award[] = [
  {
    title: 'Best Paper Award, Human Resource Division, Academy of Management',
    paper:
      'Employee Agility in New Ventures: Investigating the Role of Work Engagement and Trust in Founder in cross-cultural Settings',
    detail:
      'Top ten per cent in the division, 83rd Annual Meeting, Boston, Massachusetts',
    year: 2023,
  },
  {
    title:
      'Best Paper Award, Entrepreneurship Development Institute of India Biennial Conference',
    paper:
      'Entrepreneurial Freedom to Work and Quality Listening of Founders: Role of Learning Goal Orientation in Start-up Firms',
    detail: 'One of the top three of 118 entrepreneurship contributions',
    year: 2023,
  },
  {
    title: 'Best Paper Award, Human Resource Division, Anusandhan RDAIS',
    paper:
      'When going green turns grey: The ethical implications of abusive supervision in hospitality workplaces',
    detail: 'Best paper in the HR and general management division',
    year: 2025,
  },
]

// ---------------------------------------------------------------------------
// Speaking
// ---------------------------------------------------------------------------

export interface Appearance {
  event: string
  place: string
  when: string
  upcoming?: boolean
}

/** Academy of Management, grouped because five meetings is the headline. */
export const AOM: Appearance[] = [
  {
    event: '86th Annual Meeting',
    place: 'Philadelphia, USA',
    when: 'August 2026',
    upcoming: true,
  },
  { event: '85th Annual Meeting', place: 'Denmark', when: 'August 2025' },
  { event: '84th Annual Meeting', place: 'Chicago, USA', when: 'August 2024' },
  { event: '83rd Annual Meeting', place: 'Boston, USA', when: 'August 2023' },
  { event: '82nd Annual Meeting', place: 'Seattle, USA', when: 'August 2022' },
  { event: '81st Annual Meeting', place: 'Virtual', when: 'August 2021' },
]

export const EGOS: Appearance[] = [
  {
    event: '39th EGOS Colloquium, University of Cagliari',
    place: 'Cagliari, Italy',
    when: 'July 2023',
  },
  {
    event: '38th EGOS Colloquium, WU Vienna',
    place: 'Vienna, Austria',
    when: 'July 2022',
  },
]

export const OTHER_CONFERENCES: Appearance[] = [
  {
    event: 'European Academy of Management, Trinity Business School',
    place: 'Dublin, Ireland',
    when: 'June 2023',
  },
  {
    event: 'Babson College Entrepreneurship Research Conference',
    place: 'Knoxville, USA',
    when: 'June 2023',
  },
  {
    event:
      'ICODO Doctoral Workshop, International Conference on Digital Organizations, IIM Ahmedabad',
    place: 'Ahmedabad, India',
    when: 'November 2022',
  },
  {
    event:
      '5th Global Conference on International HRM, Pennsylvania State University',
    place: 'Hybrid',
    when: 'May 2022',
  },
  {
    event:
      'International Conference on Green HRM and Sustainable Behaviour, Vienna University of Economics and Business',
    place: 'Vienna',
    when: 'March 2022',
  },
  { event: 'NASPAA South Asia Conference', place: '', when: 'November 2021' },
]

/** Draft. Written from her published work, for her approval. */
export const SPEAKING_TOPICS: string[] = [
  'Watch out, you are live: what AI monitoring is doing to trust at work',
  'The vanishing first job: what happens to early careers in the age of AI',
  'Invisible norms: the barriers that shape how women build careers in India',
  'Green on paper: why sustainable HR policies stall before they reach the floor',
  'Trust in the founder: what makes teams in young companies move fast',
  'Leadership through cinema: teaching judgement with material people argue with',
]

// ---------------------------------------------------------------------------
// Media
// ---------------------------------------------------------------------------

export interface Article {
  title: string
  outlet: string
  year: string
  authorship: 'Authored' | 'Co-authored'
  /** Holding line, written from the title and outlet only. Her framing note replaces it. */
  holding: string
  /** Verifiable third-party reach, where the CV records it. */
  reach?: string
}

export const ARTICLES: Article[] = [
  {
    title: 'The vanishing first job in the age of AI',
    outlet: 'ET-HRWorld',
    year: '2026',
    authorship: 'Co-authored',
    holding: 'On what automation is doing to entry-level work.',
  },
  {
    title: 'Pause before you judge: The social tax we all pay',
    outlet: 'Reputation Today',
    year: '2025',
    authorship: 'Authored',
    holding: 'The only piece on this list she wrote alone.',
  },
  {
    title:
      'Technology Meets Tradition: A New Era of Audience Engagement With Indian Performing Arts',
    outlet: 'Forbes India',
    year: '2025',
    authorship: 'Co-authored',
    holding: 'On technology and audiences for the Indian performing arts.',
  },
  {
    title: "Partnerships and Resourcefulness: A Venture's Ultimate Growth Hack",
    outlet: 'Management Practice Insight',
    year: '2024 to 2025',
    authorship: 'Co-authored',
    holding: 'On how partnerships and resourcefulness carry a young venture.',
    reach:
      'More than 5,900 downloads and close to 2,822 site views as of September 2025 — the most-read of more than thirty articles published there since March 2024.',
  },
  {
    title: 'Navigating the Green Shift: The Role of Sustainable Leadership',
    outlet: 'People Matters',
    year: '2024',
    authorship: 'Co-authored',
    holding: 'On what sustainable leadership asks of the people who practise it.',
  },
  {
    title: 'Entrepreneurial excellence: 11 principles for business success',
    outlet: 'CXO Today',
    year: '2024',
    authorship: 'Co-authored',
    holding: 'Eleven principles drawn from entrepreneurship research.',
  },
  {
    title:
      'Beyond the check-list: Unlocking the secrets to Successful Global Assignments',
    outlet: 'Journal of Global Mobility Bitblog',
    year: '2024',
    authorship: 'Co-authored',
    holding: 'On what makes an international assignment work past the checklist.',
  },
  {
    title: 'Empowering HRM with Artificial Intelligence',
    outlet: 'Business Manager',
    year: '2024',
    authorship: 'Co-authored',
    holding: 'On where AI helps human resource management and where it does not.',
  },
]

// ---------------------------------------------------------------------------
// Teaching
// ---------------------------------------------------------------------------

export interface Course {
  title: string
  status: string
  description: string
  also?: string
}

export const CO_DESIGNED_COURSES: Course[] = [
  {
    title: 'Netflix & Learn: The Art of Leadership through Movies',
    status: 'Elective, co-designed',
    description:
      'Integrates cinematic storytelling with leadership theory to produce reflective and critical insight into leadership dynamics.',
    also:
      'Also taught as a visiting course on the PGPM at Great Lakes Institute of Management, Chennai, in 2025.',
  },
  {
    title: 'Pitch to Boardroom: Lessons from Indian Cricket',
    status: 'Newly co-designed at SPJIMR, 2024',
    description:
      'Extracts strategic management and teamwork lessons from Indian cricket scenarios.',
  },
  {
    title:
      'Resilience and Turnaround: Success Strategies from Indian Icons and Organizations',
    status: 'Elective, co-designed',
    description:
      'Turnaround stories and resilience strategies from prominent Indian figures and companies.',
  },
]

export interface Programme {
  name: string
  taught: string
}

export const PROGRAMMES: Programme[] = [
  {
    name: 'PGEMP, Post Graduate Executive Management Programme',
    taught:
      'Leadership: managing teams, developing leadership effectiveness, and strengthening interpersonal influence among senior executives.',
  },
  {
    name: 'PGPM and PGPDM',
    taught:
      'Strategic People Management for development-sector professionals, linking HR systems to social-impact outcomes; and the Product Entrepreneurship Lab, on how ventures scale through people, capability building and founder-driven culture.',
  },
  {
    name: 'PGDM, the two-year flagship',
    taught:
      'Strategic HRM, People and Performance, Talent Management, and Managing High-Performing Teams.',
  },
  {
    name: 'PGDM Online',
    taught:
      'Strategic Human Resource Management, with emphasis on digital-first HR systems and contemporary workforce practice.',
  },
  {
    name: 'SYB, Start Your Business',
    taught:
      'Scaling through people and systems: building structured HR processes and leadership capability for venture growth.',
  },
  {
    name: 'GMP, the dual-degree global immersion',
    taught:
      'Organization Behaviour, and Design Thinking and Innovation, focused on cross-cultural collaboration and user-centric problem solving.',
  },
  {
    name: 'FPM, Fellowship Programme in Management',
    taught:
      'Strategic HRM to doctoral scholars, MRes thesis supervision, and external evaluation of research projects in organisational behaviour.',
  },
]

export interface Visiting {
  institution: string
  when: string
  detail: string
}

export const VISITING: Visiting[] = [
  {
    institution: 'University of Pécs, Hungary',
    when: 'September to November 2025',
    detail:
      'Visiting faculty, Sustainable Human Resource Management, for a global student cohort.',
  },
  {
    institution: 'Great Lakes Institute of Management and Research, Chennai',
    when: 'March to April 2025',
    detail:
      'Visiting faculty on the PGPM, teaching Netflix and Learn: The Art of Leadership through Movies.',
  },
  {
    institution: 'Masters Union School of Business, Gurgaon',
    when: 'February to April 2022',
    detail:
      'Visiting faculty in entrepreneurship and human resource management. Designed a course on human resource management in new ventures and strategic HRM, and took part in enrolling the 2022 cohort.',
  },
  {
    institution: 'Bharti College, Delhi University',
    when: 'December 2017 to March 2018',
    detail:
      "Guest faculty in financial accounting for the B.Com, teaching how to read a company's financial health from its reported statements. Also ran career counselling sessions for more than a hundred students.",
  },
]

export const INVITED_LECTURES: string[] = [
  'Design thinking to fifty women of the Blind People Association at IIM Ahmedabad, under Professor Amit Karna and Professor Rajesh Chandwani, October 2022.',
  'More than a hundred students of SK Associates and Group, February 2023, received as one of the best lectures in innovative approaches to problem solving.',
  'K.R. Mangalam University, a two-hour online lecture on Enhancing Research Impact: Tools and Techniques for Effective Publishing, more than a hundred participants, feedback 4.44 out of 5.',
]

export const INSTITUTION_BUILDING: string[] = [
  'Abhyudaya and DoCC at SPJIMR: mentoring first-year PGDM students on effective mentoring practice with underprivileged children, and evaluating the impact of their DoCC visits.',
  'FiNovate Entrepreneurship Programme at SPJIMR, from 2024, building the entrepreneurial ecosystem under the WISE Tech Acceleration vertical.',
  'Admissions panellist from 2023 across PGDM, PGPM, FPM and executive programmes.',
  'At IIM Ahmedabad, PhD Representative to the Executive Committee, and Lab Representative.',
]

// ---------------------------------------------------------------------------
// Consulting
// ---------------------------------------------------------------------------

export interface ProgrammeTheme {
  title: string
  detail: string
}

export const MDP_THEMES: ProgrammeTheme[] = [
  {
    title: 'Team leadership and collaboration',
    detail:
      'Executive programmes on team leadership, collaboration, emotional intelligence and managing high-performing teams, for corporates, government bodies and social-sector organisations.',
  },
  {
    title: 'Design thinking and innovation',
    detail:
      'Programmes that put human-centred problem solving to work on real organisational challenges and strategic decisions.',
  },
  {
    title: 'AI and human resource management',
    detail:
      'Domain-specific programmes helping leaders understand AI-enabled HR processes, the ethical questions they raise, and technology-driven workforce transformation.',
  },
  {
    title: 'Strategic people systems',
    detail:
      'Capability-building for senior and mid-level executives on strategic people systems and leadership development.',
  },
  {
    title: 'Stress and time management',
    detail:
      'Capability-building interventions for executives across industries.',
  },
]

export interface Engagement {
  client: string
  detail: string
}

export const ENGAGEMENTS: Engagement[] = [
  {
    client: 'ICAI',
    detail:
      'System-based consulting for the chartered accountancy body. Analysed the key areas for process and leadership improvement in the existing organisational structure.',
  },
  {
    client: 'Bosch India',
    detail:
      'Strategic consulting for the electronics company. Analysed strategic improvements to organisational processes toward becoming a learning organisation, and developed systems for diversity and inclusion across verticals.',
  },
  {
    client: 'HURL, Hindustan Urvarak & Rasayan',
    detail:
      'Management consulting for the fertiliser company. Analysed leadership through interviews and questionnaires. The results on HRM systems were accepted by the client.',
  },
  {
    client: 'ATOS Global, Paris and Pune',
    detail:
      'Built a human resource retention strategy across the UK, France and India offices, drawing on interviews with more than fifty project stakeholders.',
  },
]

// ---------------------------------------------------------------------------
// Editorial and service
// ---------------------------------------------------------------------------

export const SERVICE: string[] = [
  'Editor-in-Chief, NewsBlast, Academy of Management Entrepreneurship Division, May and September issues, 2025.',
  'Early Career Review Board, Employee Relations: The International Journal, from February 2025.',
  'Track Chair, HR and OB, 3rd Annual Winter Conference on Sustainable Business, Great Lakes Gurgaon, December 2024.',
  'Member and reviewer, Academy of Management, Human Resource Management and Entrepreneurship divisions.',
  'Case reviewer, IIM Bangalore, IIM Raipur, and Emerald Emerging Markets Case Studies.',
]

// ---------------------------------------------------------------------------
// The route here
// ---------------------------------------------------------------------------

export interface Step {
  where: string
  when: string
}

/**
 * A genuine sequence, so numbering is legitimate here and nowhere else.
 *
 * Steps 5 and 7 overlap the studies above them on purpose. The M.Com was taken
 * while she was at McKinsey, and the ATOS engagement sits inside the doctorate
 * — which is why it runs a single month. That is the shape of the record, not
 * an error in it.
 */
export const ROUTE_HERE: Step[] = [
  { where: 'Shri Ram College of Commerce, B.Com (Honours)', when: 'to May 2015' },
  {
    where: 'Founder, College Ki Knowledge; co-founder, Start-up Pal',
    when: 'July 2013 to July 2015',
  },
  {
    where: 'Analyst and internal auditor, Deloitte USI, Gurgaon',
    when: 'July 2015 to February 2016',
  },
  {
    where: 'Research analyst, Strategy Analytics, McKinsey & Company, Gurgaon',
    when: 'February 2016 to May 2018',
  },
  { where: 'Delhi School of Economics, M.Com', when: 'June 2017' },
  {
    where: 'PhD in Human Resource Management, IIM Ahmedabad',
    when: 'June 2018 to February 2023',
  },
  {
    where: 'Management consultant, ATOS Global, Paris and Pune',
    when: 'April to May 2019',
  },
  {
    where: 'Assistant Professor, SPJIMR Mumbai',
    when: 'April 2023 to March 2026',
  },
  {
    where: 'Independent Director, Punjab Communications Limited',
    when: 'April 2026 to present',
  },
]

// ---------------------------------------------------------------------------
// Bios
// ---------------------------------------------------------------------------

export const SHORT_BIO =
  'Dr Ashneet Kaur is a scholar and educator in organisational behaviour and human resource management. She researches what AI-driven systems do to privacy, trust and fairness at work, and teaches leadership through cinema, cricket and turnaround stories. She holds a doctorate from IIM Ahmedabad and sits on the board of Punjab Communications Limited as an independent director.'

export const LONG_BIO = [
  'Dr Ashneet Kaur is a scholar and educator in organisational behaviour and human resource management, working where human systems meet technological change. Her research examines how AI-driven systems affect employee engagement, trust and culture, and the ethical and emotional consequences of algorithmic decision-making in HR.',
  'She has published ten journal papers, including work in Communications of the Association for Information Systems, Organization & Environment, Personnel Review and the Asia Pacific Journal of Management, along with a book chapter with Oxford University Press and a teaching case in the Journal of Organizational Behavior Education. Her work has won three best-paper awards, including in the Human Resource Division of the Academy of Management in 2023.',
  'She taught at SPJIMR Mumbai from 2023 to 2026 across eight programmes, and has held visiting appointments at the University of Pécs, Great Lakes Chennai and Masters Union. She co-designed three courses that teach leadership through film, strategy through Indian cricket, and resilience through Indian turnaround stories.',
  'Before her doctorate at IIM Ahmedabad she worked at McKinsey & Company, Deloitte and ATOS, and founded two ventures. She is an independent director of Punjab Communications Limited.',
]

/** Rough word counts, for the copy-ready bios a journalist needs. */
export function wordCount(text: string): number {
  return text.trim().split(/\s+/).length
}

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------

export const EMAIL = 'Ashneet_kaur@isb.edu'

export interface EnquiryType {
  type: string
  line: string
}

export const ENQUIRY_TYPES: EnquiryType[] = [
  {
    type: 'Executive education',
    line: "A programme for your organisation's leaders or managers",
  },
  { type: 'Speaking', line: 'A conference, panel or lecture' },
  { type: 'Doctoral supervision', line: 'Research supervision or examination' },
  {
    type: 'Research collaboration',
    line: 'Joint work, data or co-authorship',
  },
  {
    type: 'Board and advisory',
    line: 'Directorship or advisory appointments',
  },
  { type: 'Something else', line: 'Anything the list above does not cover' },
]
