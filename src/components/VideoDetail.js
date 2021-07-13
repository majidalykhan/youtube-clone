import React from "react";

import { Paper, Typography } from "@material-ui/core";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  console.log(video);

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div class="video-player">
        <iframe
          width="600"
          height="315"
          src={videoSrc}
          frameborder="0"
          title="Video Player"
        ></iframe>
      </div>

      <div id="info-contents">
        <h1 id="title">{video.snippet.title}</h1>
        <div id="info-bar">
          <div id="info-menu"></div>
        </div>
      </div>

      <div id="description">
        <div id="description-header">
          <div id="channel-info">
            <h1 id="channel-name">{video.snippet.channelTitle}</h1>
          </div>
        </div>
        <div id="description-body">
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
};
export default VideoDetail;
