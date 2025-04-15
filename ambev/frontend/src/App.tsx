import React from 'react';
import { UserList } from './components/UserList';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Sistema de Usuários</h1>
              <p className="text-gray-500 mt-2">Desenvolvido por Levi Nakayama</p>
            </div>
            <UserList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App; 