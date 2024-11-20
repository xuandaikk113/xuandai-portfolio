import { desc } from "framer-motion/client";
import {
    mobile,
    backend,
    creator,
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
    meta,
    starbucks,
    tesla,
    shopify,
    thaco,
    techvify,
    carrent,
    jobit,
    tripguide,
    threejs,
    certificate,
    argocd,
    aws,
    django,
    djangorest,
    dockerswarm,
    graphql,
    helmchart,
    jenkins,
    jupyter,
    k8s,
    langchain,
    linux,
    nestjs,
    nginx,
    numpy,
    ollama,
    opencv,
    pandas,
    postgres,
    python,
    pytorch,
    rasa,
    tensorflow,
    tensorrt,
    ultralytics
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "education",
        title: "Education",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "certificates",
        title: "Certificates",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "AI Engineer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Devops Engineer",
        icon: creator,
    },
    {
        title: "Projects Manager",
        icon: web,
    },
];

const technologies = [
    // {
    //     name: "HTML 5",
    //     icon: html,
    // },
    // {
    //     name: "CSS 3",
    //     icon: css,
    // },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    // {
    //     name: "React JS",
    //     icon: reactjs,
    // },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    // {
    //     name: "Tailwind CSS",
    //     icon: tailwind,
    // },
    {
        name: "Node JS",
        icon: nodejs,
    },
    // {
    //     name: "MongoDB",
    //     icon: mongodb,
    // },
    // {
    //     name: "Three JS",
    //     icon: threejs,
    // },
    {
        name: "git",
        icon: git,
    },
    // {
    //     name: "figma",
    //     icon: figma,
    // },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "ArgoCD",
        icon: argocd,
    },
    {
        name: "AWS",
        icon: aws,
    },
    {
        name: "Django",
        icon: django,
    },
    {
        name: "Django REST",
        icon: djangorest,
    },
    // {
    //     name: "Docker Swarm",
    //     icon: dockerswarm,
    // },
    {
        name: "GraphQL",
        icon: graphql,
    },
    // {
    //     name: "Helm Chart",
    //     icon: helmchart,
    // },
    {
        name: "Jenkins",
        icon: jenkins,
    },
    {
        name: "Jupyter",
        icon: jupyter,
    },
    {
        name: "Kubernetes",
        icon: k8s,
    },
    {
        name: "LangChain",
        icon: langchain,
    },
    {
        name: "Linux",
        icon: linux,
    },
    {
        name: "NestJS",
        icon: nestjs,
    },
    // {
    //     name: "Nginx",
    //     icon: nginx,
    // },
    // {
    //     name: "NumPy",
    //     icon: numpy,
    // },
    // {
    //     name: "Ollama",
    //     icon: ollama,
    // },
    {
        name: "OpenCV",
        icon: opencv,
    },
    {
        name: "Pandas",
        icon: pandas,
    },
    // {
    //     name: "Postgres",
    //     icon: postgres,
    // },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "PyTorch",
        icon: pytorch,
    },
    {
        name: "Rasa",
        icon: rasa,
    },
    {
        name: "TensorFlow",
        icon: tensorflow,
    },
    {
        name: "TensorRT",
        icon: tensorrt,
    },
    {
        name: "Ultralytics",
        icon: ultralytics,
    },
];

const experiences = [
    {
        title: "AI Engineer (Team Leader)",
        company_name: "R&D Center THACO INDUSTRIES",
        icon: thaco,
        iconBg: "#383E56",
        date: "June 2022 - June 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Techvify Software Danang",
        icon: techvify,
        iconBg: "#E6DEDD",
        date: "June 2024 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const certificates = [
    {
        name: "TOEIC Certificate",
        description: "Overall score: 975/990",
        image: certificate,
    },
    {
        name: "JLPT Certificate",
        description: "Level: N4",
        image: certificate,
    },
];

const projects = [
    {
        name: "Auto-Parking System",
        description:
            "The system automatically recognizes and classifies employee vehicle license plates, automatically opens the security fence and displays the results on the display screen while simultaneously playing sounds to notify entry and exit events. -based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        reposibility: [],

        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "opencv",
                color: "green-text-gradient",
            },
            {
                name: "ultralytics",
                color: "pink-text-gradient",
            },
            {
                name: "linux",
                color: "orange-text-gradient",
            },
            {
                name: "docker",
                color: "white-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Human Gestures Recognition Program",
        description:
            "The program detects humans and recognizes interactive actions to signal the giant robot to interact back. The robot has the role of promoting the brand and introducing advertisements on the large screen in the eye area.  application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        reposibility: [],
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "opencv",
                color: "green-text-gradient",
            },
            {
                name: "ultralytics",
                color: "pink-text-gradient",
            },
            {
                name: "linux",
                color: "orange-text-gradient",
            },
            {
                name: "docker",
                color: "white-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Employee Identification System",
        description:
            "The system automatically recognizes employees' faces with high accuracy, records office entry and exit events, and saves history for timekeeping purposes. The system is capable of simultaneously recognizing multiple faces at near real-time speed and does not require employees to look directly at the camera.",
        reposibility: [],
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "opencv",
                color: "green-text-gradient",
            },
            {
                name: "ultralytics",
                color: "orange-text-gradient",
            },
            {
                name: "arcface",
                color: "pink-text-gradient",
            },
            {
                name: "faiss",
                color: "blue-text-gradient",
            },
            {
                name: "linux",
                color: "orange-text-gradient",
            },
            {
                name: "docker",
                color: "white-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
    {
        name: "Chatbot Platform System",
        description:
            "The system allows marketing departments as well as the company's retail stores to access and create their own chatbots to support customer care and sales. It is deployed with high availability and can be expanded according to usage needs.",
        reposibility: [],
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "rasa",
                color: "green-text-gradient",
            },
            {
                name: "ollama",
                color: "orange-text-gradient",
            },
            {
                name: "langchain",
                color: "pink-text-gradient",
            },
            {
                name: "kubernetes",
                color: "blue-text-gradient",
            },
            {
                name: "jenkins",
                color: "orange-text-gradient",
            },
            {
                name: "argocd",
                color: "white-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
    {
        name: "Personal Protective Equipment (PPE) Recognition Program",
        description:
            "The program is deployed on a mobile application, capable of identifying and detecting protective equipment of construction workers and issuing warnings when it detects a lack of necessary protective equipment.",
        reposibility: [],
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "flutter",
                color: "green-text-gradient",
            },
            {
                name: "tensorflow-lite",
                color: "orange-text-gradient",
            },
            {
                name: "ultralytics",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
    {
        name: "Reporters Tracking Program",
        description:
            "The program is capable of reading report files (online and offline) of teams in the company, performing analysis, statistics and displaying data in the form of tables and charts. Focuses mainly on data processing and analysis.",
        reposibility: [],
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "pandas",
                color: "green-text-gradient",
            },
            {
                name: "streamlit",
                color: "orange-text-gradient",
            },
            {
                name: "docker",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
    {
        name: "CapCorp’s FAQ Chatbot Program",
        description:
            "The program is capable of answering customers' frequently asked questions during the application usage process based on pre-set scenarios. In addition, it can also reference internal data and based on that, provide relevant information without having to retrain the model.",
        reposibility: [],
        tags: [
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "nestjs",
                color: "green-text-gradient",
            },
            {
                name: "graphql",
                color: "orange-text-gradient",
            },
            {
                name: "langchain",
                color: "blue-text-gradient",
            },
            {
                name: "rag",
                color: "green-text-gradient",
            },
            {
                name: "aws",
                color: "orange-text-gradient",
            },
            {
                name: "docker",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, certificates, projects };