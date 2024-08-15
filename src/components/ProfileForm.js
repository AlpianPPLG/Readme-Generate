import React from "react";

function ProfileForm({ profile, onProfileChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onProfileChange(name, value);
  };

  return (
    <div className="p-4 mb-4 bg-gray-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="w-full p-2 border rounded"
          value={profile.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="subtitle">
          Subtitle
        </label>
        <input
          type="text"
          name="subtitle"
          id="subtitle"
          className="w-full p-2 border rounded"
          value={profile.subtitle}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="work">
          Work
        </label>
        <input
          type="text"
          name="work"
          id="work"
          className="w-full p-2 border rounded"
          value={profile.work}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default ProfileForm;
