import React from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

export default function CountDown() {
  const targetDate = new Date("2025-01-22T14:00:00");
  return (
    <div>
      <FlipClockCountdown
        to={targetDate}
        labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
        labelStyle={{
          fontSize: 6,
          fontWeight: 600,
          textTransform: "uppercase",
          color: "var(--color-cherry)",
        }}
        digitBlockStyle={{
          background: "white",
          color: "var(--color-warm)",
          width: 20,
          height: 30,
          fontSize: 20,
          borderRadius: 2,
        }}
        dividerStyle={{ color: "pink", height: 1 }}
        separatorStyle={{ color: "red", size: "none" }}
        duration={0.5}
      ></FlipClockCountdown>
    </div>
  );
}
