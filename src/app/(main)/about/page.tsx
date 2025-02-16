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

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 5000,
      once: false,
      easing: "ease-out-cubic",
     
    })
  }, [])

  return (
    <section className="flex flex-col-reverse overflow-hidden lg:flex-row items-center justify-center gap-10 text-white px-4 sm:px-6 py-12">
    

      {/* Image Section (Appears Second on Mobile) */}
      <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-right">
        <img
          src="./images/sai1.jfif"
          alt="Sai Krishna Reddy"
          className="w-64 sm:w-80 md:w-80 lg:h-[70vh] lg:w-auto"
        />
      </div>
        {/* Content Section (Appears First on Mobile) */}
        <div className="w-full lg:w-1/2 bg-transparent text-white" data-aos="fade-left">
        <Card className="bg-transparent border-none shadow-none">
          <CardHeader>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-6"
            >
              <span className="text-2xl sm:text-3xl font-bold text-orange-400 border-b-2 border-orange-400 inline-block">
                About Me
              </span>
            </motion.div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base">
              <div className="space-y-3">
                <p className="flex items-center gap-3">
                  <User className="text-orange-500" size={20} />
                  <span className="text-gray-300">V Sai Krishna Reddy</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="text-orange-500" size={20} />
                  <span className="text-gray-300">6303626864</span>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="text-orange-500" size={20} />
                  <span className="text-gray-300">veerapareddysai@gmail.com</span>
                </p>
              </div>

              <div className="space-y-3">
                <p className="flex items-center gap-3">
                  <MapPin className="text-orange-500" size={20} />
                  <span className="text-gray-300">Madhapur, Hyderabad</span>
                </p>
                <p className="flex items-center gap-3">
                  <Languages className="text-orange-500" size={20} />
                  <span className="text-gray-300">English, Telugu, Hindi</span>
                </p>
              </div>
            </div>

            {/* Strengths & Weaknesses */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Strengths */}
              <div className="flex flex-col items-left text-center">
                <h3 className="text-xl font-semibold text-orange-500 border-b border-orange-400 pb-2 w-full">
                  Strengths
                </h3>
                <ul className="mt-4 space-y-3 text-gray-300 text-sm">
                  <li className="flex items-left gap-2">
                    <ThumbsUp className="text-green-400 text-sm" size={20} /> Resilience & Patience
                  </li>
                  <li className="flex items-left gap-2">
                    <ThumbsUp className="text-green-400 text-sm" size={20} /> Strategic Thinking & Smart Work
                  </li>
                  <li className="flex items-left gap-2">
                    <ThumbsUp className="text-green-400" size={20} /> Decisiveness & Problem-Solving
                  </li>
                </ul>
              </div>

              {/* Weaknesses */}
              <div className="flex flex-col items-left text-center">
                <h3 className="text-xl font-semibold text-orange-500 border-b border-orange-400 pb-2 w-full">
                  Weaknesses
                </h3>
                <ul className="mt-4 space-y-3 text-gray-300 text-sm">
                  <li className="flex items-left gap-2">
                    <ThumbsDown className="text-red-400" size={20} /> Overanalyzing Situations
                  </li>
                  <li className="flex items-left gap-2">
                    <ThumbsDown className="text-red-400" size={20} /> Perfectionism
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutMe;
