# Interactive Quiz Application

A modern, responsive quiz application built with React that features real-time scoring, progress tracking, and detailed result reports.

## Features

### Quiz Interface
- Dynamic question navigation
- Real-time progress tracking
- Interactive answer selection
- Animated progress indicators
- Responsive design for all devices
- Glass morphism UI elements
- Animated gradient backgrounds

### Results Page
- Detailed score analysis
- Grade calculation (A-F)
- Question-by-question review
- Visual indicators for correct/incorrect answers
- Animated result loading
- Progress tracking dots
- Score percentage calculation

## Technical Stack

### Frontend
- React
- CSS3 with modern features:
  - Flexbox
  - CSS Grid
  - CSS Variables
  - Animations
  - Transitions
  - Backdrop filters
  - Glass morphism effects

### Design Features
- Animated gradient backgrounds
- Glass morphism effects
- Modern color schemes
- Responsive typography
- Interactive UI elements
- Progress indicators
- Score visualization

## Component Structure

### QuizPage Component
```jsx
<QuizContainer>
  ├── ProgressBar
  ├── QuestionDots
  ├── Question
  │   └── AnswerButtons
  └── NavigationButtons
```

### ReportPage Component
```jsx
<ReportContainer>
  ├── ScoreDisplay
  │   ├── ScorePercentage
  │   ├── GradeDisplay
  │   └── CorrectAnswerCount
  └── ResultsList
      └── QuestionResults
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Farru049/Quiz-app-using-API
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

## Usage

### Starting a Quiz
1. Navigate to the quiz page
2. Questions will be presented one at a time
3. Select your answer
4. Use navigation buttons to move between questions
5. Submit when complete

### Viewing Results
- After submission, you'll see:
  - Overall score
  - Letter grade
  - Number of correct answers
  - Detailed breakdown of each question
  - Correct vs. incorrect answer comparison

## CSS Customization

### Quiz Page Styles
The quiz interface uses modern CSS features including:
- Gradient backgrounds
- Glass morphism effects
- Animated transitions
- Responsive design

```css
body {
  background: linear-gradient(
    45deg, 
    rgba(2,0,36,1) 0%, 
    rgba(102,9,121,1) 50%, 
    rgba(90,160,151,1) 100%
  );
}
```

### Report Page Styles
Results page features:
- Score display with animations
- Color-coded grade indicators
- Responsive layout
- Interactive elements

## PropTypes

### QuizPage Props
```jsx
QuizPage.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      correct_answer: PropTypes.string.isRequired
    })
  ).isRequired,
  userAnswers: PropTypes.object.isRequired
};
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements

- [ ] Add timer functionality
- [ ] Implement different question types
- [ ] Add sound effects
- [ ] Include progress saving
- [ ] Add quiz categories
- [ ] Implement user authentication
- [ ] Add social sharing features

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Modern UI design inspiration
- React community for component patterns
- CSS-Tricks for advanced styling techniques

## Contact

Your Name - [alifarhaan655@gmail.com](mailto:your-email@example.com)

Project Link: [https://github.com/Farru049/Quiz-app-using-API](https://github.com/farru049/quiz-app)