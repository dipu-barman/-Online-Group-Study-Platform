import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';

const UpdateAssignment = () => {
  const { _id, title, photo, mark, description, date, level } = useLoaderData();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateData = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(`https://my-assignment-11-server-rouge.vercel.app/assignmets/${_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateData),
      });

      const data = await res.json();

      if (data.modifiedCount) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Update successful!',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Update failed',
        text: error.message || 'Something went wrong!',
      });
    }
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Navbar />

      <main className="max-w-3xl mx-auto p-6 mt-12 rounded-3xl bg-base-200 shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-10">Update Assignment Form</h2>

        <form onSubmit={handleUpdate} className="space-y-6">
          {/* Title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Title</span>
            </label>
            <input
              type="text"
              name="title"
              defaultValue={title}
              placeholder="Assignment Title"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Photo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Photo URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Mark and Difficulty Level */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-semibold">Total Mark</span>
              </label>
              <input
                type="number"
                name="mark"
                defaultValue={mark}
                placeholder="Mark"
                className="input input-bordered w-full"
                min={0}
                required
              />
            </div>

            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-semibold">Difficulty Level</span>
              </label>
              <select
                name="level"
                defaultValue={level}
                className="select select-bordered w-full"
                required
              >
                <option disabled value="">
                  Pick a difficulty
                </option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>
          </div>

          {/* Deadline */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Deadline</span>
            </label>
            <input
              type="date"
              name="date"
              defaultValue={date}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Description</span>
            </label>
            <textarea
              name="description"
              defaultValue={description}
              placeholder="Write each responsibility in a new line"
              className="textarea textarea-bordered w-full"
              rows={5}
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className="btn btn-primary btn-block text-lg">
              Update Assignment
            </button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default UpdateAssignment;
