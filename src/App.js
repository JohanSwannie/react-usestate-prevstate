import React, { useState } from "react";

const d1 = new Date();
let currentTime1 = d1.getTime();

const DetermineDistance = () => {
  const [meters, setMeters] = useState(0);
  const [totalDistanceLeft, setTotalDistanceLeft] = useState(5000);
  const [actualTimeDifferenceInHours, setActualTimeDifferenceInHours] =
    useState(0);
  const [actualTimeDifferenceInMinutes, setActualTimeDifferenceInMinutes] =
    useState(0);
  const [actualTimeDifferenceInSeconds, setActualTimeDifferenceInSeconds] =
    useState(0);
  const [isHours, setIsHours] = useState(false);
  const [isMinutes, setIsMinutes] = useState(false);
  const [isSeconds, setIsSeconds] = useState(false);
  const [hourDescription, setHourDescription] = useState("Hour");
  const [minuteDescription, setMinuteDescription] = useState("Minute");
  const [secondDescription, setSecondDescription] = useState("Second");

  const calculateTimeDifference = () => {
    const d2 = new Date();
    let currentTime2 = d2.getTime();
    const timeDifference = currentTime2 - currentTime1;

    const SECONDS = 1000;
    const MINUTES = 60 * SECONDS;
    const HOURS = 60 * MINUTES;

    const differenceInTime = `${Math.floor(timeDifference / HOURS)}${Math.floor(
      (timeDifference % HOURS) / MINUTES
    ).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    })}${Math.floor((timeDifference % MINUTES) / SECONDS).toLocaleString(
      "en-US",
      { minimumIntegerDigits: 2 }
    )}${Math.floor(timeDifference % SECONDS).toLocaleString("en-US", {
      minimumIntegerDigits: 4,
      useGrouping: false,
    })}`;

    const endTimeDifference = differenceInTime.toString();

    if (endTimeDifference.substring(0, 1) > 0) {
      setIsHours(true);
      setIsMinutes(false);
      setIsSeconds(false);
      setActualTimeDifferenceInHours(endTimeDifference.substring(0, 1));
      setActualTimeDifferenceInMinutes(endTimeDifference.substring(1, 3));
      setActualTimeDifferenceInSeconds(endTimeDifference.substring(3, 5));
    } else if (endTimeDifference.substring(1, 3) > 0) {
      setIsHours(false);
      setIsMinutes(true);
      setIsSeconds(false);
      setActualTimeDifferenceInMinutes(endTimeDifference.substring(1, 3));
      setActualTimeDifferenceInSeconds(endTimeDifference.substring(3, 5));
    } else if (endTimeDifference.substring(3, 5) > 0) {
      setIsHours(false);
      setIsMinutes(false);
      setIsSeconds(true);
      setActualTimeDifferenceInSeconds(endTimeDifference.substring(3, 5));
    }

    if (endTimeDifference.substring(0, 1) > 1) {
      setHourDescription("Hours");
    }

    if (endTimeDifference.substring(1, 3) > 1) {
      setMinuteDescription("Minutes");
    } else {
      setMinuteDescription("Minute");
    }

    if (endTimeDifference.substring(3, 5) > 1) {
      setSecondDescription("Seconds");
    } else {
      setSecondDescription("Second");
    }
  };
  const incrementMeters = () => {
    setMeters((prevState) => prevState + 10);
    setTotalDistanceLeft(totalDistanceLeft - 10);
    calculateTimeDifference();
  };

  if (totalDistanceLeft === 0) {
    return (
      <h4>The Old Man has completed his mission in walking 5000 meters</h4>
    );
  }

  return (
    <div>
      <h4>The old man has walked {meters} meters today</h4>
      <br />
      <h4>
        His distance left to still walk for the week is {totalDistanceLeft}
      </h4>
      <br />
      {isHours && (
        <h4>
          The time it took him to complete {meters} meters, is{" "}
          {actualTimeDifferenceInHours} {hourDescription} +{" "}
          {actualTimeDifferenceInMinutes} {minuteDescription} +{" "}
          {actualTimeDifferenceInSeconds} {secondDescription}.
        </h4>
      )}
      {isMinutes && (
        <h4>
          The time it took him to complete {meters} meters, is{" "}
          {actualTimeDifferenceInMinutes} {minuteDescription} +{" "}
          {actualTimeDifferenceInSeconds} {secondDescription}.
        </h4>
      )}
      {isSeconds && (
        <h4>
          The time it took him to complete {meters} meters, is{" "}
          {actualTimeDifferenceInSeconds} {secondDescription}.
        </h4>
      )}
      <br />
      <br />
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
