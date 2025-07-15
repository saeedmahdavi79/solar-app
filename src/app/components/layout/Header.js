import Image from "next/image";
import LogoImage from "@/../public/images/logo.png";

const HeaderApp = () => {
  return (
    <>
      <div className="w-full h-[100px] bg-blue-500 flex items-center justify-center">
        <header className="w-full flex text-white justify-between items-center mx-16">
          <ul className="w-1/4 flex gap-6 items-center ">
            <li className="cursor-pointer hover:text-yellow-400 transition-all hover:scale-95 duration-300">
              انتخاب هیدرولیکی پمپ
            </li>
            <li className="cursor-pointer hover:text-yellow-400 transition-all hover:scale-95 duration-300">
              فهرست پمپ ها
            </li>
          </ul>
          <div className="w-2/4"></div>
          <div className="w-1/4 flex justify-end items-center">
            <Image
              src={LogoImage}
              className="w-[80px] bg-white rounded-full"
              alt="لوگوی سولار پمپ"
            />
          </div>
        </header>
      </div>
    </>
  );
};

export default HeaderApp;
