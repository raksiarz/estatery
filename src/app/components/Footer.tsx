import Image from "next/image"
import logo from '../../public/images/logo.png'
import facebook from '../../public/images/facebook.png'
import instagram from '../../public/images/instagram.png'
import twitter from '../../public/images/twitter.png'
import linkedin from '../../public/images/linkedin.png'

export default function Footer() {
    return (
        <div className="w-full bg-white h-auto flex flex-col items-center px-6 py-4 lg:p-10">
            <div className="w-full flex flex-col lg:flex-row lg:justify-between">
                <Image src={logo} alt="estatery logo" className="w-40 self-start" />
                <div className="flex flex-row flex-wrap gap-x-35 lg:gap-x-25 gap-y-3 mt-2 justify-center items-center">
                    <span className="text-zinc-400 text-sm lg:text-base text-center">HELP CENTER</span>
                    <span className="text-zinc-400 text-sm lg:text-base text-center">FAQ</span>
                    <span className="text-zinc-400 text-sm lg:text-base text-center">TERMS & PRIVACY</span>
                </div>
            </div>
            <div className="h-[1px] bg-zinc-100 w-full my-4"></div>
            <div className="flex flex-col w-full lg:flex-row lg:justify-between items-center gap-5">
                <span className="text-zinc-400 text-xs lg:text-sm w-auto">@2021 Estatery. All rights reserved.</span>
                <div className="w-auto flex justify-center items-center gap-x-10 opacity-30">
                    <a href="#" target="_blank">
                        <Image src={facebook} alt="facebook logo" className="w-5 cursor-pointer" />
                    </a>
                    <a href="#" target="_blank">
                        <Image src={instagram} alt="instagram logo" className="w-5 cursor-pointer" />
                    </a>
                    <a href="https://x.com/vlayer_xyz" target="_blank">
                        <Image src={twitter} alt="twitter logo" className="w-5 cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com/company/vlayer-labs/" target="_blank">
                        <Image src={linkedin} alt="linkedin logo" className="w-5 cursor-pointer" />
                    </a>
                </div>
            </div>
        </div>
    )
}