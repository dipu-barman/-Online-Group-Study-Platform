import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaInfoCircle } from "react-icons/fa";

const booksData = [
  {
    id: 1,
    title: "Organic Chemistry Basics",
    author: "John Smith",
    subject: "Chemistry",
    img: "https://i.ibb.co.com/HTpqtzHY/242c6a59-bd3f-482a-9a80-0afb3a729d56.jpg",
    description: "Learn the fundamentals of organic chemistry with examples, diagrams, and exercises.",
    content: `
Chapter 1: Introduction to Organic Chemistry

Organic chemistry is the study of the structure, properties, composition, reactions, and preparation of carbon-containing compounds. 
This includes hydrocarbons and compounds with any number of other elements, including hydrogen, nitrogen, oxygen, halogens, phosphorus, silicon, and sulfur.

Key Points:
- Carbon's ability to form four covalent bonds
- Functional groups and their reactivity
- The concept of isomerism

Applications:
- Pharmaceuticals (e.g., aspirin, penicillin)
- Polymers and plastics
- Biofuels

Chapter 2: Alkanes and Alkenes
Alkanes are saturated hydrocarbons, while alkenes contain double bonds. Their reactivity differs significantly due to the presence of unsaturated carbon bonds.
    `,
  },
  {
    id: 2,
    title: "Modern Physics",
    author: "Albert Lee",
    subject: "Physics",
    img: "https://i.ibb.co.com/gLS22jxs/jahsjaja.jpg",
    description: "Relativity, quantum mechanics, and other modern physics concepts explained in detail.",
    content: `
Chapter 1: Special Relativity

In 1905, Albert Einstein proposed the theory of special relativity, revolutionizing the concepts of space and time.
The two postulates are:
1. The laws of physics are the same in all inertial frames.
2. The speed of light in a vacuum is constant for all observers.

Effects:
- Time dilation: Moving clocks tick slower.
- Length contraction: Moving objects appear shorter in the direction of motion.
- Mass-energy equivalence: E = mc².

Chapter 2: Quantum Mechanics
Quantum mechanics deals with particles at atomic and subatomic scales, where classical physics fails.
Principles include:
- Wave-particle duality
- The uncertainty principle
- Quantized energy levels
    `,
  },
  {
    id: 3,
    title: "Advanced English Grammar",
    author: "Emma Johnson",
    subject: "English",
    img: "https://i.ibb.co.com/XZW80vyh/c77513c5-83b6-4638-9595-4880833b2286.jpg",
    description: "Master advanced grammar rules for professional writing and speaking.",
    content: `
Lesson 1: Perfect Tenses

Perfect tenses describe actions completed in relation to another point in time.

Examples:
- Present Perfect: I have finished my homework. (Action completed before now)
- Past Perfect: She had left before the meeting started.
- Future Perfect: By next week, I will have completed the project.

Common Mistakes:
- Mixing up past simple and present perfect
- Forgetting to use 'had' in past perfect

Lesson 2: Conditional Sentences
Conditional sentences describe cause-effect relationships. There are zero, first, second, and third conditionals.
    `,
  },
  {
    id: 4,
    title: "CSS Mastery",
    author: "Liam Brown",
    subject: "CSS",
    img: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
    description: "Advanced CSS layouts, animations, and responsive design techniques.",
    content: `
Chapter 1: CSS Grid Basics

CSS Grid is a two-dimensional layout system that allows web developers to create complex, responsive layouts easily.

Core Concepts:
- Grid container and grid items
- Defining columns and rows
- Using 'grid-template-columns' and 'grid-template-rows'
- Gap spacing

Chapter 2: Advanced Animations
CSS animations can bring life to a website.
Properties:
- @keyframes
- animation-delay, animation-duration
- cubic-bezier timing functions

Example:
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
    `,
  },
  {
    id: 5,
    title: "Algebra Made Easy",
    author: "Michael White",
    subject: "Mathematics",
    img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
    description: "Step-by-step guide to mastering algebra concepts.",
    content: `
Chapter 1: Variables and Expressions

A variable is a symbol (usually a letter) that represents an unknown value.
Expressions are combinations of variables, numbers, and operations.

Example:
3x + 5 = 11

Solving:
1. Subtract 5 from both sides → 3x = 6
2. Divide both sides by 3 → x = 2

Chapter 2: Quadratic Equations
A quadratic equation is in the form ax² + bx + c = 0.
Solution methods:
- Factoring
- Quadratic formula: x = [-b ± √(b² - 4ac)] / 2a
    `,
  },
  {
    id: 6,
    title: "Introduction to Biology",
    author: "Sarah Green",
    subject: "Biology",
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
    description: "Explore cell biology, genetics, and evolution basics.",
    content: `
Chapter 1: The Cell

The cell is the basic unit of life.
Types:
- Prokaryotic: No nucleus (e.g., bacteria)
- Eukaryotic: Has a nucleus (e.g., plants, animals)

Components:
- Nucleus
- Mitochondria
- Cell membrane

Chapter 2: Genetics
DNA carries genetic information. Genes determine traits.
Principles:
- Mendelian inheritance
- Dominant vs recessive traits
    `,
  },
  {
    id: 7,
    title: "Learn JavaScript",
    author: "David Parker",
    subject: "Programming",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    description: "Beginner to advanced JavaScript concepts for web development.",
    content: `
Lesson 1: Variables and Data Types

JavaScript variables store data values.
Data types include:
- String
- Number
- Boolean
- Object
- Array

Lesson 2: Functions
Functions group reusable blocks of code.

Example:
function greet(name) {
  return "Hello " + name;
}
    `,
  },
  {
    id: 8,
    title: "World History Overview",
    author: "Olivia Harris",
    subject: "History",
    img: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4",
    description: "From ancient civilizations to modern times.",
    content: `
Chapter 1: The Ancient World

Human civilization began in river valleys:
- Nile (Egypt)
- Indus (India)
- Tigris-Euphrates (Mesopotamia)

Key Developments:
- Writing systems
- Agricultural revolution
- Early governments

Chapter 2: The Middle Ages
Feudalism, the rise of kingdoms, and the spread of religion shaped Europe, Asia, and Africa.
    `,
  }
];


