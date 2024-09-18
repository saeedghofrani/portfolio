import { useEffect } from "react";
import styles from "./toastStyle.module.css";

function Toast({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Close the toast after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer
  }, [onClose]);

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <p>{message}</p>
      <button onClick={onClose} className={styles.closeBtn}>X</button>
    </div>
  );
}

export default Toast;