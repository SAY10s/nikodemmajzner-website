import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import classes from "./Root.module.scss";
import { useRef } from "react";

export default function Root() {
  const navRef = useRef<HTMLDialogElement>(null);

  const handleModalOpen = () => {
    navRef.current?.showModal();
  };

  return (
    <>
      <div className={classes.container}>
        <dialog ref={navRef}>
          <h1>SILI!</h1>
        </dialog>
        <Navbar handleModalOpen={handleModalOpen} />
        <Outlet />
      </div>
    </>
  );
}
