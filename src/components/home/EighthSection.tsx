import { IMAGES_LADI, getStaticURL } from "@/untils/constants";
import { ButtonPrimary } from "../ButtonPrimary";
import { InstagramIcon } from "@/assets/icons/InstagramIcon";

export const EighthSection = () => {
    return (
        <div className="flex flex-col gap-8 xs:px-6 md:px-14 pt-[52px] pb-20">
            <div className="flex justify-between">
                <span className="text-[48px] font-libreBodoni font-bold italic text-black200">@landingage</span>
                <ButtonPrimary url="/" title="THEO DÕI INSTAGRAM" containerStyle="border border-red200 bg-transparent hover:bg-transparent" prioritizeContainerStyle={{color: "#C2153E"}} leftIcon={<InstagramIcon />}/>
            </div>
            <div className="grid xs:grid-cols-1 md:grid-cols-3  gap-6">
                <div 
                    style={{
                        backgroundImage: `url(/assets/images/landing-page-1.svg)`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize:'cover'
                    }}
                    className="h-[428px] w-full xs:hidden md:block"
                />
                <div className="col-span-2  xs:grid-cols-1 md:grid grid-cols-4 gap-6">
                    {IMAGES_LADI.map((item, index) => (
                        <div 
                            key={index}
                            style={{

                                backgroundImage: `url(/assets/images/${item}.svg)`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize:'cover'
                            }}
                            className="w-full aspect-square xs:mt-5 md:mt-0"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}