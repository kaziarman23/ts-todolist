import { ChangeEvent, useState } from "react";
import TodoList from "./components/TodoList";


function App() {
    const [task, setTask] = useState<string>("");
    const [deadline, setDeadline] = useState<number>();
    const [store, setStore] = useState<Alises[]>([]);

    type Alises = {
        taskName: string;
        taskDeadline: number;
    };
    // to use event in ts we have to import ChangeEvent in the peremiter and also have to define gard type
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task") {
            setTask(event.target.value);
        } else {
            setDeadline(Number(event.target.value));
        }
    };

    const addTask = (): void => {
        const newTask = {
            taskName: task,
            taskDeadline: deadline,
        };
        setStore([...store, newTask]);
        setTask("");
        setDeadline(0);
    };

    const compliteTask = (taskNameToDelete: string):void => {
      setStore(store.filter((task) => {
        return task.taskName != taskNameToDelete
      }))
    }

    return (
        <>
            <div>
                <div className="upperDiv  bg-orange-600 text-black ">
                  <h1 className="w-full text-center p-5">TypeScript Todo List</h1>
                    <div className="w-full h-40 gap-3 flex justify-center items-center flex-col">
                        <input
                            type="text"
                            name="task"
                            placeholder="Enter yor'r Todo"
                            className="p-5 w-30 h-10"
                            value={task}
                            onChange={handleChange}
                        />

                        <input
                            type="number"
                            name="deadline"
                            placeholder="You'r deadline is..."
                            className="p-5 w-30 h-10"
                            value={deadline}
                            onChange={handleChange}
                        />
                        <button
                            onClick={addTask}
                            className="p-2 bg-orange-400 hover:bg-orange-800 rounded-xl text-black"
                        >
                            Add
                        </button>
                    </div>
                </div>
                <div className="lowerDiv">
                  {store.map((task: Alises, key: number) => {
                    return <TodoList task={task} key={key} compliteTask={compliteTask}/>
                  })}
                </div>
            </div>
        </>
    );
}


export default App;
