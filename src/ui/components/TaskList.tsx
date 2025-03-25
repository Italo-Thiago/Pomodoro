import { useState } from "react";
import "../index.css";
import { Trash } from "lucide-react";

export default function TaskList() {
    const [itemList, setItemList] = useState<string[]>([]);
    const [inputText, setInputText] = useState("");

    function handleAddItem() {
        if (inputText != "") {
            setItemList([...itemList, inputText]);
            setInputText("");
        }
    }

    function handleRemoveItem(item: string) {
        setItemList((prevList) => prevList.filter((list) => list != item));
    }

    return (
        <>
            <div className="flex flex-col m-2 p-2 border-3 min-w-72">
                <div className="flex flex-rol justify-between">
                    <input
                        className="border-b-2 me-4 m-2 w-full"
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />

                    <button
                        className="p-2 border-3 cursor-pointer"
                        onClick={handleAddItem}
                    >
                        Add
                    </button>
                </div>
                <div className="m-2">
                    <ul className="">
                        {itemList.map((item, i) => (
                            <li className="flex justify-between p-1" key={i}>
                                {item}{" "}
                                <button onClick={() => handleRemoveItem(item)}>
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
