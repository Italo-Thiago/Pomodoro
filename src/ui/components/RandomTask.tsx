import { useState } from "react";
import "../index.css";

export default function RandomTask({ tasklist }: { tasklist: string[] }) {
    const [task, setTask] = useState<string>("");

    const pickRandomTask = () => {
        if (tasklist.length > 0) {
            const selected =
                tasklist[Math.floor(Math.random() * tasklist.length)];
            setTask(selected);
        }
    };

    return (
        <>
            <div className="flex items-center flex-col m-2 p-2 border-3 min-w-72 sm:w-1/2 rounded-xl">
                <div className="flex">
                    <button
                        className="cursor-pointer border-3 m-2 p-2 rounded-xl hover:bg-yellow-300"
                        onClick={pickRandomTask}
                    >
                        Random Task
                    </button>
                </div>
                <div className="flex m-2">
                    <h2 className="text-xl font-bold">{task}</h2>
                </div>
            </div>
        </>
    );
}
