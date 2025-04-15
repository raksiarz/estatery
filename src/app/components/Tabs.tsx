'use client'

import { useState } from "react"

export default function Tabs() {
    const [itemSelected, setItemSelected] = useState(0)

    const ButtonComp = () => {
        <div className={`${itemSelected}`}>
            <span className={`text-zinc-200 `}></span>
        </div>
    }

    return (
        <div className="flex gap-5 bg-indigo-100 items-center">
            <div>
                <span className={``}>Houses</span>
            </div>
            <div>
                <span>Apartament</span>
            </div>
        </div>
    )
}