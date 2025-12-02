import React from "react";
import getlinkedImg from "@/public/getlinked.jpg";
import gponeduImg from "@/public/gponedu.png";
import gponwebImg from "@/public/gponweb.jpg";
import portfolio from "@/public/portfolio.jpg"
import coahlite from "@/public/coahlite.png"
import alphagratnite from "@/public/alpha-granite.png"


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
        name: "Experience",
        hash: "#experience",
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
        title: "Alpha Granite Management System",
        description: "A comprehensive job management system for a granite fabrication company with role-based workflows for sales, production, and shop floor operations. Built with React, TypeScript, and Redux Toolkit Query.",
        tags: ["React", "TypeScript", "Redux Toolkit", "Real-time Sync"],
        imageUrl: alphagratnite,
        projectUrl: "https://agdemo.easybusiness.ng/",
        githubUrl: "#",
        category: "Frontend"
    },
    {
        title: "Organization Website",
        description:"A responsive website for an organization showcasing their services, blog posts, and newsletter subscription functionality. Built with performance and user experience in mind.",
        tags: ["Laravel", "HTML", "Tailwind CSS", "MySQL"],
        imageUrl: gponwebImg,
        projectUrl: "https://goalprime.org/",
        githubUrl: "https://github.com/ozavcodez/organization-website",
        category: "Frontend"
    },
    {
        title: "Logistics Admin System",
        description: "A comprehensive admin dashboard for logistics management with user management, shipment tracking, and analytics features. Built with React for efficient fleet and delivery management.",
        tags: ["React"],
        imageUrl: coahlite,
        projectUrl: "https://admin.v2.d4ulogistics.com/users",
        githubUrl: "#",
        category: "Frontend"
    },
    
    {
        title: "Hackathon Registration Platform",
        description: "A web application for registering participants for hackathons with user authentication and event management features. ",
        tags:["React", "Next.js", "Tailwind CSS", "Framer Motion", "Node.js", "MongoDB"],
        imageUrl: getlinkedImg,
        projectUrl: "https://get-linked-one.vercel.app/",
        githubUrl: "https://github.com/ozavcodez/get-linked",
        category: "Frontend"
    },
    
    {
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website showcasing my skills and projects. Built with Next.js and Tailwind CSS, featuring smooth animations and dark mode support.",
        tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
        imageUrl: portfolio,
        projectUrl: "https://ozavcodez-porfolio.vercel.app/",
        githubUrl: "https://github.com/ozavcodez/portfolio",
        category: "Frontend"
    },
    {
        title: "Task Management Application",
        description: "A productivity application for managing tasks and projects with drag-and-drop functionality, due dates, and priority levels. Features real-time updates and data persistence.",
        tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
        imageUrl: gponeduImg,
        projectUrl: "#",
        githubUrl: "https://github.com/ozavcodez/task-manager",
        category: "Fullstack"
    },
    {
        title: "E-commerce Checkout System",
        description: "Frontend implementation of an e-commerce checkout system with payment processing, cart management, and order confirmation features.",
        tags: ["TypeScript", "React", "Next.js", "Tailwind CSS", "REST API"],
        imageUrl: gponwebImg,
        projectUrl: "#",
        githubUrl: "https://github.com/ozavcodez/E-commerce-checkout-system-frontend",
        category: "Frontend"
    },
    {
        title: "NFT Lending Platform",
        description: "A blockchain-based platform that allows users to lend and borrow NFTs with smart contract functionality for collateral management and interest calculations.",
        tags: ["Solidity", "Web3.js", "React", "Ethereum", "Smart Contracts"],
        imageUrl: gponeduImg,
        projectUrl: "#",
        githubUrl: "https://github.com/ozavcodez/NFTLending-platform",
        category: "Blockchain"
    },
   
   
];

// Limit categories to two main ones plus "All"
export const projectCategories = ["All", "Frontend", "Fullstack"];

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
    "Framer Motion",
    "Solidity",
    "Web3.js",
    "Ethereum",
    "Blockchain"
]