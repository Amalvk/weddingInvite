import React from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { Zoom } from 'react-awesome-reveal';

export default function CountDown({date,openInvite = null}) {
  const targetDate = new Date("2025-01-22T14:00:00");
  return (
    <Zoom>
      <FlipClockCountdown
        to={date?date:targetDate}
        labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
        labelStyle={{
          fontSize: 6,
          fontWeight: 600,
          textTransform: "uppercase",
          color: openInvite ? "var(--color-offwhite)": "var(--color-cherry)",
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
      >Count Down</FlipClockCountdown>
    </Zoom>
  );
}
