import { ComponentProps } from 'react'
import logo from '../assets/logo.svg'
import { twMerge } from 'tailwind-merge'
import { useNavigate } from 'react-router-dom'

interface BoxProps extends ComponentProps<'div'>  {
  text: string
}

export const Box = (props: BoxProps) => {

  const navigate = useNavigate();
  return (
    <div className={twMerge("w-36 h-36 flex flex-col justify-center items-center gap-3", props.className)} onClick={() => navigate('/data')}>
      <img src={logo} alt="" />
      <p>Agil {props.text}</p>
    </div>
  )
}