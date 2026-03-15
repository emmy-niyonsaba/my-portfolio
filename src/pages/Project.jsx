function Project() {
  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6 md:px-20">

      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        My Projects
      </h1>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-10">

        {/* Project Card */}
        <div className="bg-white shadow rounded-xl p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Portfolio Website
          </h2>
          <p className="text-gray-700 mb-4">
            A modern personal portfolio built using React and Tailwind CSS.
            Includes sections such as About, Skills, Projects, and Resume.
          </p>
          <a
            href="#"
            className="text-blue-500 hover:underline font-medium"
          >
            View Project →
          </a>
        </div>

        <div className="bg-white shadow rounded-xl p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Hotel Reservation System
          </h2>
          <p className="text-gray-700 mb-4">
            A full-stack web app built with React, postgresql, express, and Tailwind. Features
            room booking, authentication,dynamic posting to social media and payment tracking.
          </p>
          <a
            href="#"
            className="text-blue-500 hover:underline font-medium"
          >
            View Project →
          </a>
        </div>

        <div className="bg-white shadow rounded-xl p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Networking Dashboard
          </h2>
          <p className="text-gray-700 mb-4">
            A network monitoring interface showing device status, uptime,
            traffic statistics, and alerts for configuration issues.
          </p>
          <a
            href="#"
            className="text-blue-500 hover:underline font-medium"
          >
            View Project →
          </a>
        </div>

      </div>
    </section>
  );
}

export default Project;
