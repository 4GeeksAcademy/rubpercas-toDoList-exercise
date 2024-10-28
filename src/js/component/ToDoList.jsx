import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';


const ToDoList = () => {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  }

  const addTask = () => {
    if(newTask.trim() !== "") {
    setTasks(t => [...tasks, newTask]);
    setNewTask("");
    }
  }

  const deleteTask = (index) => {
    const updateTasks = tasks.filter((_, i) => i !== index);
    setTasks(updateTasks);
  }

  const moveTaskUp = (index) => {
    if(index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] =
      [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  const moveTaskDown = (index) => {
    if(index < tasks.length -1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] =
      [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }



  return (
    <div className="container rounded-2 mt-5 d-flex flex-column align-items-center">
      <div className="row mt-5">
        <h1>TO DO LIST</h1>
      </div>
      <div className="row mt-2">
        <div id="grupo">
          <div className="form-group d-flex">
            <div className="field">
            <input
              type="text"
              placeholder="Add a task"
              value={newTask}
              onChange={handleInputChange}
            />
            <div className="line"></div>
            </div>
            <button
              className="btn btn-primary ms-2"
              onClick={addTask}>
              Add
            </button>
          </div>

        </div>
      </div>
      <ol>
        {tasks.map((task, index) =>
          <li key={index}>
            <span className="text">{task}</span>
            <button
              className="delete-button btn btn-primary ms-2"
              onClick={() => deleteTask(index)}>
              <FontAwesomeIcon icon={faCheck} style={{color: "#ffffff",}} />
            </button>
            <button
              className="move-up-button btn btn-primary ms-2"
              onClick={() => moveTaskUp(index)}>
              <FontAwesomeIcon icon={faCaretUp} style={{color: "#ffffff",}} />
            </button>
            <button
              className="move-down-button btn btn-primary ms-2"
              onClick={() => moveTaskDown(index)}>
              <FontAwesomeIcon icon={faCaretDown} style={{color: "#ffffff",}} />
            </button>
          </li>
        )}
      </ol>
    </div>
  )
}

export default ToDoList;