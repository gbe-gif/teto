/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Home as HomeIcon, MapPin, Dumbbell, Flame, ShieldPlus, Users } from 'lucide-react';
import Home from './pages/Home';
import Places from './pages/Places';
import Hugo from './pages/Hugo';
import Jackson from './pages/Jackson';
import Levi from './pages/Levi';
import Parents from './pages/Parents';

type Page = 'home' | 'places' | 'hugo' | 'jackson' | 'levi' | 'parents';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'places': return <Places />;
      case 'hugo': return <Hugo />;
      case 'jackson': return <Jackson />;
      case 'levi': return <Levi />;
      case 'parents': return <Parents />;
      default: return <Home />;
    }
  };

  const navItems = [
    { id: 'home', label: '홈', icon: HomeIcon, color: 'text-stone-400', activeColor: 'text-stone-100' },
    { id: 'places', label: '장소', icon: MapPin, color: 'text-stone-400', activeColor: 'text-stone-100' },
    { id: 'hugo', label: '휴고', icon: Dumbbell, color: 'text-stone-400', activeColor: 'text-white' },
    { id: 'jackson', label: '잭슨', icon: Flame, color: 'text-stone-400', activeColor: 'text-emerald-500' },
    { id: 'levi', label: '레비', icon: ShieldPlus, color: 'text-stone-400', activeColor: 'text-sky-400' },
    { id: 'parents', label: '부모님', icon: Users, color: 'text-stone-400', activeColor: 'text-amber-500' },
  ] as const;

  return (
    <div className="min-h-screen bg-zinc-950 text-stone-100 font-sans selection:bg-stone-700">
      <div className="max-w-2xl mx-auto bg-zinc-900 min-h-screen relative shadow-2xl overflow-x-hidden">
        
        {/* Header */}
        <header className="sticky top-0 z-10 bg-zinc-900/80 backdrop-blur-md border-b border-stone-800 p-4">
          <h1 className="text-center font-black text-lg tracking-tight text-stone-200 leading-tight">
            빡통 테토 삼형제의<br />애지중지 막내입니다
          </h1>
        </header>

        {/* Main Content */}
        <main className="w-full">
          {renderPage()}
        </main>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-900/95 backdrop-blur-lg border-t border-stone-800 pb-2">
          <div className="max-w-2xl mx-auto flex items-center justify-around p-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id as Page)}
                  className={`flex flex-col items-center justify-center p-2 min-w-[3.5rem] transition-colors duration-200 ${
                    isActive ? item.activeColor : item.color
                  }`}
                >
                  <Icon className={`w-6 h-6 mb-1 ${isActive ? 'scale-110' : 'opacity-70'} transition-transform`} />
                  <span className={`text-[10px] font-bold ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}
