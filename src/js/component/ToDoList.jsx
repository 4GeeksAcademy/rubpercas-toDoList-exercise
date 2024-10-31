import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCaretUp, faCaretDown, faPlus } from '@fortawesome/free-solid-svg-icons';


const ToDoList = () => {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
    setNewTask(capitalizedValue);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTask();
      setNewTask('');
    }
  };

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
    <div className="container rounded-2 mt-5 mb-0 d-flex flex-column align-items-center">
      <div>
        <div className="row mt-1 mb-0 ms-0 me-0 p-0 text-center">
          <h1 className="gaegu-regular p-0">TO DO LIST</h1>
        </div>
        <div className="row">
          <div className="form-group d-flex p-0">
            <div className="field p-0">
              <input
                className="gaegu-regular p-0"
                type="text"
                placeholder="Add a task..."
                value={newTask}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
              <div className="line mt-0 "></div>
            </div>
            <p
              className="option mt-auto"
              onClick={addTask}>
              <FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff", }} />
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center mt-3 w-75">
        {tasks.length === 0 ? (
          <h2 className="mt-3 gaegu-regular">You don't have any task left.</h2>
        ) : (
          <ol>
            <div>
              {tasks.map((task, index) =>
                <li key={index} onMouseEnter={() => { setHoveredIndex(index) }} onMouseLeave={() => { setHoveredIndex(null) }}>
                  <div className="d-flex">
                    <div className="task-content">
                      <span className="text me-5 gaegu-regular">{task}</span>
                    </div>
                    <div className={`button-group d-flex flex-grow-0 ms-auto mt-1 ${hoveredIndex === index ? '' : 'hidden'}`}>
                      <p
                        className="option ms-3"
                        onClick={() => deleteTask(index)}>
                        <FontAwesomeIcon icon={faCheck} style={{ color: "#ffffff", }} />
                      </p>
                      <div className="d-flex flex-column ms-3"></div>
                      <p
                        className="option"
                        onClick={() => moveTaskUp(index)}>
                        <FontAwesomeIcon icon={faCaretUp} style={{ color: "#ffffff", }} />
                      </p>
                      <p
                        className="option ms-3"
                        onClick={() => moveTaskDown(index)}>
                        <FontAwesomeIcon icon={faCaretDown} style={{ color: "#ffffff", }} />
                      </p>
                    </div>
                  </div>
                </li>
              )}
            </div>
          </ol>
          )}
      </div>
      <div className="tasks-counter align-content-end">
        <p>{tasks.length === 0
          ? 'Congrats! Enjoy your free time!'
          : `You have ${tasks.length} task(s) left`
        }</p>
      </div>
    </div>
  )
}

export default ToDoList;