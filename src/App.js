import React, { useState } from "react";

function DetermineDistance() {
  const [meters, setMeters] = useState(10);

  function incrementMeters() {
    setMeters((prevState) => prevState + 10);
  }

  return (
    <div>
      The old man has walked {meters} meters today
      <button onClick={incrementMeters}>Old man walk</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <DetermineDistance />
    </div>
  );
}

export default App;
