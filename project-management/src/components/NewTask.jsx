import { useState } from "react";

function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex gap-4 mb-6 items-center">
      <input
        type="text"
        value={enteredTask}
        onChange={handleChange}
        className="px-1 py-1 w-[25rem] bg-stone-200 rounded-sm border-b-2 border-stone-400 focus:border-stone-600 focus:outline-none"
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}

export default NewTask;
