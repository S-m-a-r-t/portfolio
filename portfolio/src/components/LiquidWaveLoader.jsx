import React, { useState, useEffect } from 'react';

export default function LiquidWaveLoader({ onComplete = () => {} }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 4000);

    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 4700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  // Create floating orbs
  const orbs = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-gray-950 via-slate-950 to-black overflow-hidden transition-opacity duration-700 ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Animated gradient orbs in background */}
      {orbs.map((i) => (
        <div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${Math.random() * 400 + 200}px`,
            height: `${Math.random() * 400 + 200}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 
              ? 'rgba(139, 92, 246, 0.15)' 
              : i % 3 === 1
              ? 'rgba(96, 165, 250, 0.15)'
              : 'rgba(167, 139, 250, 0.15)',
            animation: `float ${Math.random() * 10 + 15}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Ripple effect circles */}
        <div className="relative w-48 h-48 flex items-center justify-center">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute border-2 border-purple-500/30 rounded-full"
              style={{
                width: '100%',
                height: '100%',
                animation: `ripple 3s ease-out infinite`,
                animationDelay: `${i * 1}s`,
              }}
            />
          ))}
          
          {/* Center glowing orb */}
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full shadow-2xl"
              style={{
                animation: 'pulse 2s ease-in-out infinite',
                boxShadow: '0 0 60px rgba(139, 92, 246, 0.6)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-blue-400 rounded-full blur-xl opacity-60"
              style={{
                animation: 'pulse 2s ease-in-out infinite',
              }}
            />
          </div>
        </div>

        {/* Floating particles */}
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-purple-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle ${Math.random() * 5 + 3}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}

        {/* Loading text */}
        <div className="mt-16 text-purple-300/60 text-xl font-light tracking-widest"
          style={{
            animation: 'fadeInOut 2s ease-in-out infinite',
          }}>
          LOADING
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes ripple {
          0% {
            transform: scale(0.5);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes particle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
          }
        }

        @keyframes fadeInOut {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}