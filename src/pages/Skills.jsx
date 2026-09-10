import React from "react";

const skillCategories = [
  {
    category: "Frontend Engineering",
    skills: [
      {
        name: "React.js",
        badge:
          "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
      },
      {
        name: "TypeScript",
        badge:
          "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
      },
      {
        name: "Next.js",
        badge:
          "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white",
      },
      {
        name: "Tailwind CSS",
        badge:
          "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
      },
      {
        name: "JavaScript ES6+",
        badge:
          "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
      },
      {
        name: "HTML5 & CSS3",
        badge:
          "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
      },
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      {
        name: "Node.js",
        badge:
          "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white",
      },
      {
        name: "NestJS",
        badge:
          "https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white",
      },
      {
        name: "Spring Boot",
        badge:
          "https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white",
      },
      {
        name: "PostgreSQL",
        badge:
          "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
      },
      {
        name: "MySQL",
        badge:
          "https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white",
      },
      {
        name: "PHP",
        badge:
          "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white",
      },
    ],
  },
  {
    category: "Testing & Documentation",
    skills: [
      {
        name: "Jest",
        badge:
          "https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white",
      },
      {
        name: "Swagger UI",
        badge:
          "https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black",
      },
      {
        name: "Postman",
        badge:
          "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white",
      },
    ],
  },
  {
    category: "Tools & Workflows",
    skills: [
      {
        name: "Git",
        badge:
          "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
      },
      {
        name: "GitHub",
        badge:
          "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",
      },
      {
        name: "VS Code",
        badge:
          "https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white",
      },
      {
        name: "Figma",
        badge:
          "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white",
      },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen py-24 px-6 md:px-16 lg:px-20 bg-black border-t border-neutral-900 flex flex-col justify-center"
    >
      <div className="max-w-6xl">
        <p className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-2">
          // TECHNICAL STACK
        </p>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-12">
          SKILLS & <span className="text-yellow-400">TECHNOLOGIES.</span>
        </h2>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((group, idx) => (
            <div
              key={idx}
              className="bg-neutral-950 p-8 border border-neutral-900 hover:border-yellow-400/60 transition-all duration-300"
            >
              <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-6 border-b border-neutral-800 pb-3 flex justify-between items-center">
                <span>{group.category}</span>
                <span className="text-yellow-400 text-xs font-mono">
                  // 0{idx + 1}
                </span>
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, sIdx) => (
                  <img
                    key={sIdx}
                    src={skill.badge}
                    alt={skill.name}
                    className="h-9 hover:scale-105 transition-transform duration-200"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
