import { useState, useEffect } from "react";

const BetterFetch = () => {
  const [todos, setTodos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">Error: {error.message}</p>;

  return (
    <div>
      <h2> dingen om te doen...</h2>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
};

export default BetterFetch;
