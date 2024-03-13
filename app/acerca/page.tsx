import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Acerca de mi</h2>
        <p className="text-lg text-gray-600 mb-8">
          Bueno soy una persona dedica y fundador de Tecnologies Nautico.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gray-300 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Tecnologies Nautico</h3>
            <p className="text-gray-600">
              Mi empresa actualmente esta desarrollando el proyecto AquaSeltz
            </p>
          </div>
          <div className="border border-gray-300 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Mis Valores  sukavliat</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Chido</li>
              <li>Innovador</li>
              <li>Honesto</li>
              <li>Colaborador</li>
              <li>Responsabilidad</li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
    