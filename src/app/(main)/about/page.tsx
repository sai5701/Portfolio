"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Download,
  Send,
  Phone,
  Mail,
  MapPin,
  User,
  Languages,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import { motion } from "framer-motion";
import BackgroundEffect from "../bgeffect/page";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      className="flex flex-col lg:flex-col items-center justify-center gap-10 text-white px-6 py-6 "
      id="about"
    >
     <BackgroundEffect  />
      <div className="mb-12">
      
              <span className="text-3xl sm:text-2xl md:text-3xl uppercase tracking-wide font-bold text-orange-400 inline-block  border-b-2 border-orange-400 pb-1">
                About Me
              </span>
             
      </div>
      <div className="flex flex-row">

      {/* Image Section */}
      <div
        className="w-full lg:w-1/2 flex justify-center"
        data-aos="fade-left"
      >
<motion.img
  src="/images/saikrishna.jpg"
  alt="Sai Krishna Reddy"
  className="rounded-full w-64 h-64 sm:w-80 sm:h-80 border-4 border-white "
  
/>

      </div>

      {/* Content Section */}
      <div
        className="w-full lg:w-1/2 bg-transparent text-white"
        data-aos="fade-right"
      >
        <Card className="bg-transparent border-none shadow-none">
        

          <CardContent className="space-y-6">
         

            {/* Bio Summary */}
            <p className="text-white text-sm sm:text-base leading-relaxed">
              I'm a passionate <b>Frontend Developer</b> with <b>3+ years of experience</b> in building
              modern, scalable, and user-friendly web applications using React.js, Next.js, and Tailwind CSS.  
              Currently working at <b>KARYAHUB Solutions</b>, I specialize in creating optimized, high-performance UI/UX
              with a keen eye for detail. I love problem-solving, state management (Zustand), and enhancing user
              experiences with seamless interfaces.
            </p>

            {/* Strengths & Weaknesses */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Strengths */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-orange-500 border-b-2 border-orange-400 pb-2 w-full">
                  Strengths
                </h3>
                <ul className="mt-4 space-y-3 text-gray-300 text-sm">
                  <li className="flex items-left gap-2">
                    <ThumbsUp className="text-green-400" size={20} /> Strong Problem-Solving & Debugging
                  </li>
                  <li className="flex items-left gap-2">
                    <ThumbsUp className="text-green-400" size={20} /> UI/UX Optimization & Performance Tuning
                  </li>
                  <li className="flex items-left gap-2">
                    <ThumbsUp className="text-green-400" size={20} /> Strategic Thinking & Decision Making
                  </li>
                </ul>
              </div>

              {/* Weaknesses */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-orange-500 border-b-2 border-orange-400 pb-2 w-full">
                  Weaknesses
                </h3>
                <ul className="mt-4 space-y-3 text-gray-300 text-sm">
                  <li className="flex items-left gap-2">
                    <ThumbsDown className="text-red-400" size={20} /> Overanalyzing Small Details
                  </li>
                  <li className="flex items-left gap-2">
                    <ThumbsDown className="text-red-400" size={20} /> Perfectionism in Code Refactoring
                  </li>
                </ul>
              </div>
            </div>

       
          </CardContent>
        </Card>
      </div>
              
      </div>
    </section>
  );
};

export default AboutMe;
