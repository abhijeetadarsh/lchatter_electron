import React from "react";

function CameraPage() {
  return (
    <div>
      <h1>Camera Page</h1>
      <div>
        <video controls>
          <source src="https://www.example.com/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default CameraPage;
