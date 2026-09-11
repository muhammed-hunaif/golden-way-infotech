/**
 * Core Technology Stack — grouped exactly as the company profile groups them.
 * No technology is re-categorised beyond what the source states.
 */
export const TECHNOLOGY_GROUPS = [
  {
    id: 'application-logic',
    title: 'Front-End Technologies',
    note: 'Application logic layer',
    description:
      '.NET and Java form the application logic layer, structuring business rules and workflows into maintainable, scalable code that supports growing user-facing applications without frequent rework.',
    items: ['.NET', 'Java'],
  },
  {
    id: 'backend-database',
    title: 'Back-End & Database Technologies',
    note: 'Structured enterprise data',
    description:
      'SQL Server, Oracle, and MySQL manage structured enterprise data, handling transactions, storage, and retrieval with the consistency and reliability core business applications depend on daily.',
    items: ['SQL Server', 'Oracle', 'MySQL'],
  },
  {
    id: 'performance-ui',
    title: 'Performance & UI Technologies',
    note: 'Responsive browser interfaces',
    description:
      'AJAX, HTML, XML, CSS, and JavaScript work together to enable asynchronous data exchange, structured content, and responsive browser interfaces that keep interaction smooth for end users.',
    // HTML and CSS share a chip: they are the markup/styling pair, always used
    // together, and splitting them made this group the only one with five boxes
    // where the others have two and three.
    items: ['AJAX', 'HTML, CSS , JavaScript' , 'XML'],
  },
];

/**
 * Additional technologies named elsewhere in the profile (MERN stack service,
 * emerging-technology capability, website development and maintenance).
 * Listed separately so the profile's own stack grouping stays intact.
 */
export const APPLIED_TECHNOLOGIES = [
  'React',
  'Node.js',
  'MongoDB',
  'Express.js',
  'Python',
  'PHP',
  'C#',
  'ASP.NET',
  'Django',
  'Flask',
  'Artificial Intelligence',
  'Machine Learning',
  'Data Science',
  'Data Analytics',
  'Cloud',
  'Cyber Security',
];

/**
 * Marquee strip content — the full technology footprint, each paired with where
 * it is actually applied. A name on its own says the company has heard of the
 * technology; the pairing says what it is used for.
 *
 * Every `use` value is taken from a grouping the profile already makes — the
 * `SERVICE_CATEGORIES` labels in `services.js`, the `note` on a stack group
 * above, or the MERN stack service. Nothing here assigns a technology to work
 * the profile does not describe.
 */
export const TECH_MARQUEE = [
  { name: '.NET', use: 'Software & Web' },
  { name: 'Java', use: 'Software & Web' },
  { name: 'SQL Server', use: 'Database' },
  { name: 'Oracle', use: 'Database' },
  { name: 'MySQL', use: 'Database' },
  { name: 'AJAX', use: 'Browser Interfaces' },
  { name: 'HTML', use: 'Browser Interfaces' },
  { name: 'XML', use: 'Browser Interfaces' },
  { name: 'CSS', use: 'Browser Interfaces' },
  { name: 'JavaScript', use: 'Software & Web' },
  { name: 'React', use: 'MERN Stack' },
  { name: 'Node.js', use: 'MERN Stack' },
  { name: 'MongoDB', use: 'MERN Stack' },
  { name: 'Express.js', use: 'MERN Stack' },
  { name: 'Python', use: 'Software & Web' },
  { name: 'PHP', use: 'Software & Web' },
  { name: 'C#', use: 'Software & Web' },
  { name: 'ASP.NET', use: 'Software & Web' },
  { name: 'Cloud', use: 'Cloud & Security' },
  { name: 'Cyber Security', use: 'Cloud & Security' },
  { name: 'AI', use: 'AI & Data' },
  { name: 'Machine Learning', use: 'AI & Data' },
  { name: 'Data Science', use: 'AI & Data' },
  { name: 'Data Analytics', use: 'AI & Data' },
];
