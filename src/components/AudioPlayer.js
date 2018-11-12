import React from "react";
import Button from "./Button";
import * as utils from "../utils/utils";

const AudioPlayer = ({
  track_id,
  isPlaying,
  play,
  pause,
  playNextTrack,
  playPreviousTrack,
  episodeData
}) => {
  const convertedPublishDate = track_id
    ? new Date(episodeData.published_at)
    : null;

  const splitPublishDate = track_id
    ? convertedPublishDate.toString().split(" ")
    : null;

  return (
    <div>
      <div className="audio-player">
        {track_id ? (
          <main>
            <h4>Title: {episodeData.title}</h4>
            <p>Artist: This American Life</p>
            <p>
              Published:{" "}
              {`${splitPublishDate[2]} ${splitPublishDate[1]} ${
                splitPublishDate[3]
              }`}
            </p>
          </main>
        ) : (
          <main>
            <h4>Title: </h4>
            <p>Artist: </p>
            <p>Published: </p>
          </main>
        )}

        <progress id="progress-bar" value="0" max="1" />

        <Button
          buttonFunction={playPreviousTrack}
          buttonClass="fas fa-step-backward fa-2x"
        />
        {isPlaying ? (
          <Button buttonFunction={pause} buttonClass="fas fa-pause fa-4x" />
        ) : (
          <Button
            buttonFunction={() => play("first")}
            buttonClass={"fas fa-play fa-4x"}
          />
        )}

        <Button
          buttonFunction={playNextTrack}
          buttonClass={"fas fa-step-forward fa-2x"}
        />

        <Button
          buttonClass={"fas fa-volume-down fa-2x"}
          buttonFunction={() => utils.showHideVolumeSlider()}
        />
        <audio
          id="audio-player"
          src={
            track_id && `https://api.spreaker.com/v2/episodes/${track_id}/play`
          }
          autoPlay
        />

        <input type="range" id="volume" min="0" max="10" />
      </div>
    </div>
  );
};

export default AudioPlayer;
