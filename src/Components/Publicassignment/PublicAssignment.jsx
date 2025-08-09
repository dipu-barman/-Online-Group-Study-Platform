import React, { useEffect, useState } from "react";
import PublicAssignmetCard from "./PublicAssignmetCard";
import { InfinitySpin } from "react-loader-spinner";

const PublicAssignment = () => {
  const [assignments, setAssignments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); // লোডিং স্টেট

  useEffect(() => {
    setLoading(true);
    fetch("https://my-assignment-11-server-rouge.vercel.app/assignmets")
      .then((res) => res.json())
      .then((data) => {
        setAssignments(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  //filter 
  const filteredAssignments = assignments.filter((assignment) =>
    assignment.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto my-14">
      <h3 className="text-2xl font-semibold text-center mb-8">📚 ASSIGNMENT DEMO</h3>

      {/* Search Bar */}
      <div className="form-control mb-10 w-full max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search by title..."
          className="input input-bordered w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Assignments Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredAssignments.length > 0 ? (
          filteredAssignments.map((assignment) => (
            <PublicAssignmetCard
              key={assignment._id}
              assignmet={assignment}
              asignmets={assignments}
              setAssignmets={setAssignments}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No assignments found.
          </p>
        )}
      </div>
    </div>
  );
};

export default PublicAssignment;
