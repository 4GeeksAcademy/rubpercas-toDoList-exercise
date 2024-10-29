import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCaretUp, faCaretDown, faPlus } from '@fortawesome/free-solid-svg-icons';


const ToDoList = () => {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  }

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks(t => [...tasks, newTask]);
      setNewTask("");
    }
  }

  const deleteTask = (index) => {
    const updateTasks = tasks.filter((_, i) => i !== index);
    setTasks(updateTasks);
  }

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] =
        [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] =
        [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }



  return (
    <div className="container rounded-2 mt-5 d-flex flex-column align-items-center">
      <div>
        <div className="row mt-5 text-center">
          <h1>TO DO LIST</h1>
        </div>
        <div className="row mt-2">
          <div className="form-group d-flex">
            <div className="field">
              <input
                type="text"
                placeholder="Add a task..."
                value={newTask}
                onChange={handleInputChange}
              />
              <div className="line mt-0"></div>
            </div>
            <button
              className="btn btn-outline-dark m-0 border-white"
              onClick={addTask}>
              <FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff", }} />
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center mt-4">
        <ol>
          {tasks.map((task, index) =>
            <li key={index}>
              <div className="d-flex">
                <div>
                  <span className="text">{task}</span>
                </div>
                <div className="d-flex flex-grow-0 ms-auto">
                  <button
                    className="delete-button btn btn-primary ms-2"
                    onClick={() => deleteTask(index)}>
                    <FontAwesomeIcon icon={faCheck} style={{ color: "#ffffff", }} />
                  </button>
                  <button
                    className="move-up-button btn btn-primary ms-2"
                    onClick={() => moveTaskUp(index)}>
                    <FontAwesomeIcon icon={faCaretUp} style={{ color: "#ffffff", }} />
                  </button>
                  <button
                    className="move-down-button btn btn-primary ms-2"
                    onClick={() => moveTaskDown(index)}>
                    <FontAwesomeIcon icon={faCaretDown} style={{ color: "#ffffff", }} />
                  </button>
                </div>
              </div>
            </li>
          )}
        </ol>
      </div>
    </div>
  )
}

export default ToDoList;