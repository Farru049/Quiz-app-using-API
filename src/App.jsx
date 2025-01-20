// App.jsx
import { useState, useEffect } from "react";
import { StartPage } from "./components/StartPage";
import { QuizPage } from "./components/QuizPage";
import { ReportPage } from "./components/ReportPage";

function App() {
  const [questions, setQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});

  useEffect(() => {
    if (quizStarted) {
      fetch("https://opentdb.com/api.php?amount=15&type=multiple")
        .then((res) => res.json())
        .then((data) =>
          setQuestions(
            data.results.map((item) => ({
              ...item,
              answers: [item.correct_answer, ...item.incorrect_answers].sort(
                () => Math.random() - 0.5
              ),
            }))
          )
        );
    }
  }, [quizStarted]);

  return (
    <div>
      {!quizStarted && !quizEnded && (
        <StartPage onStart={() => setQuizStarted(true)} />
      )}
      {quizStarted && !quizEnded && (
        <QuizPage
          questions={questions}
          onQuizEnd={(answers) => {
            setUserAnswers(answers);
            setQuizEnded(true);
          }}
        />
      )}
      {quizEnded && <ReportPage questions={questions} userAnswers={userAnswers} />}
    </div>
  );
}

export default App;