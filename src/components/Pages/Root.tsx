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

  const handleModalChange = () => {
    navRef.current?.showModal();
  };

  return (
    <>
      <NavbarModal ref={navRef} />
      <div className={classes.mainContainer}>
        <Navbar handleModalOpen={handleModalChange} />
        {children}
        <Outlet />
      </div>
    </>
  );
}
