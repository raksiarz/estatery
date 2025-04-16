'use client'

import { useState } from "react"
import { HeartIcon } from "@heroicons/react/24/outline"

export default function LikeIcon() {
    const [isLiked, setIsLiked] = useState(false)

    return (
        <div className={`rounded-full border-zinc-200 border-2 p-2 hover:shadow-lg hover:shadow-indigo-400/30 hover:border-indigo-400 focus:border-indigo-400 focus:bg-indigo-100 cursor-pointer transition-all duration-300
            ${isLiked && "bg-indigo-400 border-indigo-400"}
        `}
            onClick={() => setIsLiked(!isLiked)}
        >
            <HeartIcon className={`size-6 text-indigo-400 ${isLiked && "text-white"}`}/>
        </div>
    )
}