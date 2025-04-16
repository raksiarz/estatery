'use client'

import { useState } from "react"
import Image from "next/image"
import Footer from "../Footer"

export default function Testimonials() {
    const [testimonialId, setTestimonialId] = useState(1)

    return (
        <div className="bg-white w-full h-screen flex flex-col">
            <div className="bg-white w-full h-screen flex flex-col text-center items-center px-12 pt-4 gap-8 bg-linear-to-t from-fuchsia-50 to-white to-80%">
                <h2 className="text-black font-bold text-5xl">Testimonials</h2>
                <h5 className="text-base text-zinc-400">See what our property managers, landlords, and tenants have to say</h5>
                <div className={`${testimonialId !== 1 && "hidden"} flex flex-col gap-5`}>
                    <span className="text-black text-xl">“Estatery is the platform I go to on almost a daily basis for 2nd home and vacation condo shopping, or to just look at dream homes in new areas. Thanks for fun home shopping and comparative analyzing, Estatery!”</span>
                    <span className="text-black font-bold text-base">Mira Culos, <span className="text-zinc-400 font-normal">Renter</span></span>
                </div>
                <div className={`${testimonialId !== 2 && "hidden"} flex flex-col gap-5`}>
                    <span className="text-black text-xl">“I check Estatery almost every day — whether I'm seriously house hunting or just daydreaming about future getaways. It makes exploring new locations and comparing properties incredibly easy and enjoyable.”</span>
                    <span className="text-black font-bold text-base">Mark Brown, <span className="text-zinc-400 font-normal">Renter</span></span>
                </div>
                <div className="flex gap-4">
                    {/* <Image src={} alt="renter image 1" onClick={() => setTestimonialId(1)} />
                    <Image src={} alt="renter image 2" onClick={() => setTestimonialId(2)} />
                    <Image src={} alt="renter image 3" onClick={() => setTestimonialId(3)} /> */}
                </div>
            </div>
            <Footer />
        </div>
    )
}