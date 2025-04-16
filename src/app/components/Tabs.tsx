'use client'

import { useState } from "react"

export default function Tabs() {
    const [tabState, setTabState] = useState(false) 

    return (
        <div className="relative w-full mt-4 rounded-md border h-15 p-1 bg-zinc-100 text-lg">
            <div className="relative w-full h-full flex items-center">
                <div
                    onClick={() => setTabState(true)}
                    className="w-full flex justify-center text-gray-400 cursor-pointer"
                >
                    <button>Houses</button>
                </div>
                <div
                    onClick={() => setTabState(false)}
                    className="w-full flex justify-center text-gray-400 cursor-pointer"
                >
                    <button>Apartaments</button>
                </div>
            </div>

            <span
                className={`bg-white shadow text-lg flex items-center justify-center w-1/2 rounded h-11 transition-all duration-150 ease-linear top-2 absolute ${tabState
                    ? 'left-1 text-indigo-600 font-semibold'
                    : 'left-1/2 -ml-1 text-indigo-600 font-semibold'
                    }`}
            >
                {tabState ? 'Houses' : 'Apartaments'}
            </span>
        </div>
    )
}