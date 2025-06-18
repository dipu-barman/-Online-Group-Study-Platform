import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import Navbar from '../Navbar/Navbar';
import { GoAlertFill } from 'react-icons/go';
import Footer from '../footer/Footer';

const Teachermarking = () => {

    const {_id,status,date,google} =useLoaderData()

    // console.log(data)
    


    
    const handleupdate =e =>{
        e.preventDefault();
     const form = e.target;

     
    const feedback = form.feedback.value;
    const techer = form.teachername.value;
    const obtainedmark = form.obtainedmark.value;
    const date = form.date.value
    const phendingvalue ="Complete"
    // const status = {status:'compleate'}
     
    console.log(status)
    
    //       const fromdata = new FormData(form)
    //  const updatee = Object.fromEntries(fromdata.entries())
    const updatee ={obtainedmark,techer,feedback,date,status,phendingvalue}

     console.log(obtainedmark,techer,feedback,date,phendingvalue)

  fetch(`https://my-assignment-11-server-rouge.vercel.app/assignmentmark/${_id}`,{
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

            
            <div className='rounded-2xl bg-[#14141426] p-10 w-10/12 mx-auto mt-14'>
                <h2 className='text-2xl font-semibold text-center text-black'>SHOW Google  LINK</h2>
                <div className='flex justify-between mt-4'>
                    <p className='text-black'>Availability</p>
                    <p className='bg-[#09982F33] text-[#09982F] px-2 rounded-2xl'>Teacher Available Today</p>
                </div>
                
                <p className='text-center bg-[#FFA0001A] text-[#FFA000] mt-4 text-black p-2 flex gap-3'>
                <GoAlertFill className='mt-1 ' /> <button></button> <span>GOOGLE DOCS LINK :
          <a className='text-red-500' href={google}>{google}</a>          </span> </p>
                <button className='btn btn-block mt-5 bg-[#0EA106] text-white rounded-3xl'>SHOW HERE</button>
            </div>



              <div className='mt-12 mb-16 '>

            <h2 className='text-3xl font-bold text-center mt-16 mb-8'>MARKING ASSIGNMENT FROM</h2>

            <form onSubmit={handleupdate} className='w-5/12 mx-auto border-2 p-4 rounded-3xl'>
            

                <div className=' gap-5 space-y-5'>
                     {/* Job title */}
                

                <div className='flex  w-full gap-8'>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Obtained  mark</span>
                    </label>
                    <input type="text" name='obtainedmark' placeholder="your mark" className="input input-bordered w-72" required />
                </div>

                  {/* select field */}
             <div className="form-control w-full ">
                <span className="label-text"> Teacher name</span>
                    <label className="label ">
                        
                        <input type="text" name="teachername" className='input input-bordered w-72 ' id="" required />
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
                    <input type="date" name='date' defaultValue={date} placeholder="Deadline" className="input input-bordered w-full" required />
                </div>

                 <div className="form-control ">
                     <label className="label">
                        <span className="label-text">Feed back</span>
                    </label>
                    <textarea className="textarea textarea-bordered w-full" placeholder="Write each responsibility in a new line" name="feedback" required></textarea>
                </div>

                 {/* </div> */}
                
            
            
                </div>
                <div className='mt-6'>
                     <input className='btn w-full' type="submit" value=" Submit Assignment " />

                </div>
               
            </form>
            
        </div>

        <div className='mt-32'>
             <Footer></Footer>
        </div>

      
        </div>
    );
};

export default Teachermarking;