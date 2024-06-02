/* eslint-disable @next/next/no-img-element */
import { getStaticURL } from "@/untils/constants"
import { ButtonPrimary } from "../ButtonPrimary"
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon"
import { LotusIcon } from "@/assets/icons/LotusIcon"

export const SecondarySection = () => {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 px-6 md:px-[56px] gap-6 md:gap-20 flex-wrap">
            <div className="xs:hidden md:flex flex-1 relative z-10 h-full">
              <img
                    src={`/assets/images/sp-2.jpeg`}
                    alt="Leaf"
                    className="w-full max-w-full h-full"
                />
                <div className=" xs:hidden md:flex flex-col gap-11 absolute top-0 text-[60px] font-semibold pl-[59px] pr-[30px] pt-[319px]">
                    <h3 className="text-shadow text-[60px] mb-0 font-semibold">
                        KHÁM PHÁ BÍ QUYẾT GIÚP DA CỦA BẠN SÁNG MỊN HƠN
                    </h3>
                    <ButtonPrimary
                        url="/"
                        title="Khám phá ngay" 
                        rightIcon={<ArrowRightIcon />}
                    />
                </div>
            </div>
            <div className="flex-1 relative z-10">
                <video className="w-full" autoPlay controls  muted loop src={`/assets/images/sp-1.mp4`}></video>
                
                <div className="w-full flex flex-col gap-2 items-center justify-center absolute top-12">
                    <LotusIcon />
                    <h3 className="text-base text-white text-center font-black max-w-[362px]">
                        HÀNH TRÌNH ĐẾN VỚI VẺ ĐẸP PHI TUỔI TÁC SẼ BẮT ĐẦU NGAY HÔM NAY
                    </h3>
                </div>
            </div>
        </div>
    )
}