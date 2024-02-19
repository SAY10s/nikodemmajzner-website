import { forwardRef } from "react";

export type Ref = HTMLDialogElement;
import classes from "./NavbarModal.module.scss";

const NavbarModal = forwardRef<Ref>(function NavbarModal(props, ref) {
  return (
    <dialog ref={ref}>
      <div className={classes.modal}>
        <h1 className={classes.test}>SILI!</h1>
      </div>
    </dialog>
  );
});

export default NavbarModal;