const subjects = ["All", "Chemistry", "Physics", "English", "CSS", "Mathematics", "Biology", "Programming", "History"];

const BookCollection = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [readingBook, setReadingBook] = useState(null);
  const [filter, setFilter] = useState("All");

  const filteredBooks =
    filter === "All" ? booksData : booksData.filter(book => book.subject === filter);

  return (
    <div className="py-10 px-4 md:px-12 lg:px-20 bg-base-100">
      <h2 className="text-2xl md:text-2xl font-semibold text-center mb-6">
        📚 BOOK COLLECTION
      </h2>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {subjects.map((subj) => (
          <button
            key={subj}
            className={`btn btn-sm ${filter === subj ? "btn-primary" : "btn-outline"}`}
            onClick={() => setFilter(subj)}
          >
            {subj}
          </button>
        ))}
      </div>

      {/* Book Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredBooks.map((book) => (
          <motion.div
            key={book.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="card bg-base-200 shadow-lg rounded-xl overflow-hidden border border-base-300"
          >
            <figure className="h-56 overflow-hidden">
              <img
                src={book.img}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{book.title}</h3>
              <p className="text-sm opacity-70">by {book.author}</p>
              <span className="badge badge-outline mt-2">{book.subject}</span>
              <div className="card-actions justify-end mt-4">
                <button
                  onClick={() => setSelectedBook(book)}
                  className="btn btn-outline btn-primary btn-sm flex items-center gap-2"
                >
                  <FaInfoCircle /> Details
                </button>
                <button
                  onClick={() => setReadingBook(book)}
                  className="btn btn-primary btn-sm flex items-center gap-2"
                >
                  <FaBookOpen /> Read
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Details Modal */}
      {selectedBook && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-base-200">
            <h3 className="font-bold text-lg">{selectedBook.title}</h3>
            <p className="text-sm opacity-70 mb-2">by {selectedBook.author}</p>
            <span className="badge badge-outline mb-3">{selectedBook.subject}</span>
            <figure className="my-3">
              <img
                src={selectedBook.img}
                alt={selectedBook.title}
                className="rounded-lg shadow-md"
              />
            </figure>
            <p className="py-2">{selectedBook.description}</p>
            <div className="modal-action">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setReadingBook(selectedBook);
                  setSelectedBook(null);
                }}
              >
                Read Now
              </button>
              <button
                className="btn"
                onClick={() => setSelectedBook(null)}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}

      {/* Reading Modal */}
      {readingBook && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-base-200 max-h-[80vh] overflow-y-auto">
            <h3 className="font-bold text-lg">{readingBook.title}</h3>
            <p className="text-sm opacity-70 mb-2">by {readingBook.author}</p>
            <span className="badge badge-outline mb-3">{readingBook.subject}</span>
            <pre className="whitespace-pre-wrap leading-relaxed">{readingBook.content}</pre>
            <div className="modal-action">
              <button
                className="btn"
                onClick={() => setReadingBook(null)}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default BookCollection;
