import React from 'react';
import Image from "next/image";
import { GameController, logoAzul, UserCircle } from '@/assets';


export default function Sidebar() {
  return (
    <div className="flex fixed left-0 top-0 h-full z-10" >
      {/* Barra Lateral */}
      <aside className="h-screen w-64 bg-blue-400 text-white flex flex-col items-center py-8">
        {/* Logotipo */}
        
        <Image src={logoAzul} alt="Citi" className="w-35 h-35 mb-8" />

        {/* Botões */}
        
        <a href="https://www.youtube.com/">
        <button className="flex w-48 py-1 mb-4 bg-blue-300 text-white font-bold hover:bg-blue-500 rounded-md transition">
        
        <Image src={GameController} alt="Ícone" className="w-9 h-9 mr-2 ml-2" />
        Explorar partidas
        
        </button>
        </a>
        
        <a href="https://www.youtube.com/">
        <button className="flex w-48 py-1 mb-4 bg-blue-300 text-white font-bold hover:bg-blue-500 rounded-md transition">
        
        <Image src={UserCircle} alt="Ícone" className="w-9 h-9  mr-2 ml-2" />
        
        Perfil
      
        </button>
        </a>

      </aside>

    </div>
  );
}

