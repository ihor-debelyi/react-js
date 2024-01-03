import noProjects from "../assets/no-projects.png";
import Button from "./Button";

function NoProjects({ onStartAdd }) {
  return (
    <div className="mt-24 w-2/3 text-center">
      <img
        src={noProjects}
        alt=""
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <Button onClick={onStartAdd}>Create new project</Button>
    </div>
  );
}

export default NoProjects;
