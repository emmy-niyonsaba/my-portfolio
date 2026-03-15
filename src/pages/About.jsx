import{network,coder} from '../../public/images/index.js';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-50 py-20 px-6 md:px-20 flex flex-col items-center gap-16"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-12 text-center">
        About Me
      </h1>

      {/* Development Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-6xl">
        {/* Text Card */}
        <div className="md:w-1/2 bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="font-bold text-lg text-blue-700 mb-2">Development</h3>
          <p className="text-gray-600">
           javaSpring boot, JavaScript, React, Node.js, PHP, Tailwind CSS — building full-stack applications.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={coder}
            alt="Development"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl shadow-lg border-4 border-blue-200"
          />
        </div>
      </div>

      {/* Networking Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-6xl">
        {/* Image */}
        

        {/* Text Card */}
        <div className="md:w-1/2 bg-white p-6 rounded-xl shadow hover:shadow-lg transition md:order-1">
          <h3 className="font-bold text-lg text-blue-700 mb-2">Networking</h3>
          <p className="text-gray-600">
            Network setup, maintenance, troubleshooting, and configuration.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center md:order-2">
          <img
            src={network}
            alt="Networking"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl shadow-lg border-4 border-blue-200"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
