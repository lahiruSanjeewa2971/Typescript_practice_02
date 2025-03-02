import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("http://localhost:5000/deck", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify({
        title: title,
      }),
    });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="deck-title">Deck Title</label>
          <input
            id="deck-title"
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
          <button>Create Deck</button>
        </form>
      </div>
    </>
  );
}

export default App;
