import { forwardRef } from "react";

export type Ref = HTMLDialogElement;

const NavbarModal = forwardRef<Ref>(function NavbarModal(props, ref) {
  return (
    <dialog ref={ref}>
      <h1>SILI!</h1>
    </dialog>
  );
});

export default NavbarModal;
