import React from "react";
import AudioPlayer from "./AudioPlayer";
import ShowDescription from "./ShowDescription";

const AudioPlayerField = ({
  track_id,
  showData,
  isPlaying,
  play,
  pause,
  playNextTrack,
  playPreviousTrack,
  episodeData
}) => {
  return (
    <div>
      <ShowDescription showData={showData} />
      <AudioPlayer
        isPlaying={isPlaying}
        track_id={track_id}
        play={play}
        pause={pause}
        playNextTrack={playNextTrack}
        playPreviousTrack={playPreviousTrack}
        episodeData={episodeData}
      />
    </div>
  );
};

export default AudioPlayerField;
