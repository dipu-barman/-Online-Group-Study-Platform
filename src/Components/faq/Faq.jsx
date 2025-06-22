import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';

const Faq = () => {
    return (
        <div>
            <Navbar></Navbar>

            {/* <div className='max-w-10/12 mx-auto'>
                 <h2 class="text-4xl font-bold text-center mb-10 mt-14"><span className="text-[#00BCFF]">Frequently</span>  Asked Questions</h2>

                 



            <div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title font-semibold  bg-[#C6BDBD]">How do I create an account?</div>
  <div className="collapse-content text-sm  bg-[#C6BDBD]">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
  <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
</div>
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold  bg-[#C6BDBD]">How do I update my profile information?</div>
  <div className="collapse-content text-sm  bg-[#C6BDBD]">Go to  "Edit Profile" to make changes.</div>
</div>

<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold  ">How do I update my profile information?</div>
  <div className="collapse-content text-sm  ">Go to  "Edit Profile" to make changes.</div>
</div>

<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold  bg-[#C6BDBD]">How do I update my profile information?</div>
  <div className="collapse-content text-sm  bg-[#C6BDBD]">Go to  "Edit Profile" to make changes.</div>
</div>
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold  ">How do I update my profile information?</div>
  <div className="collapse-content text-sm  ">Go to  "Edit Profile" to make changes.</div>
</div>

            </div> */}
            <div className="max-w-screen-lg mx-auto">
  <h2 className="text-4xl font-bold text-center mb-10 mt-14">
    <span className="text-[#00BCFF]">Frequently</span> Asked Questions
  </h2>

  <div className="collapse collapse-plus bg-base-100 border border-base-300">
    <input type="radio" name="faq-accordion" defaultChecked />
    <div className="collapse-title font-semibold bg-[#C6BDBD]">
      1. How do I create a new assignment?
    </div>
    <div className="collapse-content text-sm bg-[#C6BDBD]">
      Go to the "Create Assignment" section from the dashboard, fill in the required details, and click "Submit".
    </div>
  </div>

  <div className="collapse collapse-plus bg-base-100 border border-base-300">
    <input type="radio" name="faq-accordion" />
    <div className="collapse-title font-semibold bg-white">
      2. How can students submit their assignments?
    </div>
    <div className="collapse-content text-sm  bg-white">
      Students can go to the "Assignments" section, choose an assignment, upload their work, and click on "Submit".
    </div>
  </div>

  <div className="collapse collapse-plus bg-base-100 border border-base-300">
    <input type="radio" name="faq-accordion" />
    <div className="collapse-title font-semibold bg-[#C6BDBD]">
      3. How are assignments graded?
    </div>
    <div className="collapse-content text-sm bg-[#C6BDBD]">
      Teachers can review submissions from the dashboard and assign grades along with feedback.
    </div>
  </div>

  <div className="collapse collapse-plus bg-base-100 border border-base-300">
    <input type="radio" name="faq-accordion" />
    <div className="collapse-title font-semibold  bg-white">
      4. Can I edit or delete an assignment after publishing?
    </div>
    <div className="collapse-content text-sm  bg-white">
      Yes, go to the "My Assignments" section and use the "Edit" or "Delete" option next to the assignment.
    </div>
  </div>

  <div className="collapse collapse-plus bg-base-100 border border-base-300">
    <input type="radio" name="faq-accordion" />
    <div className="collapse-title font-semibold bg-[#C6BDBD]">
      5. How do I see pending assignment submissions?
    </div>
    <div className="collapse-content text-sm bg-[#C6BDBD]">
      In the "Submissions" tab, you’ll see all pending assignments. Filter by status to manage them easily.
    </div>
  </div>

  <div className="collapse collapse-plus bg-base-100 border border-base-300">
    <input type="radio" name="faq-accordion " />
    <div className="collapse-title font-semibold  bg-white">
      6. How can I download submitted assignments?
    </div>
    <div className="collapse-content text-sm  bg-white">
      Go to the "Submissions" section, click on the student's name, and download the attached file.
    </div>
  </div>

   <div className="collapse collapse-plus bg-base-100 border border-base-300">
    <input type="radio" name="faq-accordion" />
    <div className="collapse-title font-semibold bg-[#C6BDBD]">
      7. What happens if a student submits an assignment late?
    </div>
    <div className="collapse-content text-sm bg-[#C6BDBD]">
      Late submissions may be marked accordingly, and the teacher may choose to deduct marks based on the rules set.
    </div>
  </div>

   <div className="collapse collapse-plus bg-base-100 border border-base-300">
    <input type="radio" name="faq-accordion" />
    <div className="collapse-title font-semibold  bg-white">
      8. Can students view their graded assignments and feedback?
    </div>
    <div className="collapse-content text-sm  bg-white">
      Yes, after grading, students can go to "My Submissions" to see their scores and any feedback provided by the teacher.
    </div>
  </div>

</div>

          <div>
            <Footer></Footer>
            
            </div>  


            
           
        </div>
    );
};

export default Faq;