import React from 'react';
import { ModuleId, MODULES } from '../types';
import { Hexagon, Terminal, Box, Layers, Zap } from 'lucide-react';

interface SidebarProps {
  activeModule: ModuleId;
  onSelect: (id: ModuleId) => void;
}

const Icons = {
  [ModuleId.VISUAL_ELEMENTS]: Box,
  [ModuleId.SHAPE_LANGUAGE]: Hexagon,
  [ModuleId.DESIGN_PRINCIPLES]: Layers,
  [ModuleId.SILHUETTE]: Zap,
  [ModuleId.NOTAN]: Terminal,
};

export const Sidebar: React.FC<SidebarProps> = ({ activeModule, onSelect }) => {
  return (
    <aside className="w-20 md:w-64 bg-nexus-panel border-r border-nexus-dim/30 flex flex-col h-full sticky top-0 z-50">
      <div className="p-6 border-b border-nexus-dim/30 flex items-center gap-3">
        <div className="w-8 h-8 bg-nexus-cyan rounded-sm shadow-[0_0_15px_rgba(0,243,255,0.5)] flex items-center justify-center text-nexus-dark font-bold">
          N
        </div>
        <span className="hidden md:block font-display font-bold tracking-widest text-nexus-cyan">NEXUS</span>
      </div>

      <nav className="flex-1 py-6 flex flex-col gap-2">
        {MODULES.map((mod) => {
          const Icon = Icons[mod.id];
          const isActive = activeModule === mod.id;
          
          return (
            <button
              key={mod.id}
              onClick={() => onSelect(mod.id)}
              className={`group relative flex items-center px-6 py-4 transition-all duration-300 w-full text-left
                ${isActive 
                  ? 'bg-nexus-cyan/10 text-nexus-cyan border-r-4 border-nexus-cyan' 
                  : 'text-gray-500 hover:text-gray-200 hover:bg-white/5 border-r-4 border-transparent'
                }`}
            >
              <Icon size={20} className={`${isActive ? 'drop-shadow-[0_0_8px_rgba(0,243,255,0.8)]' : ''}`} />
              <div className="hidden md:flex flex-col ml-4">
                <span className={`font-display text-sm tracking-wider ${isActive ? 'font-bold' : 'font-normal'}`}>
                  {mod.title}
                </span>
                <span className="text-[10px] uppercase opacity-60">{mod.subtitle}</span>
              </div>
              
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-nexus-cyan/0 to-nexus-cyan/5 pointer-events-none" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-6 border-t border-nexus-dim/30 text-[10px] text-gray-600 hidden md:block">
        <p>STATUS DO SISTEMA: ONLINE</p>
        <p>VER: 1.0.4-ALPHA (PT-BR)</p>
      </div>
    </aside>
  );
};