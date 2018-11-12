import React from "react";

const ShowDescription = ({ showData }) => {
  return (
    <main className="podcast-description">
      <img src={showData.image_url} alt="This American Life logo" />
      <h3>{showData.title}</h3>
      <p>{showData.description}</p>
    </main>
  );
};

export default ShowDescription;
