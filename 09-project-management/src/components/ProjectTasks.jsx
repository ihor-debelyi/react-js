import NewTask from "./NewTask";
import Task from "./Task";

function ProjectTasks({ project, onAdd, onDelete }) {
  return (
    <>
      <h2 className="text-2xl font-bold text-stone-700 mb-4 mt-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      <div className="p-4 mt-8 bg-stone-100 rounded-md">
        {project.tasks.length === 0 ? (
          <p className="text-stone-800 mb-4">No tasks yet.</p>
        ) : (
          project.tasks.map((t) => (
            <Task key={t.id} task={t.text} onDelete={() => onDelete(t.id)} />
          ))
        )}
      </div>
    </>
  );
}

export default ProjectTasks;
