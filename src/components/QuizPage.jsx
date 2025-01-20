// QuizPage.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Timer } from './Timer';
import './quiz.css'
export function QuizPage({ questions, onQuizEnd }) {
  const [currentAnswers, setCurrentAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleTimeEnd = () => {
    onQuizEnd(currentAnswers);
  };

  const handleAnswerSelect = (answer) => {
    setCurrentAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: answer
    }));
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const goToQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handleSubmit = () => {
    onQuizEnd(currentAnswers);
  };

  if (!questions.length) {
    return <div>Loading questions...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <Timer duration={300} onTimeEnd={handleTimeEnd} />
      
      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress-text">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
        <div className="question-dots">
          {questions.map((_, index) => (
            <button
              key={index}
              className={`question-dot ${index === currentQuestionIndex ? 'active' : ''} 
                ${currentAnswers[index] ? 'answered' : ''}`}
              onClick={() => goToQuestion(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Current Question */}
      <div className="question">
        <h3>{currentQuestion.question}</h3>
        <div className="answers">
          {currentQuestion.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(answer)}
              className={`answer-button ${currentAnswers[currentQuestionIndex] === answer ? 'selected' : ''}`}
            >
              {answer}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button
          onClick={goToPreviousQuestion}
          disabled={currentQuestionIndex === 0}
          className="nav-button"
        >
          Previous
        </button>

        {currentQuestionIndex === questions.length - 1 ? (
          <button
            onClick={handleSubmit}
            className="submit-button"
            disabled={Object.keys(currentAnswers).length !== questions.length}
          >
            Submit Quiz
          </button>
        ) : (
          <button
            onClick={goToNextQuestion}
            disabled={currentQuestionIndex === questions.length - 1}
            className="nav-button"
          >
            Next
          </button>
        )}
      </div>

      {/* Questions Overview */}
      <div className="questions-overview">
        <h4>Questions Overview</h4>
        <div className="overview-status">
          Answered: {Object.keys(currentAnswers).length} of {questions.length}
        </div>
      </div>
    </div>
  );
}

QuizPage.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answers: PropTypes.arrayOf(PropTypes.string).isRequired,
      correct_answer: PropTypes.string.isRequired
    })
  ).isRequired,
  onQuizEnd: PropTypes.func.isRequired
};