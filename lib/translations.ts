export type Language = "en" | "es";

type ProjectCopy = {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  status?: string;
  visual: "rental" | "agents" | "whatsapp";
  visualEyebrow: string;
  visualTitle: string;
  visualSubline: string;
  visualFooter: string;
  visualNodes: string[];
};

export type SiteCopy = {
  nav: {
    label: string;
    home: string;
    about: string;
    skills: string;
    projects: string;
    journey: string;
    contact: string;
    menuOpen: string;
    menuClose: string;
    talk: string;
    skip: string;
  };
  languageToggle: {
    label: string;
    english: string;
    spanish: string;
  };
  social: {
    github: string;
    linkedin: string;
    email: string;
    githubName: string;
    linkedinName: string;
    emailName: string;
    location: string;
  };
  hero: {
    availability: string;
    location: string;
    roles: string[];
    statement: string;
    viewProjects: string;
    downloadCv: string;
    scroll: string;
    focusLabel: string;
    focusTitle: string;
    focusItems: string[];
    status: string;
    cardLabel: string;
    cardTitle: string;
    visualOperation: string;
    visualCaption: string;
    onlineStatus: string;
    bottomline: string;
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    profile: string;
    portraitAlt: string;
    portraitLabel: string;
    portraitNote: string;
    stats: { value: string; label: string; note: string }[];
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    categories: Record<string, string>;
    skillLabels: Record<string, string>;
    footnote: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    githubLabel: string;
    projectLabel: string;
    confidential: string;
    items: ProjectCopy[];
  };
  timeline: {
    eyebrow: string;
    title: string;
    description: string;
    projectLabel: string;
    entries: {
      title: string;
      organization: string;
      period: string;
      category: string;
      description: string;
    }[];
  };
  signals: {
    eyebrow: string;
    title: string;
    description: string;
    languagesTitle: string;
    softSkillsTitle: string;
    // These two source lines are kept verbatim; the UI only splits them into chips.
    languages: string;
    softSkills: string;
  };
  contact: {
    eyebrow: string;
    emailSubject: string;
    title: string;
    lead: string;
    description: string;
    emailLabel: string;
    phoneLabel: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailFieldLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    sendingNote: string;
    socialTitle: string;
    locationLabel: string;
  };
  footer: {
    note: string;
    rights: string;
    backToTop: string;
  };
};

