'use client'

import { useState } from "react"
import Image from "next/image"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Button from './Button'
import logo from '../../public/images/logo.png'

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    const MenuIcon = () => isOpen 
        ? <XMarkIcon onClick={() => setIsOpen(!isOpen)} className="block w-full size-6 lg:hidden ml-[75%] cursor-pointer"/> 
        : <Bars3Icon onClick={() => setIsOpen(!isOpen)} className="block size-6 lg:hidden ml-5 cursor-pointer"/>

    if (typeof document !== "undefined") {
        isOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
    }

    return (
        <header className="flex justify-between items-center text-black bg-white h-[64px] lg:h-24">
            <ul className="hidden w-full h-full lg:flex lg:justify-around lg:items-center gap-10">
                <Image src={logo} alt="company logo" className="w-40"/>
                <div className="flex gap-8 xl:gap-15">
                    <li className="cursor-pointer text-base xl:text-lg font-semibold">Rent</li>
                    <li className="cursor-pointer text-base xl:text-lg font-semibold">Buy</li>
                    <li className="cursor-pointer text-base xl:text-lg font-semibold">Sell</li>
                    <li className="cursor-pointer text-base xl:text-lg font-semibold">Manage Property</li>
                    <li className="cursor-pointer text-base xl:text-lg font-semibold">Resources</li>
                </div>
                <div className="flex gap-5 items-center">
                    <Button text="Login" secondary />
                    <Button text="Sign Up" />
                </div>
            </ul>

            <MenuIcon />
            <div className={`z-50 absolute top-[58px] py-10 px-12 w-full h-screen flex flex-col justify-between bg-white/20 backdrop-filter backdrop-blur-[20px]
                ${!isOpen && "hidden"} 
                ${isOpen && "animate-fade-in"}`
            }>
                <li className='list-none w-full text-3xl font-medium cursor-pinter'>Rent</li>
                <li className='list-none w-full text-3xl font-medium cursor-pinter'>Buy</li>
                <li className='list-none w-full text-3xl font-medium cursor-pinter'>Sell</li>
                <li className='list-none w-full text-3xl font-medium cursor-pinter'>Manage Products</li>
                <li className='list-none w-full text-3xl font-medium cursor-pinter'>Resources</li>
                <div className="flex flex-col gap-5 pb-15">
                    <Button text="Login" secondary />
                    <Button text="Sign Up" />
                </div>
            </div>
        </header>
    )
}
