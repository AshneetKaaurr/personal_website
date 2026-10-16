/**
 * Who she is: the profile, education and credentials.
 *
 * Source: UpdatedCV_AshneetKaur_2026.pdf. The profile summary is her own
 * first-person text from the CV, so it can be used as written.
 */

export const NAME = 'Dr Ashneet Kaur'

/** Current academic role, as confirmed by the client. G4: start date. */
export const CURRENT_ROLE = {
  title: 'Faculty, HR-OB',
  institution: 'Indian School of Business',
}

/** CV profile summary, in her own words. */
export const PROFILE_SUMMARY: string[] = [
  'I am a scholar and educator in Organizational Behaviour and Human Resource Management, working at the intersection of human systems, technological change, and sustainable organization design. My teaching and research focus on building adaptive, ethically grounded workplaces by integrating behavioral insight with emerging technologies, such as artificial intelligence.',
  'My research examines how AI-driven systems impact employee engagement, trust, and cultural evolution, particularly in fast-growing, digitally enabled, and sustainability-focused firms. I also explore the ethical and emotional implications of algorithmic decision-making in HR, with emphasis on privacy, fairness, and well-being. These interests align with a broader commitment to fostering human-centered, high-performance work cultures.',
  'In the classroom, I design and deliver immersive learning experiences using design thinking, rapid prototyping, cinema-based leadership education, and gamified teaching tools. My pedagogical innovations translate complex OB-HR concepts into reflective, practical learning that equips students to lead people and culture in the dynamic and technologically evolving organization.',
]

export interface Qualification {
  title: string
  institution: string
  when: string
  /** Logo under /public, where one was supplied. */
  logo?: string
}

export const EDUCATION: Qualification[] = [
  {
    title: 'PhD in Human Resource Management',
    institution: 'Indian Institute of Management Ahmedabad (IIMA)',
    when: 'June 2018 to February 2023',
    logo: '/photos/iima.png',
  },
  {
    title: 'Master of Commerce',
    institution: 'Delhi School of Economics, University of Delhi',
    when: 'June 2017',
    logo: '/photos/Delhi_school_economics.jpeg',
  },
  {
    title: 'Bachelor of Commerce (Honours)',
    institution: 'Shri Ram College of Commerce, University of Delhi',
    when: 'May 2015',
    logo: '/photos/SRCC.png',
  },
]

export const CERTIFICATIONS: Qualification[] = [
  {
    title: 'Senior Certified Professional (SHRM-SCP)',
    institution: 'Society for Human Resource Management',
    when: 'August 2024 to August 2027',
  },
]

/** Faculty development the CV records. */
export const FACULTY_DEVELOPMENT: Qualification[] = [
  {
    title: 'Wharton Global Faculty Development Program',
    institution:
      'The Wharton School: a four-day intensive on creating impactful research and the art of teaching, led by Martine Haas, Lori Rosenkopf, Rahul Kapoor and Matthew Bidwell',
    when: '2025',
    logo: '/photos/Wharton-logo.png',
  },
  {
    title: 'Doctoral Consortium on Teaching',
    institution:
      'Centre for Teaching and Learning, IIM Bangalore: effective teaching and building an impactful classroom experience',
    when: 'February 2022',
  },
]
