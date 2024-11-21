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
    anpr,
    cbp,
    data,
    face,
    faqchatbot,
    pose,
    ppe,
    threejs,
    certificate,
    argocd,
    aws,
    django,
    djangorest,
    dockerswarm,
    githubcopilot,
    gpt,
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
    ultralytics,
    toeic,
    n4
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
    // Languages
    {
        name: "Python",
        icon: python,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    // Backend
    {
        name: "Django REST",
        icon: djangorest,
    },
    {
        name: "NestJS",
        icon: nestjs,
    },
    {
        name: "GraphQL",
        icon: graphql,
    },
    {
        name: "Postgres",
        icon: postgres,
    },
    // AI
    {
        name: "PyTorch",
        icon: pytorch,
    },
    {
        name: "TensorFlow",
        icon: tensorflow,
    },
    {
        name: "OpenCV",
        icon: opencv,
    },
    {
        name: "Ultralytics",
        icon: ultralytics,
    },
    {
        name: "NumPy",
        icon: numpy,
    },
    {
        name: "Pandas",
        icon: pandas,
    },
    {
        name: "Rasa",
        icon: rasa,
    },
    {
        name: "TensorRT",
        icon: tensorrt,
    },
    {
        name: "LangChain",
        icon: langchain,
    },
    {
        name: "Ollama",
        icon: ollama,
    },

    // DevOps
    {
        name: "git",
        icon: git,
    },
    {
        name: "Linux",
        icon: linux,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "Kubernetes",
        icon: k8s,
    },
    {
        name: "Helm Chart",
        icon: helmchart,
    },
    {
        name: "Jenkins",
        icon: jenkins,
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
        name: "Jupyter",
        icon: jupyter,
    },
    {
        name: "Nginx",
        icon: nginx,
    },
    // AI Dev Tools
    {
        name: "GitHub Copilot",
        icon: githubcopilot,
    },
    {
        name: "GPT-3",
        icon: gpt,
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
            "Researching and developing AI-based solutions for the automotive and manufacturing industry, including techniques such as object detection, image classification, and natural language processing.",
            "Developing and maintaining web applications, desktop applications, ... using Python, Django, and other related technologies.",
            "Developing chatbots for customer service and sales support. Using Rasa, LangChain, Ollama, and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing CICD pipelines and ensuring high availability and scalability of applications. Using Docker, Kubernetes, Jenkins, ArgoCD and other related technologies.",
            "Compiling instructional documents and providing training to new team members.",
            "Supervised and mentored a team of 3 junior developers.",
        ],
        projects: ["Auto-Parking System", "Human Gestures Recognition Program", "Employee Identification System", "Chatbot Platform System"]
    },
    {
        title: "Software Engineer",
        company_name: "Techvify Software Danang",
        icon: techvify,
        iconBg: "#E6DEDD",
        date: "June 2024 - Present",
        points: [
            "Developing ai-based programs for company's clients, including object detection, image classification, and natural language processing.",
            "Developing APIs for web applications, mobile applications, ... using NodeJS, NestJS, GraphQL, MongoDB and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
        projects: ["Personal Protective Equipment (PPE) Recognition Program", "Reporters Tracking Program", "CapCorp’s FAQ Chatbot Program"]
    },
];

const certificates = [
    {
        name: "TOEIC Certificate",
        description: "Overall score: 975/990",
        image: toeic,
    },
    {
        name: "JLPT Certificate",
        description: "Level: N4",
        image: n4,
    },
];

const projects = [
    {
        name: "Auto-Parking System",
        description:
            "The system automatically recognizes and classifies employee vehicle license plates, automatically opens the security fence and displays the results on the display screen while simultaneously playing sounds to notify entry and exit events.",
        reposibility: [
            "Design system flow and architecture",
            "Implement object detection, object classification via RTSP cameras",
            "Collecting data and train alpha-numeric characters recognition model",
            "Optimize DL model performance",
            "Integrate with backend APIs",
            "Packaging and deploy"
        ],
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
        image: anpr,
        source_code_link: "https://github.com/",
    },
    {
        name: "Human Gestures Recognition Program",
        description:
            "The program detects humans and recognizes interactive actions to signal the giant robot to interact back. The robot has the role of promoting the brand and introducing advertisements on the large screen in the eye area.",
        reposibility: [
            "Design system flow and architecture",
            "Implement human detection via RTSP cameras in real-time",
            "Collecting data and train human gesture recognition model",
            "Optimize DL model performance",
            "Integrate with main controlling program via MQTT",
            "Integrate with backend APIs",
            "Packaging and deploy"
        ],
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
        image: pose,
        source_code_link: "https://github.com/",
    },
    {
        name: "Employee Identification System",
        description:
            "The system automatically recognizes employees' faces with high accuracy, records office entry and exit events, and saves history for timekeeping purposes. The system is capable of simultaneously recognizing multiple faces at near real-time speed and does not require employees to look directly at the camera.",
        reposibility: [
            "Design system flow and architecture",
            "Implement face detection via RTSP cameras in real-time",
            "Propose face vector encoding model",
            "Optimize DL model performance",
            "Integrate with backend APIs",
            "Packaging and deploy"
        ],
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
        image: face,
        source_code_link: "https://github.com/",
    },
    {
        name: "Chatbot Platform System",
        description:
            "The system allows marketing departments as well as the company's retail stores to access and create their own chatbots to support customer care and sales. It is deployed with high availability and can be expanded according to usage needs.",
        reposibility: [
            "Design system flow and architecture",
            "Develop backend APIs",
            "Develop a demo chatbot",
            "CICD implement",
            "Logging and monitoring",
            "Packaging and deploy"
        ],
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
        image: cbp,
        source_code_link: "https://github.com/",
    },
    {
        name: "Personal Protective Equipment (PPE) Recognition Program",
        description:
            "The program is deployed on a mobile application, capable of identifying and detecting protective equipment of construction workers and issuing warnings when it detects a lack of necessary protective equipment.",
        reposibility: [
            "Prepare data and train PPE detection model",
            "Implement object detection via mobile device camera in real-time",
            "Optimize DL model performance",
            "Packaging and deploy"
        ],
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
        image: ppe,
        source_code_link: "https://github.com/",
    },
    {
        name: "Reporters Tracking Program",
        description:
            "The program is capable of reading report files (online and offline) of teams in the company, performing analysis, statistics and displaying data in the form of tables and charts. Focuses mainly on data processing and analysis.",
        reposibility: [
            "Implement data processing and data analysis follow requirement metrics",
            "Develop backend APIs",
            "Develop frontend UI",
            "Packaging and deploy"
        ],
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
        image: data,
        source_code_link: "https://github.com/",
    },
    {
        name: "CapCorp’s FAQ Chatbot Program",
        description:
            "The program is capable of answering customers' frequently asked questions during the application usage process based on pre-set scenarios. In addition, it can also reference internal data and based on that, provide relevant information without having to retrain the model.",
        reposibility: [
            "Design FAQ chatbot flow",
            "Implement RAG pipeline for input relevant documents",
            "Develop related backend APIs",
            "Develop others application APIs",
            "Deploy and implement CICD",
        ],
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
        image: faqchatbot,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, certificates, projects };