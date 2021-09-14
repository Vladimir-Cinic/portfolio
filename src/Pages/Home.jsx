import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import HeroSection from './Sections/Hero/HeroSection';
import AboutSection from './Sections/About/AboutSection';
import ProjectsSection from './Sections/Projects/ProjectsSection';
import ContactSection from './Sections/Contact/ContactSection';

const Main = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default Main;
