import React from "react";

const subjects = [
  "Physics",
  "CSE",
  "English",
  "SEE",
  "Law",
  "Chemistry",
 "Biology",
  "Hospitality",
  "bangla",
  "Mathematics",
  "Electrical Engineering",
  "Mechanical Engineering",
];

const Home = () => {
  return (
    <div className="py-12 bg-base-100">
      <h3 className="text-2xl font-semibold text-center mb-10 ">
        LEARNING SUBJECTS
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 w-11/12 max-w-7xl mx-auto">
        {subjects.map((subject, idx) => (
          <div
            key={idx}
            className="card bg-base-200 shadow-lg rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src="https://i.ibb.co/RpzfzcLW/success-doctor.png"
              alt={`${subject} icon`}
              className="h-20 w-20 object-contain mb-5"
            />
            <p className="text-sm font-semibold text-primary tracking-widest mb-1">
              SUBJECT
            </p>
            <p className="text-xl font-semibold text-base-content">{subject}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
