import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowMinimize,
  faWindowMaximize,
  faWindowRestore,
  faRectangleXmark
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";

function CustomTitleBar() {
  const [isWindowMaximized, setIsWindowMaximized] = useState(null);

  useEffect(() => {
    const updateMaximizeState = (isMaximized) => {
      setIsWindowMaximized(isMaximized);
    };

    window.api.onWindowStateChange(updateMaximizeState);

    // Initial check
    window.api.isWindowMaximized().then(setIsWindowMaximized);

    // Cleanup
    return () => {
      window.api.offWindowStateChange(updateMaximizeState);
    };
  }, []);

  return (
    <>
      <header className="[color:hsl(var(--foreground))] flex flex-col rounded-lg">
        <section className="flex space-x-1 p-1 pr-0 rounded-t-lg h-8 bg-[color:hsl(var(--secondary))]">
          <div className="flex-grow" style={{ WebkitAppRegion: "drag" }}></div>
          <button
            className="text-xs px-4 -m-1 hover:bg-opacity-20 hover:bg-[color:hsl(var(--primary))]"
            onClick={() => window.api.minimizeWindow()}
          >
            <FontAwesomeIcon icon={faWindowMinimize} />
          </button>
          <button
            className="text-xs px-4 -m-1 hover:bg-opacity-20 hover:bg-[color:hsl(var(--primary))]"
            onClick={() => window.api.maximizeOrRestoreWindow()}
          >
            {!isWindowMaximized ? (
              <FontAwesomeIcon icon={faWindowMaximize} />
            ) : (
              <FontAwesomeIcon icon={faWindowRestore} />
            )}
          </button>
          <button
            className="text-xs px-4 -m-1 -ml-3 hover:bg-red-500 rounded-tr-md"
            onClick={() => window.api.closeWindow()}
          >
            <FontAwesomeIcon icon={faRectangleXmark} />
          </button>
        </section>
      </header>
      <div className="h-4 bg-[color:hsl(var(--secondary))]" style={{ WebkitAppRegion: "drag" }} />
    </>
  );
}

export default CustomTitleBar;
