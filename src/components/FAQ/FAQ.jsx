import React, { useState } from "react";

const faqs = [
  {
    question: "How does the pricing work for teams",
    answer:
      "Answer:- Pricing is based on the number of team members. Discounts are available for larger teams.",
  },
  {
    question: "How does the pricing work for teams",
    answer:
      "Answer:- You will be notified, and additional charges may apply based on your plan.",
  },
  {
    question: "How does the pricing work for teams",
    answer:
      "Answer:- Yes, you can cancel your subscription from your account settings at any time.",
  },
  {
    question: "How does the pricing work for teams",
    answer:
      "Answer:- Yes, we provide support for integrating with various tools and platforms.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-[#4d258e] to-[#030303] h-full w-full pt-10 px-6 sm:px-12 lg:px-32 xl:px-64 text-white pb-20">
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold pb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4 text-sm sm:text-base">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700 overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4  focus:outline-none"
            >
              <span className="text-base sm:text-lg font-medium">
                {faq.question}
              </span>
              <span className="w-6 h-6 flex items-center justify-center">
                {openIndex === index ? <MinusIcon /> : <PlusIcon />}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-300 text-sm sm:text-base border-t border-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


const PlusIcon = () => (
  <span className="w-6 h-6">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  </span>
);

const MinusIcon = () => (
  <span className="w-6 h-6">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
    </svg>
  </span>
);

export default FAQ;
