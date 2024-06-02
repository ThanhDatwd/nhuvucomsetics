import { getStaticURL } from "@/untils/constants";
import { ButtonPrimary } from "../ButtonPrimary";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";

export const FourthSection = () => {
  return (
    <div className="grid xs:grid-cols-1 md:grid-cols-2">
      <div className=" flex flex-col justify-center gap-5 py-6 xs:px-6 md:px-14 bg-pink600 text-xl text-red100 xs:order-2 order-1">
        <span>Về chúng tôi</span>
        <h2 className="font-libreBodoni font-bold mb-0 text-[48px] text-red100 italic">Chúng Tôi Đặt Vẻ Đẹp Lên Hàng Đầu</h2>
        <span>
          Dưới ánh sáng mềm mại của bức ảnh, câu chuyện về chúng tôi bắt đầu
          được kể lại. Chúng tôi là những người yêu thích cái đẹp, tìm kiếm sự
          hoàn hảo trong từng chi tiết.{" "}
        </span>
        <span>
          Tại đây, chúng tôi không chỉ tạo ra những sản phẩm làm đẹp mà còn là
          những người kể chuyện, kể về những hành trình sáng tạo, những khám phá
          mới mẻ và những trải nghiệm không ngừng. Bằng sự đam mê và sự tận tâm,
          chúng tôi mong muốn chia sẻ niềm đam mê của mình với bạn, để cùng nhau
          tạo nên những khoảnh khắc đẹp đẽ và ý nghĩa hơn trong cuộc sống của
          mỗi người. Hãy cùng chúng tôi khám phá và chia sẻ câu chuyện đẹp của
          cuộc sống!
        </span>
        <ButtonPrimary url="/" title="Xem thêm" rightIcon={<ArrowRightIcon />} />
      </div>
      <div
        style={{
          backgroundImage: `url(/assets/images/about.svg)`,
          backgroundSize: "cover",
        }}
        className="flex-1 xs:h-auto md:h-[720px] xs:order-1 md:order-2 "
      />
    </div>
  );
};
