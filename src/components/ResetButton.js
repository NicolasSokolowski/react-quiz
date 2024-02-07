import { useQuiz } from "../contexts/quizContext"

function ResetButton() {
  const { dispatch } = useQuiz();

  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: "restart"})}>
      Restart quiz
    </button>
  )
}

export default ResetButton
