import React, { useState } from "react";

function TechnologySelector({ onTechnologyChange }) {
  const [technologies, setTechnologies] = useState([]);
  const [techInput, setTechInput] = useState("");

  const addTechnology = () => {
    if (techInput && !technologies.includes(techInput)) {
      const updatedTechnologies = [...technologies, techInput];
      setTechnologies(updatedTechnologies);
      onTechnologyChange(updatedTechnologies);
      setTechInput("");
    }
  };

  const removeTechnology = (tech) => {
    const updatedTechnologies = technologies.filter((t) => t !== tech);
    setTechnologies(updatedTechnologies);
    onTechnologyChange(updatedTechnologies);
  };

  return (
    <div className="p-4 mb-4 bg-gray-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Technologies</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Add a technology"
          value={techInput}
          onChange={(e) => setTechInput(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          onClick={addTechnology}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Technology
        </button>
      </div>
      <div className="flex flex-wrap">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-200 px-3 py-1 rounded-full mr-2 mb-2 flex items-center"
          >
            {tech}
            <button
              onClick={() => removeTechnology(tech)}
              className="ml-2 text-red-500 hover:text-red-700"
            >
              &times;
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}

export default TechnologySelector;
