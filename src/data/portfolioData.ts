export interface ProjectLink {
  label: string;
  url: string;
}

export interface CaseStudyFeature {
  title: string;
  description: string;
}

export interface CaseStudy {
  client?: string;
  domain?: string;
  overview: string;
  challenges?: string;
  solutions?: string;
  keyFeatures?: CaseStudyFeature[];
  impact?: string[];
}

export interface Project {
  name: string;
  category: "Cybersecurity" | "Enterprise SaaS" | "Analytics & Risk" | "Travel & Logistics" | "Agency & Creative Platform";
  tagline: string;
  description: string;
  highlights: string[];
  featured?: boolean;
  url?: string;
  links?: ProjectLink[];
  caseStudy?: CaseStudy;
}

export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  description: string;
  metrics: string[];
  points: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const personalInfo = {
  name: "Saad Mansuri",
  initials: "SM",
  title: "Senior Fullstack Developer",
  specialization: "React.js, Next.js, Vue.js, Node.js & Enterprise SaaS",
  experienceYears: "5+ Years Experience",
  location: "Ahmedabad, Gujarat, India",
  status: "Available for opportunities",
  email: "saadmansuri249@gmail.com",
  phone: "+91 6353121872",
  phoneDisplay: "+91 63531 21872",
  linkedin: "https://linkedin.com/in/saad-mansuri-dev",
  github: "https://github.com/saad-mansuri",
  bio: "Senior Fullstack & Frontend Developer with 5+ years of experience engineering enterprise SaaS platforms in cybersecurity risk management. Specializes in modern frontend ecosystems (React.js, Next.js, Vue.js, TypeScript) and high-performance state architecture (Zustand, Redux Toolkit, Pinia). Owned frontend architecture across four concurrent enterprise client platforms, cutting survey build time by 40% and resolving 95% of critical UI defects within 24 hours.",
  shortBio: "Senior Fullstack Developer specializing in React.js, Next.js, Vue.js, TypeScript, and scalable enterprise SaaS systems.",
};

