
import { useState } from "react";
import "./App.css";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import "./input.css";
import NewProject from "./components/NewProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProjet() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  //154
  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        // id: Math.random(),
        id: projectId,
      };
      return {
        ...prevState,
        //with  push save buttom return to first page
        selectedProjectId: undefined,
        // selectedProjectId: projectId,

        projects: [...prevState.projects, newProject],
      };
    });
  }
  // console.log(projectsState);

  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProjet} />;
  }

  return (
    <main className="h-screen my-8 bg-slate-100 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProjet}
        projects={projectsState.projects} //add data to sidebar
      />
      {/* <NoProjectSelected onStartAddProject={handelStartAddProjet} /> */}
      {content}
    </main>
  );
}

export default App;
