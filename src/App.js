import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReadmeForm from "./components/ReadmeForm";
import TechnologySelector from "./components/TechnologySelector";
import SocialMediaSelector from "./components/SocialMediaSelector";
import PreviewReadme from "./components/PreviewReadme";
import ProfileForm from "./components/ProfileForm";

function App() {
  const [readmeData, setReadmeData] = useState({});
  const [technologies, setTechnologies] = useState([]);
  const [socialMedia, setSocialMedia] = useState([]);
  const [profile, setProfile] = useState({
    title: "",
    subtitle: "",
    work: "",
  });

  const handleProfileChange = (name, value) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ProfileForm
              profile={profile}
              onProfileChange={handleProfileChange}
            />
            <ReadmeForm onReadmeChange={setReadmeData} />
            <TechnologySelector
              selectedTechnologies={technologies}
              onTechnologyChange={setTechnologies}
            />
            <SocialMediaSelector
              selectedSocialMedia={socialMedia}
              onSocialMediaChange={setSocialMedia}
            />
          </div>
          <PreviewReadme
            profile={profile}
            readme={readmeData}
            technologies={technologies}
            socialMedia={socialMedia}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
