import React from "react";

function ExportOptions({ readmeData, technologies }) {
  const exportReadme = () => {
    const content = `
# ${readmeData.projectName}

## Description
${readmeData.description}

## Features
${readmeData.features}

## Installation
${readmeData.installation}

## Usage
${readmeData.usage}

## Technologies
### Frontend
${technologies.Frontend.join(", ")}
### Backend
${technologies.Backend.join(", ")}
### Database
${technologies.Database.join(", ")}
### DevOps
${technologies.DevOps.join(", ")}

## Contributing
${readmeData.contributing}

## Tests
${readmeData.tests}

## License
${readmeData.license}
`;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "README.md";
    link.click();
  };

  return (
    <div className="mt-6">
      <button
        onClick={exportReadme}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
      >
        Export README
      </button>
    </div>
  );
}

export default ExportOptions;
