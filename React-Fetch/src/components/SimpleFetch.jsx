import React from "react";

const SimpleFetch = () => {
  fetch("https://api.agify.io?name=fleur")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

  return (
    <div>
      <h2> SimpleFetch</h2>
      <p>Kijk in de console voor de resultaten</p>
    </div>
  );
};

export default SimpleFetch;
