import { ButtonHTMLAttributes } from 'react';

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  outline?: boolean
};

export function Button({outline = false, ...props}: ButtonProps) {
  return (
    <button 
      className={`button ${outline ? 'outline' : ''}`}
      {...props}
    />
  )
}