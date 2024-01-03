import { useState } from "react";
import NoProjects from "./components/NoProjects";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleSaveNewProject(newProject) {
    setProjectsState((prevProjectsState) => {
      return {
        selectedProjectId: undefined,
        projects: [...prevProjectsState.projects, newProject],
      };
    });

    console.log(projectsState);
  }

  function handleDeleteProject() {
    setProjectsState((prevProjectsState) => {
      return {
        selectedProjectId: undefined,
        projects: prevProjectsState.projects.filter(
          (p) => p.id !== prevProjectsState.selectedProjectId
        ),
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectProject(projectId) {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: projectId,
      };
    });
  }

  function handleAddTask(taskText) {
    const newTask = {
      id: Math.random(),
      text: taskText,
    };

    setProjectsState((prevProjectsState) => {
      const projectSt = {
        ...prevProjectsState,
      };

      const project = projectSt.projects.find(
        (p) => p.id == prevProjectsState.selectedProjectId
      );
      project.tasks = [...project.tasks, newTask];

      return projectSt;
    });
  }

  function handleDeleteTask(taskId) {
    setProjectsState((prevProjectsState) => {
      const projectSt = {
        ...prevProjectsState,
      };

      const project = projectSt.projects.find(
        (p) => p.id == prevProjectsState.selectedProjectId
      );
      project.tasks = [...project.tasks.filter((t) => t.id !== taskId)];

      return projectSt;
    });
  }

  let content;
  switch (projectsState.selectedProjectId) {
    case undefined:
      content = <NoProjects onStartAdd={handleStartAddProject} />;
      break;
    case null:
      content = (
        <NewProject
          onSave={handleSaveNewProject}
          onCancel={handleCancelAddProject}
        />
      );
      break;
    default:
      const selectedProject = projectsState.projects.find(
        (x) => x.id === projectsState.selectedProjectId
      );
      content = (
        <ProjectDetails
          project={selectedProject}
          onDelete={handleDeleteProject}
          onTaskAdd={handleAddTask}
          onTaskDelete={handleDeleteTask}
        />
      );
  }

  return (
    <main className="h-screen flex gap-8 mt-8">
      <Sidebar
        projects={projectsState.projects}
        selectedProject={projectsState.selectedProjectId}
        onStartAdd={handleStartAddProject}
        onSelect={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
