import React, { useEffect, useRef } from 'react';

const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initGrid();
    };

    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    // Grid config
    const spacing = 40;
    let rows: { x: number; y: number; basePathX: number; basePathY: number }[][] = [];

    const initGrid = () => {
      rows = [];
      // Add extra cols/rows to cover edges during displacement
      const numCols = Math.ceil(width / spacing) + 2;
      const numRows = Math.ceil(height / spacing) + 2;
      
      for (let y = 0; y < numRows; y++) {
        const row = [];
        for (let x = 0; x < numCols; x++) {
          // Start slightly off-screen (-spacing)
          const bx = (x - 1) * spacing;
          const by = (y - 1) * spacing;
          row.push({
            x: bx,
            y: by,
            basePathX: bx,
            basePathY: by,
          });
        }
        rows.push(row);
      }
    };

    // Animation loop
    let frameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;
      
      const radius = 250; // Interaction radius
      
      for (let y = 0; y < rows.length; y++) {
        for (let x = 0; x < rows[y].length; x++) {
          const p = rows[y][x];
          
          // Physics - Warp effect
          const dx = mouse.x - p.basePathX;
          const dy = mouse.y - p.basePathY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          let tx = p.basePathX;
          let ty = p.basePathY;
          
          if (dist < radius) {
             const angle = Math.atan2(dy, dx);
             const force = (radius - dist) / radius; 
             // Push away slightly
             const disp = force * 20; 
             // Using -cos/sin to repel
             tx -= Math.cos(angle) * disp;
             ty -= Math.sin(angle) * disp;
          }
          
          // Smooth lerp to target position
          p.x += (tx - p.x) * 0.1;
          p.y += (ty - p.y) * 0.1;
          
          // Draw lines
          // Draw Right
          if (x < rows[y].length - 1) {
             const next = rows[y][x+1];
             drawLine(ctx, p, next, mouse, radius);
          }
          // Draw Down
          if (y < rows.length - 1) {
             const next = rows[y+1][x];
             drawLine(ctx, p, next, mouse, radius);
          }
        }
      }
      
      frameId = requestAnimationFrame(animate);
    };

    const drawLine = (ctx: CanvasRenderingContext2D, p1: any, p2: any, mouse: any, radius: number) => {
       // Check distance from line midpoint to mouse for highlighting
       const mx = (p1.x + p2.x) / 2;
       const my = (p1.y + p2.y) / 2;
       const d = Math.sqrt((mx - mouse.x)**2 + (my - mouse.y)**2);
       
       let alpha = 0.05; // Base opacity (very subtle)
       let isHighlight = false;
       
       if (d < radius) {
          // Fade in highlight based on distance
          alpha = 0.05 + (1 - d/radius) * 0.35; 
          isHighlight = true;
       }
       
       ctx.beginPath();
       ctx.moveTo(p1.x, p1.y);
       ctx.lineTo(p2.x, p2.y);
       // Cyan highlight or White base
       ctx.strokeStyle = isHighlight 
          ? `rgba(56, 189, 248, ${alpha})` 
          : `rgba(255, 255, 255, ${alpha})`;
       ctx.stroke();
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
};

export default InteractiveBackground;