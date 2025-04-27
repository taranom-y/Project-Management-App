import NewProjects from "./components/NewProjects";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
 const [projectState,setProjectState]= useState (
  {selectedProject : undefined,
    projects:[],
    tasks:[]
  }
 );

 function handleAddTask(text){

  setProjectState((prevState)=>{
    const taskId = Math.random();
     const newTask={
        text :text,
        projectId: prevState.selectedProjectId,
         id: taskId,
     };
     return{
       ...prevState,
       tasks:[newTask,...prevState.tasks ]
     };
   });
   
 }

 function handleDeleteTask(id){
  setProjectState(prevState =>{
    return {
      ...prevState,
      tasks:prevState.tasks.filter((task) => task.id !== id),
    };
   });
 }

 function handleDeleteProject(){
  setProjectState(prevState =>{
    return {
      ...prevState,
      selectedProjectId: undefined,
      projects:prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
    };
   });
 }


 function handleSelectProject(id){
  setProjectState(prevState =>{
    return {
      ...prevState,
      selectedProjectId: id,
    };
   });
 }

 function handleStartAddProject(){
  setProjectState(prevState =>{
   return {
     ...prevState,
     selectedProjectId: null,
   };
  });
}


 function handleCancelAppProject(){
  setProjectState(prevState =>{
    return {
      ...prevState,
      selectedProjectId: undefined,
      
    };
   });
 }



 function handleAddProject(projectData){
    setProjectState((prevState)=>{
     const projectId = Math.random();
      const newProject={
          ...projectData,
          id: projectId,
      };
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects:[...prevState.projects,newProject ]
      };
    });
 }
 const selectedProject = projectState.projects.find((project) => project.id === projectState.selectedProjectId);

 let content =<SelectedProject 
 project={selectedProject} 
 onDelete={handleDeleteProject} 
 onAddTask={handleAddTask}
 onDeleteTask={handleDeleteTask} 
 tasks ={projectState.tasks}/>;

 if(projectState.selectedProjectId === null){
  content = <NewProjects onAdd={handleAddProject} onCancel={handleCancelAppProject}/>;
 } else if(projectState.selectedProjectId === undefined){
  content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
 
 }

  return (
    <main className="h-screen my-8 flex gap-8">
     <ProjectsSidebar 
     onStartAddProject={handleStartAddProject}
     projects ={projectState.projects}
     onSelectProject={handleSelectProject} 
     selectedProjectId={projectState.selectedProjectId}/>
     {content}
    </main>
  );
}

export default App;
