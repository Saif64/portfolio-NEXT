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
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'>
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        A software engineer with a track record of delivering exceptional
        performance and consistently meeting and fulfilling expectations at my
        workplace. A highly motivated and detail-oriented problem solver, I
        possess a natural aptitude for quickly grasping new concepts. Eager to
        leverage my creativity and technical expertise to make meaningful
        contributions to development teams and drive successful project
        outcomes.
      </p>

      <p>
        <span className='italic'>When I'm not coding</span>, I enjoy playing
        video games, watching movies. I also enjoy{" "}
        <span className='font-medium'>learning new things</span>. I am currently
        learning about{" "}
        <span className='font-medium'>
          Business Case Studies and philosophy
        </span>
        .
      </p>
    </motion.section>
  );
}
