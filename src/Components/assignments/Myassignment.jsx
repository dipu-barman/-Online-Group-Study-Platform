import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router';

const Myassignment = ({student,index}) => {
    return (
        <div>
            

              <div className='bg-[#0F0F0F26] border-2  p-3 rounded-2xl w-10/12 mx-auto  mb-8' >
                 <div className='flex justify-between  mb-5'>
                     <button className='btn  btn-outline'> Suject name:
                        {student.subject}</button>
                  <button className='btn  btn-outline'> ASSIGHNMENT STATUS :
                   <span className='text-red-500'> {student.status}</span></button>
               

                 </div>
              <button className='btn btn-block btn-outline'> SUBJECT TITLE :{student.title}</button>
               
                <div className='flex justify-between'>
                 <div className='pt-4 flex gap-3'>
                  <p className='border-2 h-14 p-3 rounded-2xl'> NO :{index+1}</p>
                  <p className='mt-4'> ROLL-NO: {student._id}</p>
                 </div>
                 <div className='border-l-2 pl-5 pt-5'>
                  <p> STUDENT Name :{student.student}</p>
                  <p> STUDENT Email :{student.email}</p>
                 <p>EXAMINE NAME :{student.techer} </p>
                 </div>
                 <div className='border-l-2 pl-5 pt-5'>
                     <p>OBTAINMARK :{student.mark}</p>
                  <p>mark :{student.mark}</p>
                  <p>date :{student.date} </p>
                <p>FEED-BACK :{student.description} </p>
                 </div>
                 <div className='mt-4'>
                    {/* to={`/mark/${student._id}` */}
                   <Link ><button className='btn btn-primary'>
                              Show more
                          </button></Link>
                 </div>
                </div>



            </div>


        </div>
    );
};

export default Myassignment;