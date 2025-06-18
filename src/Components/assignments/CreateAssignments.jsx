import React, { use, useContext, useState } from 'react';
import Authcontext from '../contexts/Authcontext'
import Swal from 'sweetalert2';
import { jwtDecode } from 'jwt-decode';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';
const CreateAssignments = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const {user } = use(Authcontext);
  

  const handleCreateAssignment = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const title = form.title.value;
    const photo = form.photo.value;
    const mark = form.mark.value;
    const level = form.level.value;
    const date = form.date.value;
    const description = form.description.value;

    const newAssignment = {
      title,
      photo,
      mark,
      level,
      deadline: date,
      description,
      email
    };

    console.log(newAssignment); // For now, log to check

    // Send to backend (example URL)
    fetch('https://my-assignment-11-server-rouge.vercel.app/assignmets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newAssignment)
    })
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        // Optionally clear form or show message
        
          if(data.insertedId){
//         console.log('affter adding ',data)
        Swal.fire({
  title: "added successful!",
  icon: "success",
  draggable: true
 });}


      })
      .catch(error => {
        console.error('Error:', error);
      });
      e.target.reset();

  };

  return (
    <div className=''>
      <div>
        <Navbar></Navbar>
      </div>
      <h2 className='text-3xl font-bold text-center mt-16 mb-8'>CREATE ASSIGNMENT FORM</h2>

      <form onSubmit={handleCreateAssignment} className='w-6/12 mx-auto border-2 rounded-3xl p-2'>
        <div className='gap-5 space-y-5'>
          {/* Title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input type="text" name='title' placeholder="Title" className="input input-bordered w-full" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">email</span>
            </label>
            <input type="email" name='email' placeholder="your email" className="input input-bordered w-full" required />
          </div>

          {/* Photo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" name='photo' placeholder="Your photo URL" className="input input-bordered w-full" required />
          </div>

          {/* Mark & Difficulty */}
          <div className='flex gap-6 w-full'>
            <div className="form-control w-3/6">
              <label className="label">
                <span className="label-text">Total Mark</span>
              </label>
              <input type="number" name='mark' defaultValue={60} placeholder="Mark" className="input input-bordered" required />
            </div>

            <div className="form-control w-3/6 pl-12">
              <label className="label">
                <span className="label-text">Difficulty Level</span>
              </label>
              <select name='level' className="input input-bordered w-full max-w-xs border-2" required>
                <option value="">Pick a type</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>
          </div>

          {/* Deadline */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input type="date" name='date' className="input input-bordered w-full" required />
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea name="description" className="textarea textarea-bordered w-full" placeholder="Write each responsibility in a new line" required></textarea>
          </div>
        </div>

        <div className='mt-6'>
          <input className='btn w-full' type="submit" value="Create Assignment" />
        </div>
      </form>
      <div className='mt-14'><Footer></Footer></div>
    </div>
  );
};

export default CreateAssignments;
