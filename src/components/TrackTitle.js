import React from "react";

const TrackTitle = ({ title, explicit }) => {
  return (
    <div>
      <h5>
        {title}
        {explicit && <span title="Explicit">E</span>}
      </h5>
    </div>
  );
};

export default TrackTitle;
