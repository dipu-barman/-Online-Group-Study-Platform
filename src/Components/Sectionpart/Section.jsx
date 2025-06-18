import Lottie from 'lottie-react';
import React from 'react';
import student1 from '../../assets/Animation - 1750224313693.json'
import student2 from '../../assets/Animation - 1750224715824.json'
import student3 from '../../assets/Animation - 1750224445005.json'
import { div } from 'framer-motion/client';
import CountUp from 'react-countup';

const Section = () => {

     const style = {
  height: 300,
};
    return (

         <div> 

            <h2 className='text-3xl font-bold text-center mt-12 mb-11'> ABOUT STUDENT</h2>
            <div className=' flex gap-10 w-9/12 mx-auto p-12'>
           
             <div>
              
                 <Lottie animationData={student1}
      style={style}
      // interactivity={interactivity}
      />
     
            </div>


             <div>
              
                 <Lottie animationData={student3}
      style={style}
      // interactivity={interactivity}
      />
     
            </div>

            
             <div>
              
                 <Lottie animationData={student2}
      style={style}
      // interactivity={interactivity}
      />
     
            </div>
        </div>

        <section className='mx-auto w-7/12 '>
            <div className="stats shadow">
  <div className="stat">
    <div className="stat-figure w-48 text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    </div>
    <div className="stat-title">Assignment</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>

  <div className="stat">
    <div className="stat-figure w-40 text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        ></path>
      </svg>
    </div>
    <div className="stat-title">New Users</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
        ></path>
      </svg>
    </div>
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
</div>
        </section>


        <section className='mb-5'>
              <div className='mb-5 bg-white rounded-2xl pb-7'>
            
            <div className='w-10/12 mx-auto' >
                <h2 className='text-center text-2xl font-semibold text-black mt-8 p-6'>We Provide Best Teacher Services </h2>
                <p className='text-center mt-4 mb-7 text-black'>Our platform connects you with verified, experienced teacher across various specialities — all at your convenience. </p>


                <section className='w-10/12 mx-auto mb-7'>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Qoulaified</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Mathmatices</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 2 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Brice Swyre</div>
              <div className="text-sm opacity-50">China</div>
            </div>
          </div>
        </td>
        <td>
          Carroll Group
          <br />
          <span className="badge badge-ghost badge-sm"> Accountant</span>
        </td>
        <td>Red</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 3 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Marjy Ferencz</div>
              <div className="text-sm opacity-50">Russia</div>
            </div>
          </div>
        </td>
        <td>
          Rowe-Schoen
          <br />
          <span className="badge badge-ghost badge-sm">Office Assistant I</span>
        </td>
        <td>english</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 4 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Yancy Tear</div>
              <div className="text-sm opacity-50">Brazil</div>
            </div>
          </div>
        </td>
        <td>
          Wyman-Ledner
          <br />
          <span className="badge badge-ghost badge-sm">Dance Specialist</span>
        </td>
        <td>Indigo</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </tbody>
    {/* foot */}
    
  </table>
</div>
        </section>




                <div className=' gap-5 grid grid-cols-4'>



                     <div className='bg-[#0F0F0F26] p-10 rounded-3xl'>
                        <img src="https://i.ibb.co.com/RpzfzcLW/success-doctor.png" alt="" srcset="" />
                        <p className='text-2xl font-bold mt-3 text-amber-950'><CountUp end={+199} duration={15.75} />+</p>
               
               <p className='font-semibold text-black'>Total Teacher</p>
                </div>

                <div className='bg-[#0F0F0F26] p-10 rounded-3xl'>
                    <img src="https://i.ibb.co.com/6RK5tNy1/success-review.png" alt="" />
                    <p className='text-2xl font-bold  text-red-700'>
                        <CountUp start={0.039}
               end={470}
              duration={20.75} />+
                    </p>
                    <p className='font-semibold text-black' >
                    Total Reviews
                    </p>
               
                </div>
                <div className='bg-[#0F0F0F26] p-10 rounded-3xl'>
                    <img src="https://i.ibb.co.com/RTT91GVF/success-patients.png" alt="" />
                    <p className='text-2xl font-bold mt-3 text-green-700'><CountUp start={-875.039}
               end={19052}
                duration={15.75} /> +</p>
               
                <p className='font-semibold text-black'> Initiated</p>
                </div>
                <div className='bg-[#0F0F0F26] p-10 rounded-3xl'>
                    <img src="https://i.ibb.co.com/7dZyt0vT/success-staffs.png" alt="" />
                    <p className='text-2xl font-bold mt-3 text-orange-600'>
                        <CountUp start={0.039}
                           end={300.012}
            duration={30.75} />+

                    </p>
               <p className='font-semibold text-black'>Total Stuffs</p>
                </div>
                </div>
               
                

            </div>
        </div>

        </section>



        
</div>
       
    );
};

export default Section;