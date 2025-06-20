import React, { use, useContext } from 'react';
import Authcontext from '../contexts/Authcontext';
import { Link, NavLink } from 'react-router';
import Swal from 'sweetalert2';
import { BsBootstrapReboot } from 'react-icons/bs';
import { useState } from 'react';

const PublicAssignmetCard = ({ assignmet,asignmets,setAssignmets }) => {
    const {user } = useContext(Authcontext);
    
    // const Man = ({man,items,setitems}) => {

    // const {title,category,budget,descrip} = man
   

    
    const handledelete =(_id)=>{
        console.log(_id)

         if(user?.email == assignmet?.myemail){
              Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

  fetch(`https://my-assignment-11-server-rouge.vercel.app/assignmets/${_id}`,{
       method:'DELETE'
   })
    .then(res =>res.json())
    .then(data =>{
        if(data.deletedCount){

            Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
           icon: "success"
          });
          const remaingitem = asignmets.filter(itemm =>itemm._id!==_id)
          setAssignmets(remaingitem)
        }
       console.log(data)
   })

  }
});

      
     }
     else{
  alert('create user can delete')
}

//         Swal.fire({
//   title: "Are you sure?",
//   text: "You won't be able to revert this!",
//   icon: "warning",
//   showCancelButton: true,
//   confirmButtonColor: "#3085d6",
//   cancelButtonColor: "#d33",
//   confirmButtonText: "Yes, delete it!"
// }).then((result) => {
//   if (result.isConfirmed) {

//   fetch(`https://my-assignment-11-server-rouge.vercel.app/assignmets/${_id}`,{
//        method:'DELETE'
//    })
//     .then(res =>res.json())
//     .then(data =>{
//         if(data.deletedCount){

//             Swal.fire({
//           title: "Deleted!",
//           text: "Your file has been deleted.",
//            icon: "success"
//           });
//           const remaingitem = asignmets.filter(itemm =>itemm._id!==_id)
//           setAssignmets(remaingitem)
//         }
//        console.log(data)
//    })

//   }
// });

    }


    return (
        
        <div>

          <div className='border border-black  rounded-2xl p-7 flex gap-11'>
           
            <div>
                 <img className='w-32 h-32 rounded-2xl' src={assignmet.photo} alt="" />
            </div>
            {/* <p>{alllawyer.length}</p>
            <p>{man.image}</p> */}
            <div>
                <div className='flex gap-8'>
                    <h3 className='bg-[#09982F1A] text-[#349809] py-2 px-3 rounded-3xl'>Mark</h3>
                    <h3 className='bg-[#176AE51A] p-2 rounded-3xl text-[#176AE5]'>{assignmet.mark}</h3>
                </div>
                <h2 className='text-xl font-bold mt-3 text-black'>{assignmet.title}</h2>
                <p className='text-black'>{assignmet.description}</p>
                <p className='text-black flex gap-2 mb-7'><BsBootstrapReboot className='mt-1' /> :Submit date </p>
                    
                 <div className=" flex justify-between gap-2">

          {/*  */}

            <Link to={`/view/${assignmet._id}`}><button className="btn btn-primary">view details</button>
            </Link>
            {/*{`/update/${man._id}`}  */}
        <Link to={`/update/${assignmet._id}`}> <button className="btn btn-primary">update</button>
            </Link>

            {/*  */}
             <button onClick={()=>handledelete(assignmet._id)} className="btn btn-primary">delete</button>
              
              
            
          </div>
            </div>
           
            
        </div>



            {/* <h3>{assignmet.title}</h3>
            <p>{assignmet.
                description}</p>
                <img src={assignmet.img} alt="" />
               <div className='flex gap-1'>
                
              
         
               </div> */}
        </div>
    );
};

export default PublicAssignmetCard;