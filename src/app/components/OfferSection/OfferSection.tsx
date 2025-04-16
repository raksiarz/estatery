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
        price: '3,440',
        name: 'Palm Harbor',
        description: '2699 Green Valley, Highland Lake, FL',
        image: house1,
    },
    {
        price: '6,550',
        name: 'St. Crystal',
        description: '210 US Highway, Highland Lake, FL',
        image: house2,
    },
    {
        price: '4,950',
        name: 'Faulkner Ave',
        description: '909 Woodland St, Michigan, IN',
        image: house3,
    },
] as const
const APARTAMENTS = [
    {
        price: '2,140',
        name: 'Tarpon Bay',
        description: '103 Lake Shores, Michigan, IN',
        image: apartament1,
    },
    {
        price: '1,450',
        name: 'Cove Red',
        description: '243 Curlew Road, Palm Harbor, TX',
        image: apartament2,
    },
    {
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
        return list.map(item => <Container price={item.price} name={item.name} description={item.description} image={item.image} hasBorder />)
    }

    return (
        <div className="bg-white w-full h-screen flex flex-col px-12 py-10 gap-6">
            <Tabs state={tabState} callback={callbackFunc}/>
            <div className="flex flex-col text-center gap-5">
                <h2 className="font-bold text-3xl text-black">We make it easy for houses and apartments.</h2>
                <span className="text-zinc-300 text-base">Whether it’s selling your current home, getting financing, or buying a new home, we make it easy  and efficient. The best part? you’ll save a bunch of money and time with our services.</span>
            </div>
            <div className="flex gap-3 overflow-scroll">
                <CarouselComp />
            </div>
        </div>
    )
}