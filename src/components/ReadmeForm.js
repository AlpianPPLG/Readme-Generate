import React, { useState } from "react";

function ReadmeForm({ onReadmeChange }) {
  const [readme, setReadme] = useState({
    projectName: "",
    description: "",
    installation: "",
    usage: "",
    license: "",
    features: "",
    contributing: "",
    tests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReadme((prevReadme) => ({
      ...prevReadme,
      [name]: value,
    }));
    onReadmeChange({ ...readme, [name]: value });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        README Information
      </h2>
      <div className="space-y-4">
        {Object.keys(readme).map((key) => (
          <div key={key}>
            <label
              className="block text-sm font-medium mb-2 text-gray-700"
              htmlFor={key}
            >
              {key.charAt(0).toUpperCase() +
                key.slice(1).replace(/([A-Z])/g, " $1")}
            </label>
            {key === "description" ||
            key === "installation" ||
            key === "usage" ||
            key === "features" ||
            key === "contributing" ||
            key === "tests" ? (
              <textarea
                name={key}
                id={key}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                value={readme[key]}
                onChange={handleChange}
              />
            ) : (
              <input
                type="text"
                name={key}
                id={key}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={readme[key]}
                onChange={handleChange}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReadmeForm;
