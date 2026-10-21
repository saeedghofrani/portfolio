import React from 'react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Saeed is an exceptional backend developer. His ability to architect scalable solutions and his dedication to code quality are truly impressive. He consistently delivers high-quality work and is a pleasure to collaborate with.",
    name: "Dr. Ali Ahmadi",
    title: "CTO, Tech Innovators Inc.",
    company: "Tech Innovators Inc.",
  },
  {
    quote:
      "I've had the pleasure of working with Saeed on several complex projects. His expertise in Node.js and database management is outstanding. He's a proactive problem-solver and a valuable asset to any team.",
    name: "Sara Momeni",
    title: "Lead Software Engineer, Global Solutions",
    company: "Global Solutions",
  },
  {
    quote:
      "Saeed's contributions to our project were pivotal. He not only delivered robust backend services but also brought innovative ideas to the table, significantly improving our overall system performance and reliability.",
    name: "Mehdi Karimi",
    title: "Project Manager, Future Systems Co.",
    company: "Future Systems Co.",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-blue-600 dark:text-blue-400">What People Say</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
            <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-6">"{testimonial.quote}"</p>
            <div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">{testimonial.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 text-md">{testimonial.title}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
