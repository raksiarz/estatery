interface ButtonProps {
    disabled?: boolean
    secondary?: boolean
    text: string
}

export default function Button({ disabled, secondary, text }: ButtonProps) {
    return (
        <button 
            type="button" 
            className={`text-white font-semibold text-[16px] bg-indigo-500 hover:bg-indigo-400 rounded-lg focus:bg-indigo-600 focus:ring-indigo-300 px-12 py-3 cursor-pointer
                ${secondary && "bg-transparent border-2 border-zinc-200 text-zinc-800 hover:border-indigo-400 hover:bg-transparent focus:bg-transparent focus:text-indigo-500"}
                ${secondary && disabled && "bg-white border-2 border-zinc-200 text-zinc-200"}
                ${disabled && "bg-zinc-200"}
            `}
        >{text}</button>
    )
}