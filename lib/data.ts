import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {
  FaAngular,
  FaNetworkWired,
  FaReact,
  FaResearchgate,
} from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import laundryImg from "@/public/laundry.png";

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
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Selise Digital Platform, Dhaka",
    description:
      "Developed Flutter apps for business analysis on desktop and mobile learning platforms. Contributed to an Angular-14 ERP pharmaceutical project, specializing in the HR-Directory module with features like leave management, job applications, hiring board, and attendance portal.",
    icon: React.createElement(FaAngular),
    date: "June, 2023 - present",
  },
  {
    title: "Undergraduate Student Researcher",
    location: "Brac University, Dhaka",
    description:
      "Led a team to achieve 97.35% accuracy in pothole detection using a customized CNN, published in the IEEE Journal. Collaborated with faculty on pest detection, resulting in another IEEE Journal publication.",
    icon: React.createElement(FaNetworkWired),
    date: "Sept 2021 - Dec 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Interview Prep",
    description:
      "A Open Source repository with JavaScript-based codes, encompassing questions, DSA, LeetCode solutions, and diverse resources for easy accessibility.",
    tags: ["Javascript", "Java", "C++"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Laundry Booking System",
    description:
      "A online Laundry Booking system app made with Flutter that is built with phone authintication with Superbase & Nodejs.",
    tags: ["Flutter", "SuperBase", "NodeJS", "Express", "Prisma"],
    imageUrl: laundryImg,
  },
  {
    title: "NgFeed Social Media",
    description:
      "Post your images and story on the Social Media, visit your friend's profile and serach for your favourite ones",
    tags: ["Angular", "TypeScript", "Bootstrap", "MUI", "RxJS"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Jama Kapor",
    description:
      "A perfect Ecommerce website for getting clothes. A built-in Auth system to login as Admin to get access of the Admin Dashboard and Stripe payments...",
    tags: ["React", "MongoDB", "Express", "Nodejs"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Flutter",
  "Java",
  "Angular",
  "Next.js",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Git & Github",
  "Tailwind",
  "MongoDB",
  "Express",
  "Python",
  "Framer Motion",
  "Assembly",
  "Bash Scripting",
] as const;
