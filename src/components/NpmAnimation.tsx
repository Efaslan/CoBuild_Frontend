import { useState, useEffect } from 'react';
import { Github, Code, Users} from 'lucide-react';

const NpmAnimation = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0; // Başa sarması için
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const bouncingIcons = [
    { icon: Github, delay: '0s' },
    { icon: Code, delay: '0.2s' },
    { icon: Users, delay: '0.4s' }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center bg-zinc-950 overflow-hidden relative border border-white/5 rounded-2xl">
      {/* Arka Plan Glow Efekti */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary rounded-full blur-[100px] animate-pulse" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-sm px-8">
        
        {/* Zıplayan İkonlar Grubu */}
        <div className="flex gap-6 items-end h-20">
          {bouncingIcons.map((item, i) => (
            <div 
              key={i} 
              className="w-16 h-16 rounded-2xl border-2 border-primary/40 bg-primary/10 flex items-center justify-center shadow-[0_0_20px_rgba(var(--primary),0.2)] animate-bounce"
              style={{ animationDelay: item.delay, animationDuration: '1s' }}
            >
              <item.icon className="text-primary w-8 h-8" />
            </div>
          ))}
        </div>

        {/* Yükleme Alanı */}
        <div className="w-full space-y-4">
          <div className="w-full h-2.5 bg-zinc-900 rounded-full overflow-hidden border border-white/5 shadow-inner">
            <div 
              className="h-full bg-primary relative transition-all duration-300 ease-out shadow-[0_0_15px_rgba(var(--primary),0.6)]" 
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer Efekti */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite] skew-x-12" />
            </div>
          </div>
          
          {/* Terminal Yazısı */}
          <div className="flex items-center justify-center gap-3 font-mono">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span className="text-zinc-400 text-sm tracking-tight">
              npm install collaboration<span className="animate-pulse">...</span>
            </span>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
      `}} />
    </div>
  );
};

export default NpmAnimation;