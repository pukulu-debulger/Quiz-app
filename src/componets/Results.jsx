

function Results({userAnswers, questions}) {
    return(
        <div className="results-container">
            <h2>Quiz Results</h2>
            <p> Your Score: </p>

            <button className="restart-button">Retake Quiz</button>
        </div>
    );
}

export default Results;