import { Coffee, Flame, Plus, Minus } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import "../index.css";
import belt from "./belt.mp3";

export default function Pomodoro() {
    const [timeLeft, setTimeLeft] = useState(60 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const bellSound = useMemo(() => new Audio(belt), []);

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;

        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsRunning(false);
            bellSound
                .play()
                .catch((error) => console.log("Error playing sound:", error));
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isRunning, timeLeft, bellSound]);

    const formatTime = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
            .toString()
            .padStart(2, "0")}`;
    };

    const handleStartStop = () => {
        setIsRunning(!isRunning);
    };

    const handleFlame = () => {
        setIsRunning(false);
        setTimeLeft(60 * 60);
    };

    const handleCoffee = () => {
        setIsRunning(false);
        setTimeLeft(30 * 60);
    };

    const handlePlus = () => {
        setTimeLeft((prevtime) => prevtime + 60);
    };

    const handleMinus = () => {
        if (timeLeft > 0) setTimeLeft((prevtime) => prevtime - 60);
    };

    return (
        <>
            <div className="flex flex-col border-3 m-2 min-w-72 sm:w-1/2 rounded-xl">
                <div className="flex flex-rol justify-between">
                    <button
                        onClick={handleFlame}
                        className="m-2 p-2 border-3 rounded-full cursor-pointer"
                    >
                        <Flame className="hover:fill-red-700" />
                    </button>
                    <button
                        className="m-2 p-2 border-3 rounded-full cursor-pointer"
                        onClick={handlePlus}
                    >
                        <Plus />
                    </button>
                    <button
                        className="m-2 p-2 border-3 rounded-full cursor-pointer"
                        onClick={handleMinus}
                    >
                        <Minus />
                    </button>
                    <button
                        onClick={handleCoffee}
                        className="m-2 p-2 border-3 rounded-full cursor-pointer"
                    >
                        <Coffee className="hover:fill-teal-600" />
                    </button>
                </div>
                <div className="flex place-self-center justify-center m-4">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl">
                        {formatTime(timeLeft)}
                    </h1>
                </div>
                <div className="flex justify-center">
                    <button
                        onClick={handleStartStop}
                        className="m-2 p-2 border-3 min-w-1/12 cursor-pointer rounded-xl hover:bg-indigo-600 hover:text-white hover:shadow-red-500 hover:shadow-2xl"
                    >
                        {isRunning ? "Stop" : "Start"}
                    </button>
                </div>
            </div>
        </>
    );
}

{
    /* <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]">
    Click me
</button>; */
}
