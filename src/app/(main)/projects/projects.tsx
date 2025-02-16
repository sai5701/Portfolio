"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";

export default function ProjectsShowcase() {
  return (
    <div className="h-auto min-h-[30rem] sm:min-h-[35rem] md:min-h-[40rem] flex flex-col items-center justify-center relative overflow-hidden bg-black text-white px-4 sm:px-8">
      {/* Projects Heading */}
      <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-8 sm:mb-12 tracking-wide border-b-2 border-orange-400 text-center">
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
    quote: "A graphic design platform with powerful drag-and-drop tools for effortless design creation. It allows users to create professional designs without technical skills. Built with React.js , Tailwind CSS and Python ",
    name: "InstaDe",
    title: "Graphic Design Platform",
  },
  {
    quote: "An advanced HR management system for employee data tracking, leave management, and payroll. Features include role-based access, automated reporting, and seamless API integrations. Developed using Next.js and Python.",
    name: "HRM Portal",
    title: "HR Management System",
  },
  {
    quote: "A role-based school management system with dashboards, CCTV monitoring, and communication tools. It enables efficient student tracking, real-time attendance, and secure parent-teacher communication. Built with Next.js and Python.",
    name: "School Management System",
    title: "Education Management",
  },
  {
    quote: "A fresh meal delivery service offering high-quality, chef-prepared meals ready to eat in minutes. The platform supports customizable meal plans, real-time order tracking, and subscription management. Developed using javascript  and Java",
    name: "Meal Village",
    title: "Fresh Meal Delivery",
  },
  {
    quote: "A home-cooked meal service focused on providing affordable and nutritious food to busy individuals. Users can schedule meal deliveries, explore diverse cuisines, and track dietary preferences. Built using javascript  ",
    name: "Daily Rasoi and Java",
    title: "Healthy Home-Cooked Meals",
  },
];

