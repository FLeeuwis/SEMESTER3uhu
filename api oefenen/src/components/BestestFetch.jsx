import { useEffect, useState } from "react";

const BestestFetch = () => {
  const [todos, setTodos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      const terug = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );

      if (!terug.ok) {
        throw new Error("HTTP status: " + terug.status);
      }

      const json = await terug.json();
      setTodos(json);
      setLoading(false);
    };
    fetchTodos().catch((error) => {
      setError(error);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">Error: {error.message}</p>;

  return (
    <div>
      <h2> dingen om te doen...</h2>
      <form>
        {todos &&
          todos.map(({ id, title, completed }) => {
            return (
              <label key={id}>
                <input
                  type="checkbox"
                  readOnly
                  id={id}
                  checked={completed ? "checked" : null}
                />
                <span className="checkbox--item">{title}</span>
              </label>
            );
          })}
      </form>
    </div>
  );
};

export default BestestFetch;
