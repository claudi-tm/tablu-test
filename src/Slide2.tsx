// Slide1.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { Button } from './components/button';

export const Slide2 = () => {
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedRight: () => navigate('/'),
  });

  return (
    <div {...handlers} className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Slide 2</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        
      >
        
      </button>
      <Button text='Iniciar' onClick={() => navigate('/login')}/>
    </div>
  );
};

