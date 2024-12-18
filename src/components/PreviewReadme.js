import React from "react";

function PreviewReadme({ profile, readme, technologies, socialMedia }) {
  const {
    projectName,
    description,
    installation,
    usage,
    license,
    features,
    contributing,
    tests,
  } = readme;

  const sectionContent = {
    projectName: `# ${projectName}`,
    description: `## Description\n${description}`,
    features: `## Features\n${features}`,
    installation: `## Installation\n${installation}`,
    usage: `## Usage\n${usage}`,
    contributing: `## Contributing\n${contributing}`,
    tests: `## Tests\n${tests}`,
    license: `## License\n${license}`,
  };

  const copyToClipboard = (content) => {
    navigator.clipboard.writeText(content);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Preview README
      </h2>
      <div>
        {Object.entries(sectionContent).map(([key, value]) => (
          <div key={key} className="mb-4">
            <pre className="whitespace-pre-wrap bg-gray-50 p-4 border rounded-lg">
              {value}
            </pre>
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={() => copyToClipboard(value)}
            >
              Copy {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PreviewReadme;
