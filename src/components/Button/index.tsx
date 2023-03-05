import * as S from './Button.module';

interface Props {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = ({ onClick, disabled, children }: Props) => {
  return (
    <S.Button onClick={onClick} disabled={disabled}>
      {children}
    </S.Button>
  );
};

export default Button;
