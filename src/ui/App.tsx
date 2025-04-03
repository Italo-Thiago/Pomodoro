import { useState } from "react";
import Pomodoro from "./components/Pomodoro";
import RandomTask from "./components/RandomTask";
import TaskList from "./components/TaskList";

export default function App() {
    const [tasks, setTasks] = useState<string[]>([]);

    const handleAddTask = (newTask: string) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const handleRemoveTask = (taskToRemove: string) => {
        setTasks((prevTasks) =>
            prevTasks.filter((task) => task !== taskToRemove)
        );
    };

    return (
        <>
            <div className="flex sm:flex-row flex-col">
                <Pomodoro />
                <RandomTask tasklist={tasks} />
            </div>
            <div>
                <TaskList
                    tasks={tasks}
                    onAddTask={handleAddTask}
                    onRemoveTask={handleRemoveTask}
                />
            </div>
        </>
    );
}
