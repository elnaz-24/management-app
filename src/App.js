import { useState } from "react";
import "./App.css";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import "./input.css";
import NewProject from "./components/NewProject";

function App() {
  const [ProjectsState, SetProjectsState] = useState({
    SelectedProjectId: undefined,
    projects: [],
  });

  function handelStartAddProjet() {
    SetProjectsState((prevState) => {
      return {
        ...prevState,
        SelectedProjectId: null,
      };
    });
  }

  let content;
  if (ProjectsState.SelectedProjectId === null) {
    content = <NewProject />;
  } else if (ProjectsState.SelectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handelStartAddProjet} />;
  }

  return (
    <main className="h-screen my-8 bg-slate-100 flex gap-8">
      <ProjectsSidebar onStartAddProject={handelStartAddProjet} />
      {/* <NoProjectSelected onStartAddProject={handelStartAddProjet} /> */}
      {content}
    </main>
  );
}

export default App;
