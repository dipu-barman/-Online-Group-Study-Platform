import React from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';

const TakeAssignment = () => {

  const navigate = useNavigate();

  const handleCreateAssignment = (e) => {
    e.preventDefault();



    const form = e.target;
    // const email = user.email;
    const title = form.title.value;
    const subject = form.subject.value;
    const student = form.name.value;
    const email = form.email.value;
    const mark = form.mark.value;
    const google = form.google.value;
    const date = form.date.value;
    const description = form.description.value;
    const status = 'phending'

    const newAssignment = {
      title,
      subject,
      student,
      email,
      mark,
      google,
      date,
      description,
      status

    };

    console.log(newAssignment); // For now, log to check

    // Send to backend (example URL)
    fetch('https://my-assignment-11-server-rouge.vercel.app/assignmentmark', {
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


        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "submit successfull",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/pending')
      })
      .catch(error => {
        console.error('Error:', error);
      });
    //   e.target.reset();

  };

  return (
    <div>

      <Navbar></Navbar>
      <div className='text-center w-3/12 mx-auto mt-12'>
        {/* For TSX uncomment the commented types below */}
        <div className="flex gap-5">
          <div>
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": 15 } /* as React.CSSProperties */} aria-live="polite" aria-label={15}>15</span>
            </span>
            days
          </div>
          <div>
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": 10 } /* as React.CSSProperties */} aria-live="polite" aria-label={10}>10</span>
            </span>
            hours
          </div>
          <div>
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": 24 } /* as React.CSSProperties */} aria-live="polite" aria-label={24}>24</span>
            </span>
            min
          </div>
          <div>
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": 59 } /* as React.CSSProperties */} aria-live="polite" aria-label={600}>59</span>
            </span>
            sec
          </div>
        </div>
      </div>

      <div className='mt-12 mb-28'>

        <h2 className='text-3xl font-bold text-center mt-16 mb-8'>SUBMITE ASSIGNMENT FROM</h2>

        <form onSubmit={handleCreateAssignment} className='w-5/12 mx-auto border-2 rounded-3xl p-3'>


          <div className=' gap-5 space-y-5'>
            {/* Job title */}
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Title</span>
              </label>
              <input type="text" name='title' placeholder=" Title" className="input input-bordered w-full" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Google docs link</span>
              </label>
              <input type="text" name='google' placeholder="your url.." className="input input-bordered w-full" required />
            </div>

            <div className='flex  w-full gap-8'>

              <div className="form-control">
                <label className="label">
                  <span className="label-text"> your name</span>
                </label>
                <input type="text" name='name' placeholder="your name" className="input input-bordered w-72" required />
              </div>

              {/* select field */}
              <div className="form-control w-full ">
                <span className="label-text">Your email</span>
                <label className="label ">

                  <input type="email" name="email" className='input input-bordered w-72' id="" />
                </label>

              </div>

            </div>
            <div className='flex  w-full gap-8'>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">  mark</span>
                </label>
                <input type="text" name='mark' placeholder="your mark" className="input input-bordered w-72" required />
              </div>

              {/* select field */}
              <div className="form-control w-full ">
                <span className="label-text"> Subject name</span>
                <label className="label ">

                  <input type="text" name="subject" className='input input-bordered w-72' id="" />
                </label>

              </div>

            </div>




            {/*                
                      <DatePicker
      showIcon
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
    />
                */}


            {/* application Deadline */}

            {/* <div className='flex gap-6 w-full'> */}

            <div className="form-control ">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <input type="date" name='date' placeholder="Deadline" className="input input-bordered w-full" required />
            </div>

            <div className="form-control ">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea className="textarea textarea-bordered w-full" placeholder="Write each responsibility in a new line" name="description" required></textarea>
            </div>

            {/* </div> */}



          </div>
          <div className='mt-6'>
            <input className='btn w-full' type="submit" value=" Submit YOUR Assignment " />

          </div>

        </form>

      </div>

      <div className='mt-14'>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default TakeAssignment;