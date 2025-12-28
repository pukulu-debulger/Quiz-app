import { useState } from 'react';
import Results from './Results';

function Quiz() {
    const questions = [
        {
            question: 'What is the capital of France?',
            Options: ["Berlin", "Madrid", "Paris", "Lisbon"],
            correctAnswer: "Paris"
        },
        {
            question: 'Which planet is known as the Red Planet?',
            Options: ["Earth", "Mars", "Jupiter", "Saturn"],
            correctAnswer: "Mars"
        },
        {
            question: 'What is the largest ocean on Earth?',
            Options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            correctAnswer: "Pacific Ocean"
        },
        {
            question: "which language is used for web development?",
            Options: ["Python", "JavaScript", "PHP", "all of the above"],
            correctAnswer: "all of the above"
        },
    ];

     const initialAnswers = [null, null, null, null];

     const [userAnswers, setUserAnswers] = useState(initialAnswers);
     const [currentQuestion, setCurrentQuestion] = useState(0);
     const selectedOption = userAnswers[currentQuestion];
     const [isQuizFinished, setIsQuizFinished] = useState(false);

     function handleSelectOption(option) {
            const newUserAnswers = [...userAnswers];
            newUserAnswers[currentQuestion] = option;
            setUserAnswers(newUserAnswers);
     }

     function goToNextQuestion() {
            if (currentQuestion === questions.length - 1) {
                setIsQuizFinished(true);
            } else {
                setCurrentQuestion(currentQuestion + 1);
            }
     }

     function goToPreviousQuestion() {
            if (currentQuestion > 0) {
                setCurrentQuestion(currentQuestion - 1);
            }
      }

       function restartQuiz() {
        // Logic to restart the quiz can be added here
        setUserAnswers(initialAnswers);
        setCurrentQuestion(0);
        setIsQuizFinished(false);
        
    }

      if (isQuizFinished) {
        return <Results userAnswers={userAnswers} questions={questions} restartQuiz={restartQuiz}/>;
      }
 
    return (  
        <div>
            <h2>Question {currentQuestion + 1}</h2>
            <p className="question">{questions[currentQuestion].question}</p>

            {questions[currentQuestion].Options.map((option) => (
                <button className={"option" + (selectedOption === option ? " selected" : "")} onClick={() => handleSelectOption(option)}>
                    {option}
                </button>
            ))}

            <div className="nav-buttons">
                <button onClick={goToPreviousQuestion} disabled={currentQuestion === 0}>
                    Previous
                </button>
                <button onClick={goToNextQuestion} disabled={!selectedOption}>
                    {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next'}
                </button>
            </div>
        </div>
    );
}

export default Quiz;