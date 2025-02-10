import BowlingGame from "./BowlingGame";

export default function Body() {
  const toggleStrike = () => {
    const strike = document.getElementById("strike");
    strike.style.display = "block";
    setTimeout(() => {
      strike.style.display = "none";
    }, 3000);
  };

  return (
    <main>
      <div id="strike" className="elementToFadeInAndOut">
        STRIKE!
      </div>
      <BowlingGame toggleStrike={toggleStrike} />
    </main>
  );
}
