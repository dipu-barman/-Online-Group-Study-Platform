import React from 'react';
import { Link } from 'react-router';
import student4 from '../../assets/Animation - 1750224884450.json'
import Lottie from 'lottie-react';
import Navbar from '../Navbar/Navbar';
import { useLoaderData } from 'react-router';
import { BsBootstrapReboot } from 'react-icons/bs';
import { GoAlertFill } from 'react-icons/go';
import Footer from '../footer/Footer';

const ViewAssignment = () => {

    const {
_id,title,photo,mark,level,deadline,description,email} =useLoaderData()

    
  const style = {
  height: 300,
};
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex justify-center mt-12'>
           <div>
                               
                                  <Lottie animationData={student4}
                       style={style}
                       // interactivity={interactivity}
                       />
                      
                </div>

                <div>
                               
                                  <Lottie animationData={student4}
                       style={style}
                       // interactivity={interactivity}
                       />
                      
              </div>

            </div>

            
            <div className=''>
                

                 <div className='bg-[#0F0F0F26]  p-16 rounded-2xl w-10/12 mx-auto mt-10' >
                <h2 className='text-center text-2xl font-semibold text-black'> Profile Details</h2>
                <p className='text-center mt-4 text-black'>A unique ID assigned by the state or country’s Bar Association confirming they are licensed to practice .


The specific field of law they focus on — like criminal law, corporate law, family law, intellectual property, real estate, or immigration.</p>
            </div>
            
            </div>
          
             

                 

                              <div className='border border-black rounded-2xl my-10 px-12 py-5 flex gap-12 mx-auto w-10/12'>
                <div>
                    <img className='w-36 h-40 rounded-2xl' src={photo} alt="" />
                </div>
                <div>
             <p className='text-[#176AE5] bg-[#176AE51A] px-3 py-2 rounded-3xl text-center'>{title} Experience</p>
                           <p className='text-xl font-bold mt-3 text-black'>level:{level}</p>
                           <div className='flex gap-7 mt-2 '>
                            <p className='font-semibold text-black'>{email}</p>
                            <p className='font-semibold text-black flex'><BsBootstrapReboot className='mt-1' /><span>mark No:{mark}</span> </p>
                           </div>
                           <div className='flex gap-2 font-semibold mt-2' >
                             {/* <span className='text-black'>Availability</span> 
                             {detailes.availability.map(day =><p className='flex text-[#FFA000] bg-[#FFA00033] px-2 rounded-2xl'>{day}</p>)} */}
                             <p>{_id}</p>
                             <p>date:{deadline}</p>
                           </div>
                           <p className='font-semibold mt-2 text-black'> <span className='text-[#09982F]'>{description} </span></p>
                          
                           
                </div>
            </div>


              <div className='rounded-2xl bg-[#14141426] p-10 w-10/12 mx-auto mb-16'>
                <h2 className='text-2xl font-semibold text-center text-black'>Subbmit on Assignment</h2>
                <div className='flex justify-between mt-4'>
                    <p className='text-black'>Availability</p>
                    <p className='bg-[#09982F33] text-[#09982F] px-2 rounded-2xl'>Assignmante date  Available Today</p>
                </div>
                
                <p className='text-center bg-[#FFA0001A] text-[#FFA000] mt-4 text-black p-2 flex gap-3'>
                <GoAlertFill className='mt-1 ' /> <span>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</span> </p>
                {/* <button onClick={()=>handlenavigate(single.id)} className='btn btn-block mt-5 bg-[#0EA106] text-white rounded-3xl'>Book Appointment Now</button> */} 
                <div className='mt-5'>
                    

                        <Link to="/take"> <button className=' btn btn-block bg-[#0EA106]'>Take assignment</button></Link>
               

                    
                
               
            </div>
            </div>

            <div>
                <Footer></Footer>
            </div>

           
        </div>
    );
};

export default ViewAssignment;