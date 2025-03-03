import ConfettiExplosion from "react-confetti-explosion";

export default function Popper() {
  return (
    <div>
      {
        <ConfettiExplosion
          force={0.8}
          duration={3000}
          particleCount={250}
          width={1600}
        />
      }
    </div>
  );
}
