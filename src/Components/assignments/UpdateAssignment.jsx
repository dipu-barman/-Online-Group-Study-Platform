import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';

const UpdateAssignment = () => {
    const {_id,title,photo,mark,description,date,level}= useLoaderData()

     const handleupdate = e =>{
        e.preventDefault();
     const form = e.target;
          const fromdata = new FormData(form)
     const updatee = Object.fromEntries(fromdata.entries())

     console.log(updatee)

  fetch(`https://my-assignment-11-server-rouge.vercel.app/assignmets/${_id}`,{
              method:'PUT',
             headers :{
            'content-type':'application/json'
          
         }, 
          body :JSON.stringify(updatee)
          })
         .then(res =>res.json())
        .then(data =>{
            console.log(data)
            console.log(data.modifiedCount)
              if(data.modifiedCount){
     
            Swal.fire({
           position: "top-end",
            icon: "success",
            title: "update successfull",
          showConfirmButton: false,
              timer: 1500
});
              }
            //  console.log(data)
         })



    }
    return (
        <div>

            <Navbar></Navbar>
            <div className='mt-12 '>

            <h2 className='text-3xl font-bold text-center mt-16 mb-8'>UPDATE ASSIGNMENT FROM</h2>

            <form onSubmit={handleupdate} className='w-6/12 border-2 rounded-3xl mx-auto p-7'>

                <div className=' gap-5 space-y-5'>
                     {/* Job title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text"> Title</span>
                    </label>
                    <input type="text" name='title' defaultValue={title} placeholder=" Title" className="input input-bordered w-full" required />
                </div>
                 <div className="form-control">
                    <label className="label">
                        <span className="label-text">photoURL</span>
                    </label>
                    <input type="text" name='photo' defaultValue={photo} placeholder="your phoourl.." className="input input-bordered w-full" required />
                </div>

                <div className='flex gap-6 w-full'>

                    <div className="form-control w-3/6">
                    <label className="label">
                        <span className="label-text"> Total Mark</span>
                    </label>
                    <input type="text" name='mark' placeholder="mark" defaultValue={mark} className="input input-bordered" required />
                </div>

                  {/* select field */}
             <div className="form-control w-3/6 pl-12">
                    <label className="label">
                        <span className="label-text">Difficulty level</span>
                    </label>
                    <select defaultValue={level} name='level'className="input input-bordered w-full max-w-xs  border-2 ">
                        <option disabled>Pick a  type</option>
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                    </select>
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
                    <input type="date" name='date' placeholder="Deadline" defaultValue={date} className="input input-bordered w-full" required />
                </div>

                 <div className="form-control ">
                     <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered w-full" defaultValue={description} placeholder="Write each responsibility in a new line" name="description" required></textarea>
                </div>

                 {/* </div> */}
                
            
            
                </div>
                <div className='mt-6'>
                     <input className='btn w-full' type="submit" value="Update Assignment " />

                </div>
               
            </form>


            
        </div>
        <div className='mt-12'>
            <Footer></Footer>
        </div>
        
        </div>
    );
};

export default UpdateAssignment;