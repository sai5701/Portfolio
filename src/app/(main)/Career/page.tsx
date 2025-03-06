"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Briefcase, Code, Clock } from "lucide-react"
import { CardContent } from "@/components/ui/card"
import BackgroundEffect from "../bgeffect/page"

const StatsOverlay = () => {
  return (
    <div className="relative w-full bg-cover bg-center   to-black overflow-hidden">
     
      {/* Background Image Overlay */}
      {/* <div
  className="absolute inset-0 z-0 hidden md:block"  
  style={{
    backgroundImage: "url('./images/sai3.jfif')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(0.3) contrast(1.2)",
  }}
></div> */}


      {/* Career Timeline Section */}
      <div className="relative   z-10 container mx-auto px-4 py-12 sm:py-16 md:py-20 flex flex-col items-center justify-center min-h-screen">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-2xl md:text-3xl  inline-block uppercase tracking-wide font-bold text-orange-400 mb-8 sm:mb-12 text-center border-b-2 border-orange-400 pb-2"
        >
          Career Timeline
        </motion.h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
          {/* Projects */}
          <StatCard
            icon={<Code className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />}
            number="3"
            label="Projects"
            details={[
              "InstaDe – Graphic Design Tool",
              "HRM Portal – HR Management",
              "School Management System",
            ]}
          />

          {/* Companies */}
          <StatCard
            icon={<Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />}
            number="1"
            label="Companies"
            details={["KARYAHUB Solutions – React.js Developer"]}
          />

          {/* Experience */}
          <StatCard
            icon={<Clock className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />}
            number="3+"
            label="Years Experience"
          />
        </div>
      </div>
    </div>
  )
}

// Reusable Stat Card Component
const StatCard = ({
  icon,
  number,
  label,
  details,
}: {
  icon: React.ReactNode
  number: string
  label: string
  details?: string[]
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
        <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center">
          {/* Number & Icon */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white">{number}</h2>
            <div className="text-orange-400 p-2 sm:p-3 shadow-md">{icon}</div>
          </div>

          {/* Label */}
          <p className="text-base sm:text-lg text-gray-300 mt-2 sm:mt-3 text-orange-400 font-medium tracking-wide">
            {label}
          </p>

          {/* Details List */}
          {details && (
            <ul className="mt-2 sm:mt-3 space-y-1 sm:space-y-2">
              {details.map((detail, index) => (
                <li
                  key={index}
                  className="text-xs sm:text-sm text-gray-400 flex items-center gap-1 sm:gap-2 hover:text-orange-400 transition-colors duration-200"
                >
                  <span className="text-orange-500">•</span>
                  <span className="text-left">{detail}</span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </div>
    </motion.div>
  )
}

export default StatsOverlay

