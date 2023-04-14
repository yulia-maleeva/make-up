import React from "react";
import PropTypes from "prop-types";

import ReactPlayer from "react-player";

const VideoPlayer = ({ url }) => (
  <ReactPlayer
    url={url}
    controls
    width="100%"
    style={{ maxWidth: "700px", width: "90%" }}
  />
);

VideoPlayer.propTypes = {
  url: PropTypes.string.isRequired,
};

export default VideoPlayer;