export const experiences: Experience[] = [
  {
    role: "Senior Frontend Developer",
    company: "Mega IT",
    companyUrl: "https://megait.in/",
    location: "Ahmedabad, India",
    period: "06/2023 - 09/2026",
    description:
      "Owned frontend architecture end-to-end across four concurrent enterprise client platforms (HawkSight, G4S, Critec, and Allied Universal), leading Agile sprints and mentoring developers.",
    metrics: ["40% Survey Build Time Reduction", "95% Defects Resolved in 24h", "4 Enterprise Platforms"],
    points: [
      "Cut survey build time by 40% and resolved 95% of critical UI defects within 24 hours by re-engineering Risk360's configurable dynamic survey engine and modern responsive interface.",
      "Owned frontend architecture for four concurrent enterprise client platforms (HawkSight, G4S, Critec, and Allied Universal), building reusable UI component libraries, role-based access controls, and real-time analytical dashboards.",
      "Established standardized design systems and centralized state-management patterns across all four client platforms, speeding up new-feature delivery and eliminating duplicate UI code.",
      "Developed high-performance geospatial and analytics dashboards for real-time risk monitoring, giving security analysts live visibility into threat vectors instead of static reports.",
      "Standardized build workflows and container deployment pipelines across development, staging, and production environments across all four platforms.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "RHAD India Pvt Ltd",
    companyUrl: "https://www.rhad.agency/",
    location: "Ahmedabad, India",
    period: "07/2021 - 05/2023",
    description:
      "Built and maintained a production HR Management platform (Carbonate HR) covering full-lifecycle employee records, leave tracking, attendance, and payroll.",
    metrics: ["Legacy Modernization", "Reusable Component Library", "Full-Company Payroll Engine"],
    points: [
      "Built and maintained a production HR Management System covering leave management, employee records, attendance tracking, and automated payroll computation for the full employee base.",
      "Re-architected legacy web interfaces into responsive, mobile-first modular components, dramatically improving usability and reducing cross-browser defects.",
      "Built a reusable UI component library adopted across the HR platform's core modules, speeding up new-feature delivery and enforcing consistent UI standards.",
      "Integrated secure RESTful APIs across workflows from employee onboarding to payroll processing with seamless data validation.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Rushazz Makeup Studio",
    category: "Enterprise SaaS",
    tagline: "Business Website & Booking Management System",
    description:
      "Engineered a brand website and centralized booking management platform for a professional studio, combining a customer-facing digital presence with an administrative operating system to manage appointments, staff schedules, clients, and revenue workflows.",
    highlights: [
      "Multi-role administrative system supporting Super Admin and Admin users with tenant-level data isolation and role-based access controls",
      "Complex appointment booking engine supporting multi-service packages, staff assignments, quantity adjustments, and automated conflict detection",
      "Staff availability validation with automated working schedule checks and real-time calendar slot verification",
      "Operational dashboard featuring full-text search, multi-parameter filtering, pagination, booking lifecycle statuses, discounts, and partial payment tracking",
      "Modular, layered backend architecture with structured request validation, secure token-based authentication, and centralized error handling",
    ],
    featured: true,
    url: "https://rushazzmakeupstudio.com/",
    links: [
      { label: "Website", url: "https://rushazzmakeupstudio.com/" },
      { label: "Admin Panel", url: "https://admin.rushazzmakeupstudio.com/" },
    ],
    caseStudy: {
      client: "Rushazz Makeup Studio",
      domain: "Studio Operations & Client Booking",
      overview:
        "Designed and engineered a full-featured brand website and centralized booking management platform for a professional studio, combining a customer-facing digital presence with an administrative operating system to manage appointments, staff schedules, clients, and revenue workflows.",
      challenges:
        "Managing overlapping appointments across different service categories, handling multi-staff availability, enforcing partial deposit payments, and maintaining strict tenant-level data isolation between Super Admin and Admin staff.",
      solutions:
        "Implemented a layered architecture featuring real-time appointment conflict detection, staff availability verification, multi-parameter operational filtering, and role-based access control.",
      keyFeatures: [
        {
          title: "Multi-Role Admin System",
          description: "Role-based access control supporting Super Admin and Admin tiers with tenant-level data isolation.",
        },
        {
          title: "Conflict-Free Scheduling",
          description: "Automated working schedule validation, slot checks, and appointment conflict detection across staff members.",
        },
        {
          title: "Operational Dashboard",
          description: "Full-text search, multi-parameter filtering, pagination, booking lifecycle statuses, and partial payment tracking.",
        },
        {
          title: "Customer Booking Workflows",
          description: "Intuitive multi-step service selection, staff assignment, and booking confirmation flows.",
        },
      ],
      impact: [
        "Eliminated double-booking incidents and scheduling conflicts across staff members",
        "Streamlined client onboarding, service package selection, and deposit management",
        "Provided centralized operational visibility into daily appointment lifecycles and revenue",
      ],
    },
  },
  {
    name: "HawkSight Security Risk Management",
    category: "Analytics & Risk",
    tagline: "Enterprise Threat & Vulnerability Assessment Platform",
    description:
      "Replaced static spreadsheet reporting with interactive geospatial visualizations and data analytics, empowering security analysts to track threat data in real time.",
    highlights: [
      "Live geospatial threat mapping and spatial telemetry tracking",
      "Interactive analytics and visual dashboards replacing manual spreadsheet exports",
      "End-to-end data pipelines connecting user interfaces with enterprise backend services",
    ],
    featured: true,
    url: "https://hawksightsoftware.com/",
    links: [
      { label: "hawksightsoftware.com", url: "https://hawksightsoftware.com/" },
    ],
    caseStudy: {
      client: "HawkSight SRM",
      domain: "Enterprise Threat Intelligence & Geospatial Risk",
      overview:
        "Engineered an enterprise threat and vulnerability assessment platform, replacing static spreadsheet reporting with interactive geospatial visualizations and data analytics empowering security analysts to track threat data in real time.",
      challenges:
        "Security analysts previously relied on disconnected spreadsheets that delayed critical threat responses and lacked spatial context for global incident tracking.",
      solutions:
        "Developed live interactive geospatial mapping with spatial telemetry tracking, interactive charts, and an end-to-end data pipeline connecting frontends to secure analytical services.",
      keyFeatures: [
        {
          title: "Geospatial Threat Mapping",
          description: "Interactive visual spatial mapping showing real-time global threat vectors and security risk levels.",
        },
        {
          title: "Telemetry & Incident Analytics",
          description: "Dynamic visual dashboards and risk index calculations replacing manual spreadsheet exports.",
        },
        {
          title: "End-to-End Data Pipeline",
          description: "Reliable integration between interactive dashboards and enterprise analytical services.",
        },
      ],
      impact: [
        "Replaced manual spreadsheet risk reporting with real-time geospatial visualizations",
        "Empowered security analysts with instant spatial visibility into emergent international threats",
      ],
    },
  },
  {
    name: "Risk360",
    category: "Cybersecurity",
    tagline: "Cyber Risk Survey & Compliance Assessment Platform",
    description:
      "Re-engineered the core survey engine to cut survey creation time by 40% and resolved 95% of critical UI defects within 24 hours. Built automated scoring, RBAC, and real-time compliance dashboards.",
    highlights: [
      "40% reduction in survey creation time",
      "95% of critical UI defects resolved within 24 hours",
      "Multi-domain cybersecurity assessment dashboards",
    ],
    featured: true,
    url: "https://risk360.aus.com/",
    links: [
      { label: "risk360.aus.com", url: "https://risk360.aus.com/" },
    ],
    caseStudy: {
      client: "Allied Universal",
      domain: "Cyber Risk Survey & Compliance Assessment",
      overview:
        "Re-engineered the core survey engine to cut survey creation time by 40% and resolved 95% of critical UI defects within 24 hours. Built automated scoring, RBAC, and real-time compliance dashboards.",
      challenges:
        "Legacy survey creation was slow and fragile, leading to high defect turnaround times and compliance review delays for enterprise clients.",
      solutions:
        "Architected a modular dynamic survey engine with automated risk scoring algorithms, role-based access control, and responsive real-time compliance reporting dashboards.",
      keyFeatures: [
        {
          title: "Dynamic Survey Engine",
          description: "Configurable survey creation workflows with reusable assessment blocks and branching questionnaire logic.",
        },
        {
          title: "Automated Scoring",
          description: "Instant algorithmic scoring evaluating enterprise cybersecurity postures against compliance standards.",
        },
        {
          title: "Compliance Dashboards",
          description: "Real-time visual reporting providing clear audit trails and vulnerability status summaries.",
        },
      ],
      impact: [
        "Cut survey build and configuration time by 40%",
        "Resolved 95% of critical UI defects within 24 hours of escalation",
        "Streamlined multi-tenant security assessments across enterprise clients",
      ],
    },
  },
  {
    name: "G4S Survey",
    category: "Cybersecurity",
    tagline: "Enterprise Cyber Risk & Security Survey Engine",
    description:
      "Built configurable survey workflows with reusable questionnaire components, automated risk scoring, and detailed compliance reporting for global enterprise security assessments.",
    highlights: [
      "Configurable dynamic survey engine with automated scoring algorithms",
      "Role-based access control (RBAC) and real-time visualization",
      "Seamless data flow integrated with secure enterprise RESTful services",
    ],
    featured: true,
    url: "https://g4sriskreview.com/",
    links: [
      { label: "g4sriskreview.com", url: "https://g4sriskreview.com/" },
    ],
    caseStudy: {
      client: "G4S Global",
      domain: "Enterprise Security Assessment & Audit Engine",
      overview:
        "Built configurable survey workflows with reusable questionnaire components, automated risk scoring, and detailed compliance reporting for global enterprise security assessments.",
      challenges:
        "Scaling complex international risk surveys across multi-tenant security teams with diverse compliance standards and strict permission requirements.",
      solutions:
        "Delivered a componentized assessment engine featuring granular role-based access control, real-time survey progress tracking, and automated compliance report generation.",
      keyFeatures: [
        {
          title: "Reusable Questionnaire Engine",
          description: "Modular survey components that support customizable scoring rubrics and dynamic field sets.",
        },
        {
          title: "Role-Based Access Control",
          description: "Strict permission tiers separating assessors, auditors, and platform administrators.",
        },
        {
          title: "Audit Reporting",
          description: "Automated compliance generation producing structured audit-ready assessment documents.",
        },
      ],
      impact: [
        "Accelerated global security review cycles across corporate client facilities",
        "Enforced standardized audit protocols and automated risk calculations",
      ],
    },
  },
  {
    name: "Critec HawkSight Risk Management",
    category: "Cybersecurity",
    tagline: "Global Threat & Vulnerability Assessment Platform",
    description:
      "Led frontend architecture for an international threat assessment platform, engineering real-time vulnerability dashboards and optimizing state updates and rendering performance as new enterprise accounts onboarded.",
    highlights: [
      "Scalable multi-account architecture with high-frequency telemetry",
      "Optimized client-side rendering with high-performance state architecture",
      "Component-driven design system shared across global teams",
    ],
    featured: true,
    url: "https://critec.hawksightsoftware.com/login",
    links: [
      { label: "critec.hawksightsoftware.com", url: "https://critec.hawksightsoftware.com/login" },
    ],
    caseStudy: {
      client: "Critec & HawkSight",
      domain: "Global Threat & Vulnerability Assessment",
      overview:
        "Led frontend architecture for an international threat assessment platform, engineering real-time vulnerability dashboards and optimizing state updates and rendering performance as new enterprise accounts onboarded.",
      challenges:
        "High-frequency telemetry data streams from multiple concurrent accounts were causing UI lag and state synchronization bottlenecks.",
      solutions:
        "Engineered optimized client-side state architecture, streamlined rendering lifecycles, and established a component-driven design system shared across international development teams.",
      keyFeatures: [
        {
          title: "High-Frequency Telemetry",
          description: "Optimized data stream processing rendering real-time threat signals without interface stutter.",
        },
        {
          title: "Centralized State Architecture",
          description: "Decoupled state management minimizing unnecessary rerenders across complex visual dashboards.",
        },
        {
          title: "Shared Component System",
          description: "Unified design pattern library maintaining consistency across multiple client deployments.",
        },
      ],
      impact: [
        "Maintained fluid 60fps dashboard interactions during high-frequency telemetry updates",
        "Accelerated feature delivery by establishing reusable cross-platform UI patterns",
      ],
    },
  },
  {
    name: "Carbonate HR Software",
    category: "Enterprise SaaS",
    tagline: "Automated Human Resource Management Platform",
    description:
      "Engineered an automated HR management platform covering employee onboarding, leave management, attendance tracking, and payroll processing with responsive mobile-first architecture.",
    highlights: [
      "End-to-end payroll computation and attendance workflows",
      "Migrated legacy frontend codebase into a modular, modern component-driven system",
      "High-adoption reusable component library",
    ],
    url: "https://carbonateapp.com/",
    links: [
      { label: "carbonateapp.com", url: "https://carbonateapp.com/" },
    ],
    caseStudy: {
      client: "Carbonate HR",
      domain: "Workforce Management & Payroll Automation",
      overview:
        "Engineered an automated HR management platform covering employee onboarding, leave management, attendance tracking, and payroll processing with responsive mobile-first architecture.",
      challenges:
        "Migrating a dated legacy codebase into a responsive modern system while ensuring zero errors in sensitive payroll and attendance calculations.",
      solutions:
        "Refactored legacy web interfaces into a modular component library, built automated payroll computation workflows, and established responsive mobile-first views.",
      keyFeatures: [
        {
          title: "Automated Payroll Engine",
          description: "Comprehensive computation logic handling deductions, bonuses, and statutory compliance.",
        },
        {
          title: "Attendance & Leave Management",
          description: "Mobile-friendly check-in, leave approval workflows, and centralized employee records.",
        },
        {
          title: "Modern Component Library",
          description: "Reusable UI components adopted across the entire platform's core functional modules.",
        },
      ],
      impact: [
        "Modernized legacy frontend into a cohesive, responsive component system",
        "Automated end-to-end payroll processing for the full corporate employee base",
      ],
    },
  },
  {
    name: "RHAD Agency (Corporate Website & Digital Platform)",
    category: "Agency & Creative Platform",
    tagline: "APAC Brand Engineering & Creative Digital Showcase",
    description:
      "Engineered the official corporate website and interactive portfolio hub for RHAD, an APAC-based brand and web engineering agency, featuring a component-driven architecture, bilingual regional routing, and automated lead generation funnels.",
    highlights: [
      "Component-based modular web architecture designed to scale across creative portfolios and agency service pillars",
      "Dynamic case study and client showcase hub presenting high-impact campaigns for regional enterprise brands",
      "Multi-language routing infrastructure delivering seamless bilingual localization for English and Bahasa Indonesia markets",
      "Automated consultation and CRM lead capture funnels streamlining inbound enterprise inquiries",
      "Modern visual design with fluid responsive layouts, micro-interactions, and optimized Core Web Vitals",
    ],
    url: "https://www.rhad.agency/",
    links: [
      { label: "rhad.agency", url: "https://www.rhad.agency/" },
    ],
    caseStudy: {
      client: "RHAD Agency",
      domain: "Brand Strategy & Creative Web Engineering",
      overview:
        "RHAD is an APAC-based full-funnel brand, creative, and web engineering agency headquartered in Singapore with distributed teams across the region. The corporate platform serves as the agency's primary digital flagship, showcasing high-impact enterprise campaigns for clients like Royal Brunei Airlines, UnionPay, and prominent regional F&B brands.",
      challenges:
        "Presenting dynamic, high-resolution multimedia creative campaigns without degrading Core Web Vitals, while supporting multi-regional audience targeting across English and Bahasa Indonesia markets with integrated lead funnels.",
      solutions:
        "Architected a component-based modular web architecture with bilingual routing, responsive media optimization, and automated CRM lead capture workflows.",
      keyFeatures: [
        {
          title: "Component-Based Web Architecture",
          description: "Modular, reusable code structure designed to scale across service pillars and creative portfolios.",
        },
        {
          title: "Dynamic Portfolio & Case Study Hub",
          description: "Designed interactive client showcase sections featuring enterprise campaigns for clients like Royal Brunei Airlines, UnionPay, and regional F&B brands.",
        },
        {
          title: "Multi-Language / Regional Routing",
          description: "Seamless bilingual experience supporting English and Bahasa Indonesia markets with localized navigation paths.",
        },
        {
          title: "CRM & Automation Funnels",
          description: "Integrated strategic consultation forms and automated lead capture pipelines.",
        },
        {
          title: "Modern Visual Design & Performance",
          description: "Fluid animations, mobile-first responsive layout, and optimized Core Web Vitals across devices.",
        },
      ],
      impact: [
        "Scaled digital portfolio presentation across regional enterprise client accounts",
        "Streamlined strategic consultation requests through automated CRM intake funnels",
        "Achieved top-tier mobile performance and fluid animations across bilingual markets",
      ],
    },
  },
  {
    name: "Singapore Cruise Centre (SCC) Digital Web Portal",
    category: "Travel & Logistics",
    tagline: "All-in-One Maritime Travel & Passenger Services Portal",
    description:
      "Architected an all-in-one digital passenger and corporate portal for Singapore's primary maritime travel hub, serving millions of annual passengers connecting Singapore to Indonesia, Malaysia, and regional cruises.",
    highlights: [
      "Real-time cruise and ferry schedules with dynamic search, terminal filtering, and live departure/arrival status updates",
      "Comprehensive multi-terminal management covering HarbourFront, Tanah Merah, and Pasir Panjang operational guides and wayfinding",
      "Passenger travel guides covering baggage limits, immigration/customs regulations, and interactive transportation directions",
      "Secure B2B service integration providing authenticated entry points for ferry operators, contractor passes, and port logistics",
      "High-performance, mobile-optimized experience engineered for international passengers accessing travel data on roaming connections",
    ],
    url: "https://singaporecruise.com.sg/",
    links: [
      { label: "singaporecruise.com.sg", url: "https://singaporecruise.com.sg/" },
    ],
    caseStudy: {
      client: "Singapore Cruise Centre Pte Ltd",
      domain: "Maritime Travel & Tourism",
      overview:
        "Singapore Cruise Centre is the primary maritime hub connecting Singapore to Indonesia (Batam, Bintan, Karimun) and Malaysia (Desaru/Johor), as well as regional cruises. The website is an all-in-one passenger and corporate portal handling millions of travelers annually.",
      challenges:
        "Consolidating high-frequency ferry and cruise schedules across multiple international terminals, simplifying complex customs and immigration protocols into accessible visual flows, and ensuring fast load times for travelers relying on mobile roaming networks.",
      solutions:
        "Engineered a high-performance passenger portal featuring instant schedule search and filtering, dedicated operational hubs for three international terminals, comprehensive travel/logistics guides, and secure B2B contractor and operator pass entry points.",
      keyFeatures: [
        {
          title: "Real-Time Cruise & Ferry Schedules",
          description: "Live search and status filtering for departures and arrivals across all regional ferry and cruise operators.",
        },
        {
          title: "Multi-Terminal Management",
          description: "Detailed operational guides and navigation for HarbourFront, Tanah Merah, and Pasir Panjang terminals.",
        },
        {
          title: "Travel & Logistics Guides",
          description: "Clear user interface for baggage limits, immigration and customs regulations, and transport directions.",
        },
        {
          title: "Terminal Pass & B2B Integrations",
          description: "Integrated entry points for operator logins, contractor passes, and administrative port services.",
        },
        {
          title: "High-Performance Mobile Delivery",
          description: "Fast page load times and responsive layouts for international travelers accessing terminal info on mobile data.",
        },
      ],
      impact: [
        "Centralized passenger schedule and terminal information for millions of annual international travelers",
        "Streamlined operational wayfinding and baggage regulatory compliance across three maritime terminals",
        "Delivered rapid, reliable mobile performance for passengers on roaming cellular connections",
      ],
    },
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frameworks & Libraries",
    skills: [
      "React.js",
      "Next.js (App & Pages)",
      "React Router",
      "Vue.js (Vue 3 & Vue 2)",
      "Nuxt.js",
      "Vue Router",
    ],
  },
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3 / SCSS"],
  },
  {
    category: "State Management",
    skills: [
      "Zustand",
      "Redux Toolkit",
      "React Context API",
      "Pinia",
      "Vuex",
    ],
  },
  {
    category: "Styling & UI",
    skills: [
      "Tailwind CSS",
      "CSS Modules",
      "SCSS / SASS",
      "Bootstrap",
      "Shadcn / Radix UI",
    ],
  },
  {
    category: "Architecture & Capabilities",
    skills: [
      "Single Page Applications (SPA)",
      "Server-Side Rendering (SSR / SSG)",
      "React Hooks & Composition API",
      "REST API Integration",
      "Component-Driven Design",
      "Frontend Performance Optimization",
      "Role-Based Access Control (RBAC)",
      "JWT & Auth Architecture",
      "Zod & Schema Validation",
      "Cross-Browser Debugging",
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB & Mongoose",
      "MySQL",
      "RESTful Architecture",
    ],
  },
  {
    category: "Tooling & Ecosystem",
    skills: [
      "Vite",
      "Webpack / Turbopack",
      "Vue CLI",
      "Git / GitHub",
      "Docker",
      "Mapbox GL",
      "Chart.js",
      "Agile / Scrum",
      "Shopify",
      "Webflow",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Chimanbhai Patel Institute of Computer Application",
    period: "2019 - 2021",
    location: "Ahmedabad, India",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "J.G. College of Computer Application",
    period: "2016 - 2019",
    location: "Ahmedabad, India",
  },
];

export const certifications = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    topics: "CSS Grid, Flexbox, Responsive Layouts",
  },
  {
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    topics: "React.js, Redux, Sass, Bootstrap",
  },
  {
    title: "Webflow Layout Certification",
    issuer: "Webflow",
    topics: "Flexbox, CSS Grid, Responsive Box Model",
  },
  {
    title: "Software Testing Workshop",
    issuer: "STAD Solution",
    topics: "Manual & Automated QA Methodologies",
  },
  {
    title: "Machine Learning Workshop",
    issuer: "Gujarat University",
    topics: "Applied Machine Learning & Data Models",
  },
];
