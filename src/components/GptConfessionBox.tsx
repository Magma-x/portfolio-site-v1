
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Bot } from 'lucide-react';

const GptConfessionBox: React.FC = () => {
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [response, setResponse] = useState('');
  const [typingText, setTypingText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const fakeResponses = [
    "Based on no actual data, yes — hire him. He's built different. Probably.",
    "GPT says yes, but GPT also said crypto was a good idea.",
    "He might not be the hero you want, but he's the HTML hero you deserve.",
    "Sure. What's the worst that could happen? (Don't answer that.)",
    "Statistically speaking, he's better than 98% of the developers your cousin recommended.",
    "His React components are like his jokes — they don't always work, but they're trying their best.",
    "If you're reading this, you've already spent too much time here. Just hire him already.",
    "I'm legally obligated to tell you I'm not a real AI. I'm just a bunch of if-else statements in a trenchcoat."
  ];
  
  const buttonTexts = [
    "Send It Into the Algorithmic Void",
    "Let AI Judge You Too",
    "Fake It Till I Prompt It",
    "Summon The Intern",
    "Make the Robot Cry"
  ];
  
  const [buttonText, setButtonText] = useState(buttonTexts[0]);
  
  useEffect(() => {
    // Randomly set button text on mount
    const randomIndex = Math.floor(Math.random() * buttonTexts.length);
    setButtonText(buttonTexts[randomIndex]);
    
    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, []);
  
  const handleSubmit = () => {
    if (!input.trim()) return;
    
    setIsThinking(true);
    
    // Fake loading states
    const loadingStates = [
      "Processing your existential crisis...",
      "Analyzing your emotional baggage...",
      "Consulting the digital oracle...",
      "Converting sarcasm to binary...",
      "Pretending to be intelligent..."
    ];
    
    let currentState = 0;
    const loadingInterval = setInterval(() => {
      setResponse(loadingStates[currentState]);
      currentState = (currentState + 1) % loadingStates.length;
    }, 800);
    
    // Simulate AI "thinking" time
    setTimeout(() => {
      clearInterval(loadingInterval);
      
      // Get random fake response
      const randomResponse = fakeResponses[Math.floor(Math.random() * fakeResponses.length)];
      setResponse("");
      setTypingText(randomResponse);
      setCurrentCharIndex(0);
      
      // Start typing effect
      typingIntervalRef.current = setInterval(() => {
        setCurrentCharIndex(prev => {
          const nextIndex = prev + 1;
          if (nextIndex >= randomResponse.length) {
            if (typingIntervalRef.current) {
              clearInterval(typingIntervalRef.current);
            }
            setIsThinking(false);
          }
          return nextIndex;
        });
      }, 30);
      
      // Play beep sound
      try {
        const sounds = ["beep-boop", "bruh", "hmm", "error"];
        const audio = new Audio(`data:audio/mp3;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCZWVwIGJvb3Agc291bmQgZWZmZWN0IGZvciBHUFQgQ29uZmVzc2lvbiBCb3gA`);
        audio.volume = 0.2;
        audio.play().catch(e => console.log("Audio play prevented by browser"));
      } catch (e) {
        console.log("Audio not supported");
      }
      
    }, 3000);
  };
  
  useEffect(() => {
    setResponse(typingText.substring(0, currentCharIndex));
  }, [currentCharIndex, typingText]);

  return (
    <section id="gpt-confession" className="py-20 px-4 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-pitchBlack to-transparent"></div>
      
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-3">
          <Bot className="inline-block mr-2 text-neonMint" />
          GPT Confession Box
        </h2>
        <p className="text-lg text-white/70 mb-2">
          When in doubt, let fake intelligence decide.
        </p>
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          Still not sure if I'm the one? Ask my unpaid AI intern.
        </h3>
        
        <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto">
          You've scrolled through the sarcasm, the bugs, and my very real imaginary resume. 
          Still confused? Welcome to the GPT Confession Box — where a robot trained on the 
          internet's regrets will help you decide whether I'm worth hiring, following, or 
          just ghosting politely.
          <br /><br />
          It's like talking to me, but less judgmental and more emotionally stable.
        </p>

        <Card className="bg-muted border-neonMint/20 hover:border-neonMint transition-all duration-300 backdrop-blur-xl bg-opacity-20 mb-6 max-w-2xl mx-auto">
          <CardContent className="p-8">
            <p className="mb-4 text-white/90">
              Just type in whatever you're feeling —
              <br />
              "Should I hire Huzefa?"
              <br />
              "Is he faking it till he makes it?"
              <br />
              "What's the meaning of frontend?"
            </p>
            
            <Textarea 
              className="bg-pitchBlack text-white border-neonMint/30 focus:border-neonMint mb-6 h-24"
              placeholder="Type your confession, question, or existential crisis..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isThinking}
            />
            
            <Button
              onClick={handleSubmit}
              className={`bg-neonMint text-pitchBlack hover:bg-loudRed hover:text-white transition-all duration-300 w-full ${isThinking ? 'animate-pulse' : ''}`}
              disabled={isThinking}
            >
              {isThinking ? "Computing..." : buttonText}
            </Button>
            
            {response && (
              <div className="mt-6 p-4 border border-neonMint/30 rounded-md bg-pitchBlack text-left">
                <p className="flex items-center mb-2">
                  <Bot size={20} className="text-neonMint mr-2" />
                  <span className="text-neonMint font-medium">FakeGPT:</span>
                </p>
                <p className="font-mono text-white/90">
                  {response}{isThinking && currentCharIndex < typingText.length && "▋"}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
        
        <p className="text-xs text-white/50 mt-2">
          ⚠️ GPT Confession Box is for entertainment only. Actual decisions should be made via coin toss or horoscopes.
        </p>
      </div>
    </section>
  );
};

export default GptConfessionBox;
