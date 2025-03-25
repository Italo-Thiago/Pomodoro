import { Coffee, Flame } from "lucide-react";
import "../index.css";

export default function Pomodoro() {
    return (
        <>
            <div className="flex flex-col border-3 m-2 min-w-72 sm:w-1/2">
                <div className="flex flex-rol justify-between">
                    <button className="m-2 p-2 border-3 rounded-full cursor-pointer">
                        <Flame />
                    </button>
                    <button className="m-2 p-2 border-3 rounded-full cursor-pointer">
                        <Coffee />
                    </button>
                </div>
                <div className="flex place-self-center justify-center border-3 w-64 h-64 rounded-full m-4">
                    <h1 className="flex items-center text-6xl">25:00</h1>
                </div>
                <div className="flex justify-center">
                    <button className="m-2 p-2 border-3 min-w-1/12 cursor-pointer">
                        Start
                    </button>
                </div>
            </div>
        </>
    );
}
