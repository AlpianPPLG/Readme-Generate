import React, { useState } from "react";

function TechnologySelector({ technologies, onCategoryChange }) {
  const [techInput, setTechInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Frontend");

  const addTechnology = () => {
    if (techInput) {
      const updatedTech = [...technologies[selectedCategory], techInput];
      onCategoryChange(selectedCategory, updatedTech);
      setTechInput("");
    }
  };

  const removeTechnology = (tech) => {
    const updatedTech = technologies[selectedCategory].filter(
      (t) => t !== tech
    );
    onCategoryChange(selectedCategory, updatedTech);
  };

  return (
    <div className="p-4 mb-4 bg-gray-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Technologies</h2>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      >
        {["Frontend", "Backend", "Database", "DevOps"].map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <div className="flex">
        <input
          type="text"
          placeholder={`Add a ${selectedCategory} technology`}
          value={techInput}
          onChange={(e) => setTechInput(e.target.value)}
          className="flex-grow p-2 border rounded"
        />
        <button
          onClick={addTechnology}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <div className="mt-4">
        {technologies[selectedCategory].map((tech, index) => (
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
