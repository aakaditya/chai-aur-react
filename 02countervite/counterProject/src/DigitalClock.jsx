import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update the clock every second
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalID);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  const timeString = `${hours}:${minutes}:${seconds}`;

  return (
    <div style={{ fontFamily: 'Arial', fontSize: '3em', textAlign: 'center' ,alignContent:'center' }}>
      {timeString}
    </div>
  );
};

export default DigitalClock;
