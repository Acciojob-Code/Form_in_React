import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [fname, setfName] = useState("");

  // for basic 
  return (
    <>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setfName("");
            }}
          />
        </label>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setfName(name);
          }}
        >
          Submit
        </button>
        <button
          onClick={() => {
            setName("");
          }}
        >
          Reset
        </button>
      </form>
      <p>{fname}</p>
    </>
  );
}

export default App;
