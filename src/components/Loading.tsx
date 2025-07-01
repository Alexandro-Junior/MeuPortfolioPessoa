import React from 'react';

interface LoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 dark:bg-black z-50 flex items-center justify-center">
      <div className="relative">
        {/* Animated Network */}
        <div className="w-32 h-32 relative">
          {/* Central node */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse"></div>
          </div>
          
          {/* Surrounding nodes */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-blue-400 dark:bg-blue-300 rounded-full animate-pulse"
              style={{
                top: `${50 + 35 * Math.cos((i * 60 * Math.PI) / 180)}%`,
                left: `${50 + 35 * Math.sin((i * 60 * Math.PI) / 180)}%`,
                transform: 'translate(-50%, -50%)',
                animationDelay: `${i * 0.2}s`
              }}
            ></div>
          ))}
          
          {/* Connecting lines */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={`line-${i}`}
              className="absolute w-px bg-gradient-to-r from-blue-500 to-blue-400 dark:from-blue-400 dark:to-blue-300 opacity-60"
              style={{
                height: '35%',
                top: '50%',
                left: '50%',
                transformOrigin: 'top center',
                transform: `translate(-50%, 0) rotate(${i * 60}deg)`,
                animation: `fadeInOut 2s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <div className="text-white dark:text-gray-100 text-xl font-light tracking-wider animate-pulse">
            Carregando
          </div>
          <div className="flex justify-center mt-2 space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Loading;