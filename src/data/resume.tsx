import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Dhruv Godhani",
  initials: "DG",
  url: "https://dhruv21.vercel.app",
  location: "Ahmedabad, Gujarat",
  description:
    "SDE - I at Genuin Codebase LLP. I love solving real-world problems and helping people to enhance their work with Tech. Specially working on Software Solutions.",
  summary:
    "Currently, I am working as an [SDE – I at Genuin Codebase LLP](), where my primary focus is on developing Android SDKs for brands. In the past, [I completed my B.E Computer Engineering degree from Gujarat Technological University.](/#education), [During my internship, I completed multiple projects where I worked on Flutter, Node.js, and React.js, developing optimized and scalable backends with CI/CD.], and [I participated in several hackathons and competitions.](/#hackathons).",
  avatarUrl:
    "https://lh3.googleusercontent.com/a/ACg8ocIhkeOD6s-ud0cw8voc9PPJMG40o1wqPJQ46ojOQnbnedq_B_rd=s400-c",
  skills: [
    "Android",
    "Jetpack Compose",
    "Mediapipe",
    "React.js",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Java",
    "C++",
    "MongoDB",
    "Postgres",
    "Redis",
    "AWS"
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "[EMAIL_ADDRESS]",
    tel: "+91 9106842092",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dhruv030721/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dhruv0307/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Genuin Codebase LLP",
      href: "https://begenuin.com",
      badges: [],
      location: "Remote",
      title: "SDE - I",
      logoUrl:
        "https://play-lh.googleusercontent.com/GQ2DXEMHNTrPxLO6QMEi0Aq7B7Y7GLeD08dI7o0V-i7tjqq8vMlILwBkqHih4zezu2c",
      start: "April 2025",
      end: "Present",
      description:
        "Developing an Android SDK for Genuin. Implemented a feature in the Genuin App to enable video posting from external apps such as YouTube and Instagram for content generation, leveraging FFMPEG for audio and video merging. Designed and built a complete pipeline for a Green Screen POC using the TFLite Selfie Segmentation model with OpenGL rendering for the Genuin Camera. Developed a camera recording pipeline using MediaCodec and MediaMuxer, capturing raw buﬀers from the live camera feed and writing them to files with audio synchronization. Implemented a multilingual feature for the Genuin SDK.",
    },
    {
      company: "Odoo IN Private Limited",
      badges: [],
      href: "https://www.odoo.com",
      location: "Remote",
      title: "SDE Intern",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04GwkgNa3n1-geUrchArguiE_RRjoXk00Qg&s",
      start: "January 2025",
      end: "April 2025",
      description:
        "Gained hands-on experience with Odoo Python modules, Odoo ORM, and the Odoo Web Framework (OWL Odoo Web Library). Wrote test cases using Hoot and Odoo’s Python testing module, and explored how Odoo Runbot streamlines deployment and the testing lifecycle. Developed custom modules, including enhancements in POS (Point of Sale) to add seller details for the POS Desk, based on client requirements. Completed functional training across core Odoo modules such as CRM, Accounting, Inventory, and Sales, gaining insights into how a centralized platform can automate and optimize business processes.",
    },
  ],
  education: [
    {
      school: "Gujarat Technological University",
      href: "",
      degree: "B.E - Computer Engineering",
      logoUrl:
        "https://eval.gtueas.in/GTU2_Dashboard/Content/design01/images/gtu_logo_new.png",
      start: "2021",
      end: "2025",
    },
    {
      school: "Tapovan Science Academy",
      href: "",
      degree: "HSC - PCM",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNH7gmki-TinnFyK9Lisx5W3zUslsD84SzLw79N6DzzvwcouqXzOlvhIiTFoI5iPlUb0w&usqp=CAU",
      start: "2019",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Bike Setu 🛵",
      href: "",
      dates: "",
      active: true,
      description:
        "I developed a web scraper that extracts student result data from the university site using Selenium automation. I also integrated a Gemini model using LangChain and created a FastAPI for text recognition",
      technologies: [
        "React.js",
        "Three.js",
        "Node.js",
        "PostgreSQL",
        "Python",
        "FastAPI",
        "Gemini",
      ],
      links: [],
      image:
        "https://res.cloudinary.com/dbmy60hnl/image/upload/v1757565959/ef80d72a-8db2-4eb1-9159-49a5ce976505.png",
      video: "",
    },
    /* {
      title: "Scholar Scraper 🎓",
      href: "",
      dates: "",
      active: true,
      description:
        "I developed a web scraper that extracts student result data from the university site using Selenium automation. I also integrated a Gemini model using LangChain and created a FastAPI for text recognition",
      technologies: ["Python", "FastAPI", "Gemini", "Selenium"],
      links: [],
      image:
        "https://res.cloudinary.com/dbmy60hnl/image/upload/v1757566193/953fd874-7121-4eb0-95c4-dd7fa834d2d6.png",
      video: "",
    }, */
    /*{
      title: "ERP for College Management 🏫",
      href: "",
      dates: "",
      active: true,
      description:
        "Developing an ERP system using the PERN stack with TypeScript. The system allows faculty to view their lecture schedules in a calendar view, mark student attendance, and download attendance reports in PDF format.  Creating a mobile app using Flutter, enabling students to view their attendance records",
      technologies: [
        "TypeScript",
        "React.js",
        "PostgreSQL",
        "Node.js",
        "Prisma",
      ],
      links: [],
      image:
        "https://res.cloudinary.com/dbmy60hnl/image/upload/v1757565935/eed4b03d-fd6c-4703-8fa9-d97ca087f868.png",
      video: "",
    }, */
    {
      title: "WiAttend - An Attendance App 🛜",
      href: "",
      dates: "",
      active: true,
      description:
        "Developed a cross-platform application for colleges and universities, implementing a Smart WiFi-Based Attendance System.  The application incorporates three authentication layers, including device-native Face Recognition for enhanced security also Wifi Authentication layer",
      technologies: ["Flutter", "Python", "Django", "MongoDB", "AWS"],
      links: [],
      image:
        "https://res.cloudinary.com/dbmy60hnl/image/upload/v1757565981/b196b57a-4f7d-4822-9636-42d53d68f4d5.png",
      video: "",
    },
    {
      title: "Recruitment Radar",
      href: "",
      dates: "",
      active: true,
      description:
        "I created a project to receive alerts when new companies post jobs on our Edunet Foundation job portal. I used Puppeteer to scrape recruitment data and set up cron jobs to send email alerts for new postings.",
      technologies: ["TypeScript", "Next.js", "Puppeteer"],
      links: [],
      image:
        "https://res.cloudinary.com/dbmy60hnl/image/upload/v1757565996/e78c5313-8cf8-45bf-b343-d4e7d30bdb12.png",
      video: "",
    },
    {
      title: "Slice Master 🍕",
      href: "",
      dates: "",
      active: true,
      description:
        "Slice Master is a modern web application for restaurant management that enhances the dining experience with secure authentication, an interactive menu, customizable orders, and seamless Razorpay payments. It features an admin dashboard for managing items, ingredients, and orders, along with real-time tracking, live updates, and low-stock alerts to ensure smooth operations.",
      technologies: [
        "JavaScript",
        "React.js",
        "Node.js",
        "Socket.io",
        "MongoDB",
        "Cloudinary",
      ],
      links: [],
      image:
        "https://res.cloudinary.com/dbmy60hnl/image/upload/v1757565987/54d6e707-38c4-4caf-a6df-7cadf1ac20ef.png",
      video: "",
    },
    /* {
      title: "Level up your fitness 💪",
      href: "",
      dates: "",
      active: true,
      description:
        "It is a fitness app which helps you to track your daily fitness goal and guide you.",
      technologies: ["JavaScript", "React.js", "Node.js", "MongoDB"],
      links: [],
      image:
        "https://res.cloudinary.com/dbmy60hnl/image/upload/v1757566005/783f36ad-8fa1-4496-85c0-81921b2b98b5.png",
      video: "",
    },
    {
      title: "QR code Attendance System",
      href: "",
      dates: "",
      active: true,
      description:
        "I created a college project for a Smart QR Code Attendance System, enabling students to mark their attendance simply by scanning their individual QR codes. To develop this project, I utilized OpenCV for real-time QR code detection from the camera feed, coupled with Python for decoding, and Node.js for the backend",
      technologies: ["Python", "OpenCV", "Node.js", "MongoDB"],
      links: [],
      image:
        "https://res.cloudinary.com/dbmy60hnl/image/upload/v1757566311/86507d2c-5aa2-4c6f-ab65-27bb7d11a250.png",
      video: "",
    }, */
  ],
  hackathons: [
    {
      title: "Odoo x Amalthea",
      dates: "December 2024",
      location: "Gandhinagar, Gujarat",
      description:
        "Developed a HealAI which helps user to find disease by giving symptoms prompt to AI which support multilingual, also patient can book appointment with doctor and attend via video call and also developed one prescription management system like after completing appointment doctor can send prescription to patient.",
      image:
        "https://odoocdn.com/web/image/81829305-b0236fa4/AML25__Black_Logo-01.png?access_token=992057e4-2931-4858-904a-17e4657d0f39",
      links: [],
    },
    {
      title: "MujHackx 2.0",
      dates: "August 2024",
      location: "Jaipur, Rajasthan",
      description:
        "Developed a Bike Setu application in which user can choose bike according to their requirements by giving prompt to AI also User can see bike in 3D view. And also developed one CRM for seller to manage their bikes.",
      image:
        "https://media.licdn.com/dms/image/v2/D4D0BAQHG5QY9Mlgw2w/company-logo_200_200/company-logo_200_200/0/1696916631020?e=2147483647&v=beta&t=UuN1Lek0Afj-FK5y-Dsyd62y2cBLho5mst2KDsWB9f8",
      links: [],
    },
    {
      title: "Odoo Combat 2024",
      dates: "July 2024",
      location: "Gandhinagar, Gujarat",
      description:
        "Developed a one library management system in which user can issue and return books.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04GwkgNa3n1-geUrchArguiE_RRjoXk00Qg&s",
      links: [],
    },
    {
      title: "Smart India Hackathon 2023",
      dates: "September 2023",
      location: "Anand, Gujarat",
      description:
        "Developed one E-Waster Facility Locator in which user can find nearest E-Waste Facility.",
      image:
        "https://i0.wp.com/opportunitycell.com/wp-content/uploads/2022/03/SIH2.png?fit=327%2C345&ssl=1",
      links: [],
    },
    {
      title: "SSIP Hackathon 2023",
      dates: "August 2023",
      location: "Anand, Gujarat",
      description:
        "I have developed my WiAttend project during this Hackathon under 6hr.",
      image: "https://ihubgujarat.in/assets/img/nssm/SSIP_LOGo.png",
      links: [],
    },
  ],
} as const;
