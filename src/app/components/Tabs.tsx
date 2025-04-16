interface tabsProps {
    state: boolean
    callback: (data: boolean) => void 
}

export default function Tabs({ state, callback }: tabsProps) {

    return (
        <div className="relative min-w-95 mt-4 rounded-md border h-15 p-1 bg-zinc-100 text-lg">
            <div className="relative w-full h-full flex items-center">
                <div
                    onClick={() => callback(true)}
                    className="w-full flex justify-center text-gray-400 cursor-pointer"
                >
                    <button className="cursor-pointer">Houses</button>
                </div>
                <div
                    onClick={() => callback(false)}
                    className="w-full flex justify-center text-gray-400 cursor-pointer"
                >
                    <button className="cursor-pointer">Apartaments</button>
                </div>
            </div>

            <span
                className={`bg-white shadow text-lg flex items-center justify-center w-1/2 rounded h-11 transition-all duration-150 ease-linear top-2 absolute ${state
                    ? 'left-3 text-indigo-600 font-semibold'
                    : 'left-1/2 -ml-3 text-indigo-600 font-semibold'
                    }`}
            >
                {state ? 'Houses' : 'Apartaments'}
            </span>
        </div>
    )
}