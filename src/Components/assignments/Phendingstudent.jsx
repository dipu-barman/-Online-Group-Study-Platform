import React from "react";
import { useNavigate } from "react-router";
import Authcontext from "../contexts/Authcontext";

const Phendingstudent = ({ ok, index }) => {
  const { user } = React.useContext(Authcontext);
  const navigate = useNavigate();

  const handleMark = (id) => {
    if (user.email !== ok.myemail) {
      navigate(`/mark/${id}`);
    } else {
      alert("Only teachers can give marks.");
    }
  };

  return (
    <div className="card bg-base-200 shadow-md hover:shadow-lg transition-all border border-base-300">
      <div className="card-body">
        <div className="flex justify-between flex-wrap gap-4">
          {/* Subject Info */}
          <div>
            <p className="text-sm opacity-70">No: {index + 1}</p>
            <h2 className="card-title text-lg">Subject: {ok.subject || "N/A"}</h2>
          </div>

          {/* Student Info */}
          <div>
            <p className="font-semibold">Name: {ok.student}</p>
            <p className="text-sm opacity-70">Email: {ok.myemail}</p>
          </div>

          {/* Marks & Date */}
          <div>
            <p className="font-semibold">Mark: {ok.mark || "Not given"}</p>
            <p className="text-sm opacity-70">Date: {ok.date}</p>
          </div>

          {/* Action */}
          <div className="self-center">
            <button
              onClick={() => handleMark(ok._id)}
              className="btn btn-primary btn-sm"
            >
              Give Mark
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phendingstudent;
