
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
            question: "which language is primarily used for web development?",
            Options: ["Python", "JavaScript", "PHP", "all of the above"],
            correctAnswer: "all of the above"
        }
    ];

    // const initialAnswers = [null, null, null, null];

    // const [userAnswers, setUserAnswers] = useState(initialAnswers);

    // const [currentQuestion, setCurrentQuestion] = useState(0);

    // function handleSelectOption(option) {}
    return (
        <div>
            <h2>Question 1</h2>
            <p className="question">{questions[0].question}</p>

            {questions[0].Options.map((option) => (
                <button className="option" onClick={() => handleSelectOption(option)}>
                    {option}
                </button>
            ))}

            <div className="nav-buttons">
                <button>Previous</button>
                <button>Next</button>
            </div>
        </div>
    );
}

export default Quiz;