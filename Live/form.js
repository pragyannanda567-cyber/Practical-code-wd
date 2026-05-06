import { useState } from "react";

function LiveInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <h3>{name}</h3>
    </div>
  );
}

export default LiveInput;