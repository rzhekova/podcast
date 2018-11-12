import React from "react";
import TrackTitle from "./TrackTitle";
import TrackDuration from "./TrackDuration";
import Button from "./Button";

const SingleTrack = ({
  title,
  duration,
  explicit,
  handleClick,
  track_id,
  episodeId,
  isPlaying,
  index,
  pause
}) => {
  return (
    <div className="single-track">
      {isPlaying && episodeId === track_id ? (
        <Button buttonClass={"fas fa-pause"} buttonFunction={pause} />
      ) : (
        <Button
          buttonClass={"fas fa-play"}
          buttonFunction={event => {
            handleClick(event, episodeId, index);
          }}
        />
      )}
      <TrackTitle title={title} explicit={explicit} />
      <TrackDuration duration={duration} />
    </div>
  );
};

export default SingleTrack;
