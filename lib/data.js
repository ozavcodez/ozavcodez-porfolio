import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
// import { LuGraduationCap } from "react-icons/lu";
import getlinkedImg from "@/public/getlinked.jpg";
import gponeduImg from "@/public/gponedu.png";
import gponwebImg from "@/public/gponweb.jpg";


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
        name: "Contact",
        hash: "#contact",
    },
];

export const projectsData =[
    {
        title: "Hackathon Project",
        description: "A publicapp for registering users for a hackathon.",
        tags:["React", "Next.js", "Tailwind", "Framer"],
        imageUrl: getlinkedImg
    },
    {
        title:"E-Learning Portal",
        description: "I worked as a frontend developer on this startup project . Users have several options of courses they can explore and gets certified with aunique id after learning.",
        tags:["Larvel", "Html", "Tailwind"],
        imageUrl: gponeduImg
    },
    {
        title: "Organisation Website",
        description:"Wesite for Organisation. I was the front-end developer. It shows post from the Admin page and informs a user on the organization",
        tags: ["Larvel", "Html", "Tailwind"],
        imageUrl: gponwebImg
    },
    
];

export const skillsData =[
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "MongoDB",
    "Redux",
    "Express",
    "Framer Motion"
]