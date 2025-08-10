import React, { useState, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';
import { GoAlertFill } from 'react-icons/go';
import { InfinitySpin } from 'react-loader-spinner'; // ......

const Teachermarking = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  
  const [_id, setId] = useState(null);
  const [status, setStatus] = useState('');
  const [initialDate, setInitialDate] = useState('');
  const [google, setGoogle] = useState('');
  const [loading, setLoading] = useState(true); // .........

  // ...............
  useEffect(() => {
    if (data) {
      setId(data._id);
      setStatus(data.status);
      setInitialDate(data.date);
      setGoogle(data.google);
      setLoading(false);
    }
  }, [data]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;

    const obtainedmark = form.obtainedmark.value.trim();
    const techer = form.teachername.value.trim();
    const feedback = form.feedback.value.trim();
    const date = form.date.value;
    const phendingvalue = 'Complete';

    if (!obtainedmark || !techer || !feedback || !date) {
      Swal.fire({
        icon: 'warning',
        title: 'Please fill in all fields',
      });
      return;
    }

    const updateData = {
      obtainedmark,
      techer,
      feedback,
      date,
      status,
      phendingvalue,
    };

    try {
      const res = await fetch(
        `https://my-assignment-11-server-rouge.vercel.app/assignmentmark/${_id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updateData),
        }
      );
      const result = await res.json();

      if (result.modifiedCount) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Marking successful',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/my-attempts');
      } else {
        throw new Error('Update failed');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message || 'Something went wrong',
      });
    }
  };

  // লোডার দেখানো
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-base-100">
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 text-base-content flex flex-col">
      <Navbar />

      {/* Google Docs Link Section */}
      <section className="bg-base-200 rounded-2xl p-8 w-10/12 mx-auto mt-14 shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Google Docs Link</h2>
        <div className="flex justify-between items-center mb-4">
          <p className="text-base-content font-medium">Availability</p>
          <p className="bg-success/20 text-success px-3 py-1 rounded-2xl font-semibold">
            Teacher Available Today
          </p>
        </div>
        <p className=" text-warning p-3 rounded-lg flex items-center gap-2 justify-center text-center">
          <GoAlertFill className="text-xl" />
          <span>
            Google Docs Link:{' '}
            <a href={google} target="_blank" rel="noopener noreferrer" className="text-error underline">
              {google}
            </a>
          </span>
        </p>
        <button
          type="button"
          className="btn btn-block btn-primary mt-5 rounded-3xl"
          onClick={() => window.open(google, '_blank')}
        >
          Open Document
        </button>
      </section>

      {/* Marking Form */}
      <main className="flex-grow max-w-3xl mx-auto w-full p-8 mt-16 rounded-3xl bg-base-200 shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-12 ">
          MARKING ASSIGNMENT  FORM
        </h2>

        <form onSubmit={handleUpdate} className="space-y-8">
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-semibold text-base-content">Obtained Mark</span>
              </label>
              <input
                type="number"
                name="obtainedmark"
                placeholder="Enter obtained mark"
                className="input input-bordered w-full bg-base-100 text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
                min={0}
                required
              />
            </div>

            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-semibold text-base-content">Teacher Name</span>
              </label>
              <input
                type="text"
                name="teachername"
                placeholder="Enter your name"
                className="input input-bordered w-full bg-base-100 text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base-content">Deadline</span>
            </label>
            <input
              type="date"
              name="date"
              defaultValue={initialDate}
              className="input input-bordered w-full bg-base-100 text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base-content">Feedback</span>
            </label>
            <textarea
              name="feedback"
              placeholder="Write feedback here..."
              className="textarea textarea-bordered w-full bg-base-100 text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
              rows={5}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block text-lg rounded-full hover:scale-105 transition-transform duration-200"
          >
            Submit Assignment
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Teachermarking;
