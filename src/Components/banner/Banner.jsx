import React from "react";
import { easeOut, motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="mt-12">
      <div className="hero bg-base-200 min-h-[500px]">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 mx-auto px-4">
          
          {/* Images Section */}
          <div className="flex-1 flex flex-col items-center gap-6">
            <motion.img
              src="https://i.ibb.co/677s5bhY/Screenshot-2025-06-14-225011.png"
              animate={{ y: [50, 100, 50] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="max-w-sm w-72 md:w-72 lg:w-80 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-primary shadow-2xl"
              alt="Assignment Preview 1"
            />
            <motion.img
              src="https://i.ibb.co/MxLGngRv/Screenshot-2025-06-20-024154.png"
              animate={{ x: [-20, 100, 50] }}
              transition={{ duration: 10, delay: 0, repeat: Infinity }}
              className="max-w-sm w-56 md:w-64 lg:w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-primary shadow-2xl"
              alt="Assignment Preview 2"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 space-y-6">
            <motion.h1
              animate={{ x: 50 }}
              transition={{ duration: 2, delay: 1, ease: easeOut, repeat: Infinity }}
              className="text-2xl lg:text-4xl md:text-4xl font-bold text-base-content leading-snug"
            >
              Latest{" "}
              <motion.span
                animate={{ color: ["#ecff33", "#33ffe3", "#ff6133"] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Assignment
              </motion.span>{" "}
              For You!
            </motion.h1>

            <p className="text-base-content text-lg leading-relaxed">
              Get access to the most recent assignments crafted for your learning needs.  
              Explore, attempt, and track your progress easily with our interactive platform.
            </p>

            <div>
              <button className="btn btn-primary btn-lg rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
