import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import classes from "./RouteError.module.scss";
import { ReactNode, useRef } from "react";

interface Props {
  children?: ReactNode;
}

export default function Root({ children }: Props) {
  const navRef = useRef<HTMLDialogElement>(null);

  const handleModalOpen = () => {
    navRef.current?.showModal();
  };

  return (
    <>
      <div className={classes.mainContainer}>
        <dialog ref={navRef}>
          <h1>SILI!</h1>
        </dialog>
        <Navbar handleModalOpen={handleModalOpen} />
        {children}
        <Outlet />
      </div>
    </>
  );
}
