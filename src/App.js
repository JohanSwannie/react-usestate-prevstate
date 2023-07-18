import React, { useState } from "react";

const DetermineDistance = () => {
  const [meters, setMeters] = useState(0);
  const [totalDistanceLeft, setTotalDistanceLeft] = useState(5000);

  const incrementMeters = () => {
    setMeters((prevState) => prevState + 10);
    setTotalDistanceLeft(totalDistanceLeft - 10);
  };

  return (
    <div>
      <h4>The old man has walked {meters} meters today</h4>
      <h4>
        His distance left to still walk for the week is {totalDistanceLeft}
      </h4>
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
