import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <button>
      <span>{children}</span>
    </button>
  );
};

export default Button;
