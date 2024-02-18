import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import classes from "./Root.module.scss";

export default function Root() {
  return (
    <>
      <div className={classes.container}>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}
