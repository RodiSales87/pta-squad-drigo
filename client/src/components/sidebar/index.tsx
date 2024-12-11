import React from 'react';
import Image from "next/image";
import { GameController, logoAzul, UserCircle } from '@/assets';


export default function Sidebar() {
  return (
    <div className="flex">
      {/* Barra Lateral */}
      <aside className="h-screen w-64 bg-blue-400 text-white flex flex-col items-center py-8">
        {/* Logotipo */}
        
        <Image src={logoAzul} alt="Citi" className="w-35 h-35 mb-8" />

        {/* Botões */}
        
        <button className="flex w-48 py-1 mb-4 bg-blue-300 text-white font-bold hover:bg-blue-500 rounded-md transition">
        
        <Image src={GameController} alt="Ícone" className="w-9 h-9 mr-2 ml-2" />
        Explorar partidas
        
        </button>
        
        <button className="flex w-48 py-1 mb-4 bg-blue-300 text-white font-bold hover:bg-blue-500 rounded-md transition">
        
        <Image src={UserCircle} alt="Ícone" className="w-9 h-9  mr-2 ml-2" />
        
        Perfil
      
        </button>
      </aside>

      <div className="flex-1 flex flex-col">
        {/* Barra Superior */}
        <header className="w-full h-16  text-white flex items-center justify-between px-6 shadow-md">
          

          <nav>
            <ul className="flex gap-4">
              <li>
                
              </li>
            </ul>
          </nav>
        </header>

      </div>
    </div>
  );
}

