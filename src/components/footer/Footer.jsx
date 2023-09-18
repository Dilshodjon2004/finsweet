import React from "react";
import { styles } from "../../util/style";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import logo from "../../assets/home/main-logo.svg";
const Footer = () => {
  return (
    <div className={`w-full bg-bgBlue py-24`}>
      <div className={`${styles.container} flex md:flex-row flex-col justify-between lg:gap-28 gap-0`}>
        <div>
          <img src={logo} alt="logo" />
          <p
            className={`${styles.paragraph2} text-white opacity-80 md:w-[80%] w-full  mt-[24px] mb-[86px]`}
          >
            We are always open to discuss your project and improve your online
            presence.
          </p>
          <div className={`bg-yellow py-[18px] pl-9 flex flex-col lg:flex-row  gap-[29px]`}>
            <div>
              <h3 className={`${styles.label1} text-darkBlue`}>Email me at</h3>
              <p className={`${styles.paragraph1} opacity-80 text-darkBlue`}>
                contact@website.com
              </p>
            </div>
            <div>
              <h3 className={`${styles.label1} text-darkBlue`}>Call us</h3>
              <p className={`${styles.paragraph1} opacity-80 text-darkBlue`}>
                0927 6277 28525
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className={`${styles.heading2} text-white`}>Lets Talk!</h1>
          <p
            className={`${styles.paragraph2} text-white opacity-80 md:w-[55%] w-full  mt-[14px] mb-[28px]`}
          >
            We are always open to discuss your project, improve your online
            presence and help with your UX/UI design challenges.
          </p>
          <div className="flex gap-[26px] text-white text-[20px]">
            <BsFacebook />
            <BsTwitter />
            <BsInstagram />
            <BsLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
