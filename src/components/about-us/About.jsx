import React from "react";
import { styles } from "../../util/style";
import image1 from "../../assets/about-us/image.png";
import banner from "../../assets/about-us/img-banner.png";
const About = () => {
  return (
    <div>
      <div
        className={`${styles} ${styles.flexBetween} sm:justify-between justify-center sm:flex-row flex-col lg:gap-40 gap-8`}
      >
        <div>
          <p className={`${styles.label1} sm:text-start text-center`}>
            About us
          </p>
          <h1
            className={`${styles.heading1} text-darkBlue lg:text-[54px] md:text-[35px] text-[29px] md:leading-[56px] leading-[50px] pt-2 lg:pb-10 pb-5 `}
          >
            Our designs solve problems
          </h1>
          <p
            className={`${styles.label2} md:text-[16px] text-[14px] opacity-70 text-darkBlue`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <img className="sm:max-w-[50%] w-full" src={image1} alt="" />
      </div>

      <div
        className={`${styles.flexBetween} md:flex-row flex-col gap-20 w-full md:py-[96px] py-[40px] md:px-[80px] px-[20px] bg-paleGrey mt-20`}
      >
        <div>
          <h3 className={`${styles.heading3} text-darkBlue`}>Goal focussed</h3>
          <p className={`${styles.label2} opacity-70`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div>
          <h3 className={`${styles.heading3} text-darkBlue`}>Continuous improvement</h3>
          <p className={`${styles.label2} opacity-70`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <img src={banner} className="w-full object-cover" alt="" />
    </div>
  );
};

export default About;
