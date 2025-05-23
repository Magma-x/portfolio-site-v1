
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import GptConfessionBox from '@/components/GptConfessionBox';

const Index: React.FC = () => {
  // Easter egg: console message
  useEffect(() => {
    console.log("%cWell hello there, curious dev! 👋", "color: #00FFB2; font-size: 20px; font-weight: bold;");
    console.log("%cSnooping through my console, are we?", "color: white; font-size: 16px;");
    console.log("%cI respect that. Feel free to steal this code. I probably stole most of it anyway.", "color: white; font-size: 16px;");
  }, []);

  useEffect(() => {
    // Initialize matrix effect on component mount
    initMatrixEffect();
    
    // Initialize cursor trailer effect
    initCursorTrailer();
    
    return () => {
      // Cleanup any animations if needed
      if (typeof window !== 'undefined') {
        const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement;
        if (canvas) {
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
          }
        }
      }
    };
  }, []);
  
  // Function to initialize matrix effect
  const initMatrixEffect = () => {
    if (typeof window !== 'undefined') {
      const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;

          const characters = '01';
          const fontSize = 10;
          const columns = canvas.width / fontSize;
          const drops: number[] = [];

          for (let i = 0; i < columns; i++) {
            drops[i] = 1;
          }

          function draw() {
            ctx.fillStyle = 'rgba(13, 13, 13, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#00FFB2';
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
              const text = characters.charAt(Math.floor(Math.random() * characters.length));
              ctx.fillText(text, i * fontSize, drops[i] * fontSize);

              if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
              }

              drops[i]++;
            }
          }

          setInterval(draw, 35);

          window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
          });
        }
      }
    }
  };
  
  // Function to initialize cursor trailer effect
  const initCursorTrailer = () => {
    if (typeof window !== 'undefined') {
      const trailer = document.getElementById('cursor-trailer');
      if (trailer) {
        window.addEventListener('mousemove', (e) => {
          const { clientX, clientY } = e;
          
          setTimeout(() => {
            trailer.style.transform = `translate(${clientX - 16}px, ${clientY - 16}px)`;
          }, 100);
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-pitchBlack text-white custom-cursor">
      <Navbar />
      
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Testimonials />
        <Contact />
        <GptConfessionBox />
      </main>
      
      {/* Cursor trailer effect (subtle glow that follows cursor) */}
      <div id="cursor-trailer" className="fixed w-8 h-8 bg-neonMint/20 rounded-full pointer-events-none z-50 hidden md:block"></div>
      
      {/* Matrix-like raining code effect in the background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
        <canvas id="matrix-canvas" className="w-full h-full"></canvas>
      </div>
    </div>
  );
};

export default Index;
