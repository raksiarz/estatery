'use client'

import { useState } from "react"
import Image from "next/image"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Button from './Button'
import logo from '../../public/images/logo.png'

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    const MenuIcon = () => isOpen ? <XMarkIcon onClick={() => setIsOpen(!isOpen)} /> : <Bars3Icon onClick={() => setIsOpen(!isOpen)} />

    return (
        <header className="flex justify-between items-center text-black bg-white/30 backdrop-blur-lg h-18 lg:h-24">

            <ul className="hidden w-full lg:flex lg:justify-around lg:items-center gap-10 ">
                <Image src={logo} alt="company logo" className="w-35"/>
                <div className="flex gap-7">
                    <li className="cursor-pointer">Rent</li>
                    <li className="cursor-pointer">Buy</li>
                    <li className="cursor-pointer">Sell</li>
                    <li className="cursor-pointer">Manage Property</li>
                    <li className="cursor-pointer">Resources</li>
                </div>
                <div className="flex gap-5">
                    <Button text="Login" secondary />
                    <Button text="Sign Up" />
                </div>
            </ul>

            <Bars3Icon className="block size-6 lg:hidden" onClick={() => setIsOpen(!isOpen)}/>
            <div className={`z-9 absolute lg:hidden top-18 py-10 px-12 w-full h-full flex flex-col item-center gap-10 bg-white backdrop-blur-lg transform transition-transform ${isOpen ? "opacity-100" : "opacity-0"}`} 
            style={{transition: "transform 0.5s ease, opacity 0.5s ease"}}>
                <li className='list-none w-full text-center cursor-pinter transition-all'>Rent</li>
                <li className='list-none w-full text-center cursor-pinter transition-all'>Buy</li>
                <li className='list-none w-full text-center cursor-pinter transition-all'>Sell</li>
                <li className='list-none w-full text-center cursor-pinter transition-all'>Manage Products</li>
                <li className='list-none w-full text-center cursor-pinter transition-all'>Resources</li>
                <Button text="Login" secondary/>
                <Button text="Sign Up" />
            </div>
        </header>
    )
}