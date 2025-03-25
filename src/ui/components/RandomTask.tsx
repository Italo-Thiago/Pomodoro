import "../index.css";

export default function RandomTask() {
    return (
        <>
            <div className="flex items-center flex-col m-2 p-2 border-3 min-w-72 sm:w-1/2">
                <div className="flex m-2 p-2 border-3">
                    <button>Random Task</button>
                </div>
                <div className="flex m-2">
                    <h2 className="text-xl font-bold">Nenhuma Atividade</h2>
                </div>
            </div>
        </>
    );
}
