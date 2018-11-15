import React, { PureComponent } from "react";
import AudioPlayerField from "./AudioPlayerField";
import TrackList from "./TrackList";
import axios from "axios";
import * as utils from "../utils/utils";

class PodcastField extends PureComponent {
  state = {
    show: {},
    episodes: [],
    track_id: "",
    currentEpisodeIndex: 0,
    isPlaying: false,
    hasPlayed: true,
    isLoaded: false
  };

  componentDidMount() {
    const url = "https://api.spreaker.com/v2/shows/1503674";

    axios.get(url).then(show => {
      axios.get(`${url}/episodes`).then(episodes =>
        this.setState({
          show: show.data.response.show,
          episodes: episodes.data.response.items,
          hasPlayed: false,
          isLoaded: true
        })
      );
    });
  }

  render() {
    const {
      episodes,
      show,
      track_id,
      isPlaying,
      currentEpisodeIndex,
      isLoaded
    } = this.state;

    return isLoaded ? (
      <div className="podcast-field">
        <AudioPlayerField
          showData={show}
          track_id={track_id}
          isPlaying={isPlaying}
          play={this.play}
          pause={this.pause}
          playNextTrack={this.playNextTrack}
          playPreviousTrack={this.playPreviousTrack}
          episodeData={episodes[currentEpisodeIndex]}
        />
        <TrackList
          handleClick={this.handleClick}
          episodes={episodes}
          track_id={track_id}
          isPlaying={isPlaying}
          pause={this.pause}
        />
      </div>
    ) : (
      <p>Loading...</p>
    );
  }

  handleClick = (event, track_id, index) => {
    event.preventDefault();
    this.setState({
      track_id,
      isPlaying: true,
      currentEpisodeIndex: index,
      hasPlayed: true
    });
    this.play();
  };

  playNextTrack = () => {
    const player = document.getElementById("audio-player");

    let { episodes, currentEpisodeIndex } = this.state;

    const index = currentEpisodeIndex + 1;

    if (index < episodes.length) {
      const nextTrackId = episodes[index].episode_id;

      player.src = `https://api.spreaker.com/v2/episodes/${nextTrackId}/play`;
      this.play();
      this.setState({
        // previousEpisodeIndex: currentEpisodeIndex,
        currentEpisodeIndex: ++currentEpisodeIndex,
        track_id: nextTrackId
      });
    } else {
      this.pause();
    }
  };

  playPreviousTrack = () => {
    const player = document.getElementById("audio-player");

    let { episodes, currentEpisodeIndex } = this.state;

    const index = currentEpisodeIndex - 1;

    if (index >= 0) {
      const prevTrackId = episodes[index].episode_id;

      player.src = `https://api.spreaker.com/v2/episodes/${prevTrackId}/play`;
      this.play();

      this.setState({
        // previousEpisodeIndex: currentEpisodeIndex,
        currentEpisodeIndex: --currentEpisodeIndex,
        track_id: prevTrackId
      });
    } else {
      this.pause();
    }
  };

  play = key => {
    const player = document.getElementById("audio-player");
    const { episodes, hasPlayed } = this.state;
    const firstEpisodeId = episodes[0].episode_id;

    if (!hasPlayed && key === "first") {
      player.src = `https://api.spreaker.com/v2/episodes/${firstEpisodeId}/play`;
      this.setState({
        track_id: firstEpisodeId,
        hasPlayed: true
      });
    }

    setTimeout(function() {
      player.play();
    }, 150);

    utils.handleProgress();
    utils.handleVolume();
    this.setState({ isPlaying: true });

    player.onended = () => {
      this.playNextTrack();
    };
  };

  pause = () => {
    const player = document.getElementById("audio-player");

    player.pause();
    this.setState({ isPlaying: false });
  };
}

export default PodcastField;
