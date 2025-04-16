import Image, { StaticImageData } from 'next/image'

interface ContainerProps {
    tag?: boolean
    top?: number
    right?: number
    left?: number
    bottom?: number
    absolute?: boolean
    hasBorder?: boolean
    price: string
    name: string
    description: string
    image: StaticImageData
}

export default function Container({ price, name, description, image, tag, hasBorder, absolute, top, right, left, bottom }: ContainerProps) {
    console.log('test', top, right, left, bottom)
    const topPos = top !== undefined ? 'top-' + top : 'top-none'
    const rightPos = right !== undefined ? 'right-' + right : 'right-none'
    const leftPos = left !== undefined ? 'left-' + left : 'left-none'
    const bottomPos = bottom !== undefined ? 'bottom-' + bottom : 'bottom-none'
    console.log('element pos: ', topPos, rightPos, leftPos, bottomPos)
    return (
        <div className={`${absolute && "absolute"} flex flex-col rounded-lg bg-white w-75 h-75 ${hasBorder && "border-1"} overflow-hidden border-zinc-100 hover:shadow-md transition duration-400 ease shrink-0 ${topPos} ${rightPos} ${leftPos} ${bottomPos}`}>
            <Image src={image || ''} alt='house image' className='object-cover'/>
            <div className='flex flex-col px-2 pt-3 pb-1 lg:px-4 lg:pt-5 lg:pb-3 text-left'>
                <div className='flex'>
                    <span className='text-indigo-400 font-bold lg:text-lg text-base mr-1'>${price}</span>
                    <span className='text-zinc-400 pt-1 lg:text-sm text-xs font-normal'>/month</span>
                </div>
                <h3 className='text-black font-bold lg:text-lg text-base'>{name}</h3>
                <span className='text-zinc-400 lg:text-sm text-xs font-normal'>{description}</span>
            </div>
        </div>
    )
}