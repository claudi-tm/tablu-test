import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

export const Slide1 = () => {
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedLeft: () => navigate('/slide2'),
  });

  return (
    <div {...handlers} className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Slide 1</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => navigate('/slide2')}
      >
        Next
      </button>
    </div>
  );
};

