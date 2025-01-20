import PropTypes from 'prop-types';
import './ReportPage.css';

export function ReportPage({ questions, userAnswers }) {
  if (!questions?.length || !userAnswers) {
    return <div className="report-container no-data">No quiz data available</div>;
  }

  // Calculate score
  const correctAnswers = questions.reduce((count, question, index) => {
    return userAnswers[index] === question.correct_answer ? count + 1 : count;
  }, 0);

  const totalQuestions = questions.length;
  const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);
  
  // Calculate grade
  const getGrade = (score) => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  };

  const grade = getGrade(scorePercentage);

  return (
    <div className="report-container">
      <h2 className="report-title">Quiz Results</h2>
      
      <div className="score-display">
        <div className="score-number">{scorePercentage}%</div>
        <div className="score-text">
          {correctAnswers} correct out of {totalQuestions} questions
        </div>
        <div className={`score-grade grade-${grade}`}>
          Grade: {grade}
        </div>
      </div>

      <div className="results">
        {questions.map((question, index) => (
          <div 
            key={index} 
            className="question-result"
            style={{"--index": index}}
          >
            <p className="question-text">
              <span className="label">Question {index + 1}:</span> {question.question}
            </p>
            <p className={`user-answer ${userAnswers[index] === question.correct_answer ? 'correct' : 'incorrect'}`}>
              <span className="answer-icon"></span>
              <span className="label">Your answer:</span> {userAnswers[index] || 'Not answered'}
            </p>
            <p className="correct-answer">
              <span className="label">Correct answer:</span> {question.correct_answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

ReportPage.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      correct_answer: PropTypes.string.isRequired
    })
  ).isRequired,
  userAnswers: PropTypes.object.isRequired
};