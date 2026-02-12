import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, CheckCircle2, XCircle } from 'lucide-react';

export const Silhouette: React.FC = () => {
  const [isXray, setIsXray] = useState(false);

  return (
    <div className="space-y-12">
      <div className="border-b border-nexus-dim/30 pb-6">
        <h2 className="text-4xl font-display font-bold text-gray-100 mb-2">04 // SILHUETA</h2>
        <p className="text-nexus-cyan/80 font-mono text-sm max-w-2xl">
          Se seu personagem não for legível em preto puro, o design falhou. Detalhes não salvam uma silhueta ruim.
        </p>
      </div>

      <button
        onClick={() => setIsXray(!isXray)}
        className={`mx-auto flex items-center gap-3 px-8 py-4 rounded-full font-display font-bold tracking-widest text-lg transition-all shadow-[0_0_30px_rgba(0,0,0,0.5)]
          ${isXray ? 'bg-white text-black hover:bg-gray-200' : 'bg-nexus-cyan text-nexus-dark hover:bg-cyan-400'}`}
      >
        {isXray ? <EyeOff /> : <Eye />}
        {isXray ? 'DESATIVAR RAIO-X' : 'ATIVAR RAIO-X DE SILHUETA'}
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* BAD EXAMPLE */}
        <div className="flex flex-col items-center gap-4 group">
            <div className={`w-full aspect-square rounded-xl border-2 transition-all duration-500 relative flex items-center justify-center overflow-hidden
                ${isXray ? 'bg-white border-white' : 'bg-gray-800 border-red-900/50'}`}>
                
                <div className="absolute top-4 left-4 z-10">
                    <span className="flex items-center gap-2 text-red-500 font-bold bg-black/80 px-3 py-1 rounded-full text-xs border border-red-500">
                        <XCircle size={14}/> LEITURA RUIM
                    </span>
                </div>

                {/* The "Bad" Character - Arms glued to sides, symmetrical boring pose */}
                <motion.div 
                    className="relative w-48 h-64"
                    animate={{ 
                        filter: isXray ? "brightness(0)" : "brightness(1) drop-shadow(0 0 10px rgba(0,0,0,0.5))" 
                    }}
                >
                    {/* Head */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-20 bg-gray-400 rounded-full z-20"></div>
                    {/* Body */}
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 w-24 h-32 bg-gray-600 rounded z-10"></div>
                    {/* Arms (Glued to body - BAD) */}
                    <div className="absolute top-20 left-10 w-8 h-32 bg-gray-500 rounded"></div>
                    <div className="absolute top-20 right-10 w-8 h-32 bg-gray-500 rounded"></div>
                    {/* Legs */}
                    <div className="absolute top-44 left-14 w-8 h-20 bg-gray-700"></div>
                    <div className="absolute top-44 right-14 w-8 h-20 bg-gray-700"></div>
                    
                    {/* Detail that disappears in silhouette */}
                    {!isXray && <div className="absolute top-24 left-1/2 -translate-x-1/2 w-10 h-10 bg-nexus-cyan rounded-full z-30 animate-pulse"></div>}
                </motion.div>
            </div>
            <p className="text-gray-500 text-sm font-mono text-center">
                Sem cor, isso parece uma batata. Nenhum espaço negativo entre os membros.
            </p>
        </div>

        {/* GOOD EXAMPLE */}
        <div className="flex flex-col items-center gap-4 group">
            <div className={`w-full aspect-square rounded-xl border-2 transition-all duration-500 relative flex items-center justify-center overflow-hidden
                ${isXray ? 'bg-white border-white' : 'bg-gray-800 border-green-900/50'}`}>
                
                <div className="absolute top-4 left-4 z-10">
                    <span className="flex items-center gap-2 text-green-500 font-bold bg-black/80 px-3 py-1 rounded-full text-xs border border-green-500">
                        <CheckCircle2 size={14}/> LEITURA CLARA
                    </span>
                </div>

                {/* The "Good" Character - Dynamic pose, weapon, cape */}
                <motion.div 
                    className="relative w-48 h-64"
                    animate={{ 
                        filter: isXray ? "brightness(0)" : "brightness(1) drop-shadow(0 0 10px rgba(0,0,0,0.5))" 
                    }}
                >
                    {/* Head */}
                    <div className="absolute top-0 left-16 w-14 h-18 bg-nexus-cyan rounded-sm z-20"></div>
                    {/* Body */}
                    <div className="absolute top-16 left-16 w-20 h-28 bg-blue-600 rounded z-10 skew-x-6"></div>
                    {/* Arm (Holding sword out) */}
                    <div className="absolute top-20 left-36 w-24 h-6 bg-blue-500 rotate-[-15deg] origin-left"></div>
                    {/* Sword */}
                    <div className="absolute top-[-20px] left-[220px] w-4 h-48 bg-gray-200 rotate-[30deg]"></div>
                    {/* Arm (Back) */}
                    <div className="absolute top-20 left-4 w-6 h-24 bg-blue-700 rotate-[20deg]"></div>
                    {/* Legs (Wide stance) */}
                    <div className="absolute top-40 left-10 w-8 h-24 bg-blue-800 rotate-[15deg]"></div>
                    <div className="absolute top-40 left-28 w-8 h-24 bg-blue-800 rotate-[-15deg]"></div>
                    {/* Cape (Flowing) */}
                    <div className="absolute top-16 left-0 w-32 h-40 bg-purple-600 skew-x-[20deg] z-0 opacity-80"></div>
                </motion.div>
            </div>
            <p className="text-gray-500 text-sm font-mono text-center">
                Linha de ação clara. Espaço negativo sob os braços. Contorno distinto.
            </p>
        </div>
      </div>
    </div>
  );
};