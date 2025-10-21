import { useState } from "react";
import Toast from "../../components/Toast";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<string>("");
  const [toast, setToast] = useState<ToastProps | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
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
        form.reset();
        setStatus("Message sent successfully!");
        setToast({ message: "Message sent successfully!", type: "success", onClose: () => setToast(null) });
      } else {
        setStatus("Oops! There was a problem sending your message.");
        setToast({ message: "Oops! There was a problem sending your message.", type: "error", onClose: () => setToast(null) });
      }
    } catch (error) {
      setStatus("Oops! There was a problem sending your message.");
      setToast({ message: "Oops! There was a problem sending your message.", type: "error", onClose: () => setToast(null) });
    }
  };

  return (
    <section id="contact" className="p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-blue-600 dark:text-blue-400">Get In Touch</h1>
      <p className="text-xl text-center mb-10 max-w-2xl leading-relaxed text-gray-700 dark:text-gray-300">
        Have a project in mind or just want to chat? Feel free to reach out using the form below, or connect with me directly.
      </p>

      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Contact Info</h2>
          <div className="flex items-center space-x-4 text-lg text-gray-700 dark:text-gray-300">
            <FaEnvelope className="text-blue-500 text-2xl" />
            <span>sa.ghofraniivari@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4 text-lg text-gray-700 dark:text-gray-300">
            <FaPhone className="text-blue-500 text-2xl" />
            <span>+98 903 898 3350</span>
          </div>
          <div className="flex items-center space-x-4 text-lg text-gray-700 dark:text-gray-300">
            <FaMapMarkerAlt className="text-blue-500 text-2xl" />
            <span>Tehran, Iran</span>
          </div>
          <p className="text-md text-gray-600 dark:text-gray-400 mt-6">
            I'm always open to new opportunities and collaborations. Let's build something amazing together!
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xeojlnrz"
          method="POST"
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Send a Message</h2>
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
              className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
              className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              required
              rows={6}
              className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 dark:text-white resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={toast.onClose}
        />
      )}
    </section>
  );
};

export default ContactSection;