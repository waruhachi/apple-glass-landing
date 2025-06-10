
import { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

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
      
      {/* Glass island container */}
      <div className="flex items-center justify-center min-h-screen p-5">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-20 max-w-md w-full text-center">
          {isLoading ? (
            <div className="space-y-6">
              {/* Loading spinner */}
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-white/30 border-t-white"></div>
              </div>
              <p className="text-white/80 text-lg">Loading...</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Coming Soon message */}
              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-white">Coming Soon</h1>
                <p className="text-white/80 text-lg">
                  We're working on something amazing. Stay tuned!
                </p>
              </div>
              
              {/* Decorative elements */}
              <div className="flex justify-center space-x-2 pt-4">
                <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
