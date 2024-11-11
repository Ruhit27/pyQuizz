"use client";
import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Button } from "../components/ui/moving-border";

ChartJS.register(ArcElement, Tooltip, Legend);

const questions = [
  {
    question: "What is the keyword to define a function in Python?",
    options: ["function", "def", "func", "define"],
    correctAnswer: "def",
  },
  {
    question: "How do you call a function in Python?",
    options: ["function()", "call function", "func()", "def function"],
    correctAnswer: "function()",
  },
  {
    question:
      "What does a function return if there is no return statement in Python?",
    options: ["None", "False", "0", "Error"],
    correctAnswer: "None",
  },
  {
    question: "Whats my name?",
    options: ["Ruhit", "Islam", "Majharul", "All"],
    correctAnswer: "All",
  },
  {
    question: "What does the 'return' keyword do in a Python function?",
    options: [
      "Exits the function",
      "Returns a value from the function",
      "Defines the function",
      "None of the above",
    ],
    correctAnswer: "Returns a value from the function",
  },
  {
    question: "Can a Python function have multiple return statements?",
    options: ["Yes", "No", "Depends on the function", "Not in Python"],
    correctAnswer: "Yes",
  },
  {
    question:
      "What is the output of a function if it does not include a return statement?",
    options: ["None", "An empty string", "Zero", "Error"],
    correctAnswer: "None",
  },
];

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextClick = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setCorrectAnswers((prev) => prev + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRetryClick = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setCorrectAnswers(0);
    setQuizFinished(false);
  };

  const currentQuestion = questions[currentQuestionIndex];

  const chartData = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        data: [correctAnswers, questions.length - correctAnswers],
        backgroundColor: ["#4CAF50", "#FF5722"],
      },
    ],
  };

  return (
    <div className="container mx-auto p-6 mt-10">
      {quizFinished ? (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
          <div className="mb-4">
            <Pie data={chartData} />
          </div>
          <p className="text-lg font-semibold mb-4">
            You got {correctAnswers} out of {questions.length} correct.
          </p>

          {/* List of Questions with Correct Answers */}
          <div className="text-left mt-6">
            <h3 className="text-xl font-bold mb-3">Correct Answers:</h3>
            <ul className="space-y-2">
              {questions.map((q, index) => (
                <li key={index} className="p-3 bg-gray-100 rounded-md">
                  <p className="font-semibold">{q.question}</p>
                  <p>
                    <span className="font-medium text-teal-500">
                      Correct Answer:
                    </span>{" "}
                    {q.correctAnswer}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Retry Button */}
          <button
            onClick={handleRetryClick}
            className="mt-6 bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600"
          >
            Retry Quiz
          </button>
        </div>
      ) : (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">
            {currentQuestion.question}
          </h1>
          <div className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                className={`p-3 border rounded cursor-pointer ${
                  selectedAnswer === option
                    ? "bg-teal-300 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <button
              onClick={handleNextClick}
              className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600"
              disabled={!selectedAnswer}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
