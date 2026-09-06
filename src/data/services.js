import {
  BrainCircuit,
  ChartColumn,
  Clapperboard,
  Cloud,
  Code2,
  Database,
  FileCode,
  Globe,
  Layers,
  LineChart,
  Palette,
  PenTool,
  Search,
  ShieldCheck,
  Sparkles,
  Terminal,
} from 'lucide-react';

/**
 * Service filter groups shown above the services grid.
 * `id` drives the React filter state; `label` is what the visitor sees.
 */
export const SERVICE_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'software-web', label: 'Software & Web' },
  { id: 'database', label: 'Database' },
  { id: 'cloud-security', label: 'Cloud & Security' },
  { id: 'ai-data', label: 'AI & Data' },
  { id: 'design-creative', label: 'Design & Creative' },
  { id: 'marketing-growth', label: 'Marketing & Growth' },
];

/**
 * All service content is taken verbatim from the Golden Way Infotech service profile.
 * `category` preserves the company's own category wording; `categoryId` drives the UI filter.
 */
export const SERVICES = [
  {
    id: 'python-development',
    name: 'Python Development',
    category: 'Software & Web Development',
    categoryId: 'software-web',
    keyPoint: 'Application Automation',
    icon: Terminal,
    summary:
      'Clean, readable code that powers backend systems, automation scripts, and data-driven web applications.',
    description:
      'Python Development centers on writing clean, readable code that powers backend systems, automation scripts, and data-driven web applications. Using frameworks such as Django and Flask alongside libraries for task scheduling, file handling, and API integration, this service supports projects ranging from internal business tools to customer-facing platforms. Emphasis is placed on object-oriented design, modular code structure, exception handling, and working with relational and file-based data sources. Hands-on project work covers building REST APIs and automating repetitive workflows, while practical training strengthens debugging habits, version control discipline, and an understanding of how Python applications are built and maintained in real production settings.',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Software & Web Development',
    categoryId: 'software-web',
    keyPoint: 'Interactive Experiences',
    icon: Code2,
    summary:
      'Responsive, interactive experiences that run directly in the browser and respond instantly to user input.',
    description:
      'JavaScript work is built around creating responsive, interactive experiences that run directly in the browser and respond instantly to user input. The service covers DOM manipulation, event-driven programming, asynchronous operations using promises and async/await, and integration with external APIs to fetch and display live data. Projects range from dynamic form validation to interactive dashboards and single-page interfaces that update content without full page reloads. Practical sessions guide learners through structuring scripts, managing state within the browser, and handling errors gracefully, building a working grasp of how modern client-side functionality is designed, tested, and refined for real websites.',
  },
  {
    id: 'core-java',
    name: 'Core Java',
    category: 'Software & Web Development',
    categoryId: 'software-web',
    keyPoint: 'Enterprise Reliability',
    icon: FileCode,
    summary:
      'Object-oriented principles applied to construct dependable backend logic for enterprise-grade software.',
    description:
      'Core Java work applies object-oriented principles such as inheritance, polymorphism, and encapsulation to construct dependable backend logic for enterprise-grade software. The service addresses class design, exception handling, multithreading, and collections, giving structure to applications that must run consistently under varied workloads. Typical project work includes building modular business logic layers, desktop utilities, and backend components that connect to larger systems. Training exercises walk through compiling, debugging, and refactoring Java code, reinforcing habits around clean architecture and readable syntax, grounding learners in how Core Java supports long-running software used across banking and enterprise administration systems.',
  },
  {
    id: 'dotnet-development',
    name: '.NET Development',
    category: 'Software & Web Development',
    categoryId: 'software-web',
    keyPoint: 'Business Applications',
    icon: Layers,
    summary:
      'Structured business applications, internal systems, and web APIs built with C# and the ASP.NET framework.',
    description:
      '.NET Development draws on the Microsoft ecosystem to build structured business applications, internal systems, and web APIs using C# and the ASP.NET framework. The service covers controller-based architecture, model binding, middleware configuration, and connecting applications to relational databases through Entity Framework. Project work typically spans enterprise portals, backend services for line-of-business software, and API layers that other systems consume. Practical training walks through structuring solutions, configuring dependency injection, and handling application lifecycle events, giving learners direct exposure to building applications that are organized, testable, and suited to environments where reliability and long-term maintainability of the codebase matter most.',
  },
  {
    id: 'php-development',
    name: 'PHP Development',
    category: 'Software & Web Development',
    categoryId: 'software-web',
    keyPoint: 'Dynamic Websites',
    icon: Globe,
    summary:
      'Dynamic, server-side websites and applications where content is generated on request from a backend database.',
    description:
      'PHP Development focuses on building dynamic, server-side websites and applications where content is generated on request and tied closely to a backend database. The service covers form handling, session management, template structuring, and secure database interaction through MySQL or similar systems, often within content management frameworks. Typical project work includes building custom website functionality, admin panels, and backend logic for e-commerce or content-driven sites. Practical training walks through writing server-side scripts, structuring reusable components, and securing input from users, giving learners a working sense of how PHP powers websites that must serve pages quickly while keeping data consistent and protected.',
  },
  {
    id: 'mern-stack-development',
    name: 'MERN Stack Development',
    category: 'Software & Web Development',
    categoryId: 'software-web',
    keyPoint: 'Full-Stack Integration',
    icon: Layers,
    summary:
      'MongoDB, Express.js, React, and Node.js combined into a single JavaScript-based full-stack workflow.',
    description:
      'MERN Stack Development combines MongoDB, Express.js, React, and Node.js into a single JavaScript-based workflow for building full-stack web applications. The service covers designing document-based data models, building RESTful APIs with Express, developing component-driven interfaces in React, and running server logic on Node.js. Project work spans single-page applications, admin dashboards, and platforms requiring real-time updates between frontend and backend. Practical training walks through connecting each layer of the stack, managing application state, and structuring routes and schemas, giving learners a coherent view of how a complete application is assembled, deployed, and kept synchronized across its frontend, backend, and database components.',
  },
  {
    id: 'oracle-mysql',
    name: 'Oracle & MySQL',
    category: 'Database Technologies',
    categoryId: 'database',
    keyPoint: 'Data Management',
    icon: Database,
    summary:
      'Relational databases designed and managed to store, organize, and retrieve structured business data reliably.',
    description:
      'Oracle & MySQL work centers on designing and managing relational databases that store, organize, and retrieve structured business data reliably. The service covers schema design, writing and optimizing SQL queries, indexing strategies, stored procedures, and backup and recovery practices across both platforms. Project work includes building normalized database structures for applications, tuning slow-performing queries, and setting up user roles and access controls. Practical training walks through writing joins, subqueries, and transactions, along with monitoring database performance under load, giving learners hands-on experience with how relational systems are structured and administered to support dependable, everyday application data needs.',
  },
  {
    id: 'cloud-computing',
    name: 'Cloud Computing',
    category: 'Infrastructure & Cloud',
    categoryId: 'cloud-security',
    keyPoint: 'Cloud Infrastructure',
    icon: Cloud,
    summary:
      'Provisioning, configuring, and managing compute, storage, and networking within a cloud environment.',
    description:
      'Cloud Computing work involves provisioning, configuring, and managing computing resources such as virtual machines, storage, and networking within a cloud environment rather than on physical hardware. The service covers deployment models, resource scaling, load balancing, and migrating applications from local servers to hosted infrastructure. Project work includes setting up cloud environments for web applications, configuring storage and backup routines, and managing access permissions across services. Practical training walks through provisioning instances, monitoring resource usage, and automating routine infrastructure tasks, giving learners a working understanding of how applications are hosted, scaled, and kept available in a cloud-based setting.',
  },
  {
    id: 'cyber-security',
    name: 'Cyber Security',
    category: 'Infrastructure & Cloud',
    categoryId: 'cloud-security',
    keyPoint: 'Threat Protection',
    icon: ShieldCheck,
    summary:
      'Identifying, preventing, and responding to threats that target applications, networks, and stored data.',
    description:
      'Cyber Security work addresses identifying, preventing, and responding to threats that target applications, networks, and stored data. The service covers vulnerability assessment, access control configuration, network monitoring, and applying security patches to close known weaknesses. Project work includes testing applications for common vulnerabilities, setting up firewall and authentication rules, and reviewing system logs for unusual activity. Practical training walks through simulating attack scenarios in controlled environments, hardening system configurations, and documenting incident response steps, giving learners direct exposure to how organizations detect exposure points and reduce risk across their technology environment.',
  },
  {
    id: 'artificial-intelligence',
    name: 'Artificial Intelligence (AI)',
    category: 'Emerging Technologies',
    categoryId: 'ai-data',
    keyPoint: 'Intelligent Automation',
    icon: BrainCircuit,
    summary:
      'Systems that process information, recognize patterns, and make decisions with reduced manual input.',
    description:
      'Artificial Intelligence work focuses on building systems that can process information, recognize patterns, and make decisions with reduced manual input. The service covers areas such as natural language processing, computer vision, and rule-based or model-driven automation, often built using Python-based AI libraries. Project work includes developing chatbots, image recognition tools, and automated recommendation logic for practical use cases. Practical training walks through preparing input data, selecting appropriate models, and evaluating output accuracy, giving learners direct exposure to how intelligent applications are designed, tested, and refined to handle tasks that would otherwise require constant human judgment.',
  },
  {
    id: 'data-science',
    name: 'Data Science',
    category: 'Emerging Technologies',
    categoryId: 'ai-data',
    keyPoint: 'Data-Driven Insight',
    icon: LineChart,
    summary:
      'Collecting, cleaning, and analyzing large or unstructured datasets to uncover patterns that inform decisions.',
    description:
      'Data Science work involves collecting, cleaning, and analyzing large or unstructured datasets to uncover patterns that inform business decisions. The service covers exploratory data analysis, statistical methods, feature engineering, and building models that translate raw data into usable insight. Project work includes examining sales or operational datasets, identifying trends, and building predictive indicators for planning purposes. Practical training walks through using Python-based data libraries, visualizing findings, and validating conclusions against real data, giving learners a working understanding of how data science turns disorganized information into structured, decision-ready findings for a business context.',
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning (ML)',
    category: 'Emerging Technologies',
    categoryId: 'ai-data',
    keyPoint: 'Predictive Modeling',
    icon: Sparkles,
    summary:
      'Models that learn from historical data to make predictions or classifications on new inputs.',
    description:
      'Machine Learning work focuses on building models that learn from historical data to make predictions or classifications on new inputs. The service covers supervised and unsupervised learning techniques, model training and validation, feature selection, and tuning algorithms for accuracy. Project work includes building classification systems, recommendation logic, and forecasting models trained on structured datasets. Practical training walks through splitting data for training and testing, evaluating model performance using appropriate metrics, and adjusting parameters to reduce error, giving learners hands-on experience with how predictive systems are built, tested, and refined before being applied to real data.',
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    category: 'Emerging Technologies',
    categoryId: 'ai-data',
    keyPoint: 'Performance Reporting',
    icon: ChartColumn,
    summary:
      'Processing existing datasets to identify trends, measure performance, and support reporting needs.',
    description:
      'Data Analytics work centers on processing existing datasets to identify trends, measure performance, and support reporting needs across a business. The service covers data cleaning, aggregation, dashboard creation, and applying statistical summaries to highlight meaningful patterns. Project work includes building performance dashboards, analyzing operational metrics, and preparing summary reports for review. Practical training walks through structuring datasets, applying filters and pivot-based analysis, and presenting findings through charts and visual summaries, giving learners a working understanding of how raw figures are converted into clear, actionable reporting that supports everyday business decisions.',
  },
  {
    id: 'ui-ux-designing',
    name: 'UI / UX Designing',
    category: 'Design & Creative',
    categoryId: 'design-creative',
    keyPoint: 'Usability Design',
    icon: PenTool,
    summary:
      'How a user experiences and interacts with a digital product, from first impression through everyday use.',
    description:
      'UI / UX Designing addresses how a user experiences and interacts with a digital product, from first impression through everyday use. The service covers user research, wireframing, information architecture, prototyping, and usability testing to shape interfaces that are easy to navigate. Project work includes designing app and website layouts, mapping user journeys, and refining navigation flows based on feedback. Practical training walks through building low and high-fidelity prototypes, applying consistent visual hierarchy, and testing designs with real user scenarios, giving learners direct exposure to how interfaces are planned, tested, and adjusted before development begins.',
  },
  {
    id: 'graphic-designing',
    name: 'Graphic Designing',
    category: 'Design & Creative',
    categoryId: 'design-creative',
    keyPoint: 'Visual Communication',
    icon: Palette,
    summary: 'Visual assets that communicate a message clearly across print and digital formats.',
    description:
      'Graphic Designing work focuses on producing visual assets that communicate a message clearly across print and digital formats. The service covers layout composition, typography, color theory, and creating branding materials such as logos, social media graphics, and marketing collateral. Project work includes designing promotional materials, packaging concepts, and visual assets for campaigns or presentations. Practical training walks through using design software to build and refine visual concepts, applying consistent branding elements, and preparing files for both print and digital use, giving learners a working sense of how visual communication is planned and executed for real audiences.',
  },
  {
    id: 'animation-2d-3d',
    name: '2D & 3D Animation',
    category: 'Design & Creative',
    categoryId: 'design-creative',
    keyPoint: 'Motion Storytelling',
    icon: Clapperboard,
    summary: 'Moving visuals used for storytelling, product demonstration, or explanatory content.',
    description:
      '2D & 3D Animation work involves creating moving visuals used for storytelling, product demonstration, or explanatory content. The service covers frame-based animation principles, character or object movement, rendering, and timing techniques that bring static visuals to life. Project work includes producing short explainer videos, animated product walkthroughs, and motion graphics for presentations or social content. Practical training walks through storyboarding sequences, building animation timelines, and rendering final output, giving learners direct exposure to how 2D and 3D animation is planned, produced, and refined to communicate ideas visually rather than through text alone.',
  },
  {
    id: 'digital-marketing-seo',
    name: 'Digital Marketing (SEO)',
    category: 'Marketing & Growth',
    categoryId: 'marketing-growth',
    keyPoint: 'Search Visibility',
    icon: Search,
    summary:
      'Improving how easily a website is found through search engines and how well it holds visitor attention.',
    description:
      'Digital Marketing (SEO) work focuses on improving how easily a website is found through search engines and how well it holds visitor attention once reached. The service covers keyword research, on-page optimization, technical SEO adjustments, and content structuring to align with search intent. Project work includes auditing existing websites, optimizing page elements such as titles and headings, and tracking organic search performance over time. Practical training walks through researching relevant keywords, applying on-page changes, and reviewing analytics data, giving learners a working understanding of how search visibility is built and measured through consistent, structured optimization work.',
  },
];
