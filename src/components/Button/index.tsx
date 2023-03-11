import * as S from './Button.module';
import React from 'react';

type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ onClick, disabled, children, style }: ButtonProps) => {
  return (
    <S.Button onClick={onClick} disabled={disabled} style={style}>
      {children}
    </S.Button>
  );
};

export default Button;
