import { useState } from "react";
import ResultTable from "./components/ResultTable";
import UserInput from "./components/UserInput";
import { calculateInvestmentResults } from "./util/investment";

const USER_INPUT = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(USER_INPUT);

  function handleInputChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return { ...prevInput, [inputIdentifier]: newValue };
    });
  }

  const inputIsValid = userInput.duration > 0;

  return (
    <main>
      <UserInput onInputChange={handleInputChange} userInput={userInput} />
      {inputIsValid && <ResultTable userInput={userInput} />}
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than 0</p>
      )}
    </main>
  );
}

export default App;
