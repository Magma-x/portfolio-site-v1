
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Instagram } from 'lucide-react';
const Contact: React.FC = () => {
  const [buttonText, setButtonText] = useState("Let's Waste Time Together");
  return <section id="contact" className="py-20 px-4 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-pitchBlack to-transparent"></div>
      
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Still here? <span className="text-neonMint glow-text">Wow.</span>
        </h2>
        <p className="text-xl text-white/70 mb-12">
          Let's build something. Or rant about tech.
        </p>

        <Card className="bg-muted border-neonMint/20 hover:border-neonMint transition-all duration-300 max-w-2xl mx-auto">
          <CardContent className="p-8 flex flex-col items-center">
            <a href="mailto:abuhuzefa733@gmail.com">
              <Button size="lg" className="bg-neonMint text-pitchBlack hover:bg-loudRed hover:text-white transition-all duration-300 text-lg px-8 py-6 rounded-md font-medium" onMouseEnter={() => setButtonText("Just kidding. Email me.")} onMouseLeave={() => setButtonText("Let's Waste Time Together")}>
                {buttonText}
              </Button>
            </a>

            <div className="flex justify-center gap-6 mt-10">
              <a href="https://github.com/Magma-x" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neonMint transition-colors group">
                <div className="flex flex-col items-center gap-2">
                  <Github size={28} className="group-hover:animate-wiggle" />
                  <span className="text-xs text-white/70 group-hover:text-neonMint">Where my bugs live</span>
                </div>
              </a>
              
              <a href="https://x.com/abuhuzefa_" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neonMint transition-colors group">
                <div className="flex flex-col items-center gap-2">
                  <svg width="28" height="28" viewBox="0 0 24 24" className="group-hover:animate-wiggle" fill="currentColor">
                    <path d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.883L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.022L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z" />
                  </svg>
                  <span className="text-xs text-white/70 group-hover:text-neonMint">Where I pretend to be insightful</span>
                </div>
              </a>
              
              <a href="https://www.instagram.com/magma.xyz/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neonMint transition-colors group">
                <div className="flex flex-col items-center gap-2">
                  <Instagram size={28} className="group-hover:animate-wiggle" />
                  <span className="text-xs text-white/70 group-hover:text-neonMint text-justify">Where I lose time and find memes</span>
                </div>
              </a>
            </div>
          </CardContent>
        </Card>

        <div className="mt-20 text-white/30 text-sm">
          <p>© 2025 Magma. All wrongs reserved.</p>
          <p className="mt-2">Built with a strong dose of irony and too much free time.</p>
        </div>
      </div>
    </section>;
};
export default Contact;
