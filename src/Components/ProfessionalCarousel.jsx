import React, { useState, useEffect } from "react";

const teachers = [
  {
    id: 1,
    name: "Mrs. Sarah Johnson",
    subject: "Mathematics",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Experienced Math teacher passionate about making learning fun and engaging for all students.",
  },
  {
    id: 2,
    name: "Mr. David Lee",
    subject: "Physics",
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
    bio: "Physics expert with 10+ years teaching experience, focused on student success and real-world applications.",
  },
  {
    id: 3,
    name: "Ms. Emily Carter",
    subject: "English Literature",
    photo: "https://randomuser.me/api/portraits/women/50.jpg",
    bio: "Literature lover dedicated to improving critical reading and writing skills.",
  },
  {
    id: 4,
    name: "Mr. Michael Brown",
    subject: "Computer Science",
    photo: "https://randomuser.me/api/portraits/men/52.jpg",
    bio: "Tech-savvy instructor specializing in programming and data science.",
  },
];

const students = [
  {
    id: 1,
    name: "John Smith",
    course: "Mathematics",
    photo: "https://randomuser.me/api/portraits/men/15.jpg",
    bio: "Eager student passionate about algebra and calculus.",
  },
  {
    id: 2,
    name: "Anna Williams",
    course: "Physics",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Curious learner who loves exploring quantum mechanics.",
  },
  {
    id: 3,
    name: "Mark Taylor",
    course: "English Literature",
    photo: "https://randomuser.me/api/portraits/men/35.jpg",
    bio: "Enjoys reading classic and modern novels and writing essays.",
  },
  {
    id: 4,
    name: "Sophia Brown",
    course: "Computer Science",
    photo: "https://randomuser.me/api/portraits/women/45.jpg",
    bio: "Aspiring programmer with interest in AI and machine learning.",
  },
];

const ProfessionalCarousel = () => {
  const length = teachers.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % length);
    }, 4500);
    return () => clearTimeout(timer);
  }, [currentIndex, length]);

  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + length) % length);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % length);

  // Calculate slide class based on relative position
  const getSlideClass = (index, current) => {
    if (index === current) return "scale-105 opacity-100 z-20 shadow-xl";
    if (index === (current - 1 + length) % length) return "scale-90 opacity-60 z-10 -translate-x-20";
    if (index === (current + 1) % length) return "scale-90 opacity-60 z-10 translate-x-20";
    return "opacity-0 scale-75 pointer-events-none z-0";
  };

  return (
    <section className="w-10/12 mx-auto my-20 px-4 flex flex-col md:flex-row gap-12">
      {/* Teachers Carousel */}
      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-center mb-8 ">FEATURED TEACHERS</h2>
        <div className="relative bg-base-100 rounded-xl shadow-xl overflow-hidden h-96 flex items-center justify-center">
          {teachers.map((teacher, index) => (
            <div
              key={teacher.id}
              className={`absolute top-1/2 left-1/2 w-96 max-w-full -translate-x-1/2 -translate-y-1/2 transform transition-all duration-700 bg-green-100 rounded-xl p-4 flex flex-col md:flex-row items-center border border-gray-300
              ${getSlideClass(index, currentIndex)}
              `}
              aria-hidden={index !== currentIndex}
            >
              <img
                src={teacher.photo}
                alt={teacher.name}
                className="w-48 h-48 rounded-xl object-cover shadow-lg mr-0 md:mr-10 mb-6 md:mb-0 flex-shrink-0"
                loading="lazy"
              />
              <div className="max-w-2xl text-center md:text-left">
                <h3 className="text-xl font-semibold text-black mb-2">{teacher.name}</h3>
                <p className="text-black font-semibold mb-3">{teacher.subject}</p>
                <p className="text-gray-700 dark:text-gray-300">{teacher.bio}</p>
              </div>
            </div>
          ))}

          {/* Navigation */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute top-1/2 left-5 -translate-y-1/2 btn btn-circle btn-primary bg-opacity-90 hover:bg-opacity-100 shadow-md"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute top-1/2 right-5 -translate-y-1/2 btn btn-circle btn-primary bg-opacity-90 hover:bg-opacity-100 shadow-md"
          >
            ❯
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
            {teachers.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`btn btn-xs rounded-full transition-colors ${
                  idx === currentIndex ? "btn-primary" : "btn-outline btn-primary"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Students Carousel */}
      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-center mb-8 ">FEATURED LEARNING STUDENTS </h2>
        <div className="relative bg-base-100 rounded-xl shadow-xl overflow-hidden h-96 flex items-center justify-center">
          {students.map((student, index) => (
            <div
              key={student.id}
              className={`absolute top-1/2 left-1/2 w-80 max-w-full -translate-x-1/2 -translate-y-1/2 transform transition-all duration-700 bg-yellow-100 rounded-xl p-6 flex flex-col md:flex-row items-center border border-gray-300
              ${getSlideClass(index, currentIndex)}
              `}
              aria-hidden={index !== currentIndex}
            >
              <div className="w-36 h-36 rounded-full bg-gray-300 animate-pulse mr-6 overflow-hidden shadow-md flex-shrink-0">
                <img
                  src={student.photo}
                  alt={student.name}
                  className="object-cover w-full h-full opacity-70"
                />
              </div>
              <div className="max-w-xl text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-2 animate-pulse bg-gray-300 rounded w-48 h-6 mx-auto md:mx-0 text-transparent select-none">
                  {student.name}
                </h3>
                <p className="text-secondary font-semibold mb-4 animate-pulse bg-gray-300 rounded w-32 h-5 mx-auto md:mx-0 text-transparent select-none">
                  {student.course}
                </p>
                <p className="text-gray-400 animate-pulse bg-gray-300 rounded h-5 w-full max-w-xs mx-auto md:mx-0 text-transparent select-none">
                  {student.bio}
                </p>
              </div>
            </div>
          ))}

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
            {students.map((_, idx) => (
              <span
                key={idx}
                className={`w-4 h-4 rounded-full transition-colors ${
                  idx === currentIndex ? "bg-secondary" : "bg-secondary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalCarousel;
