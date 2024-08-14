import { CheckCircle } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

interface InputProps {
  length?: number;
  onComplete?: (pin: string) => void;
};

export const Otp = ({ length = 4, onComplete }: InputProps) => {
  const inputRef = useRef<HTMLInputElement[]>(Array(length).fill(null));
  const [OTP, setOTP] = useState<string[]>(Array(length).fill(''));
  const [timeLeft, setTimeLeft] = useState(45); // 45 seconds countdown
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsModalOpen(true);
    }
  }, [timeLeft]);

  const handleTextChange = (input: string, index: number) => {
    const newPin = [...OTP];
    newPin[index] = input;
    setOTP(newPin);

    if (input.length === 1 && index < length - 1) {
      inputRef.current[index + 1]?.focus();
    }

    if (input.length === 0 && index > 0) {
      inputRef.current[index - 1]?.focus();
    }

    if (newPin.every((digit) => digit !== '') && onComplete) {
      onComplete(newPin.join(''));
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeLeft(45); // Reset the timer if needed
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-80 flex flex-col gap-6">
        <div className="flex flex-col max-w-sm justify-center gap-9">
          <p className="text-center">
            Para terminar o seu registo, digite o código de confirmação recebido em <span className="font-bold">123456789</span>
          </p>
          <div className={`grid grid-cols-4 gap-5`}>
            {Array.from({ length }, (_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={OTP[index]}
                onChange={(e) => handleTextChange(e.target.value, index)}
                ref={(ref) => (inputRef.current[index] = ref as HTMLInputElement)}
                className={`border border-solid border-slate-500 focus:border-custom-orange p-5 outline-none`}
                style={{ marginRight: index === length - 1 ? '0' : '10px' }}
              />
            ))}
          </div>
        </div>

        <p className="mb-8 mt-4 text-center">{`00:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`}</p>

        <p className="mb-8 mt-4 text-center text-custom-orange cursor-pointer">Reenviar código</p>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">

            <CheckCircle className="w-full text-custom-orange" size={62} weight="fill" />
            <h2 className="text-xl mb-4">Registro efectuado com sucesso</h2>

            <button onClick={closeModal} className="mt-4 w-full bg-custom-orange text-white p-2 rounded">
              Feito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
