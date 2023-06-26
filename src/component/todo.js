import React, { useState } from 'react';

function TodoComponent(){
  // Component logic and JSX here
  const [inputs,setInput] = useState([]);
  const [taskName,setTaskName] = useState("");
  const [completedVisible, setCompleteVisible] = useState(false);
  console.log("🚀🚀🚀🚀🚀 ~ TodoComponent ~ completedVisible:", completedVisible)



  function createTask(){
    const newTask = {"taskName" : taskName,"completed":false};
    inputs.push(newTask)
    setInput([...inputs]);
    console.log(inputs);
  }

  function deleteTask(index){
    console.log("DELETING" + index);
    const newTasks = [...inputs];
    newTasks.splice(index, 1);
    setInput(newTasks);
    console.log(inputs);
  }

  function completeTask(index){
    console.log("Completing" + index);
    const newTasks = [...inputs];
    newTasks[index].completed = true;
    setInput(newTasks);
    console.log(inputs);
  }


  
  return (
    <>
    <div>
        <input onChange={e => setTaskName(e.target.value)} />
        <button onClick={createTask}>Add Task</button>
    </div>
    <div>
        <label>Show Completed?</label>
        <input type="checkbox" onClick={e => setCompleteVisible(e.target.checked)}/>
    </div>
    <div>
      <table>
        {
          inputs.map((task, index) => {
            return((!task.completed || completedVisible ) &&
              <tr key={index} data={task}>
                <td>{task.taskName}</td>
                <button onClick={()=>{completeTask(index)}}>Mark as Complete</button>
                <button onClick={()=>{deleteTask(index)}}>Delete</button>
              </tr>
            )

        })

        } 
        
      </table>
    </div>
    </>

  );
};

export default TodoComponent;