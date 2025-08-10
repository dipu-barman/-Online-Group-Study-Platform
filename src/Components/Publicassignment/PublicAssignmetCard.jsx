import React, { useContext } from "react";
import { Link } from "react-router";
import Authcontext from "../contexts/Authcontext";
import Swal from "sweetalert2";
import { BsBootstrapReboot } from "react-icons/bs";

const PublicAssignmetCard = ({ assignmet, asignmets, setAssignmets }) => {
  const { user } = useContext(Authcontext);

  const handleDelete = (_id) => {
    if (user?.email === assignmet?.myemail) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(
            `https://my-assignment-11-server-rouge.vercel.app/assignmets/${_id}`,
            { method: "DELETE" }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                Swal.fire("Deleted!", "Your assignment has been deleted.", "success");
                setAssignmets(asignmets.filter((item) => item._id !== _id));
              }
            });
        }
      });
    } else {
      Swal.fire("Oops!", "Only the creator can delete this assignment.", "error");
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl border border-base-300">
      <figure className="px-6 pt-6">
        <img
          src={assignmet.photo}
          alt={assignmet.title}
          className=" w-68 h-48  rounded-xl "
        />
      </figure>
      <div className="card-body">
        {/* Tags */}
        <div className="flex gap-3">
         <span className="badge badge-outline">Mark</span>
<span className="badge badge-primary badge-outline">{assignmet.mark}</span>

        </div>

        {/* Title & Description */}
        <h2 className="card-title mt-2">{assignmet.title}</h2>
        <p className="text-sm text-base-content">{assignmet.description}</p>
        <p className="text-sm text-gray-500 flex items-center gap-1">
          <BsBootstrapReboot /> Submit date: {assignmet.deadline || "N/A"}
        </p>

        {/* Actions */}
        <div className="card-actions justify-between mt-4">
          <Link to={`/view/${assignmet._id}`} className="btn btn-primary btn-sm">
            View
          </Link>
          <Link to={`/update/${assignmet._id}`} className="btn btn-primary btn-sm">
            Update
          </Link>
          <button
            onClick={() => handleDelete(assignmet._id)}
            className="btn btn-primary btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublicAssignmetCard;
