interface ButtonProps {
    disabled?: boolean
    secondary?: boolean
    text: string
}

export default function Button({ disabled, secondary, text }: ButtonProps) {
    return (
        <button 
            type="button" 
            className={`text-white font-semibold text-[16px] bg-blue-700 hover:bg-blue-800 rounded-lg focus:ring-4 focus:ring-blue-300 px-[34px] py-[12px]
                ${secondary && "bg-white border-2 border-zinc-200 text-zinc-800"}
                ${secondary && disabled && "bg-white border-2 border-zinc-200 text-zinc-200"}
                ${disabled && "bg-zinc-200"}
            `}
        >{text}</button>
    )
}