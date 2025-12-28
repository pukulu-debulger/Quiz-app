

function Results({userAnswers, questions}) {
    function getScore() {
        let finalScore = 0;
        
        userAnswers.forEach((answer, index) => {
            if (answer === questions[index].correctAnswer) {
                finalScore ++;
            }
        });
        return finalScore;
    }
    const score = getScore();

    return(
        <div className="results-container">
            <h2>Quiz Results</h2>
            <p> Your Score: {score}/{questions.length} </p>

            <button className="restart-button">Retake Quiz</button>
        </div>
    );
}

export default Results;