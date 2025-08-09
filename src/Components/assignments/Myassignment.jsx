import React from "react";
import { Link } from "react-router-dom";

const Myassignment = ({ student, index }) => {
  const statusColor =
    student.status === "Complete"
      ? "badge-success"
      : "badge-error";

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-base-200 rounded-xl">
      <div className="card-body">
        {/* Header Row */}
        <div className="flex flex-wrap justify-between items-center gap-3 border-b border-base-200 pb-3">
          <span className="badge badge-outline badge-primary text-sm px-3 py-2">
            Subject: {student.subject}
          </span>
          <span className={`badge ${statusColor} text-sm px-3 py-2`}>
            Status: {student.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-4 text-lg font-bold text-primary">
          {student.title}
        </h3>

        {/* Info Grid */}
        <div className="grid sm:grid-cols-3 gap-4 mt-4 text-sm">
          {/* Column 1 */}
          <div className="space-y-2">
            <p className="badge badge-outline">No: {index + 1}</p>
            <p className="text-gray-500">Roll No: {student._id}</p>
          </div>

          {/* Column 2 */}
          <div className="space-y-1">
            <p>
              <span className="font-medium">Student:</span> {student.student}
            </p>
            <p>
              <span className="font-medium">Email:</span> {student.myemail}
            </p>
            <p>
              <span className="font-medium">Examiner:</span> {student.techer}
            </p>
          </div>

          {/* Column 3 */}
          <div className="space-y-1">
            <p>
              <span className="font-medium">Marks:</span> {student.mark}
            </p>
            <p>
              <span className="font-medium">Date:</span> {student.date}
            </p>
            <p>
              <span className="font-medium">Feedback:</span>{" "}
              {student.description || "No feedback given"}
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className=" flex justify-end">
          <Link to={`/assignment/${student._id}`}>
            <button className="btn btn-primary btn-sm">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Myassignment;
