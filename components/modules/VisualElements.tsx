import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Move3d } from 'lucide-react';

export const VisualElements: React.FC = () => {
  const [rotation, setRotation] = useState(45);
  const [lineMode, setLineMode] = useState<'static' | 'dynamic'>('static');

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="border-b border-nexus-dim/30 pb-6">
        <h2 className="text-4xl font-display font-bold text-gray-100 mb-2">01 // ELEMENTOS VISUAIS</h2>
        <p className="text-nexus-cyan/80 font-mono text-sm max-w-2xl">
          O observador define a realidade. Uma forma é apenas um contorno até que a luz e a perspectiva lhe deem volume.
          Uma linha é apenas um caminho até que a intenção lhe dê emoção.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* INTERACTION 1: PERSPECTIVE & FORM */}
        <div className="bg-nexus-panel p-6 rounded-lg border border-nexus-dim/30 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-2 bg-nexus-cyan/20 text-nexus-cyan text-[10px] font-mono">
            DEMO_INTERATIVA_01
          </div>
          
          <h3 className="text-xl font-display text-gray-200 mb-4 flex items-center gap-2">
            <Move3d className="text-nexus-purple" /> RELATIVIDADE ESPACIAL
          </h3>
          
          <div className="h-64 flex items-center justify-center bg-nexus-dark/50 rounded-lg mb-6 [perspective:1000px]">
            <motion.div 
              className="w-32 h-32 relative [transform-style:preserve-3d]"
              style={{ rotateY: rotation, rotateX: -20 }}
            >
              {/* CUBE FACES */}
              <div className="absolute inset-0 border-2 border-nexus-cyan bg-nexus-cyan/10 [transform:translateZ(64px)] flex items-center justify-center text-nexus-cyan font-mono text-xs shadow-[0_0_20px_rgba(0,243,255,0.2)]">FRENTE</div>
              <div className="absolute inset-0 border-2 border-nexus-purple bg-nexus-purple/10 [transform:rotateY(180deg)_translateZ(64px)] flex items-center justify-center text-nexus-purple font-mono text-xs">TRÁS</div>
              <div className="absolute inset-0 border-2 border-gray-500 bg-gray-500/10 [transform:rotateY(90deg)_translateZ(64px)] flex items-center justify-center text-gray-400 font-mono text-xs">DIR</div>
              <div className="absolute inset-0 border-2 border-gray-500 bg-gray-500/10 [transform:rotateY(-90deg)_translateZ(64px)] flex items-center justify-center text-gray-400 font-mono text-xs">ESQ</div>
              <div className="absolute inset-0 border-2 border-gray-700 bg-gray-700/10 [transform:rotateX(90deg)_translateZ(64px)]"></div>
              <div className="absolute inset-0 border-2 border-gray-700 bg-gray-700/10 [transform:rotateX(-90deg)_translateZ(64px)] shadow-xl"></div>
            </motion.div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono text-gray-500">
              <span>0°</span>
              <span>ROTAÇÃO DO OBSERVADOR</span>
              <span>360°</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="360" 
              value={rotation}
              onChange={(e) => setRotation(parseInt(e.target.value))}
              className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-nexus-cyan"
            />
          </div>
        </div>

        {/* INTERACTION 2: LINE PSYCHOLOGY */}
        <div className="bg-nexus-panel p-6 rounded-lg border border-nexus-dim/30 relative">
          <h3 className="text-xl font-display text-gray-200 mb-4 flex items-center gap-2">
             <MousePointer2 className="text-nexus-purple" /> EMOÇÃO DA LINHA
          </h3>

          <div className="h-48 bg-nexus-dark/50 rounded-lg mb-6 flex items-center justify-center overflow-hidden relative">
            <svg width="100%" height="100%" className="absolute inset-0">
               {lineMode === 'static' ? (
                 <motion.line 
                   x1="10%" y1="50%" x2="90%" y2="50%" 
                   stroke="#00f3ff" 
                   strokeWidth="4"
                   initial={{ pathLength: 0 }}
                   animate={{ pathLength: 1 }}
                   transition={{ duration: 1 }}
                 />
               ) : (
                 <motion.path
                   d="M 10 50 L 50 20 L 90 80 L 130 30 L 170 90 L 210 40 L 250 80 L 300 50"
                   fill="none"
                   stroke="#bd00ff"
                   strokeWidth="4"
                   initial={{ pathLength: 0 }}
                   animate={{ pathLength: 1 }}
                   transition={{ duration: 0.5, type: "spring" }}
                   // Scale path to fit container conceptually
                   vectorEffect="non-scaling-stroke"
                   transform="scale(1.5, 1) translate(0, 50)"
                 />
               )}
            </svg>
            <p className={`absolute bottom-4 font-display tracking-widest text-2xl ${lineMode === 'static' ? 'text-nexus-cyan' : 'text-nexus-purple'}`}>
              {lineMode === 'static' ? 'ESTABILIDADE' : 'CONFLITO'}
            </p>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => setLineMode('static')}
              className={`flex-1 py-3 border font-mono text-sm transition-all
                ${lineMode === 'static' ? 'bg-nexus-cyan/20 border-nexus-cyan text-nexus-cyan' : 'border-gray-700 text-gray-500 hover:border-gray-500'}`}
            >
              HORIZONTAL
            </button>
            <button 
              onClick={() => setLineMode('dynamic')}
              className={`flex-1 py-3 border font-mono text-sm transition-all
                ${lineMode === 'dynamic' ? 'bg-nexus-purple/20 border-nexus-purple text-nexus-purple' : 'border-gray-700 text-gray-500 hover:border-gray-500'}`}
            >
              DIAGONAL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};