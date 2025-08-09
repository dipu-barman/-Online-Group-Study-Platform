import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import Myassignment from "./Myassignment";

const Attemtedassignment = () => {
  const [assignments, setAssignments] = useState([]);
  const [searchTeacher, setSearchTeacher] = useState("");
  const [sortKey, setSortKey] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [loading, setLoading] = useState(false); // Loader state

  useEffect(() => {
    setLoading(true); // Start loader before fetching
    fetch("https://my-assignment-11-server-rouge.vercel.app/assignmentmark")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const completedData = data.filter(
            (assignment) => assignment.status === "Complete"
          );
          setAssignments(completedData);
        }
      })
      .catch((error) => {
        console.error("Error fetching assignments:", error);
      })
      .finally(() => {
        setLoading(false); // Stop loader after fetch
      });
  }, []);

  const filtered = assignments.filter((a) =>
    a.techer.toLowerCase().includes(searchTeacher.toLowerCase())
  );

  const sorted = filtered.sort((a, b) => {
    let valA = a[sortKey];
    let valB = b[sortKey];

    if (sortKey === "date") {
      valA = new Date(valA).getTime();
      valB = new Date(valB).getTime();
    }

    if (sortKey === "techer") {
      valA = valA.toLowerCase();
      valB = valB.toLowerCase();
      if (valA < valB) return sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    }

    if (valA < valB) return sortOrder === "asc" ? -1 : 1;
    if (valA > valB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-col items-center mt-12 mb-8 px-4">
        <h2 className="text-3xl font-bold text-primary">Completed Assignments</h2>

        <input
          type="text"
          placeholder="Search by teacher name..."
          className="input input-bordered w-full max-w-md mt-4"
          value={searchTeacher}
          onChange={(e) => setSearchTeacher(e.target.value)}
        />

        <div className="flex gap-4 mt-4">
          <select
            className="select select-bordered"
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value)}
          >
            <option value="date">Date</option>
            <option value="mark">Mark</option>
            <option value="techer">Teacher Name</option>
          </select>

          <button
            className="btn btn-outline"
            onClick={() =>
              setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
            }
            title="Toggle sort order"
          >
            {sortOrder === "asc" ? "Ascending ↑" : "Descending ↓"}
          </button>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-2 ml-16 mb-4">Total: {sorted.length}</p>

      <div className="grid gap-6 px-4 sm:px-8 lg:px-16 mb-16">
        {loading ? (
          // Professional loader
          <div className="flex justify-center items-center h-40">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : sorted.length > 0 ? (
          sorted.map((student, index) => (
            <Myassignment key={student._id} index={index} student={student} />
          ))
        ) : (
          <p className="text-center text-gray-500">No completed assignments found.</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Attemtedassignment;
