import React from 'react';
import Image from "next/image";
import { logoAzul } from '@/assets';

export default function Sidebar() {
  return (
    <div className="flex">
      {/* Barra Lateral */}
      <aside className="h-screen w-64 bg-gray-900 text-white flex flex-col items-center py-8">
        {/* Logotipo */}
        
        <Image src={logoAzul} alt="Citi" className="w-24 h-24 mb-10" />

        {/* Botões */}
        <button className="w-48 py-3 mb-4 text-center bg-blue-600 hover:bg-blue-700 rounded-md transition">
          Botão 1
        </button>
        <button className="w-48 py-3 text-center bg-blue-600 hover:bg-blue-700 rounded-md transition">
          Botão 2
        </button>
      </aside>

      <div className="flex-1 flex flex-col">
        {/* Barra Superior */}
        <header className="w-full h-16 bg-gray-800 text-white flex items-center justify-between px-6 shadow-md">
          <h1 className="text-xl font-bold">Meu Sistema</h1>

          <nav>
            <ul className="flex gap-4">
              <li>
                <a href="#" className="hover:underline">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Link 3
                </a>
              </li>
            </ul>
          </nav>
        </header>

      </div>
    </div>
  );
}

