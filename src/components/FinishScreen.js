import { useQuiz } from "../contexts/quizContext";
import ResetButton from "./ResetButton";

function FinishScreen() {
  const { points, maxPoints, highscore } = useQuiz();
  const percentage = (points / maxPoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "😊";
  if (percentage >= 0 && percentage < 50) emoji = "🤔";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of {maxPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highest score: {highscore} points)</p>
      <ResetButton />
    </>
  )
}

export default FinishScreen
