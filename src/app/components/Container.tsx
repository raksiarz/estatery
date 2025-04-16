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
        <div className={`${absolute && "absolute"} flex flex-col rounded-lg bg-white w-90 h-90 lg:w-120 lg:h-120 ${hasBorder && "border-1"} overflow-hidden border-zinc-100 hover:shadow-md transition duration-400 ease shrink-0 ${topPos} ${rightPos} ${leftPos} ${bottomPos}`}>
            <Image src={image || ''} alt='house image' className='object-cover'/>
            <div className='flex flex-col pl-5 pt-7 lg:pl-8 lg:pt-12 lg:pb-3 text-left gap-2 lg:gap-3'>
                <div className='flex'>
                    <span className='text-indigo-400 font-bold text-3xl lg:text-4xl mr-1'>${price}</span>
                    <span className='text-zinc-400 lg:text-xl text-xl font-normal mt-2 lg:mt-3'>/month</span>
                </div>
                <h3 className='text-black font-bold lg:text-3xl text-2xl'>{name}</h3>
                <span className='text-zinc-400 lg:text-xl text-lg font-normal'>{description}</span>
            </div>
        </div>
    )
}