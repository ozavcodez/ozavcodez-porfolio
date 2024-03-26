import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
// import { LuGraduationCap } from "react-icons/lu";
import getlinkedImg from "@/public/get-linked.jpg";
import htmlImg from "@/public/html.png";
import cssImg from "@/public/css.png";
import jsImg from "@/public/javascript.png";
import reactImg from "@/public/reactjs.png";
import vueImg from "@/public/vue.png";
import tsImg from "@/public/typescript.jpg";
import tailwindImg from "@/public/tailwind.png";
import sassImg from "@/public/sass.png";
import nodeImg from "@/public/node.png";
import mongoImg from "@/public/mongo.png";
import expressImg from "@/public/express.png";




export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
];

export const experiencesData = [
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description: "I graduated after six months of studying. I immediately found a job as a front-end developer",
        // icon: React.createElement(LuGraduationCap),
        date:"2019",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description: "I worked as a front-end developer for 2 years in 1 job and 1 year in another",
        // icon: React.createElement(CgWorkAlt),
        date:"2019",
    },
    
];

// export const projectsData =[
//     {
//         title:"CorpComment",
//         description: "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
//         tags:["React", "Next.js", "MondoDB", "Tailwind", "Prisma"],
//         imageUrl: gponwebImg
//     },
//     {
//         title: "rmtDev",
//         description:"Job board for remote developers jobs. I was the front-end developer. It has features like filtering, sorting and pagination",
//         tags: ["React", "TypeScript", "Next.Js", "Tailwind", "redux"],
//         imageUrl: gponeduImg
//     },
//     {
//         title: "Word Analytics",
//         description: "A public web app for quick analytics on text. It shows word count, character count and social media post limlits.",
//         tags:["React", "Next.js", "SQL", "Tailwind", "Framer"],
//         imageUrl: getlinkedImg
//     }
// ];

export const skillsData = [
    {
        src: htmlImg
    },
    {
        src: cssImg
    },
    {
        src: tailwindImg
    },
    {
        src: sassImg
    },
    {
        src: jsImg
    },
    {
        src: tsImg
    },
    {
        src: reactImg
    },
    {
        src: vueImg
    },
    {
        src: nodeImg
    },
    {
        src: mongoImg
    },
    {
        src: expressImg
    },
    
]