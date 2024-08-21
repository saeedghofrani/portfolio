import { useState } from "react";
import styles from "./ContactStyles.module.css";
import Toast from "./../Toast/toast"; // Import the Toast component

function Contact() {
  const [status, setStatus] = useState(""); // To manage submission status
  const [toast, setToast] = useState(null); // To manage toast message

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset(); // Reset the form fields
        setStatus("Message sent successfully!");
        setToast({ message: "Message sent successfully!", type: "success" });
      } else {
        setStatus("Oops! There was a problem sending your message.");
        setToast({ message: "Oops! There was a problem sending your message.", type: "error" });
      }
    } catch (error) {
      setStatus("Oops! There was a problem sending your message.");
      setToast({ message: "Oops! There was a problem sending your message.", type: "error" });
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form
        onSubmit={handleSubmit} // Attach the submit handler
        action="https://formspree.io/f/xeojlnrz"
        method="POST"
      >
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)} // Close the toast after 3 seconds or when the close button is clicked
        />
      )}
    </section>
  );
}

export default Contact;