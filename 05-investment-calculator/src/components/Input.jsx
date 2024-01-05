function Input({ id, label, inputValue, onChange }) {
  function handleChange(event) {
    onChange(id, +event.target.value);
  }

  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input
        required
        type="number"
        id={id}
        name={id}
        min="0"
        value={inputValue}
        onChange={handleChange}
      />
    </p>
  );
}

export default Input;
