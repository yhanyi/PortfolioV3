import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import portfolio1 from "@/public/portfolio-1.png";
import portfolio2 from "@/public/portfolio-2.png";
import portfolio3 from "@/public/portfolio-3.png";
import portfolio4 from "@/public/portfolio-4.png";
import akparticles from "@/public/arknights-particles.png";
import cnndigits from "@/public/cnn-digits.png";

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
    title: "GCE A-Level",
    location: "Dunman High School",
    date: "January 2015 - December 2020",
    icon: React.createElement(LuGraduationCap),
    description: [
      "Grade: 88.75/90 Rank Points",
      "Studied H3 Physics, H2 Physics, H2 Chemistry, H2 Mathematics, H2 Economics",
    ],
  },
  {
    title: "Year 1 Semester 1",
    location: "National University of Singapore",
    icon: React.createElement(CgWorkAlt),
    date: "August 2023 - December 2023",
    description: [
      "Semester GPA: 4.625 | Cumulative GPA: 4.6",
      "Relevant Modules:",
      "CS1010X - Programming Methodology I [A-]",
      "CS1231S - Discrete Structures [A-]",
      "CS2030S - Programming Methodology II [A-]",
      "MA1521 - Calculus For Computing [A]",
      "MA1522 - Linear Algebra For Computing [B+]",
    ],
  },
  {
    title: "Year 1 Semester 2",
    location: "National University of Singapore",
    icon: React.createElement(FaReact),
    date: "January 2024 - May 2024",
    description: [
      "Semester GPA: - | Cumulative GPA: -",
      "Relevant Modules:",
      "CS2040S - Data Structures and Algorithms [Taking]",
      "CS2100 - Computer Organisation [Taking]",
      "ST2334 - Probability and Statistics [Taking]",
    ],
  },
] as const;

export const projectsData = [
  {
    title: "Personal Portfolio",
    description: "Migrated my Javascript portfolio to Typescript.",
    tags: ["Next.js", "Tailwind", "Typescript", "ThreeJS"],
    imageUrl: portfolio4,
  },
  {
    title: "Arknights Particles",
    description:
      "Refactored old ThreeJS boilerplate code to reverse-engineer a particle effect from a game website.",
    tags: ["ThreeJS", "GLSL", "Typescript", "NextJS", "React"],
    imageUrl: akparticles,
  },
  {
    title: "Digits Predictor",
    description:
      "A simple webapp that takes a user input drawn on a canvas object, converts it to features to be predicted by a pre-trained Tensorflow model, and Chart.js plots the confidence of the model.",
    tags: ["Tensorflow", "Chart.js", "HTML", "CSS"],
    imageUrl: cnndigits,
  },
  {
    title: "Typescript Portfolio",
    description:
      "A single-page website with NextJS, built while learning Typescript and learning about context providers.",
    tags: ["Typescript", "Next.js", "React", "Tailwind"],
    imageUrl: portfolio3,
  },
  {
    title: "Javascript Portfolio",
    description:
      "First multi-page website using the NextJS framework in React, using Javascript and learning more about basic React hooks.",
    tags: ["Javascript", "Next.js", "React", "Tailwind"],
    imageUrl: portfolio2,
  },
  {
    title: "HTML & CSS Portfolio",
    description:
      "My first website, built while learning basic HTML, CSS and Javascript.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: portfolio1,
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "C",
  "C++",
  "R",
  "Pytorch",
  "Tensorflow",
  "ThreeJS",
  "LATEX",
] as const;
