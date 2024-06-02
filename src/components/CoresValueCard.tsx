import { UsersIcon } from "@/assets/icons/UsersIcon";

interface ICoresValueCard {
    valueName: string;
    contentName: string;
}

export const CoresValueCard = ({valueName, contentName} : ICoresValueCard) => {
    return (
        <div className="flex-1 flex flex-col items-center gap-6 py-8 rounded-[60px] bg-pink200">
            <div className="p-[22px] rounded-full bg-pink300">
                <UsersIcon />
            </div>
            <h3 className="font-libreBodoni text-2xl text-red100 font-bold italic mb-0">{valueName}</h3>
            <span className="text-xl text-red100 px-[63px] text-center">{contentName}</span>
        </div>
    )
}