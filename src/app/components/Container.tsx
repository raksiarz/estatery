import Image from 'next/image'
import houseImage from '../../public/images/house.png'

interface ContainerProps {
    tag?: boolean
    top?: number
    right?: number
    left?: number
    bottom?: number
}

export default function Container({ tag, top, right, left, bottom }: ContainerProps) {
    console.log('test', top, right, left, bottom)
    const topPos = top !== undefined ? 'top-' + top : 'top-none'
    const rightPos = right !== undefined ? 'right-' + right : 'right-none'
    const leftPos = left !== undefined ? 'left-' + left : 'left-none'
    const bottomPos = bottom !== undefined ? 'bottom-' + bottom : 'bottom-none'
    console.log('element pos: ', topPos, rightPos, leftPos, bottomPos)
    return (
        <div className={`absolute flex flex-col rounded-lg bg-white w-55 h-55 lg:w-70 lg:h-70 hover:shadow-md transition duration-400 ease ${topPos} ${rightPos} ${leftPos} ${bottomPos}`}>
            <Image src={houseImage} alt='house image' className='object-cover'/>
            <div className='flex flex-col px-2 pt-3 pb-1 lg:px-4 lg:pt-5 lg:pb-3 text-left'>
                <div className='flex'>
                    <span className='text-indigo-400 font-bold lg:text-lg text-base mr-1'>$3,440</span>
                    <span className='text-zinc-400 pt-1 lg:text-sm text-xs font-normal'>/month</span>
                </div>
                <h3 className='text-black font-bold lg:text-lg text-base'>Palm Harbor</h3>
                <span className='text-zinc-400 lg:text-sm text-xs font-normal'>2699 Green Valley, Highland Lake, FL</span>
            </div>
        </div>
    )
}