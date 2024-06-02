/* eslint-disable @next/next/no-img-element */
"use client";

import { CONTACT_DATA, FOOTER_DATA, getStaticURL } from "@/untils/constants";
import Icon from "../Icon";
import Link from "next/link";
import { FacebookIcon } from "@/assets/icons/FacebookIcon";
import { InstagramIcon } from "@/assets/icons/InstagramIcon";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";

const Footer = () => {
  
  return (
    <div className="flex gap-20 py-20 px-14 bg-[#FFE7EB]">
      <div className="flex flex-col gap-6 max-w-[400px]">
        <div className="flex flex-col gap-2">
          <Link
            href={"/"}
          >
            <img 
              src={`https://vn1.vdrive.vn/mela.com.vn/2023/07/LOGO-WEB-Nau-04-04.png`}
              alt="Logo"
              className="w-14 h-14"
            />
          </Link>
          <div className="text-xl text-black200">
            <strong>Làn da khỏe mạnh, vẻ đẹp trường tồn</strong> 
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {CONTACT_DATA.map((item, index) => (
            <div key={index} className="flex gap-[5px]">
              <div className="flex w-6">
                <Icon d={item.d} width={24} color="#222"/>
              </div>
              <span className="text-xl">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-20">
        {FOOTER_DATA.map((footer, index) => (
          <div key={index} className="flex flex-col gap-2">
            <span className="text-xl font-bold text-black200 text-nowrap">{footer.title}</span>
            <div className="flex flex-col gap-2">
              {footer.itemFooter.map((item, index) => (
                <Link
                  key={index} 
                  href={item.link}
                  className="text-xl font-medium text-black200 text-nowrap hover:text-red200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xl font-bold text-black200 text-nowrap">Mạng xã hội</span>
        <div className="flex gap-2">
          <Link href={"/"}>
            <FacebookIcon />
          </Link>
          <Link href={"/"}>
            <InstagramIcon />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span className="font-libreBodoni text-xl font-bold text-black200 italic">
          Đăng ký để nhận thông tin mới sớm nhất từ chúng tôi
        </span>
        <form>
          <div className="flex justify-between border-b border-red200 ">
            <input type="email" className="p-2 text-red200 text-base font-normal outline-none bg-transparent placeholder:text-red200" placeholder="Nhập email ở đây"/>
            <button
              type="submit"
            >
              <ArrowRightIcon color="#C2153E" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Footer;
