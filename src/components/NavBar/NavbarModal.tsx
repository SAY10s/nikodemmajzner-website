import { forwardRef } from "react";
import Button from "./Button";
import classes from "./NavbarModal.module.scss";
import menu from "../../assets/close.svg";
import { Link } from "react-router-dom";

export type Ref = HTMLDialogElement;
interface Props {
  handleModalClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const NavbarModal = forwardRef<Ref, Props>(function NavbarModal(props, ref) {
  return (
    <dialog ref={ref}>
      <div className={classes.modal}>
        <Link to="/">
          <section className={classes.navLogo} onClick={props.handleModalClose}>
            <div>Nikodem</div>
            <div>Majzner</div>
          </section>
        </Link>
        <section
          className={classes.btnWrapper}
          onClick={props.handleModalClose}
        >
          <Button link="omnie">o mnie</Button>
          <Button link="kontakt">kontakt</Button>
          <Button link="https://github.com/SAY10s" newPage={true}>
            github
          </Button>
        </section>
        <button className={classes.closeModal} onClick={props.handleModalClose}>
          <img className={classes.menuIcon} src={menu} />
        </button>
      </div>
    </dialog>
  );
});

export default NavbarModal;
