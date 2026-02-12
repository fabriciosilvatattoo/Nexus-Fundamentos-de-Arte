import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutTemplate, AlertOctagon } from 'lucide-react';

export const DesignPrinciples: React.FC = () => {
  const [activeView, setActiveView] = useState<'chaos' | 'structure'>('structure');

  // Generate random positions for chaos mode
  const chaosItems = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 90}%`,
    top: `${Math.random() * 90}%`,
    size: Math.random() * 40 + 10,
  }));

  return (
    <div className="space-y-12">
      <div className="border-b border-nexus-dim/30 pb-6">
        <h2 className="text-4xl font-display font-bold text-gray-100 mb-2">03 // PRINCÍPIOS DE DESIGN</h2>
        <p className="text-nexus-cyan/80 font-mono text-sm max-w-2xl">
          A Regra 80/20 (Princípio de Pareto): 80% do seu canvas deve ser 'descanso' (vazio/simples), 
          e 20% deve ser 'detalhe' (complexo/foco).
        </p>
      </div>

      <div className="flex justify-center gap-6 mb-8">
        <button
          onClick={() => setActiveView('structure')}
          className={`px-8 py-3 rounded-full font-display tracking-widest text-sm border transition-all
            ${activeView === 'structure' ? 'bg-nexus-cyan text-nexus-dark border-nexus-cyan' : 'border-gray-600 text-gray-400 hover:border-gray-200'}`}
        >
          APLICAR REGRA 80/20
        </button>
        <button
          onClick={() => setActiveView('chaos')}
          className={`px-8 py-3 rounded-full font-display tracking-widest text-sm border transition-all
             ${activeView === 'chaos' ? 'bg-nexus-purple text-white border-nexus-purple' : 'border-gray-600 text-gray-400 hover:border-gray-200'}`}
        >
          SEM HIERARQUIA (CAOS)
        </button>
      </div>

      <div className="bg-white rounded-lg h-[500px] w-full relative overflow-hidden shadow-2xl transition-colors duration-500">
        
        {activeView === 'structure' ? (
          // 80/20 STRUCTURE
          <div className="absolute inset-0 flex">
            {/* The 80% Empty Space */}
            <div className="w-[70%] h-full bg-gray-200 flex items-center justify-center relative">
                <span className="text-gray-400 font-display text-4xl font-bold opacity-20 text-center">ÁREA DE DESCANSO (80%)</span>
                {/* Subtle texture */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </div>

            {/* The 20% Detail Space */}
            <div className="w-[30%] h-full bg-nexus-dark flex flex-col items-center justify-center p-8 relative overflow-hidden">
               <div className="absolute inset-0 bg-nexus-cyan/5"></div>
               <motion.div 
                 initial={{ scale: 0.8, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 className="relative z-10 grid grid-cols-2 gap-2"
               >
                  {/* Detailed clusters */}
                  <div className="w-12 h-12 bg-nexus-cyan rounded-sm"></div>
                  <div className="w-12 h-12 bg-nexus-purple rounded-full"></div>
                  <div className="col-span-2 h-4 bg-white rounded-full w-full"></div>
                  <div className="col-span-2 h-2 bg-gray-500 rounded-full w-1/2"></div>
                  <div className="w-6 h-6 border-2 border-nexus-cyan"></div>
                  <div className="w-6 h-6 border-2 border-nexus-purple rounded-full"></div>
               </motion.div>
               
               <div className="mt-8 text-nexus-cyan font-mono text-xs text-center">
                  <LayoutTemplate className="mx-auto mb-2" size={16}/>
                  PONTO FOCAL (20%)
               </div>
            </div>
          </div>
        ) : (
          // CHAOS
          <div className="absolute inset-0 bg-gray-300">
             {chaosItems.map((item) => (
               <motion.div
                 key={item.id}
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 className="absolute bg-nexus-dark border border-nexus-purple/50"
                 style={{
                   left: item.left,
                   top: item.top,
                   width: item.size,
                   height: item.size,
                   borderRadius: Math.random() > 0.5 ? '50%' : '0'
                 }}
               />
             ))}
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-red-600 text-white font-display font-bold text-xl px-6 py-2 rounded shadow-xl flex items-center gap-2">
                   <AlertOctagon /> TENSÃO VISUAL: CRÍTICA
                </div>
             </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-8 text-sm font-mono text-gray-500">
        <div className={`p-4 border rounded ${activeView === 'structure' ? 'border-nexus-cyan text-gray-300' : 'border-gray-800'}`}>
          <h4 className="text-nexus-cyan mb-2">BOM DESIGN</h4>
          O olho tem onde descansar. O contraste guia o espectador diretamente para o ponto focal.
        </div>
        <div className={`p-4 border rounded ${activeView === 'chaos' ? 'border-nexus-purple text-gray-300' : 'border-gray-800'}`}>
          <h4 className="text-nexus-purple mb-2">DESIGN RUIM</h4>
          Quando tudo é importante, nada é importante. O olho do espectador se perde e vai embora.
        </div>
      </div>
    </div>
  );
};