import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Lottie from "lottie-react";
import { BsBootstrapReboot } from "react-icons/bs";
import { GoAlertFill } from "react-icons/go";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import student4 from "../../assets/Animation - 1750224884450.json";
import student5 from "../../assets/Female Character Walking.json";
import student6 from "../../assets/Book.json";
import student7 from "../../assets/Graduation Hat.json";

const ViewAssignment = () => {
  const { _id, title, photo, mark, level, deadline, description, myemail } =
    useLoaderData();

  const style = { height: 280 };

  return (
    <div className="bg-base-100 text-base-content min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Animated Header */}
      <section className="flex flex-col md:flex-row justify-center items-center mt-12 gap-8 px-4">
        <Lottie animationData={student6} style={style} className="max-w-sm" />
        <Lottie animationData={student5} style={style} className="max-w-sm" />
        <Lottie animationData={student7} style={style} className="max-w-sm" />
      </section>

      {/* Profile Info */}
      <section className="mt-12 px-4">
        <div className="card bg-base-200 shadow-lg w-10/12 mx-auto">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-bold">Profile Overview</h2>
            <p className="opacity-80">
              This assignment includes verified identity, expertise level, and
              submission details. All records are up-to-date and compliant with
              institutional guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* Assignment Details */}
      <section className="mt-10 px-4">
        <div className="card lg:card-side bg-base-200 shadow-xl w-10/12 mx-auto">
          <figure className="p-6">
            <img
              src={photo}
              alt={`${title} photo`}
              className="w-36 h-40 rounded-xl object-cover"
            />
          </figure>
          <div className="card-body">
            <span className="badge badge-primary badge-outline w-fit">
              {title} Experience
            </span>
            <p className="text-xl font-bold mt-3">Level: {level}</p>
            <div className="flex flex-wrap gap-4 mt-2 text-sm">
              <span className="font-semibold">{myemail}</span>
              <span className="flex items-center gap-1 font-semibold">
                <BsBootstrapReboot /> Mark: {mark}
              </span>
            </div>
            <div className="flex flex-wrap gap-4 text-sm mt-2">
              <span>ID: {_id}</span>
              <span>Date: {deadline}</span>
            </div>
            <p className="mt-2 text-success font-medium">{description}</p>
          </div>
        </div>
      </section>

      {/* Submission Section */}
      <section className="mt-12 px-4 mb-16">
        <div className="card bg-base-200 shadow-lg w-10/12 mx-auto">
          <div className="card-body">
            <h2 className="card-title justify-center">Submit Your Assignment</h2>
            <div className="flex flex-col sm:flex-row justify-between mt-4 gap-3">
              <span>Availability</span>
              <span className="badge badge-success badge-outline">
                Available Today
              </span>
            </div>
            <div className="alert alert-warning mt-4">
              <GoAlertFill className="text-lg" />
              <span>
                Due to high volume, only today's submissions are currently
                accepted. Thank you for your cooperation.
              </span>
            </div>
            <div className="mt-5">
              <Link to="/take">
                <button className="btn btn-primary btn-block rounded-full">
                  Take Assignment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ViewAssignment;
