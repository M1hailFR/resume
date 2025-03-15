import { en } from "vuetify/locale";

export default {
  $vuetify: {
    ...en,
    dataIterator: {
      rowsPerPageText: "Items per page:",
      pageText: "{0}-{1} of {2}",
    },
  },

  navigation: {
    home: "Home",
    about: "About",
    contacts: "Contacts",
    services: "Services",
  },
  menu: {
    text: "Resume",
    buttonOpen: "Open",
    buttonClose: "Close",
    buttonForm: "Write",
  },
  form: {
    name: "Name*",
    email: "Email*",
    message: "Message",
    phone: "Phone*",
    success: "Data sent successfully",
    success_description: "We will respond to you in a few minutes",
    title: "Contact us",
    subtitle: "Fill out the form below.",
    buttonText: "Send",
    description: `By submitting the form, you give <a href="/" class="text-brand-2">consent</a> to the processing of your personal data and agree to the <a href="/" class="text-brand-2">personal data processing policy</a>`,
  },
  resume: {
    name: "Mikhail Filippov",
    title: "Frontend Developer",
    text: "Frontend is the art of turning layouts into websites and bugs into features",
    contacts: {
      title: "Contacts",
      email: "Email",
      phone: "Phone",
      address: "Address",
    },
    socials: {
      title: "Social",
      telegram: "Telegram",
      github: "GitHub",
      hh: "HeadHunter",
    },
    languages: {
      title: "Languages",
      russian: {
        name: "Russian",
        level: "Native",
      },
      english: {
        name: "English",
        level: "Intermediate",
      },
    },
    skills: {
      title: "Skills",
      design: {
        title: "Design",
        list: {
          uiDesign: "UI/UX Design",
          responsive: "Responsive layouts", 
          accessibility: "Accessibility",
          detailsAttention: "Attention to detail",
          consistentSpacing: "Consistent spacing",
          animationsTransitions: "Animations and transitions",
          userExperience: "User experience",
          colorSchemes: "Color schemes",
          typography: "Typography",
          prototyping: "Prototyping",
          adaptiveDesign: "Adaptive design",
          microAnimations: "Micro-animations",
          styleGuides: "Style guides",
        },
      },
      development: {
        title: "Development",
        list: {
          vue: "Vue.js 3 / Nuxt 3",
          composition: "Composition API",
          options: "Options API",
          solid: "SOLID principles",
          typescript: "TypeScript",
          scss: "SCSS/SASS",
          cssModules: "CSS Modules",
          css: "CSS",
          flexbox: "Flexbox",
          i18n: "i18n",
          pinia: "Pinia",
          vuex: "Vuex",
          router: "Vue Router",
          toast: "Notification System",
          meta: "SEO optimization",
          oop: "OOP",
          dry: "DRY principles",
          component: "Component Approach",
          modular: "Modular Structure"
        }
      },
    },
    education: {
      title: "Education",
      education1: {
        title: "OSU",
        text: "Information Security Specialist. Institute of Mathematics and Information Technology.",
        time: "September 2019 - January 2025",
      },
      education2: {
        title: "JavaScript.Ninja",
        text: "Application design nuances, real examples from developer experience.",
        time: "January 2022 - May 2022",
      },
    },
    projects: {
      title: "Projects",
      project1: {
        title: "rmnch",
        text: "This is a Nuxt.js 3 web project using Vuetify as a UI framework and including PWA functionality. The project has an advanced architecture using Pinia for state management, TypeScript support, and includes moment integration for working with dates and input masking for forms.",
      },
      project2: {
        title: "pro.spisanie",
        text: "A modern web project built on the Nuxt.js 3 framework using TypeScript, which includes Yandex.Metrics integration and uses Tailwind CSS for styling. The project has a full-fledged structure with components, pages, Pinia state store and is configured for deployment on the Netlify platform",
      },
      project3: {
        title: "Project 3",
        text: "This is a modern single-page application (SPA) on Vue.js 3 with full architecture. The project also has a configured Service Worker for PWA functionality support, making it potentially available offline.",
      },
      project4: {
        title: "Project 4",
        text: "This is a Vue 3 project with Vite that represents a container and operations management system. The project uses a modern technology stack including Pinia for state management, TypeScript for typing and SASS for styling, and is configured for deployment on the Netlify platform.",
      },
    },
    experience: {
      title: "Experience",
      experience1: {
        title: "Toscale",
        text: `Actively worked on the toscale-research project - a modern web application based on Nuxt.js/Vue.js, designed for cryptocurrency market research and analytics.
          As a frontend developer, I was involved in creating and updating key user interface components, implementing a notification system with advanced logic for tracking financial indicators,
          worked on project localization and improving the detailed cryptocurrency information page. The project uses a modern technology stack, including Tailwind css for styling, various libraries for data visualization (Chart.js, Highcharts),
          Git version control system and follows best development practices with regular commits and active participation in code review.
          My contribution to the project covered both frontend development and implementation of complex business logic related to cryptocurrency data and financial instruments.`,
        post: "Frontend Developer",
        time: "October 2023 - January 2025",
      },
      experience2: {
        title: "ReLead",
        text: `Creating modern web applications on Vue.js/Nuxt, developing landing pages and multi-page websites; at Relead successfully implemented a series of projects creating adaptive websites using Vue 3, Nuxt 3, Pinia, Vuetify, Tailwind; 
          set up multilingual support and integration with external services; paid special attention to user interface quality, performance and SEO optimization, which allowed increasing website conversion by 10% and improving metrics`,
        post: "Frontend Developer",
        time: "January 2025 - present",
      },
    },
    tools: {
      title: "Tools",
      tool1: {
        title: "Figma",
        text: "Interface design",
      },
      tool2: {
        title: "VS Code",
        text: "Primary development",
      },
      tool3: {
        title: "Git",
        text: "Version control system",
      },
      tool4: {
        title: "Postman",
        text: "API testing",
      },
      tool5: {
        title: "npm",
        text: "Package management",
      },
      tool6: {
        title: "pnpm",
        text: "Package management",
      },
      tool7: {
        title: "Docker",
        text: "Application containerization",
      },
      tool8: {
        title: "Terminal",
        text: "Command line work",
      },
      tool9: {
        title: "Webpack",
        text: "Project building",
      },
      tool10: {
        title: "Vite",
        text: "Project building",
      },
    },
  },
};
