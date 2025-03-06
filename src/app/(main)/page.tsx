import React from 'react';
import Head from './head/page';
import AboutMe from './about/page';
import SkillsAndAchievements from './skill/page';
import StatsOverlay from './Career/page';
import ContactSection from './footer/page';
import InfiniteMovingCardsDemo from './projects/projects';
import EducationSection from './education/page';
import Footer from './footer/page';
import ProfessionalExperience from './ProfessionalExperience/page';

const Main = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home">
        <Head />
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 my-10">
        <AboutMe />
      </section>

      <section id="experience" className="   ">
      <ProfessionalExperience />
      </section>

      {/* Skills Section */}
      <section id="skills" className="   ">
        <SkillsAndAchievements />
      </section>
    

      {/* Testimonials Section */}
      <section id="career">
        <StatsOverlay />
      </section>

      {/* Projects Section */}
      <section id="projects" className="  my-10">
        <InfiniteMovingCardsDemo />
      </section>

      {/* Education Section */}
      <section id="education" className=" ">
        <EducationSection />
      </section>

      {/* Contact Section */}
      <section   className=" ">
        <Footer />
      </section>
    </>
  );
};

export default Main;
