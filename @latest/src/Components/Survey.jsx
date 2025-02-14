import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Survey() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); //usestate for question change initially it is 0
  const [userInput, setUserInput] = useState(""); // Declare userInput state
  const navigate = useNavigate(); // Hook to navigate to the next page
  const [Rating,setRating]=useState({
    ans_qus1:"",
    ans_qus2:"",
    ans_qus3:"",
    ans_qus4:"",
    
    


  })

console.log(Rating)



  // Array of questions
  const questions = [
    "How satisfied are you with our products?",
    "How fair are the prices compared to similar retailers?",
    "How satisfied are you with the value for money of your purchase?",
    "On a scale of 1-10 how would you recommend us to your friends and family?",
    "What could we do to improve our service?",
  ];
const option={
  option_1:1,
  option_2:2,


}



  // const handleRating = (rating) => {
  //   // Store the rating in localStorage when a user clicks a rating (1-5)
  //   localStorage.setItem(`question_${currentQuestionIndex}_rating`, rating);
  // };
  
  // const handleRating = (rating) => {
  //   setRating(rating); // Update the state with the selected rating
  //   localStorage.setItem("Rating", rating); // Store the rating in localStorage
  // };
  
  const handlevalue = (event) => {
    const { value, name } = event.target;
    setRating((prevRating) => ({
      ...prevRating,
      [name]: value, // Dynamically update the correct question
    }));

    // Store in localStorage
    localStorage.setItem(name, value);
  };

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
  const handleSubmit = () => {
    if(!userInput==""){
      alert("Survey submitted! Thank you for your feedback 😊");

      localStorage.setItem("Rating",JSON.stringify({
        rating:Rating,
        text:userInput
      }))




      navigate("/thanks");

      
    }else{
      alert("Please fill out the survey before submitting.");
    }
   
    // You can also send the data to a backend or handle it accordingly
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
          <div className="text-btn">
          <textarea
            value={userInput}
            onChange={handleInputChange}
            placeholder="Type here"
          />
         <div className="submit-btn-container">
          <button onClick={handleSubmit} className="btn-3" >
          Submit
        </button>
        </div>
        
        
          </div>
          
          
          
          
        ) : (
          <>
          {
            currentQuestionIndex+1==1 && (
              <>
               <div ><button className="option"onClick={handlevalue} value={1} name="ans_qus1" 
               style={{
                backgroundColor:Rating.ans_qus1==1?"red":"white"
               }}>1</button></div>
            <div ><button className="option" onClick={handlevalue} value={2} name="ans_qus1" style={{
                backgroundColor:Rating.ans_qus1==2?"red":"white"
               }}>2</button></div>
            <div ><button className="option" onClick={handlevalue} value={3} name="ans_qus1" style={{
                backgroundColor:Rating.ans_qus1==3?"red":"white"
               }}>3</button></div>
            <div ><button className="option"onClick={handlevalue} value={4} name="ans_qus1" style={{
                backgroundColor:Rating.ans_qus1==4?"red":"white"
               }}>4</button></div>
            <div><button className="option" onClick={handlevalue} value={5} name="ans_qus1" style={{
                backgroundColor:Rating.ans_qus1==5?"red":"white"
               }}>5</button></div>
               
              
              </>
            )
          }
          {
            currentQuestionIndex+1==2 && (
              <>
               <div ><button className="option" onClick={handlevalue} value={1} name="ans_qus2" style={{
                backgroundColor:Rating.ans_qus2==1?"red":"white"
               }}>1</button></div>
            <div ><button className="option" onClick={handlevalue} value={2} name="ans_qus2" style={{
                backgroundColor:Rating.ans_qus2==2?"red":"white"
               }}>2</button></div>
            <div ><button className="option" onClick={handlevalue} value={3} name="ans_qus2" style={{
                backgroundColor:Rating.ans_qus2==3?"red":"white"
               }}>3</button></div>
            <div ><button className="option" onClick={handlevalue} value={4} name="ans_qus2" style={{
                backgroundColor:Rating.ans_qus2==4?"red":"white"
               }}>4</button></div>
            <div><button className="option" onClick={handlevalue} value={5} name="ans_qus2" style={{
                backgroundColor:Rating.ans_qus2==5?"red":"white"
               }}>5</button></div>
            
              </>
            )
          }
          {
            currentQuestionIndex+1==3 && (
              <>
              <div ><button className="option" onClick={handlevalue} value={1} name="ans_qus3" style={{
                backgroundColor:Rating.ans_qus3==1?"red":"white"
               }}>1</button></div>
            <div ><button className="option" onClick={handlevalue} value={2} name="ans_qus3" style={{
                backgroundColor:Rating.ans_qus3==2?"red":"white"
               }}>2</button></div>
            <div ><button className="option" onClick={handlevalue} value={3} name="ans_qus3" style={{
                backgroundColor:Rating.ans_qus3==3?"red":"white"
               }}>3</button></div>
             <div ><button className="option" onClick={handlevalue} value={4} name="ans_qus3" style={{
                backgroundColor:Rating.ans_qus3==4 ?"red":"white"
               }}>4</button></div>
            <div><button className="option" onClick={handlevalue} value={5} name="ans_qus3" style={{
                backgroundColor:Rating.ans_qus3==5 ?"red":"white"
               }} >5</button></div>
              
              
              </>
            )
          }
          {
            currentQuestionIndex+1==4 && (
              <>
                <div ><button className="option" onClick={handlevalue} value={1} name="ans_qus4"
                style={{
                  backgroundColor:Rating.ans_qus4==1 ?"red":"white"
                 }}>1</button></div>
            <div ><button className="option" onClick={handlevalue} value={2} name="ans_qus4"
            style={{
              backgroundColor:Rating.ans_qus4==2 ?"red":"white"
             }}>2</button></div>
            <div ><button className="option" onClick={handlevalue} value={3} name="ans_qus4"
            style={{
              backgroundColor:Rating.ans_qus4==3 ?"red":"white"
             }}>3</button></div>
            <div ><button className="option" onClick={handlevalue} value={4} name="ans_qus4"
            style={{
              backgroundColor:Rating.ans_qus4==4 ?"red":"white"
             }}>4</button></div>
            <div><button className="option" onClick={handlevalue} value={5} name="ans_qus4"
            style={{
              backgroundColor:Rating.ans_qus4==5 ?"red":"white"
             }}>5</button></div>
              
              </>
            )
          }
            




          </>
        )}
      </div>

      <div className="back-front">
        <button onClick={handleprevious} className="btn-1">
          Previous
        </button>

        {currentQuestionIndex < 4 && (
          <button onClick={handlenext} className="btn-2">
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Survey;
