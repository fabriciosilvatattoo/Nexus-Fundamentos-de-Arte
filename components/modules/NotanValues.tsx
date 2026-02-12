import React, { useState } from 'react';
import { Contrast, ScanEye, Layers, Image as ImageIcon } from 'lucide-react';

type ViewMode = 'color' | 'grayscale' | 'notan';

export const NotanValues: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('color');
  const [blurLevel, setBlurLevel] = useState(2); // "Squint" factor
  const [threshold, setThreshold] = useState(1); // Light balance
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
        url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
        label: "Paisagem (Floresta)"
    },
    {
        url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
        label: "Retrato (Rosto)"
    },
    {
        url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800&auto=format&fit=crop",
        label: "Arquitetura (Formas)"
    }
  ];

  // Advanced CSS filter logic to simulate artistic Notan
  const getFilter = () => {
    switch (viewMode) {
        case 'color':
            return 'none';
        case 'grayscale':
            return 'grayscale(100%)';
        case 'notan':
            // The logic: 
            // 1. Grayscale: Remove hue distraction
            // 2. Blur: Simulate "squinting" to group small details into large shapes (The secret of Notan)
            // 3. Brightness: Adjust the cutoff point (threshold)
            // 4. Contrast: Hard clip to black and white
            return `grayscale(100%) blur(${blurLevel}px) brightness(${threshold}) contrast(10000%)`;
        default:
            return 'none';
    }
  };

  return (
    <div className="space-y-12">
      <div className="border-b border-nexus-dim/30 pb-6">
        <h2 className="text-4xl font-display font-bold text-gray-100 mb-2">05 // NOTAN & ESTRUTURA</h2>
        <p className="text-nexus-cyan/80 font-mono text-sm max-w-2xl">
          Fotos enganam. Elas têm "ruído" demais. Para ver o Notan, você precisa 
          <strong> simplificar</strong> (semicerrar os olhos) e <strong>agrupar</strong> formas.
          Não é apenas contraste; é design de massa.
        </p>
      </div>

      <div className="bg-nexus-panel p-1 rounded-xl border border-nexus-dim/30 shadow-2xl flex flex-col lg:flex-row h-auto lg:h-[600px]">
          
          {/* CONTROLS SIDEBAR */}
          <div className="w-full lg:w-80 border-b lg:border-b-0 lg:border-r border-nexus-dim/30 p-6 flex flex-col gap-8 bg-nexus-dark/50">
            
            {/* Image Selector */}
            <div className="space-y-3">
                <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">01. Selecionar Estudo</span>
                <div className="flex flex-col gap-2">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`px-4 py-3 text-xs font-mono border rounded text-left transition-all flex items-center gap-3
                                ${currentImageIndex === idx 
                                    ? 'bg-nexus-cyan/10 text-nexus-cyan border-nexus-cyan' 
                                    : 'text-gray-400 border-gray-800 hover:border-gray-600 hover:text-gray-200'}`}
                        >
                            <ImageIcon size={14} />
                            {img.label.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>

            {/* View Modes */}
            <div className="space-y-3">
                <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">02. Modo de Visão</span>
                <div className="grid grid-cols-1 gap-2">
                    <button
                        onClick={() => setViewMode('color')}
                        className={`p-3 text-xs font-display rounded border transition-all ${viewMode === 'color' ? 'bg-blue-500/20 border-blue-500 text-blue-400' : 'border-gray-800 text-gray-500'}`}
                    >
                        1. REALIDADE (COR)
                    </button>
                    <button
                        onClick={() => setViewMode('grayscale')}
                        className={`p-3 text-xs font-display rounded border transition-all ${viewMode === 'grayscale' ? 'bg-gray-500/20 border-gray-400 text-gray-300' : 'border-gray-800 text-gray-500'}`}
                    >
                        2. VALOR LOCAL (PB)
                    </button>
                    <button
                        onClick={() => setViewMode('notan')}
                        className={`p-3 text-xs font-display rounded border transition-all ${viewMode === 'notan' ? 'bg-nexus-cyan text-nexus-dark border-nexus-cyan font-bold shadow-[0_0_15px_rgba(0,243,255,0.3)]' : 'border-gray-800 text-gray-500'}`}
                    >
                        3. ESTRUTURA (NOTAN)
                    </button>
                </div>
            </div>

            {/* Notan Sliders (Only visible in Notan mode) */}
            {viewMode === 'notan' && (
                <div className="space-y-6 pt-6 border-t border-nexus-dim/30 animate-in fade-in slide-in-from-left-4">
                    <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-mono text-nexus-cyan">
                            <span>AGRUPAMENTO (BLUR)</span>
                            <span>{blurLevel}px</span>
                        </div>
                        <input 
                            type="range" min="0" max="10" step="0.5"
                            value={blurLevel} 
                            onChange={(e) => setBlurLevel(parseFloat(e.target.value))}
                            className="w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-nexus-cyan"
                        />
                        <p className="text-[10px] text-gray-500 leading-tight">
                            "Semicerre os olhos" para fundir detalhes pequenos em formas grandes.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-mono text-nexus-purple">
                            <span>EQUILÍBRIO LUZ/SOMBRA</span>
                            <span>{(threshold * 100).toFixed(0)}%</span>
                        </div>
                        <input 
                            type="range" min="0.5" max="1.5" step="0.05"
                            value={threshold} 
                            onChange={(e) => setThreshold(parseFloat(e.target.value))}
                            className="w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-nexus-purple"
                        />
                        <p className="text-[10px] text-gray-500 leading-tight">
                            Defina onde a sombra termina e a luz começa.
                        </p>
                    </div>
                </div>
            )}
          </div>

          {/* PREVIEW AREA */}
          <div className="flex-1 bg-black relative overflow-hidden group flex items-center justify-center p-4 lg:p-12">
             
             {/* The Image Container */}
             <div className="relative w-full max-w-2xl aspect-video shadow-2xl transition-all duration-300">
                <img 
                    key={images[currentImageIndex].url}
                    src={images[currentImageIndex].url} 
                    alt="Study"
                    className="w-full h-full object-cover rounded-sm"
                    style={{ filter: getFilter(), transition: 'filter 0.3s ease' }}
                />

                {/* UI Overlay on top of image */}
                <div className="absolute top-4 left-4 flex gap-2">
                    <div className="bg-black/80 backdrop-blur text-white px-3 py-1 text-[10px] font-mono border border-white/20 rounded-sm flex items-center gap-2">
                        {viewMode === 'notan' ? <ScanEye size={12} className="text-nexus-cyan"/> : <Layers size={12}/>}
                        {viewMode.toUpperCase()}
                    </div>
                </div>
             </div>

             {/* Background Grid Pattern */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10"></div>
          </div>

      </div>
    </div>
  );
};