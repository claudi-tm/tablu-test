import { useState } from 'react';

interface InputProps {
  type: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}




export const  Input = ({ type, placeholder, value, onChange }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (!value) {
      setIsFocused(false);
    }
  };

  return (


    <div className="relative ">
      <div className={`
          flex border rounded-lg px-4 py-2 gap-3
          ${isFocused || value ? 'border-custom-orange' : 'border-gray-300'}
        `}>
        {type === "phone" ? (
          <>
            <span className={`
            transition-opacity duration-500 ease-in-out
            ${isFocused || value ? 'opacity-100' : 'opacity-0'}
          `}>
              +258
            </span>
            <input
              type={type}
              value={value}
              onChange={onChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="
              bg-transparent focus:outline-none w-full
              transition-all duration-500 ease-in-out
            "
            />
          </>

        ) : (

          <input
            type={type}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="
              bg-transparent focus:outline-none w-full
              transition-all duration-500 ease-in-out
            "
          />)}


      </div>
      <label className={`
          absolute left-3 transition-all duration-500 ease-in-out
          ${isFocused || value
          ? '-top-2 text-xs text-custom-dark-blue bg-white/85 px-1'
          : 'top-2 text-gray-500'
        }
        `}>
        {placeholder}
      </label>
    </div>

  );
};
