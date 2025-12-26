import {
  mobile,
  backend,
  creator,
  web,
  linkedin,
  githubIcon,
  instagram,
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
  meta,
  starbucks,
  tesla,
  shopify,
  redteam,
  belity,
  redpontis,
  farmaciasperuanas,
  carrent,
  jobit,
  tripguide,
  threejs,
  java,
  springwebflux,
  aws,
  kubernetes,
  angular,
  linux,
  gcp,
  claude,
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
    title: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/luis-gutierrez-3nr19u3/",
  },
  {
    title: "GitHub",
    icon: githubIcon,
    link: "https://github.com/3nr19u3",
  },
  {
    title: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/dev_pull/",
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring Webflux",
    icon: springwebflux,
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
    name: "Angular",
    icon: angular,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "K8S",
    icon: kubernetes,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "GCP",
    icon: gcp,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Claude Code",
    icon: claude,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "Farmacias Peruanas",
    icon: farmaciasperuanas,
    iconBg: "#383E56",
    date: "Jan 2025 - Diciembre 2025",
    points: [
      "Developed integration components for external services and support components for the new B2B sales channel.",
      "Led the initiative for new B2B business-flow design.",
      "Optimized code and services into a fully reactive context to improve performance and response times.",
      "Contributed to architectural improvements for a new business-process solution.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Redpontis",
    icon: redpontis,
    iconBg: "#E6DEDD",
    date: "May 2024 - Mar 2025",
    points: [
      "Refactored integration for online banking queries.",
      "Contributed to the integrations with external services.",
      "Updated and improved high-demand services using reactive programming to avoid service degradation.",
      "Modernized and refactored code with a cleaner, more maintainable approach.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Belity",
    icon: belity,
    iconBg: "#383E56",
    date: "Jun 2023 - Mar 2024",
    points: [
      "Integrated card-based payment module for the mobile app using Stripe.",
      "Implemented secure card collection using the flutter_stripe package.",
      "Updated and improved various backend and mobile app functionalities using Frameworks conventions.",
      "Refactored code for better maintainability across backend and mobile layers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "RedTeam",
    icon: redteam,
    iconBg: "#E6DEDD",
    date: "Apr 2023 - Jul 2022",
    points: [
      "Integrated two project-management platforms for the construction sector.",
      "Improved management processes through proposal and development of two-way APIs.",
      "Updated and optimized features using asynchronous processes and batch jobs.",
      "Contributed to AWS cloud deployments and service development.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Party on! 🌙🥂",
    description:
      "Fuel the night. Discover and order alcoholic drink packs for every occasion, delivered straight to your door when the night is just getting started.",
    tags: [
      {
        name: "social",
        color: "blue-text-gradient",
      },
      {
        name: "nigth",
        color: "green-text-gradient",
      },
      {
        name: "party",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Pichanga ⚽",
    description:
      "Find nearby soccer games, join open matches, and connect with players in your city. No more searching—just show up and play.",
    tags: [
      {
        name: "football",
        color: "blue-text-gradient",
      },
      {
        name: "friends",
        color: "green-text-gradient",
      },
      {
        name: "meet",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  //TODO - Here we can add or customize the projects to show
  /** {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },*/
];

export { services, technologies, experiences, testimonials, projects };
