import TaskCard from "../TaskCard/TaskCard";
import NoTasks from "../NoTasks/NoTasks";
import "./ContainerBox.css";
import ControlPanel from "../ControlPanel/ControlPanel";
import { useTaskContext } from "../../context/TaskContext";

const ContainerBox = () => {
  const {taskList, setTaskList, selectedStatus} = useTaskContext();

  const onAddTask = (newTask) => {
    setTaskList([
      ...taskList,
      {
        ...newTask,
        status: "Todo",
      },
    ]);
  };

  //task = {
  //name: "",
  //dueDate: "",
  //description: "",
  //status: "todo"
  //}

  //Scriere filtrare mod1:
  const displayTasksByStatus = () => {
    if(selectedStatus === "All Tasks"){
        return taskList;
    }
    let filterList = taskList.filter((task)=>task.status === selectedStatus);
    return filterList;
};

const list = displayTasksByStatus();

//Scriere filtrare mod2:
const displayTaskList = taskList.filter((task)=>{
  if(selectedStatus === "All Tasks"){
    return true; //toate elementele din array au trecut de filtrare
  }
  return task.status === selectedStatus; //face verificarea si returneaza un array.
})

  return (
    <div className="container-box">
      <ControlPanel onAddTask= {onAddTask}/>
      <div className="d-flex">

        {/* randare conditionala */}
        {taskList.length > 0 ? (
          <div className="tasks">
          {displayTaskList.map((task, index) => (
            <TaskCard
              key={index}
              name={task.taskName}
              status={task.status}
              desc={task.taskDescription}
              date={task.taskDate}
            />
          ))}
        </div>
        ): (
          <>
          <NoTasks />
          </>
        )};

        
        {/* <CreateTaskForm addTask={onAddTask} /> */}
      </div>
    </div>
  );
};

export default ContainerBox;
