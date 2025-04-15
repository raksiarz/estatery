interface ButtonProps {
    disabled?: boolean
    secondary?: boolean
    text: string
}

export default function Button({ disabled, secondary, text }: ButtonProps) {
    return (
        <button 
            type="button" 
            className={`text-white text-[16px] bg-blue-700 ${secondary && "bg-white border-1 border-blue-700 text-black"} hover:bg-blue-800 rounded-lg focus:ring-4 focus:ring-blue-300 px-[34px] py-[12px]`}
        >{text}</button>
    )
}