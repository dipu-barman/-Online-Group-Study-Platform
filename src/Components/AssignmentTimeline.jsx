import React from "react";

const assignments = [
  {
    id: 1,
    title: "Physics Homework - Chapter 4",
    dueDate: "2025-08-20",
    status: "Pending",
    student: {
      name: "Alice Johnson",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    teacher: {
      name: "Mr. Robert Smith",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  },
  {
    id: 2,
    title: "Math Assignment - Algebra",
    dueDate: "2025-08-18",
    status: "Submitted",
    student: {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    teacher: {
      name: "Mrs. Emma Williams",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  },
  {
    id: 3,
    title: "English Essay - Modern Poetry",
    dueDate: "2025-08-22",
    status: "Graded",
    student: {
      name: "Sarah Lee",
      avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    teacher: {
      name: "Mr. David Johnson",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    },
  },
];

const statusColors = {
  Pending: "bg-green-200 text-yellow-800",
  Submitted: "bg-blue-200 text-blue-800",
  Graded: "bg-green-200 text-green-800",
};

export default function AssignmentTimeline() {
  return (
    <section className="w-10/12 mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center mb-10 ">
        ASSIGNMENT TIMELINE
      </h2>

      <ol className="relative border-l border-gray-300">
        {assignments.map(({ id, title, dueDate, status, student, teacher }) => (
          <li key={id} className="mb-10 ml-6">
            <span
              className={`absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full ring-8 ring-white ${statusColors[status]}`}
            ></span>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center bg-base-200 p-5 rounded-xl shadow-md hover:shadow-lg transition">
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Due: {new Date(dueDate).toLocaleDateString()}
                </p>
                <span
                  className={`inline-block mt-2 px-3 py-1 rounded-full font-medium ${statusColors[status]}`}
                >
                  {status}
                </span>
              </div>
              <div className="flex mt-4 md:mt-0 space-x-6">
                <div className="flex items-center space-x-3">
                  <img
                    className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                    src={student.avatar}
                    alt={student.name}
                  />
                  <div>
                    <p className="text-xs text-gray-500">Student</p>
                    <p className="font-semibold">{student.name}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <img
                    className="w-10 h-10 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2"
                    src={teacher.avatar}
                    alt={teacher.name}
                  />
                  <div>
                    <p className="text-xs text-gray-500">Teacher</p>
                    <p className="font-semibold">{teacher.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
