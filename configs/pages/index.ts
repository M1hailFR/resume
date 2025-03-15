export const MAIN_CARD_RESUME_BLOCK = Object.freeze({
  desktopPadding: {
    top: "16px",
    bottom: "16px",
  },
  mobilePadding: {
    top: "8px",
    bottom: "8px",
  },
  block_fields: {
    name: "resume.name",
    title: "resume.title",
    text: "resume.text",
    lists: [
      {
        title: "resume.contacts.title",
        list: [
          {
            icon: "mail",
            title: "resume.contacts.email",
            text: "f1l1ppovmr@gmail.com",
            link: "mailto:f1l1ppovmr@gmail.com",
          },
          {
            icon: "phone-call",
            title: "resume.contacts.phone",
            text: "+7 (995) 836-09-11",
            link: "tel:+79958360911",
          },
          {
            icon: "geo",
            title: "resume.contacts.address",
            text: "Orenburg, Russia",
            link: "https://yandex.ru/maps/48/orenburg/?ll=55.098500%2C51.768200&z=12",
          },
        ],
      },
      {
        title: "resume.socials.title",
        list: [
          {
            icon: "telegram",
            title: "resume.socials.telegram",
            text: "@M1hailFR",
            link: "https://t.me/M1hailFR",
          },
          {
            icon: "github",
            title: "resume.socials.github",
            text: "M1hailFR",
            link: "https://github.com/M1hailFR",
          },
          {
            icon: "hh",
            title: "resume.socials.hh",
            text: "Mihail",
            link: "https://orenburg.hh.ru/resume/06706b0fff09e23bc70039ed1f65466f56444f",
          },
        ],
      },
      {
        title: "resume.languages.title",
        list: [
          {
            icon: "ru-flag",
            title: "resume.languages.russian.name",
            text: "resume.languages.russian.level",
          },
          {
            icon: "en-flag",
            title: "resume.languages.english.name",
            text: "resume.languages.english.level",
          },
        ],
      },
    ],
    projects: {
      title: "resume.projects.title",
      list: [
        {
          image: "/img/shared/projects/project1.png",
          title: "resume.projects.project1.title",
          text: "resume.projects.project1.text",
          site: "https://rmnch.netlify.app",
          repo: "https://github.com/M1hailFR/rmnch",
        },
        {
          image: "/img/shared/projects/project2.png",
          title: "resume.projects.project2.title",
          text: "resume.projects.project2.text",
          site: "https://prospisanie.ru",
          repo: "https://github.com/M1hailFR/bn",
        },
        {
          image: "/img/shared/projects/vue.png",
          title: "resume.projects.project3.title",
          text: "resume.projects.project3.text",
          site: "https://front-end-site2.web.app",
          repo: "",
        },
        {
          image: "/img/shared/projects/vue.png",
          title: "resume.projects.project4.title",
          text: "resume.projects.project4.text",
          site: "https://sgs-vostok-limited.netlify.app",
          repo: "https://github.com/M1hailFR/sgs-vostok-limited ",
        },
      ],
    },

    experience: {
      title: "resume.experience.title",
      list: [
        {
          image: "/img/shared/experience/toscale.png",
          time: "resume.experience.experience1.time",
          title: "resume.experience.experience1.title",
          text: "resume.experience.experience1.text",
          post: "resume.experience.experience1.post",
        },
        {
          image: "/img/shared/experience/relead.png",
          time: "resume.experience.experience2.time",
          title: "resume.experience.experience2.title",
          text: "resume.experience.experience2.text",
          post: "resume.experience.experience2.post",
        },
      ],
    },
    skills: {
      title: "resume.skills.title",
      list: [
        {
            
          title: "resume.skills.design.title",
          icon: "palette",
          info: [
            "resume.skills.design.list.uiDesign",
            "resume.skills.design.list.responsive",
            "resume.skills.design.list.accessibility",
            "resume.skills.design.list.detailsAttention",
            "resume.skills.design.list.consistentSpacing", 
            "resume.skills.design.list.animationsTransitions",
            "resume.skills.design.list.userExperience",
            "resume.skills.design.list.colorSchemes",
            "resume.skills.design.list.typography",
            "resume.skills.design.list.prototyping",
            "resume.skills.design.list.adaptiveDesign",
            "resume.skills.design.list.microAnimations",
            "resume.skills.design.list.styleGuides"
          ]
        },
        {
          title: "resume.skills.development.title",
          icon: "code",
          info: [
            "resume.skills.development.list.vue",
            "resume.skills.development.list.composition",
            "resume.skills.development.list.options",
            "resume.skills.development.list.solid",
            "resume.skills.development.list.typescript",
            "resume.skills.development.list.scss",
            "resume.skills.development.list.cssModules",
            "resume.skills.development.list.css",
            "resume.skills.development.list.flexbox",
            "resume.skills.development.list.i18n",
            "resume.skills.development.list.pinia",
            "resume.skills.development.list.vuex",
            "resume.skills.development.list.router",
            "resume.skills.development.list.toast",
            "resume.skills.development.list.meta",
            "resume.skills.development.list.oop",
            "resume.skills.development.list.dry",
            "resume.skills.development.list.component",
            "resume.skills.development.list.modular"
          ]
        },
      ],
    },
    education: {
      title: "resume.education.title",
      list: [
        {
          image: "/img/shared/education/osu.png",
          title: "resume.education.education1.title",
          text: "resume.education.education1.text",
          time: "resume.education.education1.time",
        },
        {
          image: "/img/shared/education/jsninja.png",
          title: "resume.education.education2.title",
          text: "resume.education.education2.text",
          time: "resume.education.education2.time",
        },
      ],
    },

    tools: {
      title: "resume.tools.title",
      list: [
        {
          title: "resume.tools.tool1.title",
          text: "resume.tools.tool1.text",
          image: "/img/shared/tools/figma.png",
        },
        {
          title: "resume.tools.tool2.title",
          text: "resume.tools.tool2.text",
          image: "/img/shared/tools/vscode.png",
        },
        {
          title: "resume.tools.tool3.title",
          text: "resume.tools.tool3.text",
          image: "/img/shared/tools/git.png",
        },
        {
          title: "resume.tools.tool4.title",
          text: "resume.tools.tool4.text",
          image: "/img/shared/tools/postman.png",
        },
        {
          title: "resume.tools.tool5.title",
          text: "resume.tools.tool5.text",
          image: "/img/shared/tools/npm.png",
        },
        {
          title: "resume.tools.tool6.title",
          text: "resume.tools.tool6.text",
          image: "/img/shared/tools/pnpm.png",
        },
        {
          title: "resume.tools.tool7.title",
          text: "resume.tools.tool7.text",
          image: "/img/shared/tools/docker.png",
        },
        {
          title: "resume.tools.tool8.title",
          text: "resume.tools.tool8.text",
          image: "/img/shared/tools/terminal.png",
        },
        {
          title: "resume.tools.tool9.title",
          text: "resume.tools.tool9.text",
          image: "/img/shared/tools/webpack.png",
        },
        {
          title: "resume.tools.tool10.title",
          text: "resume.tools.tool10.text",
          image: "/img/shared/tools/vite.png",
        },
      ],
    },
  },
});
