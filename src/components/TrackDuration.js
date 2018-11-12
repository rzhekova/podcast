import React from "react";
import * as utils from "../utils/utils";

const TrackDuration = ({ duration }) => {
  return (
    <div className="duration">
      <p>{utils.convertToTime(duration)}</p>
    </div>
  );
};

export default TrackDuration;
