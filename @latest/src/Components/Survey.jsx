import React, { useState } from "react";

function Survey() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); //usestate for question change initially it is 0
  const [userInput, setUserInput] = useState(""); // Declare userInput state

  // Array of questions
  const questions = [
    "How satisfied are you with our products?",
    "How fair are the prices compared to similar retailers?",
    "How satisfied are you with the value for money of your purchase?",
    "On a scale of 1-10 how would you recommend us to your friends and family?",
    "What could we do to improve our service?",
  ];
  

  const handleInputChange = (event) => {
    setUserInput(event.target.value); // Update the user input state
  };

  const handleprevious = () => { //this is for previous button the current value got decrees when user press it
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handlenext = () => { //this is for next button the current value got decrees when user press it
    if (currentQuestionIndex >= 0 && currentQuestionIndex < 4) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div className="survey-ques">
      <h2 className="survey-heading">Customer Survey</h2>
      <div className="page-no">
        <h6>{currentQuestionIndex + 1}/5</h6>
      </div>
      <div className="ques"> 
        {/* this is for no. */}
        <h5>{currentQuestionIndex+1}</h5>  
        {/* this is for question */}
        <h5>{questions[currentQuestionIndex]}</h5>
      </div>
{/* this is for conditional rendering when we hit question 5 it will change it to input or text area */}
      <div className="rating">
        {currentQuestionIndex === 4 ? (
          <textarea
            value={userInput}
            onChange={handleInputChange}
            placeholder="Type here"
          />
        ) : (
          <>
            <div className="option">1</div>
            <div className="option">2</div>
            <div className="option">3</div>
            <div className="option">4</div>
            <div className="option">5</div>
          </>
        )}
      </div>

      <div className="back-front">
        <button onClick={handleprevious} className="btn-1">
          Previous
        </button>

        <button onClick={handlenext} className="btn-2">
          Next
        </button>
      </div>
    </div>
  );
}

export default Survey;
