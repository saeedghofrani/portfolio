import { useState } from "react";
import Toast from "../../components/Toast";

const ContactSection: React.FC = () => {
  const [toast, setToast] = useState<{message: string; type: "success" | "error"; onClose: () => void} | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setToast({ message: "Message sent successfully!", type: "success", onClose: () => setToast(null) });
  };

  return (
    <section className="py-16 px-8 text-gray-100">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8 text-emerald-400">Contact Me</h1>

        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-emerald-500/30">
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4 text-emerald-300">Get In Touch</h2>
          <p className="text-gray-300 mb-2">Email: sa.ghofraniivari@gmail.com</p>
          <p className="text-gray-300 mb-2">Phone: +98 903 898 3350</p>
          <p className="text-gray-300">Location: Tehran, Iran</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-3 bg-gray-700/50 border border-emerald-500/30 rounded-lg text-gray-200 placeholder-gray-400 focus:border-emerald-400 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-3 bg-gray-700/50 border border-emerald-500/30 rounded-lg text-gray-200 placeholder-gray-400 focus:border-emerald-400 focus:outline-none"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              required
              rows={4}
              className="w-full p-3 bg-gray-700/50 border border-emerald-500/30 rounded-lg text-gray-200 placeholder-gray-400 focus:border-emerald-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-300 font-semibold"
          >
            Send Message
          </button>
        </form>
        </div>
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