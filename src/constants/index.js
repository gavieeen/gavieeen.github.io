import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    kotlin,
    swift,
    python,
    mysql,
    java,
    vite,
    math,
    android,
    pytorch,
    instagram,
    leetcode,
    chuckecheese,
    elephant,
    quote1,
    illinois,
    godot,
    linkedin,
    frog,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: kotlin,
        name: "Kotlin",
        type: "Backend"
    },
    {
        imageUrl: swift,
        name: "Swift",
        type: "iOS App Development"
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend"
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database Management"
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend"
    },
    {
        imageUrl: vite,
        name: "ViteJS",
        type: "Frontend"
    },
    {
        imageUrl: math,
        name: "Mathematica",
        type: "Math"
    },
    {
        imageUrl: android,
        name: "Android Studio",
        type: "Backend/App Dev"
    },
    {
        imageUrl: pytorch,
        name: "PyTorch",
        type: "Neural Networks"
    },
    {
        imageUrl: godot,
        name: "Godot (GDScript)",
        type: "Game Engine"
    },
];

export const experiences = [
    {
        title: "Intro to Computer Science I Course Assistant",
        company_name: "University of Illinois Urbana-Champaign",
        icon: illinois,
        iconBg: "#11145c",
        date: "Jan 2024 - Present",
        points: [
            "Assisted students in understanding Kotlin programming, including syntax and topic comprehension.",
            "Responded to challenging questions regarding the course material, such as daily homework coding problems, debugging issues, and machine projects.",
        ],
    },
    {
        title: "Campaign Intern",
        company_name: "Illinois House Republican Organization",
        icon: elephant,
        iconBg: "#fbc3bc",
        date: "July 2022 - Nov 2022",
        points: [
            "Actively participated in various aspects of the electoral process, significantly contributing to the success of multiple national and state election campaigns.",
            "Formulated and executed strategic initiatives to effectively promote candidates, including innovative and well-received strategy ideas pitched to the campaign manager.",
            "Played a vital role in shaping campaign outreach efforts by leveraging analytical skills and understanding of voter engagement.",
            " Identified key demographics and developed compelling messaging strategies to resonate with voters.",
        ],
    },
    {
        title: "Cast Member",
        company_name: "Chuck E. Cheese",
        icon: chuckecheese,
        iconBg: "#ffffcc",
        date: "June 2022 - Jan 2023",
        points: [
            "Managed diverse responsibilities at Chuck E. Cheese, ensuring a positive customer experience and contributing to the facility's overall success.",
            "Provided exceptional customer service, operated the register, and portrayed Chuck E. Cheese character to create a magical atmosphere.",
            "Achieved 2nd place out of all cashiers at the Chuck E. Cheese in Customer Satisfaction Survey Contest.",
            "Participated in Chuck E. Cheese's mission of providing everyday fun, hosting group events, and ensuring a family-friendly environment.",
        ],
    },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Gavin Ebenezer',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/gavin-ebenezer-25837a261/',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/gavieeen',
    },
    {
        name: 'Instagram',
        iconUrl: instagram, // add instagram svg
        link: 'https://www.instagram.com/gavieeen/',
    },
    {
        name: 'LeetCode',
        iconUrl: leetcode, // add leetcode svg
        link: 'https://leetcode.com/gavieeen/',
    }
];

export const projects = [
    {
        iconUrl: quote1,
        theme: 'btn-back-yellow',
        name: 'Thiru Chatbot',
        description: 'Implemented a full-stack chatbot interface for Baltimore mayoral candidate Thiruvendran Tignarajah, employing Flask for web serving and AJAX for asynchronous communication.',
        link: 'https://virtual-avatar-production.up.railway.app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-pink',
        name: 'Infinite Anime List',
        description: `Anime exploration website using Next.js with Shikimori API integration. Seamlessly combining server actions and client-side rendering, the site offers an infinite scroll for uninterrupted anime discovery—a Next.js showcase of powerful user-centric features. (𝔸𝕟𝕚𝕞𝕖 𝕎𝕖𝕓𝕤𝕚𝕥𝕖 𝕚𝕟 𝔾𝕚𝕥𝕙𝕦𝕓 ℝ𝕖𝕒𝕕𝕄𝔼)`,
        link: 'https://github.com/gavieeen/infinite-anime-list',
        linkURL: 'https://infinite-anime-list.vercel.app/'
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Handwritten Digit Recognition with Machine Learning',
        description: 'Implemented a neural network for handwritten digit recognition using convolutional layers. Achieved accurate predictions, showcasing proficiency in image classification and model evaluation.',
        link: 'https://github.com/gavieeen/pytorch_test1',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'CineSearch',
        description: 'A React-powered movie search app, utilizing the OMDb API for real-time movie data. Implemented responsive design, pagination, and dynamic loading for a seamless user experience. CineSearch offers an efficient and enjoyable way to explore a vast collection of movies. (𝕄𝕠𝕧𝕚𝕖 𝕎𝕖𝕓𝕤𝕚𝕥𝕖 𝕚𝕟 𝔾𝕚𝕥𝕙𝕦𝕓 ℝ𝕖𝕒𝕕𝕄𝔼)',
        link: 'https://github.com/gavieeen/CineSearch/',
        linkURL: 'https://cinesearch-kappa.vercel.app/'
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Courseable Application',
        description: 'Implemented an Android application utilizing various data structures and algorithms to list CS, IS, and STAT courses at UIUC while also creating a user rating system enabling students to provide feedback.',
        //link: 'https://github.com/cs124-illinois-students/MP-Fall2023-kotlin-gavieeen',
        link: 'https://cs124.org',
    },
    {
        iconUrl: frog,
        theme: 'btn-back-orange',
        name: 'Platformer Game',
        description: 'Implemented an engaging 2D platformer game, "Frog Slayer," using the Godot game engine. The project showcases a dynamic user interface with interactive elements, featuring a player character capable of stomping on enemy frogs, collecting gold, and strategically avoiding obstacles.',
        //link: 'https://github.com/cs124-illinois-students/MP-Fall2023-kotlin-gavieeen',
        link: 'https://github.com/gavieeen/frog-slayer-platformer-game',
    },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    // },
    {
        iconUrl: quote1,
        theme: 'btn-back-black',
        name: 'PALM2 Chatbot Development',
        description: 'Leveraged PaLM 2 and integrated it with NodeJS, React, ViteJS, and the Google Bard API to create a chatbot website, illustrating proficiency in natural language processing and end-to-end development.',
        link: 'https://github.com/gavieeen/palm2-panda-prompter',
    },
    // {
    //     iconUrl: quote1,
    //     theme: 'btn-back-pink',
    //     name: 'Quote-Gen',
    //     description: 'Quote Generator that fetches quotes from a specified API and displays them in a stylish interface. The generator also has an interactive overlay effect for an enhanced user experience. (Website in Github ReadME)',
    //     link: 'https://github.com/gavieeen/quote-gen',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];