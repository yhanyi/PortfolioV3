"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hi, I&apos;m Yeoh Han Yi, a Computer Science major with a second major
        in Statistics at the National University of Singapore, currently
        navigating the second semester of my freshman year.
      </p>
      <p>
        Undecided on a specialization as of now, I&apos;m currently exploring
        various fields, especially machine learning, full-stack development and
        software engineering. This eclectic approach allows me to discover where
        my interests and strengths lie.
      </p>
    </motion.section>
  );
}
