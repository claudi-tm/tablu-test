import { ComponentProps } from "react"

interface ButtonProps extends ComponentProps<'button'> {
  text: string
  variant?: string
}

export const Button = (props: ButtonProps) => {
  return (<button {...props} className={`w-full border rounded-md ${props.variant ? "bg-custom-light-gray text-custom-orange" : "bg-custom-orange text-white"} p-2 `}>{props.text}</button>)
}