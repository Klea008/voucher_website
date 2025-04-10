import { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Voucher?",
      answer: "A cross-platform application with multiple modules whose main purpose is the digitalization of supermarket receipts, saving money for businesses, saving time and space for customers, and reducing environmental pollution."
    },
    {
      question: "What factors support the application's security?",
      answer: "1. SHA-1 HASH algorithms\n2. JSON Web Token authentication\n3. Email Confirmation\n4. Security Question"
    },
    {
      question: "Mission?",
      answer: "Our mission is to help the environment, businesses, and customers. Today, thermal coupons are used in every supermarket in Albania. Their printing requires large amounts of water, oil, and paper each year, and generates significant waste."
    },
    {
      question: "How many versions does Voucher have?",
      answer: "The Voucher project is still in its first version, and we believe that with various investments or implementations, as well as collaborations, there will be other versions."
    },
    {
      question: "Technologies used?",
      answer: "Ionic Framework, Angular, Typescript, MySql, C#, HTML, CSS, Heroku, Node js."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-20 w-64 h-64 rounded-full bg-indigo-200 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Info
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
        </div>


          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 border-b border-gray-200 pb-4">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-xl font-medium text-gray-800">{faq.question}</h3>
                  <span className="text-indigo-600 text-2xl">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="mt-3 text-gray-600 whitespace-pre-line">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default FAQ;