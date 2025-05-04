
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-pitchBlack/90 backdrop-blur-md py-3 shadow-[0_4px_20px_rgba(0,255,178,0.2)]' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div>
          <a 
            href="#top" 
            className="text-2xl font-bold flex items-center hover:text-neonMint transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="text-neonMint">&lt;</span>
            Magma
            <span className="text-neonMint">/&gt;</span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a onClick={() => scrollToSection('skills')} className="hover-underline-animation cursor-pointer hover:text-neonMint transition-colors duration-300">Skills</a>
          <a onClick={() => scrollToSection('projects')} className="hover-underline-animation cursor-pointer hover:text-neonMint transition-colors duration-300">Projects</a>
          <a onClick={() => scrollToSection('about')} className="hover-underline-animation cursor-pointer hover:text-neonMint transition-colors duration-300">About</a>
          <a onClick={() => scrollToSection('testimonials')} className="hover-underline-animation cursor-pointer hover:text-neonMint transition-colors duration-300">Testimonials</a>
          <Button 
            variant="outline" 
            className="border-neonMint text-neonMint hover:bg-neonMint hover:text-pitchBlack"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </Button>
        </div>

        <div className="md:hidden">
          <Button 
            variant="ghost" 
            className="text-white hover:text-neonMint hover:bg-transparent"
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              menu?.classList.toggle('hidden');
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </Button>
        </div>
      </div>

      <div id="mobile-menu" className="md:hidden bg-pitchBlack/95 backdrop-blur-md py-4 px-4 hidden">
        <div className="flex flex-col gap-4">
          <a onClick={() => {
            scrollToSection('skills');
            const menu = document.getElementById('mobile-menu');
            menu?.classList.add('hidden');
          }} className="py-2 hover:text-neonMint transition-colors duration-300">Skills</a>
          
          <a onClick={() => {
            scrollToSection('projects');
            const menu = document.getElementById('mobile-menu');
            menu?.classList.add('hidden');
          }} className="py-2 hover:text-neonMint transition-colors duration-300">Projects</a>
          
          <a onClick={() => {
            scrollToSection('about');
            const menu = document.getElementById('mobile-menu');
            menu?.classList.add('hidden');
          }} className="py-2 hover:text-neonMint transition-colors duration-300">About</a>
          
          <a onClick={() => {
            scrollToSection('testimonials');
            const menu = document.getElementById('mobile-menu');
            menu?.classList.add('hidden');
          }} className="py-2 hover:text-neonMint transition-colors duration-300">Testimonials</a>
          
          <a onClick={() => {
            scrollToSection('contact');
            const menu = document.getElementById('mobile-menu');
            menu?.classList.add('hidden');
          }} className="py-2 text-neonMint">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
