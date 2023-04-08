import React from "react";

import ReactPlayer from "react-player";

const VideoPlayer = ({ url }) => (
  <ReactPlayer
    url={url}
    controls
    width="100%"
    style={{ maxWidth: "700px", width: "90%" }}
  />
);

export default VideoPlayer;
