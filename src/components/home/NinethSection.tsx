import { getStaticURL } from "@/untils/constants";
import { ButtonPrimary } from "../ButtonPrimary";
import { ReplyIcon } from "@/assets/icons/ReplyIcon";

export const NinethSection = () => {
  return (
    <div className="grid xs:grid-cols-1 md:grid-cols-2 items-center bg-pink600" id="advise-free">
      <div
        style={{
          backgroundImage: `url(/assets/images/advise.svg)`,
          backgroundRepeat: "no-repeat",
        }}
        className="flex-1 h-[563px]"
      />
      <div className="flex-1 xs:px-6 md:px-14 py-6">
        <h2 className="font-libreBodoni text-[48px] text-red100 font-bold italic mb-8">Nhận tư vấn miễn phí</h2>
        <form className="flex flex-col gap-6">
            <input 
                placeholder="Họ và Tên"
                type="text"
                className="outline-none bg-transparent p-4 rounded-lg border border-red200 text-base font-normal text-red200 placeholder:text-red200"
            />
            <input 
                placeholder="Số điện thoại"
                type="tel"
                required
                className="outline-none bg-transparent p-4 rounded-lg border border-red200 text-base font-normal text-red200 placeholder:text-red200"
            />
            <input 
                placeholder="Email"
                type="email"
                className="outline-none bg-transparent p-4 rounded-lg border border-red200 text-base font-normal text-red200 placeholder:text-red200 mb-2"
            />
            <button className="flex gap-[10px] py-4 px-6 bg-red200 hover:bg-[#CE4465] hover:shadow-[0_0_20px_0_#E06F7C] rounded-[100px] h-fit w-fit text-base text-white">
              Gửi thông tin
              <ReplyIcon />
            </button>
        </form>
      </div>
    </div>
  );
};
