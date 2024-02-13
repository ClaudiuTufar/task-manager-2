//import { createContext } from "react";
import "./App.css";
import ContainerBox from "./Components/ContainerBox/ContainerBox";
//export const TaskManagerContext = createContext();
import {TaskProvider} from "./context/TaskContext";

function App() {
  //const name = "Clau";
  //const array = [1, 2, 3];

  return (
    //<TaskManagerContext.Provider value={{array, name}}>
    <TaskProvider>
    <div className="App">
      <ContainerBox />
    </div>
    </TaskProvider>
    //</TaskManagerContext.Provider>
  );
}

export default App;
