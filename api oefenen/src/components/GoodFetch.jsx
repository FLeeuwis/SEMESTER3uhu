import { useState, useEffect } from "react";

const GoodFetch = () => {
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetch("https://www.boredapi.com/api/activity")
      .then((response) => response.json())
      .then((data) => {
        setTask(data.activity);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2> Ik verveel me, wat zal ik doen?</h2>
      {/* als task leeg is, laat niks zien. zowel <p>{task}</p> */}
      {task && <p>{task}</p>}
    </div>
  );
};

export default GoodFetch;
