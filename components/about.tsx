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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio facilisis mauris sit amet. Quis varius quam quisque id diam vel quam elementum. Feugiat in fermentum posuere urna nec tincidunt praesent. Euismod elementum nisi quis eleifend. At volutpat diam ut venenatis tellus in metus vulputate. Libero volutpat sed cras ornare arcu dui vivamus. Netus et malesuada fames ac turpis egestas integer eget. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Risus pretium quam vulputate dignissim. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere.
            </p>
            <p>
            Ac placerat vestibulum lectus mauris ultrices. Mauris nunc congue nisi vitae suscipit tellus. Ipsum dolor sit amet consectetur adipiscing elit. Volutpat commodo sed egestas egestas fringilla. Eget lorem dolor sed viverra. Morbi tristique senectus et netus et. Mi quis hendrerit dolor magna. Convallis posuere morbi leo urna molestie. Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Dui vivamus arcu felis bibendum ut tristique. Vitae tempus quam pellentesque nec nam aliquam sem et.
            </p>
    </motion.section>
  );
}