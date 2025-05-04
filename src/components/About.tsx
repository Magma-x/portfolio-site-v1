
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          The <span className="text-neonMint glow-text">Brain</span> Behind the Bugs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="order-2 md:order-1 md:col-span-2">
            <Card className="bg-muted border-neonMint/20 hover:border-neonMint transition-all duration-300">
              <CardContent className="p-6">
                <p className="text-lg text-white/80 mb-4">
                  Hi, I'm <span className="text-neonMint">Abu Huzefa aka Magma</span>. I'm a developer, pixel perfectionist, and master of sarcastic comments in code.
                </p>
                <p className="text-lg text-white/80 mb-4">
                  I've worked with startups, freelancers, and occasionally, people who know what they want. When I'm not pushing pixels, I'm pushing my luck with deadlines.
                </p>
                <p className="text-lg text-white/80">
                  My superpower? I can convert caffeine into code at alarming rates. My weakness? CSS centering without Flexbox. We don't talk about the dark times.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-white/60">
                  <div>
                    <strong className="text-neonMint block mb-1">Education:</strong>
                    <p>University of Google Search</p>
                    <p>Stack Overflow Academy</p>
                  </div>
                  <div>
                    <strong className="text-neonMint block mb-1">Years of Experience:</strong>
                    <p>Enough to know better,</p>
                    <p>Not enough to stop making mistakes.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-48 h-48 md:w-56 md:h-56 relative">
              {/* Cartoon/scribble placeholder */}
              <div className="w-full h-full rounded-full bg-neonMint/20 flex items-center justify-center border-2 border-dashed border-neonMint p-2">
                <div className="text-7xl">👾</div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-pitchBlack text-neonMint rounded-full p-2 border border-neonMint">
                <span className="text-2xl animate-blink">_</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-white/50 italic">
          * Resume available upon request. Warning: contains buzzwords and strategic omissions.
        </div>
      </div>
    </section>
  );
};

export default About;
