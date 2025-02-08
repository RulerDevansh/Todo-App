import "./Todo.css";
import { useState } from "react";

export default function Todo() {
    //Using array to store tasks
    let [tasks, setTasks] = useState(["Task 1", "Task 2"]);
    console.log(tasks);

    //Adding a task
    function addTask(e) {
        if (e.key === "Enter" && e.type==="keyup"| e.type === "click") {
            const input = document.getElementById("input");
            const task = input.value;
            if (task) {
                setTasks([...tasks, task]);
                input.value = "";
            }
        }

    }
    //Deleting a task
    function delTask(e) {
        setTasks(tasks.filter(x => x !== e.target.value));
        // filter() returns a new array withot the deleted task
    }

    return (
        <div>
            <div className="container">
                <div className="task">
                    <input id="input" type="text" placeholder="Enter Your Task" onKeyUp={addTask} />
                    <button id="Add" onClick={addTask}>Add</button>
                </div> 
                <div className="task-list">
                    <ol id="list">
                        {
                            tasks.map( (task, index) => {
                                return <li id="listItem" key={index}> <div>{task}<button value={task} id="del" onClick={delTask}>del</button></div> </li>
                            } )
                        }
                    </ol>
                </div>
            </div>

        </div>
    );
}