"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";

export default function ProjectsShowcase() {
  return (
    <div className="h-auto min-h-[30rem] sm:min-h-[30rem] md:min-h-[30rem] flex flex-col items-center justify-center relative overflow-hidden  text-white px-4 sm:px-8">
      {/* Projects Heading */}
      <h2 className="text-2xl whitespace-nowrap sm:text-2xl md:text-3xl uppercase tracking-wide font-bold text-orange-500 mb-8 sm:mb-7 md:mb-10 tracking-wide border-b-2 border-orange-400 text-center">
        Featured Projects
      </h2>

      {/* Moving Cards */}
      <div className="w-full max-w-6xl">
        <InfiniteMovingCards items={projects} direction="right" speed="normal" />
      </div>
    </div>
  );
}

const projects = [
  {
    quote: "An graphic design platform with powerful drag-and-drop (DND) tools for effortless design creation. It allows users to create professional designs without technical skills. Built with React.js , Tailwind CSS and Python ",
    name: "InstaDe",
    title: "Graphic Design Platform",
    image: "/images/instade.png",
     demoLink: "https://develop.instade.ai/"
  },
  {
    quote: "An advanced HR management system for employee data tracking, leave management, and payroll. Features include role-based access, automated reporting, and seamless API integrations. Developed using Next.js and Python.",
    name: "HRM Portal",
    title: "HR Management System",
    image: "/images/sms.png",
     demoLink: "https://getshou.com/"
  },
  {
    quote: "A role-based school management system with dashboards, CCTV monitoring, and communication tools. It enables efficient student tracking, real-time attendance, and secure parent-teacher communication. Built with Next.js and Python.",
    name: "NeuroPi",
    title: "Education Management",
    image: "/images/neuropi.png",
     demoLink: "https://neuropi.net/"
  },
];
