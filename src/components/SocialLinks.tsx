/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { twMerge } from "tailwind-merge";
const linkData = [
  { icon: <FaGithub />, href: "https://github.com/Nahid01920" },
  { icon: <FaFacebook />, href: "http://www.facebook.com/nahid767" },
  { icon: <FaYoutube />, href: "http://www.youtube.com/@nahidBD" },
  { icon: <FaLinkedin />, href: "http://www.FaLinkedin.com/in/nahid-hasan" },
  { icon: <FaEnvelope />, href: "http://www.FaLinkedin.com/in/nahid-hasan" },
];

const SocialLinks = ({className, iconStyle}:{className?:string;iconStyle?:string;}) => {
  return (
    <div className={twMerge("text-xl py-2 text-white/50 flex items-center gap-x-2", className)}>
      {linkData?.map((item, index) => (
        <Link
          key={index}
          href={item?.href}
          target="blank"
          className={twMerge("border border-white/20 inline-flex py-2 rounded-full hover:text-skyColor hover:border-skyColor delay-300 cursor-pointer", iconStyle)}
        >
          {item?.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
