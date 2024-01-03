import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function NewProject({ onSave, onCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();
  const modalRef = useRef();

  function handleSave() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const date = dateRef.current.value;

    if (
      title.trim() === "" ||
      description.trim() === "" ||
      date.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }

    const project = {
      id: Math.random(),
      title: title,
      description: description,
      date: date,
      tasks: [],
    };

    onSave(project);
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <div className="flex gap-4 justify-end items-center my-4">
          <button
            onClick={onCancel}
            className="px-6 py-2 text-stone-700 hover:text-stone-950 hover:font-bold rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-700 hover:text-stone-200 rounded-md"
          >
            Save
          </button>
        </div>

        <Input ref={titleRef} label="Title" type="text" />
        <Input ref={descriptionRef} label="Description" isTextArea />
        <Input ref={dateRef} label="Due date" type="date" />
      </div>
    </>
  );
}

export default NewProject;
