import { useEffect } from "react";
import css from "./ModalWrap.module.css";

const ModalWrap = ({ children, handleClose, isOpen }) => {
    
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                handleClose();
            }
        };
        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        };
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleClose, isOpen]);

    if (!isOpen) return null;

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    return (
        <div onClick={handleBackdropClick} className={css.backdrop}>
            <div className={css.modal}>
                {children}
            </div>
        </div>
    )
};

export default ModalWrap;