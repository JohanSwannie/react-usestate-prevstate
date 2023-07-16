import React, { useState } from "react";

function DetermineDistance() {
  const [meters, setMeters] = useState(10);

  function incrementMeters() {
    setMeters((prevState) => prevState + 10);
  }

  return (
    <div>
      The old man has walked {meters} meters today.
      <br />
      <button onClick={incrementMeters}>Old man walk</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <DetermineDistance />
    </div>
  );
}

export default App;
