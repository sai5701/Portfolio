"use client"
import { useState, useEffect } from "react"
import { Twitter, Instagram, Github, Download, Phone, Linkedin, Menu, X, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import { motion } from "framer-motion"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"

export default function Head() {
  const descriptionText =
    "Passionate about building interactive and responsive web applications. I specialize in modern 'React js & Next js' development."

  const words = [
    { text: "Frontend", className: "text-white" },
    { text: "Developer", className: "text-white" },
    { text: "|", className: "text-white" },
    { text: "React js", className: "text-blue-400 dark:text-blue-400" },
    { text: "Enthusiast.", className: "text-white" },
  ]

  const [showDescription, setShowDescription] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const savedSection = sessionStorage.getItem("activeSection");
    if (savedSection) {
      setActiveSection(savedSection);
    }
  
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "career", "projects", "education"];
      let currentSection = "home";
  
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
          }
        }
      });
  
      setActiveSection(currentSection);
      sessionStorage.setItem("activeSection", currentSection);  
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowDescription(true)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-black text-white font-helvetica">
      {/* Navigation */}
      <header className="fixed w-full top-0 z-50 bg-black/95 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl py-6 px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="text-[22px] font-semibold uppercase text-white tracking-wide">
              V Sai Krishna
            </a>

            {/* Mobile Menu Button */}
            <Button variant="ghost" className="md:hidden text-orange-400  " onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>

            {/* Desktop Navigation Menu */}
{/* Desktop Navigation Menu */}
<nav className="hidden md:flex items-center font-semibold space-x-10">
  {["Home", "About", "Skills", "Career", "Projects", "Education"].map((item, i) => (
    <button
      key={i}
      onClick={() => scrollToSection(item.toLowerCase())}
      className={`relative text-[15px] text-gray-300 hover:text-orange-400 transition-colors duration-300 inline-block ${
        activeSection === item.toLowerCase() ? "text-orange-400" : ""
      }`}
    >
      {item}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] bg-orange-400 transition-all duration-300 ${
          activeSection === item.toLowerCase() ? "w-full" : "w-0"
        }`}
      ></span>
    </button>
  ))}
</nav>

          </div>
        </div>

        {/* Mobile Navigation Menu */}
   {/* Mobile Navigation Menu */}
{isMenuOpen && (
  <motion.nav
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="md:hidden bg-black/95"
  >
    {["Home", "About", "Skills", "Career", "Projects", "Education"].map((item, i) => (
      <button
        key={i}
        onClick={() => scrollToSection(item.toLowerCase())}
        className={`block w-full text-center px-4 py-2 text-[15px] ${
          activeSection === item.toLowerCase() ? "text-orange-400" : "text-gray-300"
        } bg-gray-900 hover:text-orange-400 transition-colors duration-300`}
      >
        {item}
      </button>
    ))}
  </motion.nav>
)}

      </header>

      {/* Main Content */}
      <main className="pt-24 min-h-screen">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Info */}
            <div className="my-10 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {/* Greeting */}
                <h4 className="text-[15px] tracking-[0.2em] text-gray-200 font-medium flex items-center gap-2">
                  <span className="animate-wave">👋</span> Hello,
                </h4>

                {/* Name and Typewriter */}
                <h1 className="text-[40px] md:text-[60px] leading-none mt-4 font-bold">
                  I'm <span className="text-orange-400">V Sai Krishna</span>
                </h1>

                <TypewriterEffectSmooth
                  words={words.map((word) => ({
                    ...word,
                    className: "text-[white] text-xl md:text-2xl font-h2",
                  }))}
                />

                {/* Delayed Description */}
                {showDescription && (
                  <p className="text-base md:text-lg max-w-lg">
                    <TextGenerateEffect words={descriptionText} />
                  </p>
                )}

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button
                    className="bg-orange-400 hover:bg-orange-600 flex items-center gap-2 w-full sm:w-auto"
                    onClick={() => window.open("tel:+916303626864")}
                  >
                    <Phone size={18} /> Contact
                  </Button>

                  <Button
                    variant="outline"
                    className="flex items-center gap-2 w-full sm:w-auto"
                    onClick={() => window.open("images/sai_krishna_resume.pdf", "_blank")}
                  >
                    <Download size={18} /> Download Resume
                  </Button>
                </div>
              </motion.div>
              <div className="flex space-x-6">
                {/* Social Media Icons */}
                {[
                  { icon: Linkedin, url: "https://www.linkedin.com/in/sai-krishna-veerapureddy-b70a54331/" },
                  { icon: Github, url: "https://github.com/sai5701/Portfolio" },
                  { icon: Instagram, url: "https://www.instagram.com/_saikrishna.r" },
                  { icon: Mail, url: "mailto:veerapareddysai@gmail.com" },
                  { icon: Twitter, url: "https://twitter.com/yourusername" },
                 
                ].map((social, index) => (
                  <Button
                    key={index}
                    className="w-8 h-8 rounded-full border border-white/10 hover:border-white/40 transition-colors flex items-center justify-center"
                    onClick={() => window.open(social.url, "_blank")}
                  >
                    <social.icon className="w-6 h-6 text-blue-500" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Product Image */}
            <div className="relative flex justify-center md:justify-end">
              <img
                src="./images/sai4.jpeg"
                alt="Sai Krishna"
                className="w-auto h-auto max-h-[50vh] md:max-h-[85vh] object-contain"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

