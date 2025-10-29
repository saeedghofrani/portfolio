import { useState } from "react";
import Toast from "../../components/Toast";

const ContactSection: React.FC = () => {
  const [toast, setToast] = useState<{message: string; type: "success" | "error"; onClose: () => void} | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setToast({ message: "Message sent successfully!", type: "success", onClose: () => setToast(null) });
  };

  return (
    <section className="py-20 px-4 text-gray-100">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-8 text-emerald-300">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div>
                    <p className="text-sm text-gray-400">Email: sa.ghofraniivari@gmail.com</p>
                    <p className="text-gray-200"></p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div>
                    <p className="text-sm text-gray-400">Phone: +98 921 195 3839</p>
                    <p className="text-gray-200"></p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div>
                    <p className="text-sm text-gray-400">Location: Mashhad, Iran</p>
                    <p className="text-gray-200"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-emerald-300">
              Send Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none border-b border-gray-600 focus:border-emerald-400 transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none border-b border-gray-600 focus:border-emerald-400 transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  placeholder="Tell me about your project or idea..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none border-b border-gray-600 focus:border-emerald-400 transition-colors duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-emerald-500 text-white hover:bg-emerald-600 transition-colors duration-300 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
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