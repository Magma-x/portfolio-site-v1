import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const NotFound = () => {
  const location = useLocation();
  const [showToast, setShowToast] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  const fakeLogs = [
    "> Searching for page...",
    "> Scanning Stack Overflow...",
    "> Rebooting creativity...",
    "> Nope. Still nothing.",
  ];

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    // Fake typing effect
    let i = 0;
    const typing = setInterval(() => {
      if (i < fakeLogs.length) {
        setTerminalLines((prev) => [...prev, fakeLogs[i]]);
        i++;
      } else {
        clearInterval(typing);
      }
    }, 1200);

    // Toast after 7 seconds
    const timer = setTimeout(() => {
      setShowToast(true);
    }, 7000);

    return () => {
      clearInterval(typing);
      clearTimeout(timer);
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative p-4 font-mono">
      <div className="text-center max-w-xl">
        {/* Glitch 404 */}
        <h1 className="text-[100px] font-extrabold text-white glitch mb-2 relative">
          404
        </h1>
        <p className="text-lg text-gray-400 mb-6">
          Oops. You broke it. Or maybe I did. Let’s not point fingers.
        </p>

        {/* Fake Terminal */}
        <div className="bg-[#1e1e1e] text-left text-green-400 rounded-md p-4 text-sm shadow-md min-h-[150px] mb-6">
          {terminalLines.map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </div>

        {/* Home Link */}
        <a
          href="/"
          className="text-blue-400 hover:text-blue-600 underline transition"
        >
          Get me outta here
        </a>
      </div>

      {/* Toast */}
      {showToast && (
        <div className="absolute bottom-6 right-6 bg-[#222] text-white border border-gray-600 px-4 py-2 rounded-md shadow-lg text-sm">
          You’ve been here too long. This isn’t a therapy session.
        </div>
      )}

      {/* Glitch Effect Styles */}
      <style>{`
        .glitch {
          position: relative;
          color: white;
          animation: glitch 1s infinite;
        }
        .glitch::before,
        .glitch::after {
          content: '404';
          position: absolute;
          left: 0;
          width: 100%;
          color: white;
          background: black;
          overflow: hidden;
        }
        .glitch::before {
          animation: glitchTop 1s infinite;
          top: -2px;
          color: #00FFFF;
        }
        .glitch::after {
          animation: glitchBottom 1s infinite;
          bottom: -2px;
          color: #00FFB2;
        }

        @keyframes glitch {
          0% { transform: none; }
          20% { transform: skew(-5deg); }
          40% { transform: skew(5deg); }
          60% { transform: skew(-3deg); }
          80% { transform: skew(2deg); }
          100% { transform: none; }
        }
        @keyframes glitchTop {
          0% { clip: rect(0, 9999px, 0, 0); }
          10% { clip: rect(0, 9999px, 50%, 0); }
          20% { clip: rect(0, 9999px, 0, 0); }
          30% { clip: rect(0, 9999px, 70%, 0); }
          100% { clip: rect(0, 9999px, 0, 0); }
        }
        @keyframes glitchBottom {
          0% { clip: rect(100%, 9999px, 100%, 0); }
          10% { clip: rect(30%, 9999px, 100%, 0); }
          20% { clip: rect(100%, 9999px, 100%, 0); }
          30% { clip: rect(50%, 9999px, 100%, 0); }
          100% { clip: rect(100%, 9999px, 100%, 0); }
        }
      `}</style>
    </div>
  );
};

export default NotFound;

