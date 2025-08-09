import React from "react";
import Lottie from "lottie-react";
import CountUp from "react-countup";
import student1 from "../../assets/Animation - 1750224313693.json";
import student2 from "../../assets/Animation - 1750224715824.json";
import student3 from "../../assets/Animation - 1750224445005.json";
const lottieStyle = { height: 200, width: 200 };

const students = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 16,
    grade: "10th Grade",
    email: "alice.johnson@example.com",
    progress: "Completed 80% assignments",
    animation: student1,
  },
  {
    id: 2,
    name: "Michael Brown",
    age: 17,
    grade: "11th Grade",
    email: "michael.brown@example.com",
    progress: "Completed 90% assignments",
    animation: student3,
  },
  {
    id: 3,
    name: "Sophia Lee",
    age: 15,
    grade: "9th Grade",
    email: "sophia.lee@example.com",
    progress: "Completed 70% assignments",
    animation: student2,
  },
];

const Section = () => {
  const lottieStyle = { height: 250 };

  return (
    <div className="bg-base-100">
      {/* Section Heading */}
      <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold text-center mb-10 ">
        ABOUT STUDENT
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {students.map(({ id, name, age, grade, email, progress, animation }) => (
          <div
            key={id}
            className="bg-base-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm w-full"
          >
            <div className="p-6 flex flex-col ">
              <Lottie animationData={animation} style={lottieStyle} />

              <h3 className="text-xl font-semibold mt-4 mb-1 text-center">{name}</h3>
              <p className="text-sm text-gray-600 mb-1">
                Age: <span className="font-medium">{age}</span>
              </p>
              <p className="text-sm text-gray-600 mb-1">
                Grade: <span className="font-medium">{grade}</span>
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Email:{" "}
                <a
                  href={`mailto:${email}`}
                  className="text-primary hover:underline"
                >
                  {email}
                </a>
              </p>
              <p className="text-sm font-medium text-success">{progress}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    

     {/* <section className="w-11/12 mx-auto "> */}
       {/* Responsive Stats Section */}
{/* <section className="mx-auto w-10/12  mt-14 ">
  <div className="stats stats-vertical md:stats-horizontal shadow-xl bg-base-100 rounded-2xl border border-base-300 gap-o lg:gap-9 "> */}
    
    {/* Assignments */}
    {/* <div className="stat hover:bg-base-200 transition duration-300 rounded-xl px-6 py-8 md:px-8 md:py-10 w-72  lg:w-96">
      <div className="stat-figure text-primary md:h-12 md:w-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 md:h-12 md:w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17v-2a4 4 0 014-4h6a4 4 0 014 4v2"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </div>
      <div className="stat-title text-lg md:text-xl">Assignments</div>
      <div className="stat-value text-primary text-3xl md:text-4xl font-bold">
        <CountUp end={31000} duration={2.5} />+
      </div>
      <div className="stat-desc text-sm md:text-base opacity-70">
        Jan 1st - Feb 1st
      </div>
    </div> */}

    {/* New Users */}
    {/* <div className="stat hover:bg-base-200 transition duration-300 rounded-xl px-6 py-8 md:px-8 md:py-10 w-72 Lg:w-96">
      <div className="stat-figure text-secondary  md:h-12 md:w-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 md:h-12 md:w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a4 4 0 00-3-3.87M9 20h6m-6 0v-2a4 4 0 00-3-3.87m0-8A4 4 0 015 4m0 0a4 4 0 110 8m0 0v4"
          />
        </svg>
      </div>
      <div className="stat-title text-lg md:text-xl">New Users</div>
      <div className="stat-value text-secondary text-3xl md:text-4xl font-bold">
        <CountUp end={4200} duration={2.5} />
      </div>
      <div className="stat-desc text-sm md:text-base text-secondary">
        ↗︎ 400 (22%)
      </div>
    </div> */}

    {/* New Registers */}
    {/* <div className="stat hover:bg-base-200 transition duration-300 rounded-xl px-6 py-8 md:px-8 md:py-10 w-72 lg:w-96">
      <div className="stat-figure text-accent md:h-12 md:w-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 md:h-12 md:w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>
      <div className="stat-title text-lg md:text-xl">New Registers</div>
      <div className="stat-value text-accent text-3xl md:text-4xl font-bold">
        <CountUp end={1200} duration={2.5} />
      </div>
      <div className="stat-desc text-sm md:text-base text-error">
        ↘︎ 90 (14%)
      </div>
    </div> */}
  {/* </div>
</section>
     </section> */}


      {/* Teachers Table */}
      <section className="w-10/12 mx-auto mt-12">
        <h3 className="text-2xl font-semibold text-center mb-4">
          WE PROVIDE BEST  TEACHER SERVICES
        </h3>
        <p className="text-center mb-6">
          Our platform connects you with verified, experienced teachers across
          various specialties — all at your convenience.
        </p>

        <div className="overflow-x-auto shadow rounded-xl">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Qualified</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Hart Hagerty",
                  country: "United States",
                  job: "Mathematics",
                  color: "Purple",
                  img: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                },
                {
                  name: "Brice Swyre",
                  country: "China",
                  job: "Accountant",
                  color: "Red",
                  img: "https://img.daisyui.com/images/profile/demo/3@94.webp",
                },
                {
                  name: "Marjy Ferencz",
                  country: "Russia",
                  job: "Office Assistant I",
                  color: "English",
                  img: "https://img.daisyui.com/images/profile/demo/4@94.webp",
                },
                {
                  name: "Yancy Tear",
                  country: "Brazil",
                  job: "Dance Specialist",
                  color: "Indigo",
                  img: "https://img.daisyui.com/images/profile/demo/5@94.webp",
                },
              ].map((t, idx) => (
                <tr key={idx} className="hover">
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={t.img} alt={t.name} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{t.name}</div>
                        <div className="text-sm opacity-50">{t.country}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-outline">{t.job}</span>
                  </td>
                  <td>{t.color}</td>
                  <td>
                    <button className="btn btn-ghost btn-xs">Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CountUp Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-10/12 mx-auto my-12">
        {[
          {
            img: "https://i.ibb.co.com/RpzfzcLW/success-doctor.png",
            end: 199,
            color: "text-amber-700",
            label: "Total Teachers",
          },
          {
            img: "https://i.ibb.co.com/6RK5tNy1/success-review.png",
            end: 470,
            color: "text-red-600",
            label: "Total Reviews",
          },
          {
            img: "https://i.ibb.co.com/RTT91GVF/success-patients.png",
            end: 19052,
            color: "text-green-600",
            label: "Initiated",
          },
          {
            img: "https://i.ibb.co.com/7dZyt0vT/success-staffs.png",
            end: 300,
            color: "text-orange-600",
            label: "Total Staffs",
          },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="card bg-base-200 shadow hover:shadow-lg p-6 text-center transition rounded-xl"
          >
            <img
              src={stat.img}
              alt={stat.label}
              className="mx-auto h-16 object-contain"
            />
            <p className={`text-2xl font-bold mt-3 ${stat.color}`}>
              <CountUp end={stat.end} duration={2.5} />+
            </p>
            <p className="font-medium">{stat.label}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Section;
