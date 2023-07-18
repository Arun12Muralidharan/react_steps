import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((step) => step - 1);
  }
  function handleNext() {
    if (step < 3) setStep((step) => step + 1);
  }
  function handleClose() {
    setIsVisible((isVisible) => !isVisible);
  }

  return (
    <>
      {/* <button className="close" onClick={handleClose}>
        &times;
      </button> */}
      <Button className={"close"} onClick={handleClose}>
        &times;
      </Button>
      {isVisible && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          {/* <p className="message">
            <h3>Step {step}: </h3>
            {messages[step - 1]}
          </p> */}
          <Message className={"message"}>
            <>
              <h3>Step {step}: </h3>
              {messages[step - 1]}
            </>
          </Message>
          <div className="buttons">
            {/* <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button> */}
            <Button
              backgroundColor={"#7950f2"}
              color={"#fff"}
              onClick={handlePrevious}
            >
              &#60; &nbsp; Previous
            </Button>
            <Button
              backgroundColor={"#7950f2"}
              color={"#fff"}
              onClick={handleNext}
            >
              Next &nbsp; &#62;
            </Button>
            {/* <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button> */}
          </div>
        </div>
      )}
    </>
  );
}

function Button({ backgroundColor, color, onClick, children, className }) {
  return (
    <button
      style={{ backgroundColor: backgroundColor, color: color }}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Message({ children, className }) {
  return <p className={className}>{children}</p>;
}
