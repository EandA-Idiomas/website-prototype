import React from "react";
import ReactPlayer from "react-player";
import videos from "./videos_components/videos.js";
import "./videos_components/videos.css";

function Videos() {
  return (
    <div className="video-section">
      {videos.map((video) => (
        <div key={video.id} className="video-container">
          <h4>{video.title}</h4>
          <ReactPlayer controls={true} url={video.url} />
        </div>
      ))}
    </div>
  );
};

export default Videos;