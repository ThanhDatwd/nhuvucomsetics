/* eslint-disable @next/next/no-img-element */
import { getStaticURL } from "@/untils/constants";
import Link from "next/link";

interface IServiceCard {
    imageName: string;
    serviceName: string;
    serviceContent: string;
}

export const ServiceCard = ({ imageName, serviceContent, serviceName } : IServiceCard) => {
    return (
        <Link
            href={"/"}
            className="flex-1 flex flex-col gap-4"
        >
            <img
                src={`/assets/images/${imageName}`}
                alt={serviceName}
                className="flex-1 max-h-[317px]"
            />
            <h3 className="font-libreBodoni font-bold text-2xl text-red100 italic text-center mb-0">{serviceName}</h3>
            <span className="text-xl text-black200 text-center">{serviceContent}</span>
        </Link>
    )
}