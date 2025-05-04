
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const Hero: React.FC = () => {
  const [buttonText, setButtonText] = useState('Proceed with Caution');

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 py-20">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-neonMint/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-loudRed/10 blur-3xl"></div>
      
      {/* Code-like decorative elements */}
      <div className="absolute top-1/4 left-5 text-neonMint/20 text-xs md:text-base font-mono hidden md:block">
        &lt;div className="hero"&gt;
      </div>
      <div className="absolute bottom-1/4 right-5 text-neonMint/20 text-xs md:text-base font-mono hidden md:block">
        &lt;/div&gt;
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          This is my <span className="text-neonMint glow-text">portfolio</span>.
          <br />
          Prepare to be <span className="text-neonMint glow-text">mildly impressed</span>.
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-white/80 max-w-2xl mx-auto">
          I build stuff with <span className="text-neonMint">JavaScript</span> and <span className="text-loudRed">sarcasm</span>.
          If you're here to hire, bless your soul.
        </p>
        
        <div className="flex justify-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="default" 
                  size="lg"
                  className="bg-neonMint text-pitchBlack hover:bg-loudRed hover:text-white transition-all duration-300 text-lg px-8 py-6 rounded-md font-medium"
                  onClick={scrollToProjects}
                  onMouseEnter={() => setButtonText("Don't say I didn't warn you")}
                  onMouseLeave={() => setButtonText("Proceed with Caution")}
                >
                  {buttonText}
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-pitchBlack border border-neonMint text-white p-2">
                <p>Yes, I'm available for freelance. No, I don't work for exposure.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="text-neonMint"
          >
            <path 
              d="M12 5v14m0 0l-6-6m6 6l6-6" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
