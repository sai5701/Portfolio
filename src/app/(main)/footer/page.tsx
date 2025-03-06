"use client";

import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="  text-gray-300 py-6">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between px-6 space-y-4 md:space-y-0">
        
        {/* Left - Name & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white"> 
            Sai Krishna Veerapureddy
          </h2>
          <span className="text-sm text-gray-400 flex inline-block">
  Turning ideas into reality with code. © 2025 |  
  <div  className="hover:text-white transition text-orange-300 cursor-pointer" onClick={() => window.open("tel:+916303626864")}>&nbsp;Contact Me</div>
</span>


        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-4 md:gap-6">
          {/* LinkedIn */}
          <SocialButton
            url="https://www.linkedin.com/in/sai-krishna-veerapureddy-b70a54331"
            icon={<Linkedin className="w-5 h-5 text-blue-500" />}
          />

          {/* GitHub */}
          <SocialButton
            url="https://github.com/sai5701/Portfolio"
            icon={<Github className="w-5 h-5 text-gray-300 hover:text-white" />}
          />

          {/* Email */}
          <SocialButton
            url="mailto:veerapareddysai@gmail.com"
            icon={<Mail className="w-5 h-5 text-red-500" />}
          />

          {/* Instagram */}
          <SocialButton
            url="https://www.instagram.com/_saikrishna.r"
            icon={<Instagram className="w-5 h-5 text-pink-500" />}
          />

          {/* Twitter */}
          <SocialButton
            url="https://twitter.com/yourusername"
            icon={<Twitter className="w-5 h-5 text-blue-500" />}
          />
        </div>
      </div>
    </footer>
  );
}

// Reusable Social Button Component
const SocialButton = ({ url, icon }: { url: string; icon: React.ReactNode }) => (
  <Button
    className="w-10 h-10 rounded-full border border-white/10 hover:border-white/40 transition-colors flex items-center justify-center"
    onClick={() => window.open(url, "_blank")}
  >
    {icon}
  </Button>
);
