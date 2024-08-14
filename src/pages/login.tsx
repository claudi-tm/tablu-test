import { useState } from "react";
import logo from "../assets/logo.svg";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [phoneValue, setPhoneValue] = useState('');
  const [passValue, setPassValue] = useState('');
  const navigate = useNavigate();

  

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    let inputValue = e.target.value;
    const lastChar = inputValue.slice(-1);

    if (lastChar === ')' || lastChar === ' ') {
      inputValue = inputValue.slice(0, -2);
    }

    const formattedPhone = formatPhoneNumber(inputValue);
    setPhoneValue(formattedPhone);

  };

  const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassValue(e.target.value);

  };

  function formatPhoneNumber(value:string) {
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
      <div className="max-w-80 flex flex-col gap-3">
        <div className="flex flex-col max-w-sm justify-center gap-9">
          <img className="w-full size-1/3" src={logo} alt="" />

          <p className="text-center leading-loose">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        </div>
        <Input
          type={"phone"}
          placeholder="Telemóvel"
          value={phoneValue}
          onChange={handlePhoneChange}
        />

        <Input
          type={"password"}
          placeholder="Senha"
          value={passValue}
          onChange={handlePassChange} />

        <p className="mb-8 mt-4 text-right text-custom-orange">Recuperar senha</p>
        
        <Button text='Entrar' onClick={() => navigate('/main')}/>
      </div>


    </div>
  )

}