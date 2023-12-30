"use client";

import Image from 'next/image'
import React from 'react'
import pfp from "@/public/devpic.png"
import { motion } from "framer-motion"
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import Link from 'next/link';
import { HiDownload } from "react-icons/hi"
import { FaGithub } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {

    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                    initial={{opacity:0, scale:0}}
                    animate={{opacity:1, scale:1}}
                    transition={{
                        type:"tween",
                        duration:0.2
                    }}>
                        <Image src={pfp} 
                        alt="Portrait" 
                        width="192" 
                        height="192" 
                        quality="95" 
                        priority={true} 
                        className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl" />
                        <motion.span className="absolute bottom-0 right-0 text-2xl"
                        initial={{opacity:0, scale:0}}
                        animate={{opacity:1, scale:1}}
                        transition={{
                            type:"spring",
                            stiffness:125,
                            delay:0.1,
                            duration:0.7
                        }}>
                            👋
                        </motion.span>
                    </motion.div>
                </div>
            </div>
            <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]"
            initial={{opacity:0, y:100}}
            animate={{opacity:1, y:0}}>
                <p className="my-5">
                    Hello, I&apos;m <span className="font-bold">Yeoh Han Yi</span>.
                </p>
                <p className="my-5">
                I&apos;m currently a freshman studying <span className="font-bold">Computer Science</span> with a second major
                in <span className="font-bold">Statistics</span> at the <span className="font-bold">National University of Singapore</span>.
                </p>
                <p className="my-5">
                    My interests now are in <span className="font-bold">Machine Learning</span>, <span className="font-bold">Full-Stack Development</span> and <span className="font-bold">Software Engineering</span>.
                </p>
            </motion.h1>

            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4"
            initial={{opacity:0, y:100}}
            animate={{opacity:1, y:0}}
            transition={{delay:0.1}}>
                <Link href="#contact"
                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
                outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                onClick={() => {
                    setActiveSection("Contact");
                    setTimeOfLastClick(Date.now());
                }}>
                    Contact <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>

                <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer dark:bg-white/10"
                href="/resume.pdf"
                download>
                    Resume <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
                </a>

                <a href="https://linkedin.com" className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full dark:bg-white/60 dark:text-white/60 cursor-pointer focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition">
                    <BsLinkedin />
                </a>
                <a href="https://github.com" className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full dark:bg-white/60 dark:text-white/60 cursor-pointer focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition">
                    <FaGithub />
                </a>
            </motion.div>
        </section>
    )
}
