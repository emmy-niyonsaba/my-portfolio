

export default function Resume() {
  return (
    <section className="min-h-screen w-full bg-gray-100 py-16 px-6 md:px-20">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">My Resume</h1>

      {/* Download CV Button */}
      <div className="flex justify-center mb-12">
        <a
          href="/files/EmmanuelNiyonsaba-CV.pdf"
          download
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          Download CV
        </a>
      </div>

      {/* Resume Content */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Experience */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Experience</h2>

          <div className="mb-6">
            <h3 className="font-bold text-lg">Software Developer</h3>
            <p className="text-sm text-gray-600">2023 - Present</p>
            <p className="mt-2 text-gray-700">
              Working with modern technologies like React, Node.js, PHP and Tailwind CSS
              to build full–stack applications.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg">Networking Technician</h3>
            <p className="text-sm text-gray-600">2022 - Present</p>
            <p className="mt-2 text-gray-700">
              Providing network maintenance, configuration and troubleshooting for clients.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Education</h2>

          <div className="mb-6">
            <h3 className="font-bold text-lg">Advanced Diploma in Information Technology</h3>
            <p className="text-sm text-gray-600 font-bold">RP-Tumba-college — 2024 - Present</p>
            <p className="mt-2 text-gray-700">
              Studying modern software development, networking, databases and cloud systems.
            </p>
          </div>

         
          <div>
            <h3 className="font-bold text-lg">High School Diploma</h3>
            <p className="text-sm text-gray-600 font-bold" >Computer Networking — 2020 - 2023</p>
            <p className="mt-2 text-gray-700">
              Completed secondary education in Computer Networking subjects.
            </p>
          </div>
           <div className=" mt-6">
            <h3 className="font-bold text-lg">Special training and industry attachment</h3>
            <p className="text-sm text-gray-600 font-bold">.IT(Industrial attachment at NgorereroDistrict hospital) — 2022 - 2023</p>
            <p className="mt-2 text-gray-700">
              Gained practical experience in IT support, network management, and system maintenance.
            </p>
            <br />
            <p className="text-sm text-gray-600 font-bold">Special training for software development(TheGym Rwanda) — 2025(junuary) - Present</p>
            <p className="mt-2 text-gray-700">
              .Undergoing intensive training in software development, focusing on full–stack web technologies and best practices.
              <br />
              <br />
              .Attending workshops and hands-on projects to enhance coding skills.
              <br />
              <br />
              .Joined coding bootcamps and hackathons to gain practical experience.
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="bg-white p-6 rounded-xl shadow mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Professional Skills</h2>

        <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
          <li className="p-3 bg-gray-200 rounded-lg">React & JavaScript</li>
          <li className="p-3 bg-gray-200 rounded-lg">Node.js & Express</li>
          <li className="p-3 bg-gray-200 rounded-lg">PHP & Laravel</li>
          <li className="p-3 bg-gray-200 rounded-lg">Networking & Troubleshooting</li>
          <li className="p-3 bg-gray-200 rounded-lg">Tailwind CSS</li>
          <li className="p-3 bg-gray-200 rounded-lg">SQL, PostgreSQL databases</li>
        </ul>
      </div>
    </section>
  );
}
