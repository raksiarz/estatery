'use client'

import { useState } from "react"
import Image from "next/image"
import Footer from "../Footer"
import profile1 from '../../../public/images/profile1.png'
import profile2 from '../../../public/images/profile2.png'
import profile3 from '../../../public/images/profile3.png'

const TESTIMONIALS = [
    {
        id: 0,
        content: '“Estatery is the platform I go to on almost a daily basis for 2nd home and vacation condo shopping, or to just look at dream homes in new areas. Thanks for fun home shopping and comparative analyzing, Estatery!”',
        name: 'Mira Culos',
        image: profile1,
    },
    {
        id: 1,
        content: `“I check Estatery almost every day — whether I'm seriously house hunting or just daydreaming about future getaways. It makes exploring new locations and comparing properties incredibly easy and enjoyable.”`,
        name: 'Mark Brown',
        image: profile2,
    },
    {
        id: 2,
        content: `“Estatery turns home shopping into a daily delight. Whether I'm planning for the future or just exploring what's out there, I always find something exciting and new.”`,
        name: 'Jake White',
        image: profile3,
    },
] as const

export default function Testimonials() {
    const [testimonialId, setTestimonialId] = useState(0)

    function AvatarsComp() {
        return (
            <div className="flex gap-5">
                {TESTIMONIALS.map(item => (
                    <div className="relative mt-7 mb-5 lg:mt-10">
                        <Image
                            key={item.id}
                            src={item.image}
                            alt='profile picture'
                            className={`w-12 rounded-full object-cover cursor-pointer md:w-20`}
                            onClick={() => setTestimonialId(item.id)}
                        />
                        {testimonialId === item.id && <span key={item.id} className="absolute -inset-1 block rounded-full w-15 md:w-22 border-2 border-zinc-200"></span>}
                    </div>
                )
                )}
            </div>
        )
    }

    function TestimonialContent() {
        const testimony = TESTIMONIALS.find(item => item.id === testimonialId)!
        return (
            <div className="flex flex-col items-center gap-5 h-65 animate-fade-in">
                <span className="text-black text-xl lg:text-2xl xl:text-3xl lg:w-1/2 lg:pt-7">{testimony.content}</span>
                <span className="text-black font-bold text-base">{testimony.name}, <span className="text-zinc-400 font-normal">Renter</span></span>
            </div>
        )
    }


    return (
        <div className="bg-white w-full h-screen flex flex-col">
            <div className="bg-white w-full h-full flex flex-col text-center items-center px-12 pt-8 gap-5 bg-linear-to-t from-fuchsia-50 to-white to-80%">
                <h2 className="text-black font-bold text-4xl lg:text-6xl">Testimonials</h2>
                <h5 className="text-base text-zinc-400 lg:text-lg lg:w-[75%] lg:my-5">See what our property managers, landlords, and tenants have to say</h5>
                <TestimonialContent />
                <AvatarsComp />
            </div>
            <Footer />
        </div>
    )
}