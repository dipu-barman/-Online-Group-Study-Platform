import React, { useContext, useState } from "react";
import Authcontext from "../contexts/Authcontext";
import Swal from "sweetalert2";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";

const CreateAssignments = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(Authcontext);

  const handleCreateAssignment = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const newAssignment = {
      title: form.title.value,
      photo: form.photo.value,
      mark: form.mark.value,
      level: form.level.value,
      deadline: form.date.value,
      description: form.description.value,
      myemail: form.myemail.value,
    };

    axios
      .post("https://my-assignment-11-server-rouge.vercel.app/assignmets", newAssignment)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Assignment Created!",
            text: "Your assignment has been successfully added.",
            icon: "success",
            confirmButtonColor: "#570DF8",
          });
          form.reset();
        }
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonColor: "#E02424",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      <Navbar />

      {/* Header */}
      <h2 className="text-2xl font-semibold text-center mt-10 mb-8 ">
        CREATE ASSIGNMENT
      </h2>

      {/* Form */}
      <form
        onSubmit={handleCreateAssignment}
        className="w-full max-w-3xl mx-auto bg-base-200 p-8 rounded-2xl shadow-lg border border-base-300"
      >
        {/* Title */}
        <div className="form-control mb-5">
          <label className="label">
            <span className="label-text font-semibold">Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter assignment title"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Email */}
        <div className="form-control mb-5">
          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <input
            type="email"
            name="myemail"
            value={user?.email || ""}
            readOnly
            className="input input-bordered w-full bg-base-300 cursor-not-allowed"
          />
        </div>

        {/* Photo URL */}
        <div className="form-control mb-5">
          <label className="label">
            <span className="label-text font-semibold">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Paste image URL"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Marks & Difficulty */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Total Marks</span>
            </label>
            <input
              type="number"
              name="mark"
              defaultValue={60}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Difficulty Level</span>
            </label>
            <select name="level" className="select select-bordered" required>
              <option value="">Select Level</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>
        </div>

        {/* Deadline */}
        <div className="form-control mb-5">
          <label className="label">
            <span className="label-text font-semibold">Deadline</span>
          </label>
          <input
            type="date"
            name="date"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Description */}
        <div className="form-control mb-5">
          <label className="label">
            <span className="label-text font-semibold">Description</span>
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full"
            placeholder="Write assignment details here..."
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Assignment"}
        </button>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CreateAssignments;
