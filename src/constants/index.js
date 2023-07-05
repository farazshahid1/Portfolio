import {
  mobile,
  backend,
  creator,
  nextjs,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  webstream,
  accenture,
  lionbridge,
  zaid,
  siddesh,
  ashish,
  viztar,
  linkedin,
  twitter,
  instagram,
  rupee,
  shopify,
  portfolio,
  carrent,
  sharktank,
  schwabe,
  airportcodes,
  jobit,
  tripguide,
  threejs,
  github,
  byteMage
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Next.js Developer",
    icon: nextjs,
  },
  {
    title: "Angular.js Developer",
    icon: backend,
  },
  {
    title: "Nest.js Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software engineer",
    company_name: "ByteMage",
    icon: byteMage,
    iconBg: "#383E56",
    date: "April 2022 - Present",
    points: [
      "Developed and maintained web‑based applications using Nunjucks, React, Next.js, Node.js, Nest.js and Express.js.",
      "Implemented RESTful APIs for data management and integration with third‑party services.",
      "Designed and implemented database systems using MongoDB, and PostgreSQL.",
      "Successfully integrated Google Tag Manager (GTM) in multiple web apps, enhancing tracking capabilities and data collection accuracy",
      "Implemented comprehensive test suites using Jest to cover various components, functions, and modules, resulting in improved reliability and reduced bugs.",
      "Contributed to the development of front‑end features and user interfaces.",
      "Worked with cross‑functional teams to ensure project success and meet deadlines.",
      "Worked as a team lead on one of the projects.",
    ],
  },
  {
    title: "Software engineer",
    company_name: "Eleget",
    icon: viztar,
    iconBg: "#E6DEDD",
    date: "july 2020 - March 2022",
    points: [
      "Designed and developed web‑based applications using React, Google Maps, WebRTC.",
      "Implemented pixel‑perfect design, using Tailwind, to create a polished final product",
      "Worked with project managers to ensure project goals were met within given time frames.",
      "Contributed to the development of front‑end features and user interfaces.",
      "Contributed to the development of new software features and improvements to existing ones.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "Muhammad Faraz played a significant role, often, in developing and implementing overall web strategies, and dealt with the details along with the bigger picture. His coding was excellent, and his designs were unique and innovative, so clients were always happy.",
    name: "Zaid Siddiqui",
    designation: "Project Manager",
    company: "Accenture",
    image: zaid,
  },
  {
    testimonial:
      "I have worked with Muhammad Faraz in Accenture for more than a couple of years. Muhammad Faraz is a proactive, result-oriented, responsible, and technically sound employee and he is always ready to put all his energy and time to get the job done. He has an exceptional troubleshooting and analytical skill in WEB DEVELOPMENT, and React. Muhammad Faraz is a great asset to any company.",
    name: "Ashish Waman",
    designation: "IT Project Manager",
    company: "Accenture",
    image: ashish,
  },
  {
    testimonial:
      "Muhammad Faraz worked with me on web projects for one of the biggest Pharma firm for their marketing vertical, and he was routinely throughout that time the most creative and capable web developers we had. He had a fantastic eye for unique designs and was able to implement some of the best strategies our company had.",
    name: "Zaid Siddiqui",
    designation: "Project Manager",
    company: "Accenture",
    image: zaid,
  },
  {
    testimonial:
      "Awesome Work and Ontime Delivery. Good support and service received from Muhammad Faraz.",
    name: "Siddhesh Dongare",
    designation:
      "PMP® | PMI ACP® | SAFe® 5.1 Scrum Master (SSM) | Certified Lean Six Sigma Practitioner | Design Thinker | Agility Coach | Career Coach | Communication Coach | Productivity Coach | Knowledge Data Science (AI & ML)",
    company: "projectconsultant.org",
    image: siddesh,
  },
];

const projects = [
  {
    name: "Time Trail",
    description:
      "Application for guard tracking management system. Created using reactjs, nestjs",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "green-text-gradient",
      }
    ],
    image: sharktank,
    source_code_link: "http://sharktank.rocks/",
  },
  {
    name: "Airport Codes",
    description:
      "Web-based platform that allows users to search, filter, and view airport details via unique airport code convention, providing a convenient and quick solution for looking up airport names for flight booking.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: airportcodes,
    source_code_link: "https://airportcodes.in/",
  },
  {
    name: "Portfolio",
    description:
      "This portfolio consists of links that showcase past work experience, some of the projects, and other relevant links and information.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://reactjs-portfolio-v1.netlify.app/",
  },
  {
    name: "Schwabe Pharma",
    description:
      "A comprehensive pharma event platform that allows users to create account, view live events and past events. Offers curated recommendations for popular events and provision for QnA's and customer support.",
    tags: [
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "APIs",
        color: "green-text-gradient",
      },
      {
        name: ".Net",
        color: "pink-text-gradient",
      },
    ],
    image: schwabe,
    source_code_link: "https://web-brain-nar.com/",
  },
];

const contacts = [
  {
    title: "Twitter",
    icon: twitter,
    url: "https://twitter.com/dvlprMuhammad Faraz/",
  },
  {
    title: "Github",
    url: "https://github.com/dvlprMuhammad Faraz",
    icon: github,
  },
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/reactjsdev/",
    icon: linkedin,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/dvlprMuhammad Faraz/",
    icon: instagram,
  },
  {
    title: "Web Studio",
    url: "https://dvlpr.in/",
    icon: web,
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  contacts,
};
