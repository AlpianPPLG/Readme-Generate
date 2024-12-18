import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReadmeForm from "./components/ReadmeForm";
import TechnologySelector from "./components/TechnologySelector";
import SocialMediaSelector from "./components/SocialMediaSelector";
import PreviewReadme from "./components/PreviewReadme";
import ProfileForm from "./components/ProfileForm";
import ExportOptions from "./components/ExportOptions";

function App() {
  const [readmeData, setReadmeData] = useState({});
  const [technologies, setTechnologies] = useState({
    Frontend: [],
    Backend: [],
    Database: [],
    DevOps: [],
  });
  const [socialMedia, setSocialMedia] = useState([]);
  const [profile, setProfile] = useState({
    title: "",
    subtitle: "",
    work: "",
  });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    profileForm: true,
    readmeForm: true,
    technologySelector: true,
    socialMediaSelector: true,
    previewReadme: true,
  });

  const handleProfileChange = (name, value) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleCategoryChange = (category, updatedTech) => {
    setTechnologies((prev) => ({ ...prev, [category]: updatedTech }));
  };

  const toggleSectionVisibility = (section) => {
    setVisibleSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className={isDarkMode ? "dark bg-gray-800 text-white" : "bg-gray-100"}>
      <Header />
      <main className="container mx-auto p-4">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Toggle {isDarkMode ? "Light" : "Dark"} Mode
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <button
              onClick={() => toggleSectionVisibility("profileForm")}
              className="mb-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Toggle Profile Form
            </button>
            {visibleSections.profileForm && (
              <ProfileForm
                profile={profile}
                onProfileChange={handleProfileChange}
              />
            )}

            <button
              onClick={() => toggleSectionVisibility("readmeForm")}
              className="mb-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Toggle Readme Form
            </button>
            {visibleSections.readmeForm && (
              <ReadmeForm onReadmeChange={setReadmeData} />
            )}

            <button
              onClick={() => toggleSectionVisibility("technologySelector")}
              className="mb-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Toggle Technology Selector
            </button>
            {visibleSections.technologySelector && (
              <TechnologySelector
                technologies={technologies}
                onCategoryChange={handleCategoryChange}
              />
            )}

            <button
              onClick={() => toggleSectionVisibility("socialMediaSelector")}
              className="mb-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Toggle Social Media Selector
            </button>
            {visibleSections.socialMediaSelector && (
              <SocialMediaSelector
                selectedSocialMedia={socialMedia}
                onSocialMediaChange={setSocialMedia}
              />
            )}
          </div>
          <div>
            <button
              onClick={() => toggleSectionVisibility("previewReadme")}
              className="mb-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Toggle Preview Readme
            </button>
            {visibleSections.previewReadme && (
              <PreviewReadme
                profile={profile}
                readme={readmeData}
                technologies={technologies}
                socialMedia={socialMedia}
              />
            )}
            <ExportOptions
              readmeData={readmeData}
              technologies={technologies}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
