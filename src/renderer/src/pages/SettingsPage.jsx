import React, { useState } from "react";

function SettingsPage() {
  // Define state variables for settings
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  // Function to handle updating settings
  const updateSettings = () => {
    // Code to update settings
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <div className="setting">
        <label>
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={() => setNotificationsEnabled(!notificationsEnabled)}
          />
          Notifications
        </label>
      </div>
      <div className="setting">
        <label>
          <input
            type="checkbox"
            checked={darkModeEnabled}
            onChange={() => setDarkModeEnabled(!darkModeEnabled)}
          />
          Dark Mode
        </label>
      </div>
      <button onClick={updateSettings}>Save Settings</button>
    </div>
  );
}

export default SettingsPage;
