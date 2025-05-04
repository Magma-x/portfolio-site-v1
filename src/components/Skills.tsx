
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Code, Server, Tool, Zap, Brain } from 'lucide-react';

interface Skill {
  name: string;
  description: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend (a.k.a. Making Things Look Less Ugly)",
      icon: <Code className="h-6 w-6 text-neonMint" />,
      skills: [
        { name: "JavaScript", description: "My longest relationship. It's still complicated." },
        { name: "React", description: "I build components, then rebuild them for no reason." },
        { name: "Next.js", description: "Because static sites are too boring and SSR makes me feel smart" },
        { name: "Tailwind CSS", description: "I fight classes like bg-black/70 every day and somehow win" },
        { name: "shadcn/ui", description: "I use pre-styled components because I hate pain" },
      ]
    },
    {
      title: "Backend (Yes, I Touch Servers Too)",
      icon: <Server className="h-6 w-6 text-neonMint" />,
      skills: [
        { name: "Firebase", description: "I like databases that pretend to be APIs" },
        { name: "PostgreSQL", description: "A real database — for real adult problems" },
        { name: "MongoDB", description: "When structure is optional and so is my sanity" },
        { name: "ChatGPT API", description: "Because I outsource logic to large language models" },
      ]
    },
    {
      title: "Tools & Stuff I Complain About But Still Use",
      icon: <Tool className="h-6 w-6 text-neonMint" />,
      skills: [
        { name: "Git", description: "Where I push code and also my luck" },
        { name: "VS Code", description: "90% of my screen time. 10% is dark mode themes" },
        { name: "Framer Motion", description: "Because websites should vibe" },
        { name: "shadcn/ui", description: "Drag. Drop. Pretend you designed it from scratch" },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Skills & <span className="text-neonMint glow-text">Survival Tools</span>
        </h2>
        <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
          These are the technologies I use, abuse, and occasionally understand
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-muted border-neonMint/20 hover:border-neonMint transition-all duration-300 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {category.icon}
                  <h3 className="text-lg font-medium text-neonMint">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="bg-secondary/50 px-3 py-2 rounded-md cursor-help hover:bg-secondary transition-colors">
                              {skill.name}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="bg-pitchBlack border border-neonMint text-white p-2 max-w-[250px]">
                            <p>{skill.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Wildcard section */}
        <Card className="bg-muted border-neonMint/20 hover:border-neonMint transition-all duration-300 overflow-hidden mt-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-neonMint" />
              <h3 className="text-lg font-medium text-neonMint">Wildcard (aka I'll Use Whatever Works)</h3>
            </div>
            <blockquote className="border-l-2 border-neonMint pl-4 italic text-white/80">
              Need Python? Cool. Bash? Fine. Bubble wrap and duct tape? Let's roll. I'll use whatever gets the job done... or at least fakes it really well.
            </blockquote>
          </CardContent>
        </Card>

        {/* Learning Now section */}
        <Card className="bg-muted border-loudRed/20 hover:border-loudRed transition-all duration-300 overflow-hidden mt-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="h-6 w-6 text-loudRed" />
              <h3 className="text-lg font-medium text-loudRed">Learning Now (Prepare for Sarcastic Intelligence)</h3>
            </div>
            <blockquote className="border-l-2 border-loudRed pl-4 italic text-white/80">
              Currently learning Machine Learning & AI — because why not build the next Skynet after binge-watching three YouTube tutorials?
            </blockquote>
          </CardContent>
        </Card>

        <div className="text-center mt-12 text-white/50 italic">
          * All skills subject to caffeine levels and Stack Overflow availability
        </div>
      </div>
    </section>
  );
};

export default Skills;
