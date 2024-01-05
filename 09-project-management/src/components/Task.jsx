function Task({ task, onDelete }) {
  return (
    <div className="flex justify-between">
      <p>{task}</p>
      <button className="text-stone-700 hover:text-red-500" onClick={onDelete}>
        Clear
      </button>
    </div>
  );
}

export default Task;
