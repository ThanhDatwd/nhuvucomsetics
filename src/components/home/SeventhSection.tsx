/* eslint-disable @next/next/no-img-element */
import { getStaticURL } from "@/untils/constants";
import { Feedback } from "../Feedback";
import { ButtonPrimary } from "../ButtonPrimary";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";

const feedBack = [
  {
    text: "Sản phẩm dưỡng da này thực sự hiệu quả. Sau một thời gian sử dụng, làn da của tôi trở nên mịn màng và tươi sáng hơn hẳn.",
    name: "Nguyễn Thị Mai",
    avatar:
      "https://beekols.com/wp-content/uploads/2022/02/z3173170680741_c4d38dd622e077b2aa438f1891e8a568.jpg",
  },
  {
    text: "Tôi rất hài lòng với kem dưỡng da ban đêm của hãng. Da tôi không còn bị khô ráp vào mỗi sáng thức dậy.",
    name: "Hoàng Ngọc Bích",
    avatar:
      "https://cdnmedia.tinmoi.vn/upload/honghanh/2021/04/14/thanh-nu-ulzzang-tiktoker-le-thanh-vi-khong-chi-mat-xinh-dang-dep-ma-con-co-tai-ca-hat-thuong-thua-1618387822-10.jpg",
  },
  {
    text: "Serum vitamin C này thật tuyệt vời! Nó giúp làm mờ vết thâm và đều màu da rõ rệt. Tôi sẽ tiếp tục sử dụng sản phẩm này.",
    name: "Lê Thanh Hà",
    avatar:
      "https://cdnmedia.tinmoi.vn/upload/honghanh/2021/04/14/thanh-nu-ulzzang-tiktoker-le-thanh-vi-khong-chi-mat-xinh-dang-dep-ma-con-co-tai-ca-hat-thuong-thua-1618387822-3.jpg",
  },
];
export const SeventhSection = () => {
  return (
    <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-6 items-stretch xs:px-6 md:px-14">
      <div
        style={{ backgroundImage: `url(/assets/images/flowers.svg)` }}
        className="flex-1"
      />
      <div className="flex-1 flex flex-col gap-16 ">
        <h2 className="font-libreBodoni text-center text-[48px] text-black200 italic mb-0">
          Phản Hồi Của Khách Hàng
        </h2>
        <div className="flex flex-col gap-6">
          {feedBack.map((item, index) => (
            <Feedback
              key={index}
              avatarUrl={item?.avatar}
              userName={item.name}
              content={item?.text}
            />
          ))}
        </div>
        <div className=" flex items-center xs:justify-center md:justify-start"><ButtonPrimary
          url="/"
          title="Xem tất cả"
          rightIcon={<ArrowRightIcon />}
        /></div>
      </div>
    </div>
  );
};
