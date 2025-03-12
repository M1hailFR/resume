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
            icon: "mail",
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
            icon: "mail",
            title: "resume.socials.telegram",
            text: "@M1hailFR",
            link: "https://t.me/M1hailFR",
          },
          {
            icon: "mail",
            title: "resume.socials.github",
            text: "M1hailFR",
            link: "https://github.com/M1hailFR",
          },
          {
            icon: "mail",
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
            icon: "mail",
            title: "resume.languages.russian.name",
            text: "resume.languages.russian.level",
          },
          {
            icon: "mail",
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
          image: "/img/shared/info/zoro.jpg",
          title: "resume.projects.project1.title",
          text: "resume.projects.project1.text",
          site: "https://rmnch.netlify.app/",
          repo: "https://github.com/M1hailFR/rmnch",
        },
        {
          image: "/img/shared/info/zoro.jpg",
          title: "resume.projects.project2.title",
          text: "resume.projects.project2.text",
          site: "https://rmnch.netlify.app/",
          repo: "https://github.com/M1hailFR/rmnch",
        },
        {
          image: "/img/shared/info/zoro.jpg",
          title: "resume.projects.project3.title",
          text: "resume.projects.project3.text",
          site: "https://rmnch.netlify.app/",
          repo: "https://github.com/M1hailFR/rmnch",
        },
        {
          image: "/img/shared/info/zoro.jpg",
          title: "resume.projects.project4.title",
          text: "resume.projects.project4.text",
          site: "https://rmnch.netlify.app/",
          repo: "https://github.com/M1hailFR/rmnch",
        },
        {
          image: "/img/shared/info/zoro.jpg",
          title: "resume.projects.project5.title",
          text: "resume.projects.project5.text",
          site: "https://rmnch.netlify.app/",
          repo: "https://github.com/M1hailFR/rmnch",
        },
      ],
    },

    experience: {
      title: "resume.experience.title",
      list: [
        {
          image: "/img/shared/info/zoro.jpg",
          time: "resume.experience.experience1.time",
          title: "resume.experience.experience1.title",
          text: "resume.experience.experience1.text",
          post: "resume.experience.experience1.post",
        },
        {
          image: "/img/shared/info/zoro.jpg",
          time: "resume.experience.experience2.time",
          title: "resume.experience.experience2.title",
          text: "resume.experience.experience2.text",
          post: "resume.experience.experience2.post",
        },
        {
          image: "/img/shared/info/zoro.jpg",
          time: "resume.experience.experience3.time",
          title: "resume.experience.experience3.title",
          text: "resume.experience.experience3.text",
          post: "resume.experience.experience3.post",
        },
      ],
    },
    skills: [
      {
        title: "resume.skills.design.title",
        list: [
          {
            title: "Web Design",
            text: "Создание современных веб-интерфейсов",
          },
          {
            title: "Mobile Design",
            text: "Дизайн мобильных приложений",
          },
          {
            title: "User Experience",
            text: "UX исследования и проектирование",
          },
          {
            title: "Design System",
            text: "Разработка дизайн-систем",
          },
          {
            title: "Tools",
            text: "Wireframing, Prototyping, Testing",
          },
        ],
      },
      {
        title: "resume.skills.development.title",
        list: [
          {
            title: "Frontend",
            text: "HTML, CSS, JavaScript",
          },
          {
            title: "Frameworks",
            text: "React.js, Next.js",
          },
          {
            title: "UI Libraries",
            text: "Chakra UI, Emotion, Framer",
          },
          {
            title: "TypeScript",
            text: "Строгая типизация кода",
          },
        ],
      },
    ],
    education: [
      {
        title: "resume.education.title",
        list: [
          {
            image: "/img/shared/info/zoro.jpg",
            title: "resume.education.education1.title",
            text: "resume.education.education1.text",
            time: "resume.education.education1.time",
          },
        ],
      },
    ],
    tools: [
      {
        title: "resume.tools.title",
        list: [
          {
            title: "resume.tools.tool1.title",
            text: "resume.tools.tool1.text",
            image: "/img/shared/info/zoro.jpg",
          },
        ],
      },
    ],
  },
});
