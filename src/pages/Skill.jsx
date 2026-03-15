const Skill = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6 md:px-20">
      
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        My Skills
      </h1>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Frontend Development */}
        <div className="bg-white p-6 shadow rounded-xl hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Frontend Development</h2>
          <ul className="text-gray-700 space-y-1">
            <li>React</li>
            <li>JavaScript / ES6+</li>
            <li>HTML5 & CSS3</li>
            <li>Tailwind CSS</li>
            <li>Java Swing</li>
          </ul>
        </div>

        {/* Backend Development */}
        <div className="bg-white p-6 shadow rounded-xl hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Backend Development</h2>
          <ul className="text-gray-700 space-y-1">
            <li>Node.js</li>
            <li>Java Servlets</li>
            <li>Express.js</li>
            <li>PHP</li>
            <li>REST APIs</li>
          </ul>
        </div>

        {/* Networking Skills */}
        <div className="bg-white p-6 shadow rounded-xl hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Networking Skills</h2>
          <ul className="text-gray-700 space-y-1">
            <li>Network Maintenance</li>
            <li>Network Troubleshooting</li>
            <li>Router & Switch Configuration</li>
            <li>Network Security</li>
            <li>Wireless Network Setup</li>
            <li>LAN/WAN Setup</li>
          </ul>
        </div>

        {/* Other Skills */}
        <div className="bg-white p-6 shadow rounded-xl hover:shadow-lg transition md:col-span-2 lg:col-span-3">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Other Skills</h2>
          <ul className="text-gray-700 space-y-1 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-8">
            <li>Home electrical installation</li>
            <li>CCTV camera installation and maintenance</li>
            <li>Teaching and coaching</li>
            <li>Team management</li>
          </ul>
        </div>

      </div>
        
    </section>
  );
};

export default Skill;