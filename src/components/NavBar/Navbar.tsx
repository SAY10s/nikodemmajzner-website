import { Link } from "react-router-dom";
import Button from "./Button";
import classes from "./Navbar.module.scss";

interface Props {
  handleModalOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Navbar({ handleModalOpen }: Props) {
  return (
    <nav className={classes.navbar}>
      <Link to={"/"}>
        <section className={classes.navLogo}>
          <div>Nikodem</div>
          <div>Majzner</div>
        </section>
      </Link>
      <div>
        <Button link="omnie">o mnie</Button>
        <Button link="kontakt">kontakt</Button>
        <Button link="https://github.com/SAY10s" newPage={true}>
          github
        </Button>
        <button onClick={handleModalOpen}>X</button>
      </div>
    </nav>
  );
}
