import Image, { StaticImageData } from 'next/image'
import LikeIcon from './LikeIcon'
import star from '../../public/images/star.png'

interface ContainerProps {
    tag?: boolean
    hasBorder?: boolean
    inHero?: boolean
    price: string
    name: string
    description: string
    image: StaticImageData
    tabState?: boolean
}

export default function Container({ price, name, description, image, tag, inHero, hasBorder, tabState }: ContainerProps) {
    return (
        <div className='relative'>
            <div className={`overflow-hidden flex flex-col rounded-lg bg-white w-60 h-60 lg:w-100 lg:h-100 xl:w-120 xl:h-120 border-zinc-100 hover:shadow-md transition duration-400 ease shrink-0
                ${hasBorder && "border-1"}
                ${inHero && "scale-75 lg:scale-100 animate-fade-in shadow-xl shadow-zinc-300/30"}
            `}>
                <Image src={image || ''} alt='house image' className='object-cover' />
                <div className='flex flex-col pl-3 pt-3 lg:pl-8 lg:pt-8 lg:pb-3 text-left lg:gap-3'>
                    <div className='flex'>
                        <p className='text-indigo-400 font-bold text-xl lg:text-4xl mr-1'>${price}<span className='text-zinc-400 lg:text-lg text-base font-normal mt-1 lg:mt-3 ml-2'>/month</span></p>
                    </div>
                    <h3 className='text-black font-bold lg:text-3xl text-lg'>{name}</h3>
                    <p className='text-zinc-400 lg:text-lg text-xs font-normal'>{description}</p>
                </div>
                <div className='absolute bottom-[15%] right-[3%] lg:bottom-[20%] lg:right-[15%]'>
                    <LikeIcon />
                </div>
            </div>
            {tag && (
                <div className='absolute top-[52%] lx:top-[55%] left-[-6%] lg:left-[-3.5%] xl:left-[-3%]'>
                    <div className='flex justify-center items-center gap-[3px] text-xs lg:text-sm uppercase bg-indigo-500 p-3 py-1 lg:py-2 rounded-tl-lg rounded-br-lg rounded-tr-lg'>
                        <Image src={star} alt="star icon" className='w-3 lg:w-5' />
                        <span >{tabState ? "house" : "apartament"}</span>
                    </div>
                    <div className='w-0 h-0 border-solid border-t-0 border-r-[15px] border-l-0 border-b-[10px] border-l-transparent border-r-indigo-500 border-t-transparent border-b-transparent'></div>
                </div>
            )}
        </div>
    )
}
