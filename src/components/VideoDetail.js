import React from "react";

import { Paper, Typography } from "@material-ui/core";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  console.log(video);

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          frameborder="0"
          width="100%"
          height="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h5">{video.snippet.title}</Typography>
        <Typography variant="subtitle1" style={{ color: "#D22B2B" }}>
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  );
};
export default VideoDetail;
