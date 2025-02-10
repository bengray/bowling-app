import BowlingGame from "./BowlingGame";
import { useRef } from "react";

export default function Body() {
  const strike = useRef(null);

  const toggleStrike = () => {
    strike.current.style.display = "block";
    setTimeout(() => {
      strike.current.style.display = "none";
    }, 3000);
  };

  return (
    <main>
      <div ref={strike} className="elementToFadeInAndOut">
        STRIKE!
      </div>
      <BowlingGame toggleStrike={toggleStrike} />
    </main>
  );
}
