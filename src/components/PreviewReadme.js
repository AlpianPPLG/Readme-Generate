import React from "react";

function PreviewReadme({ readme }) {
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

  const readmeContent = `
# ${projectName}

## Description
${description}

## Features
${features}

## Installation
${installation}

## Usage
${usage}

## Contributing
${contributing}

## Tests
${tests}

## License
${license}
`;

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Preview README
      </h2>
      <pre className="whitespace-pre-wrap bg-gray-50 p-4 border border-gray-200 rounded-lg">
        {readmeContent}
      </pre>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200"
        onClick={() => navigator.clipboard.writeText(readmeContent)}
      >
        Copy to Clipboard
      </button>
    </div>
  );
}

export default PreviewReadme;
