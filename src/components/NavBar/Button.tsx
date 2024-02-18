import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  link: string;
  children: ReactNode;
  newPage?: boolean;
}

const Button = ({ link, newPage = false, children }: Props) => {
  return (
    <Link to={link} target={newPage ? "_blank" : ""}>
      <button>
        <span>{children}</span>
      </button>
    </Link>
  );
};

export default Button;
