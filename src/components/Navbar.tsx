import classes from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={classes.navbar}>
      <section>
        <div>Nikodem</div>
        <div>Majzner</div>
      </section>
      <div>
        <button>o mnie</button>
        <button>kontakt</button>
        <button>github</button>
      </div>
    </nav>
  );
}
