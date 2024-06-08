import Alises from "../App";

type Props = {
    task: Alises;
    compliteTask(taskNameToDelete: string): void;
};

const TodoList = ({ task, compliteTask }: Props) => {
    return (
        <div className="w-1/2 h-auto bg-orange-700 rounded-xl flex justify-center items-center gap-10 m-auto my-8">
            <div className="flex gap-10 text-xl p-5">
                <span>{task.taskName}</span>
                <span>{task.taskDeadline}</span>
            </div>
            <div>
                <button
                    className="p-2 rounded-xl bg-red-700 text-white hover:bg-slate-200 hover:text-red-600"
                    onClick={() => {
                        compliteTask(task.taskName)
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TodoList;
