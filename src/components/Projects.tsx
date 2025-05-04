
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Project {
  name: string;
  description: string;
  tech: string[];
  link: string;
  buttonText: string;
  buttonHoverText: string;
}

const Projects: React.FC = () => {
  const [buttonTexts, setButtonTexts] = useState<{ [key: string]: string }>({});

  const projects: Project[] = [
    {
      name: 'The Button That Did Too Much',
      description: 'Built a single button app. Client asked for one feature. I gave them animations, API calls, and a panic mode.',
      tech: ['React', 'Tailwind', 'Some Regrets'],
      link: '#',
      buttonText: 'View Code',
      buttonHoverText: 'But please don\'t judge',
    },
    {
      name: 'Deadline? What Deadline?',
      description: 'A to-do app that passive-aggressively reminds you of all the things you should have done yesterday.',
      tech: ['Next.js', 'Firebase', 'Coffee'],
      link: '#',
      buttonText: 'See the Chaos',
      buttonHoverText: 'Enter at your own risk',
    },
    {
      name: 'Another Generic Dashboard',
      description: 'Just what the world needed: another analytics dashboard with pretty charts that executives will never look at.',
      tech: ['React', 'D3.js', 'Tears'],
      link: '#',
      buttonText: 'Admire the Graphs',
      buttonHoverText: 'They took me forever',
    },
    {
      name: 'Error 404: Creativity Not Found',
      description: 'The most beautiful error page ever created. So pretty, users actually try to break the site to see it.',
      tech: ['HTML', 'CSS', 'Existential Dread'],
      link: '#',
      buttonText: 'Experience Failure',
      buttonHoverText: 'In the best way possible',
    },
  ];

  const handleButtonHover = (index: number, isHovering: boolean) => {
    setButtonTexts(prev => ({
      ...prev,
      [index]: isHovering ? projects[index].buttonHoverText : projects[index].buttonText,
    }));
  };

  return (
    <section id="projects" className="py-20 px-4 bg-muted/20 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Projects That <span className="text-neonMint glow-text">Actually</span> Work
        </h2>
        <p className="text-center text-white/70 mb-12 text-xl">
          (Most of the time. No guarantees after 2AM commits.)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-muted border-neonMint/20 hover:border-neonMint transition-all duration-300 overflow-hidden group hover:shadow-[0_0_15px_rgba(0,255,178,0.3)]"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-white group-hover:text-neonMint transition-colors">
                  {project.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs py-1 px-2 rounded bg-pitchBlack/50 border border-neonMint/30 text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button 
                    variant="outline" 
                    className="w-full border-neonMint text-neonMint hover:bg-neonMint hover:text-pitchBlack transition-all duration-300"
                    onMouseEnter={() => handleButtonHover(index, true)}
                    onMouseLeave={() => handleButtonHover(index, false)}
                  >
                    {buttonTexts[index] || project.buttonText}
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 text-neonMint italic">
          * More projects available upon request, bribery, or desperate need for employment.
        </div>
      </div>
    </section>
  );
};

export default Projects;
