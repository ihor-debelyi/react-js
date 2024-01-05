import Button from "./Button";

function Sidebar({ projects, onStartAdd, onSelect, selectedProject }) {
  return (
    <aside className="w-1/3 bg-stone-900 text-stone-50 px-8 py-16 rounded-r-xl md:w-72">
      <h2 className=" mb-8 uppercase md:text-2xl font-bold text-stone-200">
        Your projects
      </h2>
      <Button onClick={onStartAdd}>+ Add Project</Button>
      <ul className="mt-8">
        {projects.map((p) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          if (p.id === selectedProject) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-300 ";
          }

          return (
            <li key={p.id}>
              <button onClick={() => onSelect(p.id)} className={cssClasses}>
                {p.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
