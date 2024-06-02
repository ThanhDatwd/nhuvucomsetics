/* eslint-disable @next/next/no-img-element */
import { CORES_VALUE_DATA, getStaticURL } from "@/untils/constants"
import { CoresValueCard } from "../CoresValueCard"

export const SixthSection = () => {
    return (
        <div className="flex flex-col items-center gap-10 xs:px-6 md:px-14 mt-20 mb-[53px]">
            <div className="relative">
                <h2 className="font-libreBodoni text-[48px] text-black200 font-bold italic mb-0 text-center">Tại Sao Khách Hàng Tin Tưởng Chúng Tôi?</h2>
                <img 
                    src={`/assets/images/twinkle-left.svg`}
                    alt="Twinkle"
                    className="absolute -right-[77px] -top-8"
                />
            </div>
            <div className="flex xs:flex-col md:flex-row gap-6">
                {CORES_VALUE_DATA.map((item, index) => (
                    <CoresValueCard 
                        key={index}
                        valueName={item.name}
                        contentName={item.content}
                    />
                ))}
            </div>
        </div>
    )
}