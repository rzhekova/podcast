import React from "react";
import SingleTrack from "./SingleTrack";

const TrackList = ({ episodes, handleClick, pause, track_id, isPlaying }) => {
  return (
    <div className="track-list">
      <ul>
        {[...episodes].map((episode, index) => {
          return (
            <li key={episode.episode_id}>
              <SingleTrack
                index={index}
                isPlaying={isPlaying}
                pause={pause}
                handleClick={handleClick}
                episodeId={episode.episode_id}
                track_id={track_id}
                title={episode.title}
                duration={episode.duration}
                explicit={episode.explicit}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TrackList;
