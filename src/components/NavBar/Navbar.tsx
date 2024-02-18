import { Link } from "react-router-dom";
import Button from "./Button";
import classes from "./Navbar.module.scss";

export default function Navbar() {
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
      </div>
    </nav>
  );
}
