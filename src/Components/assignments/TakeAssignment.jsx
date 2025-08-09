import React, { use, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';
import Authcontext from '../contexts/Authcontext';

const TakeAssignment = () => {
  const { user } = use(Authcontext);
  const navigate = useNavigate();

  const [currentTime, setCurrentTime] = useState(new Date());

  // Live clock updater
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format date, time, and day
  const todayDate = currentTime.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
  const todayName = currentTime.toLocaleDateString('en-GB', {
    weekday: 'long',
  });
  const timeNow = currentTime.toLocaleTimeString();

  const handleCreateAssignment = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const subject = form.subject.value;
    const student = form.name.value;
    const myemail = form.myemail.value;
    const mark = form.mark.value;
    const google = form.google.value;
    const date = form.date.value;
    const description = form.description.value;
    const status = 'pending';

    const newAssignment = {
      title,
      subject,
      student,
      myemail,
      mark,
      google,
      date,
      description,
      status,
    };

    fetch('https://my-assignment-11-server-rouge.vercel.app/assignmentmark', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newAssignment),
    })
      .then(res => res.json())
      .then(data => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Submit successful',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/pending');
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div data-theme="cupcake">
      <Navbar />

      {/* Date & Time Header */}
      <div className="text-center mt-6">
        <div className="badge badge-lg badge-primary p-4">
          📅 {todayName}, {todayDate} ⏰ {timeNow}
        </div>
      </div>

      <div className="mt-12 mb-28">
        <h2 className="text-3xl font-bold text-center mt-16 mb-8">Submit Assignment Form</h2>

        <form
          onSubmit={handleCreateAssignment}
          className="w-11/12 md:w-7/12 lg:w-5/12 mx-auto bg-base-200 shadow-xl rounded-3xl p-6 space-y-5"
        >
          {/* Title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Title</span>
            </label>
            <input type="text" name="title" placeholder="Title" className="input input-bordered w-full" required />
          </div>

          {/* Google Docs Link */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Google Docs Link</span>
            </label>
            <input type="text" name="google" placeholder="Your URL.." className="input input-bordered w-full" required />
          </div>

          {/* Name & Email */}
          <div className="flex flex-col md:flex-row gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Your Name</span>
              </label>
              <input type="text" name="name" placeholder="Your name" className="input input-bordered w-full" required />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Your Email</span>
              </label>
              <input type="email" name="myemail" value={user?.email} readOnly className="input input-bordered w-full" />
            </div>
          </div>

          {/* Marks & Subject */}
          <div className="flex flex-col md:flex-row gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Mark</span>
              </label>
              <input type="text" name="mark" placeholder="Your mark" className="input input-bordered w-full" required />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Subject Name</span>
              </label>
              <input type="text" name="subject" placeholder="Subject" className="input input-bordered w-full" />
            </div>
          </div>

          {/* Deadline */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Deadline</span>
            </label>
            <input type="date" name="date" className="input input-bordered w-full" required />
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Description</span>
            </label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full"
              placeholder="Write each responsibility in a new line"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <input className="btn btn-primary w-full" type="submit" value="Submit Your Assignment" />
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default TakeAssignment;
