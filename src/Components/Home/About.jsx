import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';

const About = () => {
  return (
    <div>
      <Navbar />

      <section className="w-11/12 max-w-7xl mx-auto p-12 bg-base-100 rounded-lg shadow-xl mt-16">
        <h1 className="text-2xl font-bold text-center mb-12 uppercase">
          About Our Online Assignment & Study Platform
        </h1>

        <div className="grid md:grid-cols-2 gap-14">
          {/* Overview Card */}
          <div className="card bg-base-200 shadow-lg p-10 rounded-lg">
            <h2 className="card-title font-semibold text-xl mb-6 uppercase tracking-wide ">
              Platform Overview
            </h2>
            <p className="text-base-content leading-relaxed text-lg mb-4">
              Our platform bridges the gap between <span className="font-semibold">students</span> and <span className="font-semibold">teachers</span>, providing a dynamic, collaborative environment for managing assignments and learning resources efficiently.
            </p>
            <p className="text-base-content leading-relaxed text-lg mb-4">
              Spanning diverse subjects such as <span className="italic">Chemistry, Biology, Mathematics, Physics, English</span>, and many more, it empowers users with interactive study tools and comprehensive academic tracking.
            </p>
            <p className="text-base-content leading-relaxed text-lg">
              Features like real-time updates, centralized assignment management, and integrated multimedia materials ensure an engaging and effective learning experience.
            </p>
          </div>

          {/* Features Cards */}
          <div className="space-y-10">
            <div className="card bg-base-200 shadow-md p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-5 uppercase tracking-wide">Student Benefits</h3>
              <ul className="list-disc list-inside text-base-content space-y-3 text-lg leading-relaxed">
                <li>Access and submit assignments seamlessly across multiple subjects and instructors.</li>
                <li>Track deadlines, grades, and progress with personalized dashboards.</li>
                <li>Utilize embedded resources such as PDFs, Google Docs, and instructional videos.</li>
                <li>Receive timely notifications, reminders, and instructor feedback.</li>
                <li>Engage with peer discussion forums and study groups to enhance learning.</li>
                <li>Adaptive learning paths tailored to individual progress and strengths.</li>
              </ul>
            </div>

            <div className="card bg-base-200 shadow-md p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-5 uppercase tracking-wide">Teacher Capabilities</h3>
              <ul className="list-disc list-inside text-base-content space-y-3 text-lg leading-relaxed">
                <li>Create, customize, and assign subject-specific assignments with varying difficulty levels.</li>
                <li>Efficiently grade and provide detailed feedback through annotation tools.</li>
                <li>Share and manage rich learning materials, including documents, links, and multimedia content.</li>
                <li>Analyze student performance with in-depth analytics and reports.</li>
                <li>Facilitate communication via announcements, direct messages, and class forums.</li>
                <li>Utilize data-driven insights to adjust teaching strategies and improve outcomes.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="mt-16 space-y-10">
          <div className="card bg-base-200 shadow-lg p-10 rounded-lg">
            <h2 className="text-xl font-semibold mb-6 uppercase tracking-wide">Security & Privacy</h2>
            <p className="text-base-content text-lg leading-relaxed">
              We prioritize data security and user privacy by implementing robust encryption, secure authentication methods, and compliance with international data protection standards such as GDPR. Your academic data and personal information remain confidential and safe.
            </p>
          </div>

          <div className="card bg-base-200 shadow-lg p-10 rounded-lg">
            <h2 className="text-xl font-semibold mb-6 uppercase tracking-wide">Support & Resources</h2>
            <p className="text-base-content text-lg leading-relaxed mb-4">
              Our dedicated support team and extensive resource library ensure that students and teachers can navigate the platform effortlessly. From comprehensive guides to responsive customer service, help is always available.
            </p>
            <p className="text-base-content text-lg leading-relaxed">
              Continuous improvements based on user feedback keep the platform evolving to meet educational needs effectively.
            </p>
          </div>

          <div className="card bg-base-200 shadow-lg p-10 rounded-lg">
            <h2 className="text-xl font-semibold mb-6 uppercase tracking-wide">Community & Collaboration</h2>
            <p className="text-base-content text-lg leading-relaxed mb-4">
              Our platform fosters a thriving educational community. Students can join study groups, participate in forums, and collaborate on projects, while teachers can organize workshops and share best teaching practices.
            </p>
            <p className="text-base-content text-lg leading-relaxed">
              Together, we build a supportive environment that encourages academic excellence and lifelong learning.
            </p>
          </div>

          <div className="card bg-base-200 shadow-lg p-10 rounded-lg">
            <h2 className="text-xl font-semibold mb-6 uppercase tracking-wide">Accessibility & Inclusivity</h2>
            <p className="text-base-content text-lg leading-relaxed">
              We are committed to providing an inclusive learning platform compliant with WCAG guidelines, ensuring accessibility for users with disabilities. Features include screen reader support, keyboard navigation, and adjustable UI settings.
            </p>
          </div>

          <div className="card bg-base-200 shadow-lg p-10 rounded-lg">
            <h2 className="text-xl font-semibold mb-6 uppercase tracking-wide">Mobile & Offline Support</h2>
            <p className="text-base-content text-lg leading-relaxed">
              Our platform supports mobile devices and includes offline capabilities, enabling students and teachers to access assignments, resources, and submit work anytime, anywhere, even without a stable internet connection.
            </p>
          </div>

          <div className="card bg-base-200 shadow-lg p-10 rounded-lg">
            <h2 className="text-xl font-semibold mb-6 uppercase tracking-wide">Performance & Scalability</h2>
            <p className="text-base-content text-lg leading-relaxed">
              Built on a modern tech stack leveraging React, Tailwind CSS, DaisyUI, and backed by scalable backend infrastructure, our platform ensures smooth performance and can handle growing user bases without compromising speed or reliability.
            </p>
          </div>

          <div className="card bg-base-200 shadow-lg p-10 rounded-lg">
            <h2 className="text-xl font-semibold mb-6 uppercase tracking-wide">Global Reach & Multilingual Support</h2>
            <p className="text-base-content text-lg leading-relaxed">
              Designed for a global audience, our platform supports multiple languages and localized content, empowering learners and educators worldwide to connect and collaborate in their native languages.
            </p>
          </div>
        </div>

        {/* Footer Tech & Credits */}
        <footer className="mt-16 text-center text-sm text-base-content opacity-70">
          Powered by . &nbsp;© 2025 Your Platform Name.
        </footer>
      </section>

      <Footer />
    </div>
  );
};

export default About;
