import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Triangle, Square, Circle } from 'lucide-react';

type ShapeMode = 'villain' | 'hero' | 'friend';

export const ShapeLanguage: React.FC = () => {
  const [mode, setMode] = useState<ShapeMode>('villain');

  const shapeConfig = {
    villain: {
      color: '#ef4444', // Red-500
      rotate: 45,
      radius: 0,
      scale: 1,
      text: "PERIGO // AGRESSIVIDADE // VELOCIDADE",
      desc: "Triângulos criam tensão. Eles apontam, cortam e implicam movimento e perigo."
    },
    hero: {
      color: '#3b82f6', // Blue-500
      rotate: 0,
      radius: 4,
      scale: 1.1,
      text: "FORÇA // ESTABILIDADE // CONFIANÇA",
      desc: "Quadrados são objetos imóveis. Representam confiabilidade, tecnologia e moral inabalável."
    },
    friend: {
      color: '#22c55e', // Green-500
      rotate: 0,
      radius: 100, // Full circle
      scale: 1,
      text: "SEGURANÇA // SUAVIDADE // ORGÂNICO",
      desc: "Círculos não têm pontas para te machucar. Eles rolam, são acolhedores e inofensivos."
    }
  };

  const current = shapeConfig[mode];

  return (
    <div className="space-y-12">
      <div className="border-b border-nexus-dim/30 pb-6">
        <h2 className="text-4xl font-display font-bold text-gray-100 mb-2">02 // LINGUAGEM DA FORMA</h2>
        <p className="text-nexus-cyan/80 font-mono text-sm max-w-2xl">
          Somos programados para sentir formas antes de compreendê-las. Use esse código primitivo para desenhar personagens instantaneamente legíveis pelo público.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[500px]">
        {/* CONTROLS */}
        <div className="space-y-4 lg:col-span-1">
          <button
            onClick={() => setMode('villain')}
            className={`w-full p-4 flex items-center justify-between border transition-all duration-300
              ${mode === 'villain' ? 'bg-red-900/20 border-red-500 text-red-500' : 'bg-nexus-panel border-nexus-dim/30 text-gray-500 hover:border-gray-400'}`}
          >
            <span className="font-display">ARQUÉTIPO VILÃO</span>
            <Triangle className={mode === 'villain' ? "fill-red-500/20" : ""} size={20} />
          </button>

          <button
            onClick={() => setMode('hero')}
            className={`w-full p-4 flex items-center justify-between border transition-all duration-300
              ${mode === 'hero' ? 'bg-blue-900/20 border-blue-500 text-blue-500' : 'bg-nexus-panel border-nexus-dim/30 text-gray-500 hover:border-gray-400'}`}
          >
            <span className="font-display">ARQUÉTIPO HERÓI</span>
            <Square className={mode === 'hero' ? "fill-blue-500/20" : ""} size={20} />
          </button>

          <button
            onClick={() => setMode('friend')}
            className={`w-full p-4 flex items-center justify-between border transition-all duration-300
              ${mode === 'friend' ? 'bg-green-900/20 border-green-500 text-green-500' : 'bg-nexus-panel border-nexus-dim/30 text-gray-500 hover:border-gray-400'}`}
          >
            <span className="font-display">ARQUÉTIPO AMIGO</span>
            <Circle className={mode === 'friend' ? "fill-green-500/20" : ""} size={20} />
          </button>

          <div className="mt-8 p-6 bg-nexus-panel border border-nexus-dim/30 rounded text-sm text-gray-400 font-mono">
            <h4 className="text-white mb-2 font-bold">ANÁLISE:</h4>
            <p>{current.desc}</p>
          </div>
        </div>

        {/* VISUALIZER */}
        <div className="lg:col-span-2 bg-nexus-dark border border-nexus-dim/30 rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10" 
              style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-10 font-display text-2xl tracking-[0.2em] font-bold z-10 text-center px-4"
                style={{ color: current.color }}
              >
                {current.text}
              </motion.div>
            </AnimatePresence>

            <motion.div
              className="w-48 h-48 shadow-[0_0_50px_rgba(0,0,0,0.5)] z-20"
              animate={{
                backgroundColor: current.color,
                rotate: current.rotate,
                borderRadius: mode === 'villain' ? "0%" : mode === 'friend' ? "50%" : "4px",
                scale: current.scale,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
            >
                {/* Internal graphic detail to make it look sci-fi */}
                <div className="w-full h-full border-[1px] border-white/30 scale-90" 
                     style={{ borderRadius: mode === 'friend' ? '50%' : '0' }} />
            </motion.div>

            {/* Reflection / Floor */}
            <motion.div 
               className="w-48 h-4 mt-12 bg-black/50 blur-xl rounded-[100%]"
               animate={{ scaleX: mode === 'villain' ? 0.5 : 1 }}
            />
        </div>
      </div>
    </div>
  );
};