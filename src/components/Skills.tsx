
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface Skill {
  name: string;
  icon: string;
  description: string;
  level: number;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      name: 'JavaScript',
      icon: '👩‍💻',
      description: 'My longest relationship',
      level: 90,
    },
    {
      name: 'React',
      icon: '⚛️',
      description: 'I use hooks and hope',
      level: 85,
    },
    {
      name: 'Tailwind',
      icon: '🎨',
      description: 'I like utility. Sue me.',
      level: 80,
    },
    {
      name: 'Git',
      icon: '🌳',
      description: 'Pushed it? It\'s your problem now.',
      level: 75,
    },
    {
      name: 'Firebase',
      icon: '🔥',
      description: 'Magic backend. Don\'t ask questions.',
      level: 70,
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          Skills I <span className="text-neonMint glow-text">pretend</span> to have
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <TooltipProvider key={skill.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Card className="bg-muted border-neonMint/20 hover:border-neonMint transition-all duration-300 overflow-hidden group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl">{skill.icon}</div>
                        <div>
                          <h3 className="text-xl font-medium text-white group-hover:text-neonMint transition-colors">
                            {skill.name}
                          </h3>
                          <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
                            <div 
                              className="bg-neonMint h-2.5 rounded-full group-hover:bg-loudRed transition-all duration-500" 
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TooltipTrigger>
                <TooltipContent className="bg-pitchBlack border border-neonMint text-white p-2">
                  <p>{skill.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>

        <div className="text-center mt-12 text-white/50 italic">
          * All skills subject to caffeine levels and Stack Overflow availability
        </div>
      </div>
    </section>
  );
};

export default Skills;
