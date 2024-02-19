import { Link } from "react-router-dom";
import classes from "./Homepage.module.scss";

export default function Homepage() {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={classes.nikodemmajzner}>Nikodem Majzner</div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.webdeveloper}>web developer</div>
        <Link to={"kontakt"}>
          <button className={classes.kontakt}>skontaktuj się</button>
        </Link>
      </div>
    </div>
  );
}
