import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import Authcontext from "../contexts/Authcontext";
import Phendingstudent from "./Phendingstudent";

const PendingAssignmen = () => {
  const [assignments, setAssignments] = useState([]);
  const [searchSubject, setSearchSubject] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(false); // NEW
  const { user } = useContext(Authcontext);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = () => {
    setLoading(true);
    axios
      .get("https://my-assignment-11-server-rouge.vercel.app/assignmentmark")
      .then((res) => {
        const pendingData = res.data.filter(
          (item) => item.status === "phending"
        );
        setAssignments(pendingData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching pending assignments:", error);
        setLoading(false);
      });
  };

  // Filter by subject (case-insensitive)
  const filtered = assignments.filter((assignment) =>
    assignment.subject.toLowerCase().includes(searchSubject.toLowerCase())
  );

  // Sort filtered by subject alphabetically
  const sorted = filtered.sort((a, b) => {
    const subA = a.subject.toLowerCase();
    const subB = b.subject.toLowerCase();

    if (subA < subB) return sortOrder === "asc" ? -1 : 1;
    if (subA > subB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />

      <div className="text-center my-10">
        <h1 className="text-3xl font-bold text-primary">All Pending Assignments</h1>
        <div className="mt-3 flex justify-center gap-4 flex-wrap px-4">
          <span className="badge badge-lg badge-success">
            Total: {sorted.length}
          </span>
          <span className="badge badge-lg badge-outline">Status: Pending</span>
        </div>

        {/* Search & Sort */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 px-4 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search by Subject"
            className="input input-bordered w-full sm:w-72"
            value={searchSubject}
            onChange={(e) => setSearchSubject(e.target.value)}
          />

          <button
            className="btn btn-outline btn-primary"
            onClick={() =>
              setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
            }
            title="Toggle Sort Order"
          >
            Sort: {sortOrder === "asc" ? "Ascending ↑" : "Descending ↓"}
          </button>
        </div>
      </div>

      <div className="space-y-4 px-4 md:px-8 mb-16 w-10/12 mx-auto">
        {/* Loader above the list */}
        {loading && (
          <div className="flex justify-center mb-4">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        )}

        {sorted.length > 0 ? (
          sorted.map((assignment, index) => (
            <Phendingstudent key={assignment._id} index={index} ok={assignment} />
          ))
        ) : (
          !loading && (
            <p className="text-center text-gray-500">
              No pending assignments found.
            </p>
          )
        )}
      </div>

      <Footer />
    </div>
  );
};

export default PendingAssignmen;
