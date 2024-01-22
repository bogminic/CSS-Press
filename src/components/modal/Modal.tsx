import { memo, useCallback, useEffect, useMemo, useRef } from "react";
import "./Modal.scss";

type Props = {
  open: boolean;
  locked?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
};

// Thanks to Andrew Bone for the modal code. See more at https://dev.to/link2twenty/react-using-native-dialogs-to-make-a-modal-popup-4b25
const Modal = memo(function Modal({ open, className="", locked, onClose, children }: Props) {
  const modalRef = useRef<HTMLDialogElement>(null);

  // Work out which classes should be applied to the dialog element
  const dialogClasses = useMemo(() => {
    const _arr = className.split(" ");
    if (!open) _arr.push("modal--closing");

    return _arr.join(" ");
  }, [open, className]);

  // Eventlistener: trigger onclose when cancel detected
  const onCancel: React.ReactEventHandler<HTMLDialogElement> = useCallback(
    (e) => {
      e.preventDefault();
      if (!locked && onClose) onClose();
    },
    [locked, onClose]
  );

  // Eventlistener: trigger onclose when click outside
  const onClick: React.ReactEventHandler<HTMLDialogElement> = useCallback(
    ({ target } ) => {
      const { current: el } = modalRef;
      if (target === el && !locked && onClose) onClose();
    },
    [locked, onClose]
  );

  // Eventlistener: trigger close click on anim end
  const onAnimEnd = useCallback(() => {
    const { current: el } = modalRef;
    if (!open) el?.close();
  }, [open]);

  // When open changes run open/close command
  useEffect(() => {
    const { current: el } = modalRef;
    if (open) el?.showModal();
  }, [open]);

  return (
    <dialog
      ref={modalRef}
      className={dialogClasses}
      onClose={onClose}
      onCancel={onCancel}
      onClick={onClick}
      onAnimationEnd={onAnimEnd}
    >
      <article className="modal__container">{children}</article>
    </dialog>
  );
});

export default Modal;