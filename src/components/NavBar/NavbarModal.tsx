import { forwardRef } from "react";
import Button from "./Button";

export type Ref = HTMLDialogElement;
import classes from "./NavbarModal.module.scss";

const NavbarModal = forwardRef<Ref>(function NavbarModal(props, ref) {
  return (
    <dialog ref={ref}>
      <div className={classes.modal}>
        <section className={classes.navLogo}>
          <div>Nikodem</div>
          <div>Majzner</div>
        </section>
        <section className={classes.btnWrapper}>
          <Button link="omnie">o mnie</Button>
          <Button link="kontakt">kontakt</Button>
          <Button link="https://github.com/SAY10s" newPage={true}>
            github
          </Button>
        </section>
      </div>
    </dialog>
  );
});

export default NavbarModal;
