import { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Show loading briefly then switch to Coming Soon
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 relative overflow-hidden">
      {/* Grainy texture overlay */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Glass island covering entire body with 20px gap */}
      <div className="absolute inset-5">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl h-full w-full flex items-center justify-center relative overflow-hidden">
          {/* Blue skeuomorphic inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-blue-600/10 rounded-3xl"></div>
          
          {/* Additional glass effect layers */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-white/20 rounded-3xl"></div>
          
          <div className="text-center relative z-10">
            {isLoading ? (
              <div className="space-y-6">
                {/* Loading spinner with blue accent */}
                <div className="flex justify-center">
                  <div className="animate-spin rounded-full h-20 w-20 border-4 border-white/20 border-t-blue-400 shadow-lg"></div>
                </div>
                <p className="text-white/90 text-xl font-medium">Loading...</p>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Coming Soon message */}
                <div className="space-y-6">
                  <h1 className="text-5xl font-bold text-white bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent drop-shadow-lg">
                    Coming Soon
                  </h1>
                  <p className="text-white/80 text-xl max-w-md mx-auto leading-relaxed">
                    We're crafting something extraordinary. Stay tuned for an amazing experience!
                  </p>
                </div>
                
                {/* Decorative elements with blue accents */}
                <div className="flex justify-center space-x-3 pt-6">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full animate-pulse shadow-lg"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;