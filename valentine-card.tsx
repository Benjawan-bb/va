import { useState } from 'react';

const ValentineCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-50">
      <div className="relative w-72 h-52">
        {/* Main Envelope */}
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className={`absolute inset-0 bg-white rounded-lg shadow-md cursor-pointer overflow-hidden
            ${isOpen ? 'scale-105' : 'hover:scale-105'} transform transition-all duration-500`}
        >
          {/* Hidden Letter */}
          <div 
            className={`absolute left-6 right-6 bottom-6 bg-white p-4 rounded shadow-sm
              transform transition-all duration-500 origin-bottom text-center
              ${isOpen ? '-translate-y-24' : 'translate-y-full'}`}
          >
            <p className="text-gray-800 font-medium text-lg mb-2">
              Happy<br />
              Valentine&apos;s<br />
              Day!
            </p>
            <div className="text-3xl text-red-500">❤️</div>
          </div>

          {/* Envelope Flap */}
          <div 
            className={`absolute top-0 left-0 right-0 h-16 bg-gray-50 transform origin-bottom transition-transform duration-500
              ${isOpen ? 'rotate-180' : ''} border-b border-gray-100`}
            style={{
              clipPath: 'polygon(0 0, 50% 100%, 100% 0)'
            }}
          />

          {/* Heart on Envelope */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-10 h-10">
              <div className="absolute w-10 h-10 bg-red-500 rotate-45">
                <div className="absolute -left-1/2 w-10 h-10 bg-red-500 rounded-full" />
                <div className="absolute -top-1/2 w-10 h-10 bg-red-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValentineCard;
