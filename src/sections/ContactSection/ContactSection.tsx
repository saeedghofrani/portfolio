import { useState } from "react";
import Toast from "../../components/Toast";
import { FaPaperPlane } from "react-icons/fa";
import "./ContactSection.css";

// InputField Component
interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  rows?: number;
}

const InputField: React.FC<InputFieldProps> = ({ id, label, type, placeholder, rows }) => {
  const isTextArea = type === 'textarea';
  const InputTag = isTextArea ? 'textarea' : 'input';

  return (
    <div className="input-group">
      <label htmlFor={id} className="input-label">
        {label}
      </label>

      <InputTag
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required
        rows={rows || 1}
        className={isTextArea ? "contact-textarea" : "contact-input"}
      />
    </div>
  );
};

const ContactSection: React.FC = () => {
  const [toast, setToast] = useState<{message: string; type: "success" | "error"; onClose: () => void} | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');

    setToast({
      message: `Thanks for reaching out, ${name || 'User'}! I'll get back to you soon.`,
      type: "success",
      onClose: () => setToast(null)
    });

    event.currentTarget.reset();
  };

  return (
    <section className="contact-section">
      {/* Enhanced Decorative Background */}
      <div className="contact-decorative-bg">
        <div className="contact-bg-circle contact-bg-circle-1"></div>
        <div className="contact-bg-circle contact-bg-circle-2"></div>
      </div>

      <div className="contact-container">
        {/* Header Section */}
        <div className="contact-header">
          <h1 className="section-title">
            Let's Connect
          </h1>
          <p className="contact-subtitle">
            Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can work together.
          </p>
        </div>

        {/* Contact Card */}
        <div className="contact-card">
          <h2 className="contact-card-title">
            Send Me a Message
          </h2>

          <form onSubmit={handleSubmit} className="contact-form">
            <InputField
              id="name"
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
            />

            <InputField
              id="email"
              label="Email Address"
              type="email"
              placeholder="Enter your email address"
            />

            <InputField
              id="message"
              label="Message"
              type="textarea"
              placeholder="Tell me about your project or idea..."
              rows={5}
            />

            {/* Submit Button with enhanced hover */}
            <button type="submit" className="contact-submit-btn">
              <span className="contact-submit-content">
                <FaPaperPlane className="contact-submit-icon" />
                Send Message
                <svg
                  className="contact-arrow-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
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
