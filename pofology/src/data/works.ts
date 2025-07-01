import { Work } from '@/types';

export const works: Work[] = [
  {
    id: 1,
    title: 'AI Hackathon Applicant Ranker',
    category: 'Backend Development',
    thumbnailUrl: '/images/works/bhacks2.jpg',
    description: `Developed a backend application that ranks applicants for a hackathon based on their skills and experience. Built scoring logic that assigns weighted points for demographic diversity, academic excellence, and underrepresented backgrounds. Integrated Google Gemini API for intelligent essay evaluation with sentiment analysis. Designed database schema and queries to efficiently retrieve and process applicant information from Supabase. Backtested on previous hackathon application data to ensure accuracy and optimal rankings. 
    `,
    publishedAt: 'May 2025',
    images: [],
    previewUrl: 'https://github.com/Bostonhacks/rankathon',
    featureList: [
      'Multi-criteria Scoring Algorithm: Evaluates applicants across 8+ weighted factors including school prestige, graduation year, major diversity, and first-time hacker status',
      'AI-Powered Essay Analysis: Leverages Google Gemini AI to assess applicant motivation and interest through natural language processing, scoring responses on passion and project-specific interest',
      'Database Integration: Connects to PostgreSQL database to process applicant data and return ranked results',
      'Scalable Architecture: Modular design allows for easy adjustment of scoring weights and criteria based on organizational needs',
    ],
    attributes: [
      // {
      //   name: 'Client',
      //   value: 'Pofology',
      // },
      {
        name: 'Start Date',
        value: 'April 2025',
      },
      {
        name: 'End Date',
        value: 'May 2025',
      },
      {
        name: 'Category',
        value: 'Backend Development',
      },
      {
        name: 'Technologies Used',
        value: 'Python, Supabase, PostgreSQL, Google Gemini API',
      }

      // {
      //   name: 'Skills',
      //   value: 'Typescript, Next.js & Tailwind CSS',
      // },
      // {
      //   name: 'Current Version',
      //   value: '3.0.0',
      // },
      // {
      //   name: 'Lisence',
      //   value: 'MIT',
      // },
    ],
  },

  {
    id: 2,
    title: 'Fitty Friends',
    category: 'Backend Development',
    thumbnailUrl: '/images/works/fittyfriends1.png',
    description: `Fitty Friends is an innovative iOS fitness app developed at HackMIT that gamifies personal fitness through AI-powered virtual pets. 
    The app allows users to create and interact with personalized virtual pets that respond to their fitness activities, creating an engaging and motivating fitness experience. 
    Users can feed their pets by tapping interactive elements, collect different pet types, customize their appearance, and track their fitness progress through integrated wearable device data. 
    The app features a comprehensive backend system that processes fitness data from multiple wearable providers (Garmin, Oura, Google, Fitbit) via TerraAPI, generates personalized AI-driven notifications, and creates unique pet personalities using DALL-E 2 image generation. 
    The modular architecture includes a React Native frontend with navigation between home, collection, shop, challenges, and profile screens, while the FastAPI backend handles data processing, pet management, and AI integration.`,
    publishedAt: 'September 2024',
    images: [],
    previewUrl: 'https://github.com/andeliuliu/FittyFriends',
    featureList: [
      'Multi-Wearable Integration: Connects to 250+ fitness data points daily from Garmin, Oura, Google, and Fitbit devices through TerraAPI integration, providing comprehensive health tracking',
      'AI-Powered Pet Generation: Leverages OpenAI DALL-E 2 to create unique, personalized virtual pets with different emotional states and personalities based on user preferences',
      'Interactive Pet Feeding System: Implements animated cookie-dropping mechanics where users can feed their virtual pets through tap interactions, creating engaging gamification elements',
      'Comprehensive Pet Management: Full CRUD operations for virtual pets including creation, customization, collection tracking, and mood-based interactions through FastAPI backend',
      'Real-time Fitness Data Processing: Backend system that filters and processes daily fitness metrics including steps, calories burned, heart rate, and activity duration',
      'Modular Navigation Architecture: Tab-based navigation system with dedicated screens for home, collection, shop, challenges, and profile management',
      'Background Removal Integration: Automated image processing using Remove.bg API to create clean pet images for seamless app integration',
    ],
    attributes: [
      {
        name: 'Start Date',
        value: 'September 2024',
      },
      {
        name: 'End Date',
        value: 'September 2024',
      },
      {
        name: 'Category',
        value: 'Backend Development',
      },
      {
        name: 'Technologies Used',
        value: 'React Native, FastAPI, TerraAPI, Swift, OpenAI DALL-E 2, Python, PostgreSQL, Clerk Authentication',
      },
      // {
      //   name: 'Current Version',
      //   value: '3.0.0',
      // },
      // {
      //   name: 'Lisence',
      //   value: 'MIT',
      // },
    ],
  },
  {
    id: 3,
    title: 'Presiguess',
    category: 'Fullstack Development',
    thumbnailUrl: '/images/works/presiguess1.png',
    description: `Inspired by my love of daily geography games such as Geogrid, PresiGuess is an interactive web-based presidential guessing game that challenges players to identify U.S. presidents based on intersecting historical criteria. 
    The game presents a 2x2 grid where each cell represents the intersection of two different presidential characteristics or historical facts. 
    Players must guess which president(s) satisfy both the row and column criteria for each cell. 
    The game features over 130 different historical categories and characteristics, making each round unique and educational.
    The system employs randomized sampling algorithms to ensure each game round has valid presidential matches across all grid intersections.
    I used FastAPI for defining the API endpoints and MongoDB for storing the presidential data, while the frontend is built with Vue.js.`,
    publishedAt: 'October 2024',
    images: [],
    previewUrl: 'https://github.com/kubarozwadowski/Presiguess',
    featureList: [
      'Dynamic Grid System: 2x2 interactive grid where each cell represents the intersection of two presidential characteristics',
      '130+ Historical Categories: Extensive database of presidential facts including military service, education, family life, political achievements, and personal characteristics',
      'Randomized Gameplay: Each round randomly selects 4 different criteria (2 for rows, 2 for columns) ensuring unique gameplay experiences',
      'Give Up Option: Reveals all answers when players need help',
      'Structured Data Schemas: Pydantic schemas define presidential data models with type annotations and validation rules',
      'CRUD Operations: Full Create, Read, Update, Delete functionality for presidential data management',
      'Autocomplete Suggestions: Smart search functionality with president name suggestions',
    ],
    attributes: [
      // {
      //   name: 'Client',
      //   value: 'Pofology',
      // },
      {
        name: 'Start Date',
        value: 'June 2024',
      },
      {
        name: 'End Date',
        value: 'October 2024',
      },
      {
        name: 'Category',
        value: 'Fullstack Development',
      },
      {
        name: 'Technologies Used',
        value: 'FastAPI, Vue.js, MongoDB',
      },
      // {
      //   name: 'Current Version',
      //   value: '3.0.0',
      // },
      // {
      //   name: 'Lisence',
      //   value: 'MIT',
      // },
    ],
  },

  // {
  //   id: 4,
  //   title: 'Garments Management System',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/garments-management-system.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },

  // {
  //   id: 5,
  //   title: 'POS System & Inventory Management',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/point-of-sale.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   title: 'Multi Vendor Ecommerce System',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/ecommerce.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 7,
  //   title: 'Digital Ecommerce Website Design',
  //   category: 'UI/UX Design',
  //   thumbnailUrl: '/images/works/ecommerce-website-design.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 8,
  //   title: 'Digital Marketing App & Website',
  //   category: 'Mobile App',
  //   thumbnailUrl: '/images/works/digital-marketing-app.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 9,
  //   title: 'Food Delivery System & Ecommerce',
  //   category: 'Mobile App',
  //   thumbnailUrl: '/images/works/food-delivery-app.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 10,
  //   title: 'Project Management System',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/project-management-system.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 11,
  //   title: 'Learning Management System',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/learning-management-system.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 12,
  //   title: 'ERP System & Inventory Management',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/erp-system.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
];
