import { url } from "inspector";
import Link from "next/link";
import { CSSProperties, ReactNode } from "react";

interface IButtonPrimary {
  title: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  containerStyle?: string;
  prioritizeContainerStyle?: CSSProperties | undefined;
  onClickBtn?: () => void;
  url: string;
  sectionId?: string;
}
export const ButtonPrimary = (props: IButtonPrimary) => {
  const {
    title,
    rightIcon,
    leftIcon,
    containerStyle,
    prioritizeContainerStyle,
    onClickBtn,
    url,
  } = props;
  return (
    <Link
      href={url}
      className={`flex gap-[10px] py-4 px-6 bg-red200 rounded-[100px] h-fit w-fit text-base text-white hover:bg-[#CE4465] hover:shadow-[0_0_20px_0_#E06F7C] ${containerStyle}`}
      style={prioritizeContainerStyle}
      onClick={onClickBtn}
      id="sectionId"
    >
      {leftIcon && leftIcon}
      {title}
      {rightIcon && rightIcon}
    </Link>
  );
};
