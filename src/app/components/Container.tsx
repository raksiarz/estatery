import Image, { StaticImageData } from 'next/image'
import LikeIcon from './LikeIcon'

interface ContainerProps {
    tag?: boolean
    hasBorder?: boolean
    small?: boolean
    shadow?: boolean
    price: string
    name: string
    description: string
    image: StaticImageData
}

export default function Container({ price, name, description, image, tag, small, shadow, hasBorder }: ContainerProps) {
    return (
        <div className={`relative flex flex-col rounded-lg bg-white w-60 h-60 lg:w-100 lg:h-100 xl:w-120 xl:h-120 overflow-hidden border-zinc-100 hover:shadow-md transition duration-400 ease shrink-0
            ${hasBorder && "border-1"}
            ${shadow && "shadow-xl shadow-zinc-200"}
            ${small && "scale-75 lg:scale-100"}
        `}>
            <Image src={image || ''} alt='house image' className='object-cover'/>
            <div className='flex flex-col pl-5 pt-4 lg:pl-8 lg:pt-10 lg:pb-3 text-left lg:gap-2'>
                <div className='flex'>
                    <span className='text-indigo-400 font-bold text-xl lg:text-4xl mr-1'>${price}</span>
                    <span className='text-zinc-400 lg:text-base text-medium font-normal mt-1 lg:mt-3'>/month</span>
                </div>
                <h3 className='text-black font-bold lg:text-xl text-lg'>{name}</h3>
                <span className='text-zinc-400 lg:text-lg text-base font-normal'>{description}</span>
            </div>
            <div className='absolute bottom-[15%] right-[3%] lg:bottom-[20%] lg:right-[15%]'>
                <LikeIcon />
            </div>
        </div>
    )
}