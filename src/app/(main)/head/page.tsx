"use client"
import { useState, useEffect, useRef } from "react"
import { Twitter, Instagram, Github, Download, Phone, Linkedin, Menu, X, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import { motion } from "framer-motion"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { tr } from "framer-motion/client"

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

  const menuRef = useRef<HTMLDivElement>(null)
  const [showDescription, setShowDescription] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);  
  



  useEffect(() => {
    const savedSection = sessionStorage.getItem("activeSection");
    if (savedSection) {
      setActiveSection(savedSection);
    }
  
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "skills", "career", "projects"];
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
    <div className="min-h-screen   text-white font-helvetica">
      {/* Navigation */}
      <header className="fixed w-full top-0 z-50 bg-black/60 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl py-4 px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="text-[22px] font-semibold uppercase text-white tracking-wide">
              V Sai Krishna
            </a>

            {/* Mobile Menu Button */}
            <Button variant="ghost" className="md:hidden text-orange-400 z-50 " >
              {isMenuOpen && (
                <div  onClick={() => setIsMenuOpen(false)}>
                <X size={32}/>
                </div>) }
                {!isMenuOpen && (
                <div  onClick={() => setIsMenuOpen(true)}>
               <Menu size={32}/>
                </div>) }
            </Button>

            {/* Desktop Navigation Menu */}
{/* Desktop Navigation Menu */}
<nav className="hidden md:flex items-center font-semibold space-x-10">
  {["Home", "About", "Experience", "Skills", "Career", "Projects"].map((item, i) => (
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
    ref={menuRef} // Attach the ref here
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="md:hidden bg-gray-900 py-4 px-10"
  >
    {["Home", "About", "Experience", "Skills", "Career", "Projects", "Education"].map((item, i) => (
      <div 
        key={i} 
        className="space-y-4" 
        data-aos="fade-up" 
        data-aos-duration={`${100 + i * 300}`} // Each item gets a delay increasing by 100ms
      > 
        <button
          onClick={() => scrollToSection(item.toLowerCase())}
          className={`block w-full text-center my-2 py-2 text-[15px] font-semibold bg-black border border-gray-600 rounded-lg ${
            activeSection === item.toLowerCase() ? "text-orange-400" : "text-gray-300"
          } hover:text-orange-400 transition-colors duration-300`}
        >
          {item}
        </button>
      </div>
    ))}
  </motion.nav>
)}



      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-screen">
        <div className="container  max-w-7xl mx-auto px-4 mt-[30%] md:mt-0 lg:mt-0 sm:mt-0 xl:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Info */}
            <div className="flex flex-col items-left  justify-center space-y-6">
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
                <h1 className="text-3xl sm:text-3xl md:text-6xl lg:text-6xl lg:text-6xl leading-none mt-4 font-bold">
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
                    onClick={() => window.open("images/Sai_Krishna_ReactJS_Developer3.pdf", "_blank")}
                  >
                    <Download size={18} /> Download Resume
                  </Button>
                </div>
              </motion.div>
              <div className="flex justify-center lg:justify-start space-x-6">
 

  {/* Social Media Icons */}
  {[
    { icon: Linkedin, url: "https://www.linkedin.com/in/sai-krishna-veerapureddy-b70a54331/", color: "text-blue-500 hover:text-blue-700" },
    { icon: Mail, url: "mailto:veerapareddysai@gmail.com", color: "text-red-500 hover:text-red-700" },
    { icon: Github, url: "https://github.com/sai5701/Portfolio", color: "text-gray-200 hover:text-gray-700" },
    { icon: Instagram, url: "https://www.instagram.com/_saikrishna.r", color: "text-pink-500 hover:text-pink-700" },
    { icon: Twitter, url: "https://twitter.com/yourusername", color: "text-green-500 hover:text-green-700" },
  ].map((social, index) => (
    <Button
      key={index}
      className="w-8 h-8 rounded-full border border-white/10 hover:border-white/40 transition-colors flex items-center justify-center"
      onClick={() => window.open(social.url, "_blank")}
    >
      <social.icon className={`w-6 h-6 ${social.color}`} />
    </Button>
  ))}
</div>

            </div>

            {/* Product Image */}
            <div className="relative flex justify-center md:justify-end my-10">
              <img
                src="./images/sai4-Photoroom.png"
                alt="Sai Krishna"
                className="w-auto h-auto  md:max-h-[85vh]   object-contain"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

