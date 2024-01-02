import Input from "./Input";

function UserInput({ userInput, onInputChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          id="initialInvestment"
          label="Initial investment"
          inputValue={userInput.initialInvestment}
          onChange={onInputChange}
        />
        <Input
          id="annualInvestment"
          label="Annual investment"
          inputValue={userInput.annualInvestment}
          onChange={onInputChange}
        />
      </div>
      <div className="input-group">
        <Input
          id="expectedReturn"
          label="Expected return"
          inputValue={userInput.expectedReturn}
          onChange={onInputChange}
        />
        <Input
          id="duration"
          label="Duration"
          inputValue={userInput.duration}
          onChange={onInputChange}
        />
      </div>
    </section>
  );
}

export default UserInput;
