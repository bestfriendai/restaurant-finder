'use client';

import { motion } from "framer-motion";

interface Props {
  onClose: () => void;
}

export function SwipeInstructions({ onClose }: Props) {
  const handleClose = () => {
    localStorage.setItem('instructionsShown', 'true');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-background/80 p-8 rounded-3xl border border-primary/30 max-w-md mx-4"
      >
        <h2 className="text-2xl font-bold text-primary mb-6">How to Use</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
              ←
            </div>
            <div>
              <p className="text-foreground/80">Swipe left to skip</p>
              <p className="text-foreground/60 text-sm">or press Left Arrow</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
              →
            </div>
            <div>
              <p className="text-foreground/80">Swipe right to like</p>
              <p className="text-foreground/60 text-sm">or press Right Arrow</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              ↑
            </div>
            <div>
              <p className="text-foreground/80">Swipe up to mark as must-try</p>
              <p className="text-foreground/60 text-sm">or press Up Arrow</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              F
            </div>
            <div>
              <p className="text-foreground/80">View your matches</p>
              <p className="text-foreground/60 text-sm">press F key</p>
            </div>
          </div>
        </div>
        <button 
          className="mt-8 w-full bg-primary/20 hover:bg-primary/30 text-primary py-3 rounded-xl border border-primary/30"
          onClick={handleClose}
        >
          Got it!
        </button>
      </motion.div>
    </div>
  );
}

