import React, { useState } from "react";

function SocialMediaSelector({ onSocialMediaChange }) {
  const [socialMedia, setSocialMedia] = useState([]);
  const [socialInput, setSocialInput] = useState("");

  const addSocialMedia = () => {
    if (socialInput && !socialMedia.includes(socialInput)) {
      const updatedSocialMedia = [...socialMedia, socialInput];
      setSocialMedia(updatedSocialMedia);
      onSocialMediaChange(updatedSocialMedia);
      setSocialInput("");
    }
  };

  const removeSocialMedia = (media) => {
    const updatedSocialMedia = socialMedia.filter((m) => m !== media);
    setSocialMedia(updatedSocialMedia);
    onSocialMediaChange(updatedSocialMedia);
  };

  return (
    <div className="p-4 mb-4 bg-gray-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Social Media</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Add a social media"
          value={socialInput}
          onChange={(e) => setSocialInput(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          onClick={addSocialMedia}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Social Media
        </button>
      </div>
      <div className="flex flex-wrap">
        {socialMedia.map((media, index) => (
          <span
            key={index}
            className="bg-gray-200 px-3 py-1 rounded-full mr-2 mb-2 flex items-center"
          >
            {media}
            <button
              onClick={() => removeSocialMedia(media)}
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

export default SocialMediaSelector;
