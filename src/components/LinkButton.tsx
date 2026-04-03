import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface LinkButtonProps {
  href?: string;
  onClick?: () => void;
  icon: ReactNode;
  children: ReactNode;
}

export function LinkButton({ href, onClick, icon, children }: LinkButtonProps) {
  const content = (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="relative flex items-center w-[92%] mx-auto py-1.5 px-2 sm:py-2 sm:px-3 mb-1.5 sm:mb-2 bg-white/80 hover:bg-white backdrop-blur-md border border-white/80 rounded-lg shadow-[0_4px_15px_rgba(37,99,235,0.08)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.25)] transition-all duration-300 group overflow-hidden after:absolute after:inset-0 after:w-full after:h-full after:bg-gradient-to-r after:from-transparent after:via-white/60 after:to-transparent after:-translate-x-full after:animate-[shimmer_2.5s_infinite_ease-in-out]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700 shadow-inner mr-2 group-hover:scale-110 transition-transform duration-300 shrink-0 relative z-10">
        {icon}
      </div>
      <div className="flex-1 text-center pr-9 sm:pr-10 relative z-10">
        <span className="font-sans font-semibold text-gray-800 text-[11px] sm:text-xs group-hover:text-blue-700 transition-colors tracking-tight">
          {children}
        </span>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="block w-full">
      {content}
    </button>
  );
}
