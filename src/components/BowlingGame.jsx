import { useState } from "react";
import { Card, Box, Button } from "@mui/material";

const CalculateScore = (frames) => {
  let totalScore = 0;
  for (let i = 0; i < 10; i++) {
    const frame = frames[i];
    const [first, second, third] = frame;

    totalScore += first + (second || 0) + (third || 0);

    if (first === 10) {
      // Strikes can only occur in the first roll
      // Handle strike
      if (frames[i + 1]) {
        totalScore += frames[i + 1][0];
        if (frames[i + 1][0] === 10 && frames[i + 2]) {
          totalScore += frames[i + 2][0];
        } else {
          totalScore += frames[i + 1][1] || 0;
        }
      }
    } else if (first + (second || 0) === 10) {
      // Handle spare
      if (frames[i + 1]) {
        totalScore += frames[i + 1][0];
      }
    }
  }
  return totalScore;
};

const BowlingGame = (toggleStrike) => {
  const toggleStrikeText = toggleStrike.toggleStrike;
  const [frames, setFrames] = useState(
    Array(9)
      .fill([0, 0])
      .concat([[0, 0, 0]])
  );
  const [currentFrame, setCurrentFrame] = useState(0);
  const [score, setScore] = useState(0);

  const handleRoll = (pins) => {
    if (currentFrame >= 10) return;

    let newFrames = [...frames];
    let frame = [...newFrames[currentFrame]];

    // First 9 frames logic
    if (currentFrame < 9) {
      if (frame[0] + pins > 10) {
        alert(
          "Are you trying to knock down more than 10 pins? I'm judging you silently."
        );
        return;
      }
      if (frame[0] === 0 && frame[1] === 0) {
        frame[0] = pins;
        if (pins === 10) {
          // Strike
          toggleStrikeText();
          setCurrentFrame(currentFrame + 1);
        }
      } else if (frame[1] === 0) {
        frame[1] = pins;
        setCurrentFrame(currentFrame + 1);
      }
    } else {
      // 10th frame logic
      if (frame[0] === 0 && frame[1] === 0) {
        frame[0] = pins;
      } else if (frame[1] === 0) {
        frame[1] = pins;
      } else if (frame[0] === 10 || frame[0] + frame[1] === 10) {
        frame[2] = pins;
      }
    }

    newFrames[currentFrame] = frame;
    setFrames(newFrames);
    setScore(CalculateScore(newFrames));
  };

  const displayFrame = (frame) => {
    // Helper function to format pins (ie: 0 to "-", 10 to "X", etc)
    // TODO: Refactor this to something more readable, like a switch statement
    // TODO: Need to handle multiple strikes in the 10th frame
    const formatPin = (pin) => (pin === 0 ? "-" : pin);
    if (frame[0] === 10) return "X";
    if (frame[0] + (frame[1] || 0) === 10) return `${formatPin(frame[0])} | /`;
    return `${formatPin(frame[0])} | ${formatPin(frame[1])}`;
  };

  return (
    <>
      <div>
        <p>Score: {score}</p>
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <h2>Roll Ball: </h2>
        <Box
          sx={{
            marginLeft: "20px",
          }}
        >
          {[...Array(11).keys()].map((pins) => (
            <Button
              variant="contained"
              size="small"
              key={pins}
              onClick={() => handleRoll(pins)}
            >
              {pins}
            </Button>
          ))}
        </Box>
      </Box>
      <div>
        <h2>Frames</h2>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {frames.map((frame, index) => (
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                height: "50px",
                width: "110px",
                justifyContent: "center",
                fontSize: "28px",
              }}
              key={index}
            >
              {displayFrame(frame)}{" "}
              {index === 9 && frame[2] !== undefined ? `| ${frame[2]}` : ""}
              {index === 9 && frame[1] === 10 ? `| ${frame[2]}` : ""}
            </Card>
          ))}
        </Box>
      </div>
    </>
  );
};
export { CalculateScore };
export default BowlingGame;
