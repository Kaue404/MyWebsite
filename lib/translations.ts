export const defaultLanguage = "pt" as const

export const languageOptions = [
  { value: "pt", label: "Português", shortLabel: "PT" },
  { value: "en", label: "English", shortLabel: "EN" },
] as const

export type Language = (typeof languageOptions)[number]["value"]

export const translations = {
  pt: {
    meta: {
      lang: "pt-BR",
      title: "Kauê Website",
    },
    header: {
      navigation: {
        about: "Sobre",
        projects: "Projetos",
        contact: "Contato",
      },
      aria: {
        mainNavigation: "Navegação principal",
        home: "Ir para a página inicial",
        logoAlt: "Logo do site",
        openMobileMenu: "Abrir menu de navegação",
        closeMobileMenu: "Fechar menu de navegação",
      },
      preferences: {
        trigger: "Abrir preferências",
        title: "Preferências",
        theme: "Tema",
        language: "Idioma",
        lightTheme: "Claro",
        darkTheme: "Escuro",
      },
    },
    home: {
      heroTitle: "Olá, bem-vindo ao meu Portfólio Website",
      workTitle: "Conheça meu trabalho",
      viewProjects: "Ver projetos",
      downloadCv: "Baixar currículo",
      downloadEnglishCv: "English CV",
    },
    about: {
      heading: "Kauê José Abdalla Leal",
      bio: "Sou apaixonado por transformar ideias em realidade por meio do código, com o objetivo de participar de projetos com soluções impactantes. Sou formado em Desenvolvimento de Software Multiplataforma (DSM) na Fatec de Franca, com certificações intermediárias e microcertificações da área de programação, tenho inglês avançado e conhecimentos em Front-end, Back-end e tecnologia em geral. Já trabalhei na área de tecnologia na empresa Lev Negócios sendo full-stack e trabalho atualmente na Âncora Consórcios sendo front-end, utilizando várias ferramentas e frameworks.",
      journeyTitle: "Minha jornada",
      imageAlt: "Foto de Kauê José Abdalla Leal",
      journeySteps: [
        {
          label: "2022",
          items: ["Ensino Médio: PEI Sudário Ferreira"],
        },
        {
          label: "2023",
          items: ["Curso de Inglês: CCBEU, Franca"],
        },
        {
          label: "2024",
          items: [
            "Estágio de Desenvolvedor Full Stack: Lev Negócios",
            "Técnico Eletrônico: Hayabusa Produções",
          ],
        },
        {
          label: "2025",
          items: ["Desenvolvedor Full Stack: Lev Negócios"],
        },
        {
          label: "2026 - Atualmente",
          items: [
            "Desenvolvedor Front End: Âncora Consórcios",
            "Diploma de Tecnólogo e Certificações em DSM: FATEC",
          ],
        },
      ],
    },
    projects: {
      heading: "Meus projetos como desenvolvedor",
      intro:
        "Nesta página estão projetos acadêmicos, estudos práticos e samples que representam minha experiência com desenvolvimento front-end, back-end, integrações com APIs, visualização de dados e trabalho em equipe.",
      summaryLabel: "Resumo dos projetos",
      projectListTitle: "Lista de projetos",
      mainPoints: "Principais pontos",
      projectImageAlt: "Imagem do projeto",
      viewRepository: "Ver repositório",
      openRepositoryAria: "Abrir repositório do projeto",
      ctaTitle: "Vamos conversar sobre um projeto?",
      highlights: [
        {
          title: "Aplicações completas",
          description:
            "Projetos com interfaces, integrações, organização de dados e fluxo de uso pensado para o usuário final.",
        },
        {
          title: "Projetos em equipe",
          description:
            "Experiência em projetos integradores com divisão de tarefas, documentação, entregas por sprint e colaboração no GitHub.",
        },
        {
          title: "Aprendizado aplicado",
          description:
            "Cada repositório reúne práticas de front-end, back-end, APIs, visualização de dados e evolução contínua do código.",
        },
      ],
      items: [
        {
          imageUrl: "/projetos/pokemon-api.png",
          title: "Site de API Pokémon",
          href: "https://github.com/Kaue404/API-Pokemon",
          description:
            "Interface criada para consultar dados de Pokémon de forma clara, trabalhando consumo de API REST, exibição de imagens, organização de informações e navegação objetiva.",
          highlights: [
            "Consulta e apresentação de dados vindos de uma API externa.",
            "Cards visuais para tornar a exploração dos Pokémon mais simples.",
            "Tratamento de estados da interface para uma experiência mais fluida.",
          ],
          tags: ["API REST", "Front-end", "Responsividade"],
        },
        {
          imageUrl: "/projetos/wonderlust.png",
          title: "Projeto PI: Wonderlust",
          href: "https://github.com/FatecFranca/DSM-G09-PI3-2024-1",
          description:
            "Projeto acadêmico desenvolvido em equipe, com foco em transformar requisitos em uma aplicação navegável, organizada e alinhada a entregas incrementais.",
          highlights: [
            "Participação em fluxo colaborativo com versionamento e organização por tarefas.",
            "Construção de telas e funcionalidades conectadas às necessidades do projeto.",
            "Prática de documentação, planejamento e apresentação de entregas.",
          ],
          tags: ["GitHub", "Equipe", "Produto digital"],
        },
        {
          imageUrl: "/projetos/sample-chart.png",
          title: "Sample de Gráficos",
          href: "https://github.com/Kaue404/Samples",
          description:
            "Conjunto de exemplos voltado à criação de gráficos e leitura visual de informações, explorando formas de apresentar dados com clareza e consistência.",
          highlights: [
            "Exemplos reutilizáveis para diferentes tipos de visualização.",
            "Organização de dados para facilitar comparação e análise.",
            "Atenção à legibilidade, hierarquia visual e composição dos gráficos.",
          ],
          tags: ["Gráficos", "Dados", "Componentes"],
        },
        {
          imageUrl: "/projetos/dome.png",
          title: "Projeto PI: Dome",
          href: "https://github.com/bodelha/dome",
          description:
            "Aplicação criada em contexto acadêmico para consolidar práticas de desenvolvimento, integração de funcionalidades e organização de um projeto com escopo real.",
          highlights: [
            "Desenvolvimento orientado a requisitos e validações do projeto.",
            "Trabalho com estrutura de telas, fluxo de navegação e regras de negócio.",
            "Colaboração em equipe para manter padrão de código e evolução contínua.",
          ],
          tags: ["Aplicação web", "Equipe", "Requisitos"],
        },
        {
          imageUrl: "/projetos/api-web.png",
          title: "Sample de API Web",
          href: "https://github.com/Kaue404/lab-web-2024-2",
          description:
            "Exemplo prático para estudar comunicação back-end, com foco em endpoints, respostas estruturadas e consumo de dados em aplicação web.",
          highlights: [
            "Exploração de rotas, métodos HTTP e contratos de resposta.",
            "Integração entre interface e camada de dados.",
            "Base para evoluir funcionalidades com regras e validações mais completas.",
          ],
          tags: ["API Web", "HTTP", "Integração"],
        },
        {
          imageUrl: "/projetos/game-list.png",
          title: "Projeto PI: Game List",
          href: "https://github.com/cldmatos/DSM-P6-G05-2025-2",
          description:
            "Projeto integrador voltado à organização de jogos em uma experiência de catálogo, reunindo informações, listagens e fluxo de navegação para consulta.",
          highlights: [
            "Estruturação de uma experiência para explorar e organizar itens.",
            "Uso de cards, listagens e detalhes para melhorar a descoberta de conteúdo.",
            "Projeto em equipe com foco em entregas, revisão e evolução do produto.",
          ],
          tags: ["Catálogo", "UX", "Projeto PI"],
        },
        {
          imageUrl: "/projetos/glic-guard.png",
          title: "Projeto PI: GlicGuard",
          href: "https://github.com/FatecFranca/DSM-P5-G05-2025-1",
          description:
            "Projeto integrador com foco em tecnologia aplicada à saúde, pensado para apoiar o registro, acompanhamento e organização de informações relacionadas à glicemia.",
          highlights: [
            "Aplicação de regras de negócio em um domínio com dados sensíveis.",
            "Organização de informações para facilitar acompanhamento e tomada de decisão.",
            "Desenvolvimento colaborativo com atenção à clareza e manutenção do código.",
          ],
          tags: ["Mobile", "Dados", "Saúde"],
        },
      ],
    },
    contactButton: {
      label: "Entrar em contato",
    },
    notFound: {
      heading: "Página não encontrada",
    },
    contact: {
      heading: "Contato",
      intro:
        "Use o formulário para contar sobre um assunto ou projeto. Para uma conversa mais direta, escolha um dos canais privados.",
      project: {
        title: "Contato sobre assunto/projeto",
        requiredNote: "Todos os campos são obrigatórios.",
        fields: {
          name: {
            label: "Nome",
            placeholder: "Seu nome",
          },
          subject: {
            label: "Título do assunto/projeto",
            placeholder: "Ex.: Desenvolvimento de uma landing page",
          },
          description: {
            label: "Descrição do assunto/projeto",
            placeholder:
              "Descreva o contexto, objetivo, prazo e próximos passos esperados.",
          },
        },
        submit: "Enviar por e-mail",
        mailLabels: {
          name: "Nome",
          description: "Descrição",
        },
      },
      private: {
        title: "Contato rápido",
        whatsapp: {
          title: "WhatsApp",
          action: "Conversar no WhatsApp",
        },
        email: {
          title: "E-mail",
          action: "Enviar e-mail",
        },
        linkedin: {
          title: "LinkedIn",
          action: "Abrir LinkedIn",
        },
      },
    },
    footer: {
      pagesTitle: "Páginas",
      contactTitle: "Contato",
      socialTitle: "Redes Sociais",
      copyright: "© 2026 Kauê José Abdalla Leal",
      links: {
        home: "Home",
        about: "Sobre",
        contact: "Contato",
        projects: "Projetos",
      },
      aria: {
        pages: "Links do rodapé",
      },
    },
  },
  en: {
    meta: {
      lang: "en",
      title: "Kauê Website",
    },
    header: {
      navigation: {
        about: "About",
        projects: "Projects",
        contact: "Contact",
      },
      aria: {
        mainNavigation: "Main navigation",
        home: "Go to the home page",
        logoAlt: "Website logo",
        openMobileMenu: "Open navigation menu",
        closeMobileMenu: "Close navigation menu",
      },
      preferences: {
        trigger: "Open preferences",
        title: "Preferences",
        theme: "Theme",
        language: "Language",
        lightTheme: "Light",
        darkTheme: "Dark",
      },
    },
    home: {
      heroTitle: "Hello, welcome to my Portfolio Website",
      workTitle: "Explore my work",
      viewProjects: "View projects",
      downloadCv: "Download Portuguese CV",
      downloadEnglishCv: "Download English CV",
    },
    about: {
      heading: "Kauê José Abdalla Leal",
      bio: "I am passionate about turning ideas into reality through code, with the goal of contributing to projects that create impactful solutions. I graduated in Multiplatform Software Development (DSM) from Fatec Franca, with intermediate certifications and programming micro-certifications. I have advanced English skills and knowledge of front-end, back-end, and technology in general. I have worked in technology at Lev Negócios as a full-stack developer, and I currently work at Âncora Consórcios as a front-end developer, using several tools and frameworks.",
      journeyTitle: "My journey",
      imageAlt: "Photo of Kauê José Abdalla Leal",
      journeySteps: [
        {
          label: "2022",
          items: ["High School: PEI Sudário Ferreira"],
        },
        {
          label: "2023",
          items: ["English Course: CCBEU, Franca"],
        },
        {
          label: "2024",
          items: [
            "Full Stack Developer Internship: Lev Negócios",
            "Electronics Technician: Hayabusa Produções",
          ],
        },
        {
          label: "2025",
          items: ["Full Stack Developer: Lev Negócios"],
        },
        {
          label: "2026 - Present",
          items: [
            "Front-end Developer: Âncora Consórcios",
            "Technologist degree and DSM certifications: FATEC",
          ],
        },
      ],
    },
    projects: {
      heading: "My projects as a developer",
      intro:
        "This page brings together academic projects, practical studies, and samples that represent my experience with front-end development, back-end development, API integrations, data visualization, and teamwork.",
      summaryLabel: "Projects summary",
      projectListTitle: "Project list",
      mainPoints: "Main points",
      projectImageAlt: "Project image",
      viewRepository: "View repository",
      openRepositoryAria: "Open repository for project",
      ctaTitle: "Let's talk about a project?",
      highlights: [
        {
          title: "Complete applications",
          description:
            "Projects with interfaces, integrations, data organization, and user flows designed for end users.",
        },
        {
          title: "Team projects",
          description:
            "Experience in integrative projects with task planning, documentation, sprint deliveries, and GitHub collaboration.",
        },
        {
          title: "Applied learning",
          description:
            "Each repository brings together front-end, back-end, API, data visualization, and continuous code improvement practices.",
        },
      ],
      items: [
        {
          imageUrl: "/projetos/pokemon-api.png",
          title: "Pokémon API Website",
          href: "https://github.com/Kaue404/API-Pokemon",
          description:
            "Interface created to query Pokémon data clearly, working with REST API consumption, image display, information organization, and straightforward navigation.",
          highlights: [
            "Queries and presents data from an external API.",
            "Visual cards make Pokémon exploration simpler.",
            "Interface state handling for a smoother experience.",
          ],
          tags: ["REST API", "Front-end", "Responsive"],
        },
        {
          imageUrl: "/projetos/wonderlust.png",
          title: "PI Project: Wonderlust",
          href: "https://github.com/FatecFranca/DSM-G09-PI3-2024-1",
          description:
            "Academic project developed with a team, focused on turning requirements into a navigable, organized application aligned with incremental deliveries.",
          highlights: [
            "Participation in a collaborative workflow with versioning and task organization.",
            "Construction of screens and features connected to the project's needs.",
            "Practice with documentation, planning, and delivery presentations.",
          ],
          tags: ["GitHub", "Team", "Digital product"],
        },
        {
          imageUrl: "/projetos/sample-chart.png",
          title: "Chart Samples",
          href: "https://github.com/Kaue404/Samples",
          description:
            "Set of examples focused on chart creation and visual information reading, exploring ways to present data clearly and consistently.",
          highlights: [
            "Reusable examples for different types of visualization.",
            "Data organization to make comparison and analysis easier.",
            "Attention to readability, visual hierarchy, and chart composition.",
          ],
          tags: ["Charts", "Data", "Components"],
        },
        {
          imageUrl: "/projetos/dome.png",
          title: "PI Project: Dome",
          href: "https://github.com/bodelha/dome",
          description:
            "Application created in an academic context to consolidate development practices, feature integration, and project organization with real scope.",
          highlights: [
            "Requirement-oriented development and project validation.",
            "Work with screen structure, navigation flow, and business rules.",
            "Team collaboration to keep code standards and continuous evolution.",
          ],
          tags: ["Web application", "Team", "Requirements"],
        },
        {
          imageUrl: "/projetos/api-web.png",
          title: "Web API Sample",
          href: "https://github.com/Kaue404/lab-web-2024-2",
          description:
            "Practical example for studying back-end communication, focused on endpoints, structured responses, and data consumption in a web application.",
          highlights: [
            "Exploration of routes, HTTP methods, and response contracts.",
            "Integration between interface and data layer.",
            "Foundation for evolving features with more complete rules and validations.",
          ],
          tags: ["Web API", "HTTP", "Integration"],
        },
        {
          imageUrl: "/projetos/game-list.png",
          title: "PI Project: Game List",
          href: "https://github.com/cldmatos/DSM-P6-G05-2025-2",
          description:
            "Integrative project focused on organizing games in a catalog experience, bringing together information, lists, and navigation flow for browsing.",
          highlights: [
            "Structuring an experience to explore and organize items.",
            "Use of cards, lists, and details to improve content discovery.",
            "Team project focused on deliveries, review, and product evolution.",
          ],
          tags: ["Catalog", "UX", "PI Project"],
        },
        {
          imageUrl: "/projetos/glic-guard.png",
          title: "PI Project: GlicGuard",
          href: "https://github.com/FatecFranca/DSM-P5-G05-2025-1",
          description:
            "Integrative project focused on technology applied to health, designed to support recording, tracking, and organizing information related to blood glucose.",
          highlights: [
            "Application of business rules in a domain with sensitive data.",
            "Information organization to support tracking and decision-making.",
            "Collaborative development with attention to clarity and code maintenance.",
          ],
          tags: ["Mobile", "Data", "Health"],
        },
      ],
    },
    contactButton: {
      label: "Get in touch",
    },
    notFound: {
      heading: "Page not found",
    },
    contact: {
      heading: "Contact",
      intro:
        "Use the form to tell me about a topic or project. For a more direct conversation, choose one of the private channels.",
      project: {
        title: "Contact about a topic/project",
        requiredNote: "All fields are required.",
        fields: {
          name: {
            label: "Name",
            placeholder: "Your name",
          },
          subject: {
            label: "Topic/project title",
            placeholder: "E.g. Landing page development",
          },
          description: {
            label: "Topic/project description",
            placeholder:
              "Describe the context, goal, deadline, and expected next steps.",
          },
        },
        submit: "Send by email",
        mailLabels: {
          name: "Name",
          description: "Description",
        },
      },
      private: {
        title: "Get in touch",
        whatsapp: {
          title: "WhatsApp",
          action: "Chat on WhatsApp",
        },
        email: {
          title: "Email",
          action: "Send email",
        },
        linkedin: {
          title: "LinkedIn",
          action: "Open LinkedIn",
        },
      },
    },
    footer: {
      pagesTitle: "Pages",
      contactTitle: "Contact",
      socialTitle: "Social Media",
      copyright: "© 2026 Kauê José Abdalla Leal",
      links: {
        home: "Home",
        about: "About",
        contact: "Contact",
        projects: "Projects",
      },
      aria: {
        pages: "Footer links",
      },
    },
  },
} as const

export function isLanguage(value: string | null): value is Language {
  return languageOptions.some((option) => option.value === value)
}
