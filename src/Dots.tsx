import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Dots = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex justify-center mt-4">
      <span
        className={`h-3 w-3 mx-1 rounded-full cursor-pointer ${
          isActive('/') ? 'bg-blue-500' : 'bg-gray-300'
        }`}
        onClick={() => navigate('/')}
      ></span>
      <span
        className={`h-3 w-3 mx-1 rounded-full cursor-pointer ${
          isActive('/slide2') ? 'bg-blue-500' : 'bg-gray-300'
        }`}
        onClick={() => navigate('/slide2')}
      ></span>
    </div>
  );
};