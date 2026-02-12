import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ModuleId } from './types';
import { VisualElements } from './components/modules/VisualElements';
import { ShapeLanguage } from './components/modules/ShapeLanguage';
import { DesignPrinciples } from './components/modules/DesignPrinciples';
import { Silhouette } from './components/modules/Silhouette';
import { NotanValues } from './components/modules/NotanValues';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [activeModule, setActiveModule] = useState<ModuleId>(ModuleId.VISUAL_ELEMENTS);

  const renderModule = () => {
    switch (activeModule) {
      case ModuleId.VISUAL_ELEMENTS: return <VisualElements />;
      case ModuleId.SHAPE_LANGUAGE: return <ShapeLanguage />;
      case ModuleId.DESIGN_PRINCIPLES: return <DesignPrinciples />;
      case ModuleId.SILHUETTE: return <Silhouette />;
      case ModuleId.NOTAN: return <NotanValues />;
      default: return <VisualElements />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-nexus-dark text-gray-200 overflow-hidden font-sans selection:bg-nexus-cyan selection:text-nexus-dark">
      <Sidebar activeModule={activeModule} onSelect={setActiveModule} />
      
      <main className="flex-1 h-full overflow-y-auto relative bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-nexus-panel via-nexus-dark to-nexus-dark">
        <div className="max-w-6xl mx-auto p-8 lg:p-12 pb-32">
          
          {/* Breadcrumbs / Top Status */}
          <div className="flex justify-between items-center mb-12 text-[10px] font-mono tracking-widest text-gray-500 border-b border-gray-800 pb-2">
            <span>NEXUS // FUNDAMENTOS_ARTE // MOD_01</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              CONECTADO
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeModule}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderModule()}
            </motion.div>
          </AnimatePresence>

        </div>
        
        {/* Footer decoration */}
        <div className="fixed bottom-0 right-0 p-4 opacity-20 pointer-events-none">
          <svg width="200" height="100" viewBox="0 0 200 100">
             <path d="M 0 100 L 200 100 L 200 50 L 150 0 L 0 0" fill="none" stroke="#00f3ff" strokeWidth="1" />
             <text x="140" y="30" fill="#00f3ff" fontFamily="monospace" fontSize="10">NXS-SYS</text>
          </svg>
        </div>
      </main>
    </div>
  );
};

export default App;