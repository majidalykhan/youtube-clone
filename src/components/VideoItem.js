import React from "react";

import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div class="preview-container">
      <div onClick={() => onVideoSelect(video)}>
        <div class="video-thumbnail">
          <img alt="" src={video.snippet.thumbnails.medium.url}></img>
        </div>

        <div class="preview-metadata">
          <h1 class="video-title">{video.snippet.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
