'use client'

import { useState } from "react"
import Tabs from "../Tabs"
import Container from "../Container"
import house1 from '../../../public/images/house1.png'
import house2 from '../../../public/images/house2.png'
import house3 from '../../../public/images/house3.png'
import apartament1 from '../../../public/images/apartament1.png'
import apartament2 from '../../../public/images/apartament2.png'
import apartament3 from '../../../public/images/apartament3.png'

const HOUSES = [
    {
        id:0,
        price: '3,440',
        name: 'Palm Harbor',
        description: '2699 Green Valley, Highland Lake, FL',
        image: house1,
    },
    {
        id:1,
        price: '6,550',
        name: 'St. Crystal',
        description: '210 US Highway, Highland Lake, FL',
        image: house2,
    },
    {
        id:2,
        price: '4,950',
        name: 'Faulkner Ave',
        description: '909 Woodland St, Michigan, IN',
        image: house3,
    },
] as const
const APARTAMENTS = [
    {
        id:3,
        price: '2,140',
        name: 'Tarpon Bay',
        description: '103 Lake Shores, Michigan, IN',
        image: apartament1,
    },
    {
        id:4,
        price: '1,450',
        name: 'Cove Red',
        description: '243 Curlew Road, Palm Harbor, TX',
        image: apartament2,
    },
    {
        id:5,
        price: '3,850',
        name: 'Beverly Springfield',
        description: '2821 Lake Sevilla, Palm Harbor, TX',
        image: apartament3,
    },
] as const


export default function OfferSection() {
    const [tabState, setTabState] = useState(false)

    function callbackFunc(tabState: boolean) {
        setTabState(tabState)
    }

    function CarouselComp() {
        const list = tabState ? HOUSES : APARTAMENTS
        return (
            <div className="flex flex-row max-w-screen px-10 items-center gap-3 overflow-x-auto hide-scrollbar lg:gap-10 animate-fade-in">
                {list.map(item => <Container key={item.id} price={item.price} name={item.name} description={item.description} image={item.image} hasBorder />)}
            </div>
        )
    }

    return (
    <div className="bg-white w-full h-screen flex items-center flex-col px-15 py-4 gap-7 lg:gap-10">
            <Tabs state={tabState} callback={callbackFunc}/>
            <div className="flex flex-col items-center text-center gap-4 lg:w-175">
                <h2 className="font-bold text-4xl lg:text-5xl text-black">We make it easy for houses and apartments.</h2>
                <p className="text-zinc-400 text-base lg:text-lg">Whether it’s selling your current home, getting financing, or buying a new home, we make it easy  and efficient. The best part? you’ll save a bunch of money and time with our services.</p>
            </div>
            <CarouselComp />
        </div>
    )
}