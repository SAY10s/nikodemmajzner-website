import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import classes from "./RouteError.module.scss";
import { ReactNode, useRef } from "react";
import NavbarModal from "../NavBar/NavbarModal";

interface Props {
  children?: ReactNode;
}

export default function Root({ children }: Props) {
  const navRef = useRef<HTMLDialogElement>(null);

  const handleModalOpen = () => {
    navRef.current?.showModal();
  };
  const handleModalClose = () => {
    navRef.current?.close();
  };

  return (
    <>
      <NavbarModal ref={navRef} handleModalClose={handleModalClose} />
      <div className={classes.mainContainer}>
        <Navbar handleModalOpen={handleModalOpen} />
        {children}
        <Outlet />
      </div>
    </>
  );
}