// The required profile, project descriptions, education details, soft skills,
// and language lines below are copied verbatim from Facundo's supplied CV text.
export const translations: Record<Language, SiteCopy> = {
  en: {
    nav: {
      label: "Main navigation",
      home: "Home",
      about: "About",
      skills: "Stack",
      projects: "Projects",
      journey: "Experience",
      contact: "Contact",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      talk: "Let's talk",
      skip: "Skip to content",
    },
    languageToggle: {
      label: "Change language",
      english: "English",
      spanish: "Spanish",
    },
    social: {
      github: "Visit GitHub profile",
      linkedin: "Visit LinkedIn profile",
      email: "Send an email",
      githubName: "GitHub",
      linkedinName: "LinkedIn",
      emailName: "Email",
      location: "Based in Córdoba, Argentina",
    },
    hero: {
      availability: "Open to opportunities",
      location: "Córdoba, Argentina",
      roles: ["Full Stack Developer", "AI Automation Engineer", "Backend Developer"],
      statement: "I build reliable backend platforms and pragmatic AI automations.",
      viewProjects: "Explore projects",
      downloadCv: "Download CV",
      scroll: "Scroll to explore",
      focusLabel: "BUILDING WITH INTENT",
      focusTitle: "From robust APIs to useful AI agents.",
      focusItems: ["Backend systems", "AI workflows", "Business automation"],
      status: "AVAILABLE FOR SELECT PROJECTS",
      cardLabel: "CURRENT FOCUS",
      cardTitle: "Backend × AI",
      visualOperation: "OPS",
      visualCaption: "CÓRDOBA / ARGENTINA",
      onlineStatus: "systems.online",
      bottomline: "FULL STACK / AI AUTOMATION",
    },
    about: {
      eyebrow: "01 / ABOUT",
      title: "Engineering with a practical point of view.",
      lead: "Backend foundations. A growing AI practice. One clear goal: build things that work.",
      profile:
        "Backend Developer with experience in Java and Spring Boot, focused on building REST APIs and working with relational databases. Passionate about backend architecture, automation, and scalable systems. Recently expanding into AI-driven solutions, developing agent-based workflows and automation pipelines using modern AI tools. I enjoy solving complex problems and continuously learning new technologies, and I am currently seeking opportunities where I can contribute to backend and AI-powered systems while growing professionally.",
      portraitAlt: "Abstract dark portrait placeholder with the initials FS",
      portraitLabel: "YOUR PHOTO GOES HERE",
      portraitNote: "Replace this image with your portrait",
      stats: [
        { value: "Project-based", label: "Backend experience", note: "APIs · databases · automation" },
        { value: "Córdoba, AR", label: "Based in", note: "Argentina · UTC−3" },
        { value: "Open", label: "Availability", note: "Opportunities & freelance" },
      ],
    },
    skills: {
      eyebrow: "02 / TOOLKIT",
      title: "The right tool for the job.",
      description:
        "A backend-first foundation, with the frontend, infrastructure, and AI tools to take an idea all the way to production.",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        databases: "Databases",
        ai: "AI & automation",
        infrastructure: "Infrastructure & DevOps",
        tools: "Tools",
      },
      skillLabels: {
        "Supabase / pgvector": "Supabase / pgvector",
        "Stored Procedures": "Stored Procedures",
        "LLM Integration": "LLM Integration",
        "Prompt Engineering": "Prompt Engineering",
        "Agent Orchestration": "Agent Orchestration",
        "CI/CD (Jenkins)": "CI/CD (Jenkins)",
        "Git / GitHub": "Git / GitHub",
        "Linux / Windows": "Linux / Windows",
      },
      footnote: "A working toolkit, always growing.",
    },
    projects: {
      eyebrow: "03 / SELECTED WORK",
      title: "Built to solve real problems.",
      description:
        "Backend engineering and agent-based automation, with the product thinking to connect both.",
      githubLabel: "View source",
      projectLabel: "PROJECT",
      confidential: "Confidential client work",
      items: [
        {
          title: "World Car Rental — Backend",
          description:
            "Contributed to the backend development of a web platform for car rentals. Responsible for implementing the business logic, designing the database structure, managing security, and developing the server-side functionality from scratch.",
          technologies: ["Java", "Spring Boot", "Spring Security", "MySQL", "Hibernate"],
          github: "https://github.com/facuscholze/World-Car-Rental-Back-End",
          visual: "rental",
          visualEyebrow: "WORLD CAR RENTAL / API",
          visualTitle: "A reliable rental flow.",
          visualSubline: "BOOKING / FLEET / SECURITY",
          visualFooter: "SERVER-SIDE PLATFORM",
          visualNodes: ["Fleet", "Booking", "Secure API"],
        },
        {
          title: "CrewAI — AI Agents",
          description:
            "Designed and implemented AI agent workflows to automate tasks and integrate APIs using CrewAI and workflow orchestration tools. Built systems capable of processing user inputs, structuring data, and triggering automated actions through intelligent agents.",
          technologies: ["Python", "CrewAI", "LLMs", "Agent orchestration"],
          github: "https://github.com/facuscholze/crewAI",
          visual: "agents",
          visualEyebrow: "AGENT WORKFLOW / CREWAI",
          visualTitle: "From prompt to action.",
          visualSubline: "LLM / TOOLING / CONTROL",
          visualFooter: "ORCHESTRATED WORKFLOW",
          visualNodes: ["Input", "Agents", "Action"],
        },
        {
          title: "WhatsApp AI automation",
          description:
            "Confidential client work: AI-powered WhatsApp conversational agents for customer support and business automation in SMEs.",
          technologies: ["n8n", "WhatsApp Meta Cloud API", "Supabase", "OpenAI API"],
          status: "Coming soon",
          visual: "whatsapp",
          visualEyebrow: "CLIENT AUTOMATION / WHATSAPP",
          visualTitle: "Conversations that keep business moving.",
          visualSubline: "SUPPORT / INTEGRATION / ACTIONS",
          visualFooter: "HUMAN-FIRST AUTOMATION",
          visualNodes: ["WhatsApp", "AI agent", "Business flow"],
        },
      ],
    },
    timeline: {
      eyebrow: "04 / EXPERIENCE & EDUCATION",
      title: "Learning by building.",
      description: "A growing path from backend foundations to applied AI and automation.",
      projectLabel: "Project experience",
      entries: [
        {
          title: "Backend Developer",
          organization: "World Car Rental — Backend",
          period: "Project work",
          category: "Professional project",
          description:
            "Contributed to the backend development of a web platform for car rentals. Responsible for implementing the business logic, designing the database structure, managing security, and developing the server-side functionality from scratch.",
        },
        {
          title: "Backend Specialist",
          organization: "Digital House, Globant y Mercado Libre",
          period: "2024-2025",
          category: "Education",
          description: "Backend Specialist — Digital House, Globant y Mercado Libre (2024-2025)",
        },
        {
          title: "Certified Tech Developer",
          organization: "Digital House, Globant y Mercado Libre",
          period: "2022-2024",
          category: "Education",
          description: "Certified Tech Developer — Digital House, Globant y Mercado Libre (2022-2024)",
        },
      ],
    },
    signals: {
      eyebrow: "05 / HOW I WORK",
      title: "Curious by nature. Reliable by design.",
      description:
        "I value clear communication, thoughtful collaboration, and steady progress over unnecessary complexity.",
      languagesTitle: "Languages",
      softSkillsTitle: "Soft skills",
      languages: "Spanish — Native | English — Basic | Portuguese — Fluent (spoken)",
      softSkills: "Teamwork, Flexibility, Proactive, Learning",
    },
    contact: {
      eyebrow: "06 / CONTACT",
      emailSubject: "Portfolio message from",
      title: "Have a good problem to solve?",
      lead: "Let's build something thoughtful.",
      description:
        "Tell me what you're working on. I’m open to backend roles, AI automation projects, and collaborations.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      formTitle: "Send a message",
      nameLabel: "Your name",
      namePlaceholder: "How should I call you?",
      emailFieldLabel: "Email address",
      emailPlaceholder: "you@company.com",
      messageLabel: "What are you building?",
      messagePlaceholder: "A little context goes a long way...",
      submit: "Open email draft",
      sendingNote: "Your email app will open with the message ready to send.",
      socialTitle: "Find me elsewhere",
      locationLabel: "Córdoba, Argentina",
    },
    footer: {
      note: "Designed with care. Built with code.",
      rights: "All rights reserved.",
      backToTop: "Back to top",
    },
  },
  es: {
    nav: {
      label: "Navegación principal",
      home: "Inicio",
      about: "Sobre mí",
      skills: "Stack",
      projects: "Proyectos",
      journey: "Experiencia",
      contact: "Contacto",
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú",
      talk: "Hablemos",
      skip: "Ir al contenido",
    },
    languageToggle: {
      label: "Cambiar idioma",
      english: "Inglés",
      spanish: "Español",
    },
    social: {
      github: "Visitar perfil de GitHub",
      linkedin: "Visitar perfil de LinkedIn",
      email: "Enviar un correo electrónico",
      githubName: "GitHub",
      linkedinName: "LinkedIn",
      emailName: "Correo",
      location: "En Córdoba, Argentina",
    },
    hero: {
      availability: "Abierto a oportunidades",
      location: "Córdoba, Argentina",
      roles: ["Desarrollador Full Stack", "Ingeniero de Automatización con IA", "Desarrollador Backend"],
      statement: "Construyo backends confiables y automatizaciones de IA útiles.",
      viewProjects: "Ver proyectos",
      downloadCv: "Descargar CV",
      scroll: "Deslizá para explorar",
      focusLabel: "TECNOLOGÍA CON PROPÓSITO",
      focusTitle: "De APIs robustas a agentes de IA útiles.",
      focusItems: ["Sistemas backend", "Workflows de IA", "Automatización de negocios"],
      status: "DISPONIBLE PARA NUEVOS PROYECTOS",
      cardLabel: "ENFOQUE ACTUAL",
      cardTitle: "Backend × IA",
      visualOperation: "AUT",
      visualCaption: "CÓRDOBA / ARGENTINA",
      onlineStatus: "sistemas.online",
      bottomline: "DESARROLLO FULL STACK / AUTOMATIZACIÓN CON IA",
    },
    about: {
      eyebrow: "01 / SOBRE MÍ",
      title: "Ingeniería con una mirada práctica.",
      lead: "Bases sólidas en backend. Una práctica de IA en crecimiento. Un objetivo claro: construir soluciones que funcionen.",
      profile:
        "Desarrollador Backend con experiencia en Java y Spring Boot, enfocado en la construcción de APIs REST y el trabajo con bases de datos relacionales. Apasionado por la arquitectura backend, la automatización y los sistemas escalables. Recientemente ampliando conocimientos en soluciones impulsadas por IA, desarrollando flujos de trabajo basados en agentes y pipelines de automatización utilizando herramientas modernas de inteligencia artificial. Disfruto resolver problemas complejos y aprender continuamente nuevas tecnologías, y actualmente busco oportunidades donde pueda contribuir al desarrollo backend y a sistemas impulsados por IA mientras continúo creciendo profesionalmente.",
      portraitAlt: "Placeholder de retrato abstracto oscuro con las iniciales FS",
      portraitLabel: "TU FOTO VA ACÁ",
      portraitNote: "Reemplazá esta imagen por tu foto",
      stats: [
        { value: "Por proyectos", label: "Experiencia backend", note: "APIs · bases de datos · automatización" },
        { value: "Córdoba, AR", label: "Ubicación", note: "Argentina · UTC−3" },
        { value: "Disponible", label: "Disponibilidad", note: "Oportunidades y freelance" },
      ],
    },
    skills: {
      eyebrow: "02 / HERRAMIENTAS",
      title: "La herramienta adecuada para cada desafío.",
      description:
        "Una base enfocada en backend, con herramientas de frontend, infraestructura e IA para llevar una idea hasta producción.",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        databases: "Bases de datos",
        ai: "IA y automatización",
        infrastructure: "Infraestructura y DevOps",
        tools: "Herramientas",
      },
      skillLabels: {
        "Supabase / pgvector": "Supabase / pgvector",
        "Stored Procedures": "Procedimientos almacenados",
        "LLM Integration": "Integración de LLMs",
        "Prompt Engineering": "Ingeniería de prompts",
        "Agent Orchestration": "Orquestación de agentes",
        "CI/CD (Jenkins)": "CI/CD (Jenkins)",
        "Git / GitHub": "Git / GitHub",
        "Linux / Windows": "Linux / Windows",
      },
      footnote: "Un stack de trabajo que sigue creciendo.",
    },
    projects: {
      eyebrow: "03 / PROYECTOS DESTACADOS",
      title: "Soluciones para problemas reales.",
      description:
        "Ingeniería backend y automatización basada en agentes, conectadas con una mirada de producto.",
      githubLabel: "Ver código",
      projectLabel: "PROYECTO",
      confidential: "Proyecto confidencial para cliente",
      items: [
        {
          title: "World Car Rental — Backend",
          description:
            "Contribuí al desarrollo backend de una plataforma web de alquiler de autos. Responsable de implementar la lógica de negocio, diseñar la estructura de la base de datos, gestionar la seguridad y desarrollar la funcionalidad del lado del servidor desde cero.",
          technologies: ["Java", "Spring Boot", "Spring Security", "MySQL", "Hibernate"],
          github: "https://github.com/facuscholze/World-Car-Rental-Back-End",
          visual: "rental",
          visualEyebrow: "WORLD CAR RENTAL / API",
          visualTitle: "Un flujo de alquiler confiable.",
          visualSubline: "RESERVAS / FLOTA / SEGURIDAD",
          visualFooter: "PLATAFORMA DEL LADO DEL SERVIDOR",
          visualNodes: ["Flota", "Reserva", "API segura"],
        },
        {
          title: "CrewAI — Agentes de IA",
          description:
            "Diseño e implementación de flujos de trabajo con agentes de inteligencia artificial para automatizar tareas e integrar APIs utilizando CrewAI y herramientas de orquestación de workflows. Desarrollo de sistemas capaces de procesar entradas de usuarios, estructurar datos y ejecutar acciones automatizadas mediante agentes inteligentes.",
          technologies: ["Python", "CrewAI", "LLMs", "Orquestación de agentes"],
          github: "https://github.com/facuscholze/crewAI",
          visual: "agents",
          visualEyebrow: "FLUJO DE AGENTES / CREWAI",
          visualTitle: "Del prompt a la acción.",
          visualSubline: "LLM / HERRAMIENTAS / CONTROL",
          visualFooter: "WORKFLOW ORQUESTADO",
          visualNodes: ["Entrada", "Agentes", "Acción"],
        },
        {
          title: "Automatización de IA para WhatsApp",
          description:
            "Proyecto confidencial: agentes conversacionales de WhatsApp con IA para atención al cliente y automatización de negocio en PyMEs.",
          technologies: ["n8n", "WhatsApp Meta Cloud API", "Supabase", "OpenAI API"],
          status: "Próximamente",
          visual: "whatsapp",
          visualEyebrow: "AUTOMATIZACIÓN PARA CLIENTES / WHATSAPP",
          visualTitle: "Conversaciones que impulsan negocios.",
          visualSubline: "ATENCIÓN / INTEGRACIÓN / ACCIONES",
          visualFooter: "AUTOMATIZACIÓN CENTRADA EN LAS PERSONAS",
          visualNodes: ["WhatsApp", "Agente de IA", "Flujo de negocio"],
        },
      ],
    },
    timeline: {
      eyebrow: "04 / EXPERIENCIA Y EDUCACIÓN",
      title: "Aprender haciendo.",
      description:
        "Un camino en crecimiento: desde las bases backend hasta la IA aplicada y la automatización.",
      projectLabel: "Experiencia en proyectos",
      entries: [
        {
          title: "Desarrollador Backend",
          organization: "World Car Rental — Backend",
          period: "Trabajo por proyecto",
          category: "Proyecto profesional",
          description:
            "Contribuí al desarrollo backend de una plataforma web de alquiler de autos. Responsable de implementar la lógica de negocio, diseñar la estructura de la base de datos, gestionar la seguridad y desarrollar la funcionalidad del lado del servidor desde cero.",
        },
        {
          title: "Backend Specialist",
          organization: "Digital House, Globant y Mercado Libre",
          period: "2024-2025",
          category: "Educación",
          description: "Backend Specialist — Digital House, Globant y Mercado Libre (2024-2025)",
        },
        {
          title: "Certified Tech Developer",
          organization: "Digital House, Globant y Mercado Libre",
          period: "2022-2024",
          category: "Educación",
          description: "Certified Tech Developer — Digital House, Globant y Mercado Libre (2022-2024)",
        },
      ],
    },
    signals: {
      eyebrow: "05 / CÓMO TRABAJO",
      title: "Curioso por naturaleza. Confiable por diseño.",
      description:
        "Valoro la comunicación clara, la colaboración consciente y el progreso constante por encima de la complejidad innecesaria.",
      languagesTitle: "Idiomas",
      softSkillsTitle: "Habilidades blandas",
      languages: "Español — Nativo | Inglés — Básico | Portugués — Fluido (oral)",
      softSkills: "Trabajo en equipo, Flexibilidad, Proactivo, Aprendizaje",
    },
    contact: {
      eyebrow: "06 / CONTACTO",
      emailSubject: "Mensaje desde el portfolio de",
      title: "¿Tenés un buen problema para resolver?",
      lead: "Construyamos algo con propósito.",
      description:
        "Contame en qué estás trabajando. Estoy abierto a oportunidades backend, proyectos de automatización con IA y colaboraciones.",
      emailLabel: "Correo",
      phoneLabel: "Teléfono",
      formTitle: "Enviame un mensaje",
      nameLabel: "Tu nombre",
      namePlaceholder: "¿Cómo te llamás?",
      emailFieldLabel: "Correo electrónico",
      emailPlaceholder: "vos@empresa.com",
      messageLabel: "¿Qué estás construyendo?",
      messagePlaceholder: "Un poco de contexto ayuda mucho...",
      submit: "Preparar correo",
      sendingNote: "Se abrirá tu aplicación de correo con el mensaje listo para enviar.",
      socialTitle: "También podés encontrarme en",
      locationLabel: "Córdoba, Argentina",
    },
    footer: {
      note: "Diseñado con cuidado. Construido con código.",
      rights: "Todos los derechos reservados.",
      backToTop: "Volver arriba",
    },
  },
};
