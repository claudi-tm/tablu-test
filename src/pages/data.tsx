import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";
import { Input } from "../components/input";

import { Phone, EnvelopeSimple } from "@phosphor-icons/react";


export const Data = () => {
  const [fullNameValue, setFullNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [birthDateValue, setBirthDateValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [selectedStatusValue, setSelectedStatusValue] = useState('phone');

  const handlePhoneChange = (e) => {

    let inputValue = e.target.value;
    const lastChar = inputValue.slice(-1);

    if (lastChar === ')' || lastChar === ' ') {
      inputValue = inputValue.slice(0, -2);
    }

    const formattedPhone = formatPhoneNumber(inputValue);
    setPhoneValue(formattedPhone);

  };
  const handleSelectedChange = (e) => {
    setSelectedStatusValue((prevValue) => (prevValue === 'phone' ? 'email' : 'phone'));

  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value)

  };

  const handleFullNameChange = (e) => {
    setFullNameValue(e.target.value);

  };
  const handleBirthDateChange = (e) => {
    setBirthDateValue(e.target.value);

  };

  const navigate = useNavigate();

  function formatPhoneNumber(value) {
    if (!value) return value;
    const phone = value.replace(/[^\d]/g, '');
    const phoneLength = phone.length;

    if (phoneLength < 2) return phone;
    if (phoneLength < 7) {
      return `(${phone.slice(0, 2)}) ${phone.slice(2)}`;
    }
    return `(${phone.slice(0, 2)}) ${phone.slice(2, 5)} ${phone.slice(5, 9)}`;
  }
  return (
    <div className="flex flex-col  items-center justify-center h-screen">
      <div className="max-w-80 flex flex-col gap-6">
        <div className="flex flex-col max-w-sm justify-center gap-9">
          <h1 className="text-custom-dark-blue font-medium mb-3">Lorem Ipsum</h1>
          <p className="mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry and typesetting industry.</p>

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


          <div className="flex gap-3">
            <div className="flex flex-col">
              <button
                onClick={handleSelectedChange}
                value={selectedStatusValue}
                className="relative align-middle select-none border text-center w-10 max-w-[40px] h-10 max-h-[40px] rounded-tl-md rounded-tr-md text-xs bg-custom-buttons  hover:shadow-lg  focus:opacity-[0.85] active:opacity-[0.85] "
                type="button">
                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <Phone size={24} weight="fill" color="gray" /></span>
              </button>
              <button
                onClick={handleSelectedChange}
                value={selectedStatusValue}
                className="relative align-middle select-none border text-center w-10 max-w-[40px] h-10 max-h-[40px] rounded-bl-md rounded-br-md text-xs bg-custom-buttons  hover:shadow-lg  focus:opacity-[0.85] active:opacity-[0.85] "
                type="button">
                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <EnvelopeSimple size={24} weight="fill" color="gray" />
                </span>
              </button>
            </div>
            {selectedStatusValue === 'phone' ? (
              <Input
                type="tel"
                placeholder="Telemóvel"
                value={phoneValue}
                onChange={handlePhoneChange}
              />
            ) : (
              <Input
                type="email"
                placeholder="Email"
                value={emailValue}
                onChange={handleEmailChange}
              />
            )}
          </div>

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