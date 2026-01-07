const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden animated-gradient-bg">
      {/* Gradient Blobs */}
      <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/20 blur-[100px] animate-float" />
      <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-secondary/20 blur-[120px] animate-float-delayed" />
      <div className="absolute bottom-1/4 left-1/4 h-72 w-72 rounded-full bg-accent/15 blur-[100px] animate-float" />
      <div className="absolute -bottom-20 right-1/3 h-80 w-80 rounded-full bg-primary/15 blur-[100px] animate-float-delayed" />
      
      {/* Neural Network Lines */}
      <svg className="absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(250 89% 70%)" stopOpacity="0.5" />
            <stop offset="50%" stopColor="hsl(217 91% 60%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(280 70% 60%)" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        
        {/* Animated neural paths */}
        <path
          d="M0,200 Q200,100 400,200 T800,200 T1200,200 T1600,200"
          fill="none"
          stroke="url(#neural-gradient)"
          strokeWidth="1"
          className="neural-line"
        />
        <path
          d="M0,400 Q300,300 600,400 T1200,400"
          fill="none"
          stroke="url(#neural-gradient)"
          strokeWidth="1"
          className="neural-line"
          style={{ animationDelay: '0.5s' }}
        />
        <path
          d="M200,0 Q300,200 200,400 T200,800"
          fill="none"
          stroke="url(#neural-gradient)"
          strokeWidth="1"
          className="neural-line"
          style={{ animationDelay: '1s' }}
        />
        <path
          d="M600,0 Q500,300 600,600 T600,1000"
          fill="none"
          stroke="url(#neural-gradient)"
          strokeWidth="1"
          className="neural-line"
          style={{ animationDelay: '1.5s' }}
        />
        <path
          d="M1000,0 Q1100,250 1000,500 T1000,900"
          fill="none"
          stroke="url(#neural-gradient)"
          strokeWidth="1"
          className="neural-line"
          style={{ animationDelay: '2s' }}
        />
        
        {/* Neural nodes */}
        {[
          { cx: 200, cy: 200 },
          { cx: 400, cy: 150 },
          { cx: 600, cy: 250 },
          { cx: 800, cy: 180 },
          { cx: 300, cy: 400 },
          { cx: 500, cy: 450 },
          { cx: 700, cy: 380 },
          { cx: 900, cy: 420 },
          { cx: 150, cy: 600 },
          { cx: 450, cy: 650 },
          { cx: 750, cy: 580 },
          { cx: 1000, cy: 300 },
        ].map((node, i) => (
          <circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r="3"
            fill="hsl(250 89% 70%)"
            className="animate-pulse-glow"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </svg>
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
