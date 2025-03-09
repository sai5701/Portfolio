"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Briefcase, MapPin } from "lucide-react";
import BackgroundEffect from "../bgeffect/page";

const ProfessionalExperience = () => {
  useEffect(() => {
    AOS.init({
      duration: 100, // Global duration for animations
      once: false, // Ensures animation happens only once
    });
  }, []);

  return (
    <section className="py-12 lg:px-14 text-white flex justify-center">
      <Card className="w-full border-none px-4 rounded-lg">
        <CardHeader>
          <div className="flex justify-center">
            <h2 data-aos="fade-up" className="text-2xl sm:text-3xl text-center">
              <div className="text-xl whitespace-nowrap sm:text-2xl md:text-3xl uppercase tracking-wide font-bold text-orange-400 border-b-2 border-orange-400 pb-1 mb-1 lg:mb-10  sm:mb-10 md:mb-10 inline-block">
                Professional Experience
              </div>
            </h2>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <div
            data-aos="fade-up"
            className="bg-gray-900 p-5 py-8  lg:p-8 sm:p-8  md:p-8 rounded-lg shadow-lg border border-gray-700"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <Briefcase className="text-orange-400" size={24} /> Frontend Developer | KARYAHUB Solutions
              </h3>
              <p className="text-gray-400 flex items-center gap-2">
                <MapPin size={20} className="text-orange-400" /> Hyderabad, India | May 2022 – Present
              </p>
            </div>
            <ul className="list-disc list-inside space-y-3 text-gray-300 text-sm sm:text-base leading-relaxed">
              <li data-aos="fade-up" data-aos-delay="100">Developed and maintained scalable front-end applications using React.js and Next.js.</li>
              <li data-aos="fade-up" data-aos-delay="200">Integrated REST APIs and optimized application performance for better UX.</li>
              <li data-aos="fade-up" data-aos-delay="300">Implemented modern UI/UX principles using Tailwind CSS for improved accessibility.</li>
              <li data-aos="fade-up" data-aos-delay="400">Collaborated with backend teams to develop robust solutions and enhance application efficiency.</li>
              <li data-aos="fade-up" data-aos-delay="500">Managed global state effectively using Zustand, ensuring seamless data flow across components.</li>
              <li data-aos="fade-up" data-aos-delay="600">Basic knowledge of Node.js, Express.js, and Python, with an understanding of backend concepts and APIs.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ProfessionalExperience;
