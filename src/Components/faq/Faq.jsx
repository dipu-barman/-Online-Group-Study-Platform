import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";

const Faq = () => {
  const faqItems = [
    {
      question: "How do I create a new assignment?",
      answer:
        "Go to the 'Create Assignment' section from the dashboard, fill in the required details, and click 'Submit'.",
    },
    {
      question: "How can students submit their assignments?",
      answer:
        "Students can go to the 'Assignments' section, choose an assignment, upload their work, and click 'Submit'.",
    },
    {
      question: "How are assignments graded?",
      answer:
        "Teachers can review submissions from the dashboard and assign grades along with feedback.",
    },
    {
      question: "Can I edit or delete an assignment after publishing?",
      answer:
        "Yes, go to the 'My Assignments' section and use the 'Edit' or 'Delete' option next to the assignment.",
    },
    {
      question: "How do I see pending assignment submissions?",
      answer:
        "In the 'Submissions' tab, you’ll see all pending assignments. Filter by status to manage them easily.",
    },
    {
      question: "How can I download submitted assignments?",
      answer:
        "Go to the 'Submissions' section, click on the student's name, and download the attached file.",
    },
    {
      question: "What happens if a student submits an assignment late?",
      answer:
        "Late submissions may be marked accordingly, and the teacher may choose to deduct marks based on the rules set.",
    },
    {
      question: "Can students view their graded assignments and feedback?",
      answer:
        "Yes, after grading, students can go to 'My Submissions' to see their scores and any feedback provided by the teacher.",
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-10 mt-14">
         <span className="text-primary">FREQUENTLY</span> ASKED QUESTIONS
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="collapse collapse-plus bg-base-200 border border-base-300 rounded-xl shadow-sm"
            >
              <input
                type="radio"
                name="faq-accordion"
                defaultChecked={index === 0}
              />
              <div className="collapse-title font-semibold text-base-content">
                {index + 1}. {item.question}
              </div>
              <div className="collapse-content text-sm text-base-content/80">
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Faq;
