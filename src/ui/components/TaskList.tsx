import { Trash } from "lucide-react";
import { useState } from "react";
import "../index.css";

interface TaskListProps {
    tasks: string[];
    onAddTask: (newTask: string) => void;
    onRemoveTask: (task: string) => void;
}

export default function TaskList({
    tasks,
    onAddTask,
    onRemoveTask,
}: TaskListProps) {
    const [inputText, setInputText] = useState("");

    function handleAddItem() {
        if (inputText.trim() !== "") {
            onAddTask(inputText);
            setInputText("");
        }
    }

    return (
        <>
            <div className="flex flex-col m-2 p-2 border-3 min-w-72 rounded-xl">
                <div className="flex flex-rol justify-between">
                    <input
                        className="border-b-2 me-4 m-2 w-full"
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleAddItem();
                            }
                        }}
                    />

                    <button
                        className="p-2 border-3 cursor-pointer rounded-xl hover:bg-green-500"
                        onClick={handleAddItem}
                    >
                        Add
                    </button>
                </div>
                <div className="m-2">
                    <ul className="">
                        {tasks.map((item, i) => (
                            <li className="flex justify-between p-1" key={i}>
                                {item}{" "}
                                <button
                                    onClick={() => onRemoveTask(item)}
                                    className="cursor-pointer"
                                >
                                    <Trash />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
