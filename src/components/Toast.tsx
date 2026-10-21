import { useEffect } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const toastClasses = `fixed bottom-4 right-4 p-4 rounded-lg shadow-lg flex items-center justify-between space-x-4 z-50
    ${type === "success" ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`;

  const closeButtonClasses = `ml-4 bg-transparent border-none text-white text-xl cursor-pointer`;

  return (
    <div className={toastClasses}>
      <p>{message}</p>
      <button onClick={onClose} className={closeButtonClasses}>X</button>
    </div>
  );
};

export default Toast;
