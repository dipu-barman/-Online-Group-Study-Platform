import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // success | error

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="bg-base-200 py-12 mt-16 rounded-2xl shadow-lg mx-auto max-w-4xl px-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary">Stay in the Loop</h2>
        <p className="text-gray-600 mt-2">
          Subscribe to get the latest assignments, student updates, and teacher
          tips directly in your inbox.
        </p>
      </div>

      <form
        onSubmit={handleSubscribe}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-full sm:w-2/3 md:w-1/2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn btn-primary w-full sm:w-auto">
          Subscribe
        </button>
      </form>

      {status === "success" && (
        <div className="mt-4 text-success text-center font-medium animate-fade-in">
          ✅ Subscription successful! Check your inbox.
        </div>
      )}
      {status === "error" && (
        <div className="mt-4 text-error text-center font-medium animate-fade-in">
          ❌ Please enter a valid email address.
        </div>
      )}
    </section>
  );
};

export default Newsletter;
