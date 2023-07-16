import React, { useState } from "react";

const DetermineDistance = () => {
  const [meters, setMeters] = useState(10);

  const incrementMeters = () => {
    setMeters((prevState) => prevState + 10);
  };

  return (
    <div>
      The old man has walked {meters} meters today
      <button onClick={incrementMeters}>Old man walk</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <DetermineDistance />
    </div>
  );
};

export default App;
