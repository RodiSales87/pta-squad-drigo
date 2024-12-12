import React from 'react';
import logo from 'pta-squad-drigo/client/src/assets/CITi logo.png';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex">
      {/* Barra Lateral */}
      <aside className="h-screen w-64 bg-gray-900 text-white flex flex-col items-center py-8">
        {/* Logotipo */}
        <img src={logo} alt="Citi" className="w-24 h-24 mb-10" />

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

        {/* Conteúdo Principal */}
        <main className="p-8 mt-4 flex-1 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

