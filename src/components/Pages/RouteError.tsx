import classes from "./RouteError.module.scss";
import react from "../../assets/react.svg";
import { Link } from "react-router-dom";
import Root from "./Root";

export default function RouteError() {
  return (
    <Root>
      <div className={classes.container2}>
        <h1>
          Strona w <span>przygotowaniu!</span>
        </h1>
        <img src={react} alt="" />
        <h2>Strona, której szukasz jeszcze nie jest gotowa... </h2>
        <Link to={""}>
          <button className={classes.kontakt}>powrót</button>
        </Link>
      </div>
    </Root>
    // <div className={classes.container}>
    //   <Navbar handleModalOpen={() => {}} />
    // <div className={classes.container2}>
    //   <h1>
    //     Strona w <span>przygotowaniu!</span>
    //   </h1>
    //   <img src={react} alt="" />
    //   <h2>Strona, której szukasz jeszcze nie jest gotowa... </h2>
    //   <Link to={""}>
    //     <button className={classes.kontakt}>powrót</button>
    //   </Link>
    // </div>
    // </div>
  );
}
