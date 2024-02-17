import Button from "./Button";
import classes from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={classes.navbar}>
      <section className={classes.navLogo}>
        <div>Nikodem</div>
        <div>Majzner</div>
      </section>
      <div>
        <Button>o mnie</Button>
        <Button>kontakt</Button>
        <Button>github</Button>
      </div>
    </nav>
  );
}
