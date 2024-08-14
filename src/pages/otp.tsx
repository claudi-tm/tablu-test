import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";
import { Input } from "../components/input";




export const OTP = () => {
  const [fullNameValue, setFullNameValue] = useState('');
  const [birthDateValue, setBirthDateValue] = useState('');

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullNameValue(e.target.value);

  };
  const handleBirthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthDateValue(e.target.value);

  };

  const navigate = useNavigate();

  // function formatPhoneNumber(value) {
  //   if (!value) return value;
  //   const phone = value.replace(/[^\d]/g, '');
  //   const phoneLength = phone.length;

  //   if (phoneLength < 2) return phone;
  //   if (phoneLength < 7) {
  //     return `(${phone.slice(0, 2)}) ${phone.slice(2)}`;
  //   }
  //   return `(${phone.slice(0, 2)}) ${phone.slice(2, 5)} ${phone.slice(5, 9)}`;
  // }
  return (
    <div className="flex flex-col  items-center justify-center h-screen">
      <div className="max-w-80 flex flex-col gap-6">
        <div className="flex flex-col max-w-sm justify-center gap-9">
          <h1 className="text-custom-dark-blue font-medium mb-3">Lorem Ipsum</h1>
          <p className="mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry and typesetting industry.</p>

        </div>
        <Input
          type={"text"}
          placeholder="Nome Completo"
          value={fullNameValue}
          onChange={handleFullNameChange}
        />

        <Input
          type={"date"}
          placeholder="Data de nascimento"
          value={birthDateValue}
          onChange={handleBirthDateChange} />

        <div className="flex flex-col">


        </div>

        <p className="mb-8 mt-4 text-right text-custom-orange">Recuperar senha</p>

        <div className="flex gap-2">
          <Button variant="secondary" text='Voltar' onClick={() => navigate('/main')} />
          <Button text='Registar' onClick={() => navigate('/otp')} />
        </div>
      </div>
    </div>
  )
}