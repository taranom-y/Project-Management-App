import NewProjects from "./components/NewProjects";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
function App() {
 const [projectState,setProjectState]= useState (
  {selectedProject : undefined,
    projects:[]
  }
 );

 function handleStartAddProject(){
   setProjectState(prevState =>{
    return {
      ...prevState,
      selectedProjectId: null,
    };
   });
 }


 function handleAddProject(projectData){
    setProjectState(prevState=>{
      const newProject={
          ...projectData,
          id:Math.random()
      }
      return{
        ...prevState,
        projects:[...prevState.projects,newProject ]
      };
    });
 }

 let content;

 if(projectState.selectedProjectId === null){
  content = <NewProjects onAdd={handleAddProject}/>

 }
 else if(projectState.selectedProjectId === undefined){
  content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
 
 }

  return (
    <main className="h-screen my-8 flex gap-8">
     <ProjectsSidebar onStartAddProject={handleStartAddProject}/>
     {content}
    </main>
  );
}

export default App;
