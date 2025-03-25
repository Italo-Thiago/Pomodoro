import Pomodoro from "./components/Pomodoro";
import RandomTask from "./components/RandomTask";
import TaskList from "./components/TaskList";

export default function App() {
    return (
        <>
            <div className="flex sm:flex-row flex-col">
                <Pomodoro />
                <RandomTask />
            </div>
            <div>
                <TaskList />
            </div>
        </>
    );
}
