import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  const handleDownload = () => {
    const filePath = "/assets/cv.pdf";
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'saeed-ghofrani-ivari.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-16 px-8 text-gray-100">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-white">Saeed Ghofrani</h1>
        <h2 className="text-3xl mb-4 text-emerald-400">Senior Software Engineer & Team Lead</h2>
        <p className="text-xl mb-8 text-gray-300">Backend Development Expert | Node.js Specialist | Building Scalable Solutions</p>

        <div className="flex gap-4 justify-center">
          <Link to="/contact" className="px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-300 font-semibold">
            Contact Me
          </Link>
          <button onClick={handleDownload} className="px-8 py-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300 font-semibold border border-gray-600">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
