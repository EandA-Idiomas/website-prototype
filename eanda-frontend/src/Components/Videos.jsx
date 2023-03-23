import React from "react";
import ReactPlayer from "react-player";
import videos from "./videos_components/videos.js";
import "./videos_components/videos.css";

function Videos() {
  if (!videos || videos.length === 0) {
    return <h3>Vídeos não encontrados, atualize a página</h3>;
  }

  return (
    <section className="video-section">
      {videos.map((video) => (
        <div key={video.id} className="video-container">
          <h4>{video.title}</h4>
          <ReactPlayer controls width={520} url={video?.url} rel={0} />
        </div>
      ))}
    </section>
  );
};

export default Videos;