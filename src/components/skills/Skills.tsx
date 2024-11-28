import { FC } from "react";
import { FaNodeJs, FaDatabase, FaDocker, FaGithub } from "react-icons/fa";

const skills = [
  {
    icon: <FaNodeJs />,
    name: "Node.js",
    description: "A JavaScript runtime used for building scallable web servers",
  },
  {
    icon: <FaDatabase />,
    name: "Databases",
    description: "Relational and Non-relational databases for storing data.",
  },
  {
    icon: <FaDocker />,
    name: "Docker",
    description:
      "A platform used to develop, ship, and run applications in containers, making development easier and more consistent.",
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
    description:
      "A platform for version control and collaboration, enabling developers to manage code repositories and collaborate with teams.",
  },
];

const Skills: FC = () => {
  return (
    <section className="pt-16 pb-20 text-center bg-primary top__shadow">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl text-white poppins-bold mb-8 lg:mb-12">
          What I master?
        </h2>
        <p className="text-lg lg:text-xl mb-12 lg:mb-20 text-gray-300 open-sans-600">
          Here are some of the tools, languages, and frameworks I've mastered.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300 flex flex-col items-center"
            >
              <div className="text-primary text-5xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
