
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "He fixed our site. Now we can't stop getting leads. Ugh.",
      author: "Sarah J.",
      position: "Reluctant CEO"
    },
    {
      quote: "Honestly, I don't know how he does it. And I'm scared to ask.",
      author: "Mike L.",
      position: "Confused Project Manager"
    },
    {
      quote: "10/10 would ghost again.",
      author: "Anonymous Client",
      position: "Never Paid Invoice"
    },
    {
      quote: "The code works so well that I'm now out of excuses for missing deadlines.",
      author: "Alex W.",
      position: "Productivity Avoider"
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          People <span className="text-neonMint glow-text">Tolerate</span> Working With Me
        </h2>
        <p className="text-center text-white/70 mb-12 text-xl">
          (At least that's what they tell me to my face.)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-muted border-neonMint/20 hover:border-neonMint transition-all duration-300 overflow-hidden group"
            >
              <CardContent className="p-6">
                <div className="text-4xl text-neonMint mb-4">"</div>
                <p className="text-lg text-white/80 mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-neonMint font-medium">
                      {testimonial.author}
                    </p>
                    <p className="text-white/50 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                  <div className="text-4xl text-neonMint">"</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 text-white/50 italic">
          * Some testimonials may have been edited for dramatic effect. Or completely made up.
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
