import { en } from 'vuetify/locale'

export default {
  $vuetify: {
    ...en,
    dataIterator: {
      rowsPerPageText: 'Items per page:',
      pageText: '{0}-{1} of {2}',
    },
  },

  navigation: {
    home: 'Home',
    about: 'About',
    contacts: 'Contacts',
    services: 'Services'
  },
  menu: {
    text: 'Resume',
    buttonOpen: 'Open',
    buttonClose: 'Close',
    buttonForm: 'Contact me'
  },
  form: {
    title: 'Feedback',
    subtitle: 'Fill in the form below.',
    buttonText: 'Send',
    description: `By sending the form, you give <a href="/" class="text-brand-2">consent</a> to the processing of your personal data and
                    agree with
                    <a href="/" class="text-brand-2">the policy for the processing of personal data</a>`
  },
  resume: {
    name: "Mikhail Filippov",
    title: "Frontend Developer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    contacts: {
      title: "Contacts",
      email: "Email",
      phone: "Phone",
      address: "Address"
    },
    socials: {
      title: "Socials",
      telegram: "Telegram",
      github: "GitHub",
      hh: "HeadHunter"
    },
    languages: {
      title: "Languages",
      russian: {
        name: "Russian",
        level: "Professional working"
      },
      english: {
        name: "English",
        level: "Intermediate"
      }
    },
    skills: {
      design: {
        title: "Design",
      },
      development: {
        title: "Development",
      },
    },
    education: {
      title: "Education",
    },
    projects: {
      title: "Projects",
      project1: {
        title: "Project 1",
        text: "Project 1 description Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      },
      project2: {
        title: "Project 2", 
        text: "Project 2 description Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      },
      project3: {
        title: "Project 3",
        text: "Project 3 description",
      },
      project4: {
        title: "Project 4",
        text: "Project 4 description",
      },
      project5: {
        title: "Project 5",
        text: "Project 5 description",
      },
    },
    experience: {
      title: "Experience",
      experience1: {
        title: "Work Experience 1",
        text: "Work experience 1 description Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        post: "Position 1",
        time: "2020-2021",
      },
      experience2: {
        title: "Work Experience 2",
        text: "Work experience 2 description Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        post: "Position 2",
        time: "2021-2022",
      },
      experience3: {
        title: "Work Experience 3",
        text: "Work experience 3 description Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        post: "Position 3",
        time: "2022-2023",
      },
    },
    tools: {
      title: "Tools",
    },
  },
}
