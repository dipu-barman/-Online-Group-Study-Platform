import React from 'react';
import { Facebook, Youtube, Mail, MailCheck } from "lucide-react";
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
          

 <footer className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] mt-20 to-[#0f172a] text-gray-300 px-6 py-12">
      <div className="max-w-screen-xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Services */}
        <nav className='grid grid-rows-1'>
          <h6 className="footer-title text-white">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>

        {/* Student Links */}
        <nav className='grid grid-rows-1'>
          <h6 className="footer-title text-white">Student</h6>
          <a className="link link-hover">Assignments</a>
          <a className="link link-hover">Resources</a>
          <a className="link link-hover">Discussion Forum</a>
          <a className="link link-hover">Help Center</a>
        </nav>

        {/* Teacher Links */}
        <nav className='grid grid-rows-1'>
          <h6 className="footer-title text-white">Teacher</h6>
          <a className="link link-hover">Dashboard</a>
          <a className="link link-hover">Gradebook</a>
          <a className="link link-hover">Analytics</a>
          <a className="link link-hover">Support</a>
        </nav>

        {/* Newsletter */}
        <form>
          <h6 className="footer-title text-white">Newsletter</h6>
          <fieldset className="w-80 max-w-full">
            <label className="text-sm">Enter your email address</label>
            <div className="join mt-2">
              <input
                type="email"
                placeholder="you@site.com"
                className="input input-bordered join-item flex-grow"
              />
              <button type="submit" className="btn btn-primary join-item">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>

      {/* Social Icons */}
      <div className="mt-10 flex justify-center space-x-6">
        <a
          href="https://www.facebook.com/"
          aria-label="Facebook"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#1877F2] transition-colors"
        >
          <FaFacebookF className="w-6 h-6" />
        </a>
        <a
          href="mailto:support@yoursite.com"
          aria-label="Gmail"
          className="hover:text-[#EA4335] transition-colors"
        >
          <MailCheck className="w-6 h-6" />
        </a>
        <a
          href="https://www.youtube.com/"
          aria-label="YouTube"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#FF0000] transition-colors"
        >
          <Youtube className="w-6 h-6" />
        </a>
      </div>

      {/* Copyright */}
      <p className="mt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Study With Friends. All rights reserved.
      </p>
    </footer>


        </div>
    );
};

export default Footer;