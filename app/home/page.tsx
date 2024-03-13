import React from 'react';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto">
       
        {/* Aquí se inserta la imagen */}
        <div className="mt-8">
          <Image src="https://cdn.pixabay.com/photo/2023/04/19/19/45/gosling-7938445_640.jpg" alt="Descripción de la imagen" width={500} height={500} />
          <p className ="text-center text-xl mt-4">Un patito </p>
        </div>
        
      </div>
     
    </div>
  );
}