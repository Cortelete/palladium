import { motion, useAnimation } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

export function CoinLogo({ src, alt }: { src: string; alt: string }) {
  const [velocity, setVelocity] = useState(0);
  const rotationRef = useRef(0);
  const controls = useAnimation();

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const updateRotation = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (velocity > 0) {
        // Apply friction
        const friction = 200; // degrees per second squared
        let newVelocity = velocity - friction * delta;
        
        if (newVelocity < 0) newVelocity = 0;
        
        // Update rotation
        rotationRef.current += newVelocity * delta;
        
        // If velocity is very low, snap to nearest 360
        if (newVelocity === 0) {
           const remainder = rotationRef.current % 360;
           if (remainder !== 0) {
             // Snap to 0 or 360 depending on which is closer
             const target = rotationRef.current - remainder + (remainder > 180 ? 360 : 0);
             controls.start({ rotateY: target, transition: { type: 'spring', stiffness: 100, damping: 15 } });
             rotationRef.current = target;
           }
        } else {
           controls.set({ rotateY: rotationRef.current });
        }
        
        setVelocity(newVelocity);
      }

      animationFrameId = requestAnimationFrame(updateRotation);
    };

    animationFrameId = requestAnimationFrame(updateRotation);
    return () => cancelAnimationFrame(animationFrameId);
  }, [velocity, controls]);

  const handleClick = () => {
    setVelocity((prev) => prev + 1080); // Add 3 spins per second to velocity
  };

  return (
    <motion.div
      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 cursor-pointer mx-auto"
      animate={controls}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <img src={src} alt={alt} className="w-full h-full object-contain drop-shadow-md" />
    </motion.div>
  );
}
