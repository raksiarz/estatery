interface tabsProps {
    state: boolean
    callback: (data: boolean) => void 
}

export default function Tabs({ state, callback }: tabsProps) {

    return (
        <div className="relative min-w-85 my-4 rounded-md border h-13 lg:max-h-15 bg-zinc-100 text-lg">
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
                className={`bg-white shadow text-lg flex items-center justify-center w-1/2 rounded h-10 top-1 transition-all duration-150 ease-linear absolute ${state
                    ? 'left-3 text-indigo-600 font-semibold'
                    : 'left-1/2 -ml-3 text-indigo-600 font-semibold'
                    }`}
            >
                {state ? 'Houses' : 'Apartaments'}
            </span>
        </div>
    )
}