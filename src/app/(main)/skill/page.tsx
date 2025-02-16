"use client"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

// Skills data
const skills = [
  { name: "React.js", value: 85, color: "from-blue-500 to-cyan-400" },
  { name: "Next.js", value: 80, color: "from-purple-500 to-pink-400" },
  { name: "JavaScript", value: 90, color: "from-yellow-500 to-orange-400" },
  { name: "TypeScript", value: 85, color: "from-indigo-500 to-blue-400" },
  { name: "API Integration", value: 85, color: "from-green-500 to-emerald-400" },
  { name: "Git", value: 90, color: "from-red-500 to-orange-400" },
  { name: "HTML", value: 90, color: "from-orange-500 to-yellow-400" },
  { name: "CSS", value: 90, color: "from-blue-400 to-indigo-500" },

  { name: "Tailwind CSS", value: 90, color: "from-teal-500 to-green-400" },
]

const SkillsAndAchievements = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      easing: "ease-out-cubic",
    })
  }, [])

  return (
    <section className="text-white py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Skills Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <span className="text-3xl sm:text-3xl md:text-4xl font-bold mb-4 text-orange-400 border-b-2 border-orange-400">
            Technical Skills
          </span>
        </div>

        {/* Skills Grid - Updated to 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} data-aos="fade-up" data-aos-delay={index * 200}>
              <div className="overflow-hidden group hover:shadow-lg rounded-lg transition-shadow duration-300 hover:shadow-orange-500/100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-semibold flex justify-between items-center">
                    {skill.name}
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative flex items-center space-x-4 w-full">
                    {/* Skill Progress Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        style={{ width: `${skill.value}%` }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      ></div>
                    </div>

                    {/* Percentage Display */}
                    <p className="text-sm font-semibold text-gray-200 w-10 text-right">{skill.value}%</p>
                  </div>
                </CardContent>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsAndAchievements

