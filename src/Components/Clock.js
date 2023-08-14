import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  useEffect(() => {
    const timerID = setInterval(updateTime, 1000);
    updateTime();

    return () => {
      clearInterval(timerID);
    };
  }, []);

  function updateTime() {
    const cd = new Date();
    setTime(
      zeroPadding(cd.getHours(), 2) +
        ":" +
        zeroPadding(cd.getMinutes(), 2) +
        ":" +
        zeroPadding(cd.getSeconds(), 2)
    );
    setDate(
      zeroPadding(cd.getFullYear(), 4) +
        "-" +
        zeroPadding(cd.getMonth() + 1, 2) +
        "-" +
        zeroPadding(cd.getDate(), 2) +
        " " +
        week[cd.getDay()]
    );
  }

  function zeroPadding(num, digit) {
    let zero = "";
    for (let i = 0; i < digit; i++) {
      zero += "0";
    }
    return (zero + num).slice(-digit);
  }

  const clockStyle = {
    fontFamily: "Share Tech Mono, monospace",
    textAlign: "center",
    position: "absolute",
    color: "#daf6ff",
    textShadow:
      "0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0)",
  };

  const timeStyle = {
    letterSpacing: "0.05em",
    fontSize: "80px",
    padding: "5px 0",
  };

  const dateStyle = {
    letterSpacing: "0.1em",
    fontSize: "24px",
  };

  const textStyle = {
    letterSpacing: "0.1em",
    fontSize: "12px",
    padding: "20px 0 0",
  };

  return (
    <div style={clockStyle}>
      <p className="time" style={timeStyle}>
        {time}
      </p>
      <p className="date" style={dateStyle}>
        {date}
      </p>
      <p className="text" style={textStyle}></p>
    </div>
  );
}

export default Clock;
