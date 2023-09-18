import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { AiOutlineArrowRight } from "react-icons/ai";
import { styles } from "../../util/style";
import hero from "../../assets/home/hero-img.svg";
const Hero = () => {
  return (
    <div className="bg-bgBlue">
      <div
        className={`${styles.container} ss:${styles.flexBetween} ${styles.flexCenter} flex-col md:gap-0 gap-10 md:flex-row md:py-[128px] py-[50px]`}
      >
        <div>
          <h1
            className={`md:${styles.heading1}  text-white lg:w-[70%]`}
          >
            Building stellar websites for early startups
          </h1>
          <p
            className={`${styles.paragraph2} mt-[24px] mb-[48px] text-white ss:w-[90%] w-full`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="flex gap-2 w-full ss:flex-row flex-col">
            <Link to="/work" className={`${styles.btnYellow} text-center`}>
              <button>View our work</button>
            </Link>

            <Link
              to="/pricing"
              className={`ss:${styles.btn} ss:bg-transparent ${styles.btnYellow} text-center  hover:bg-slate-400  gap-[16px] ss:text-white  transition-all duration-500`}
            >
              <button>
                View Pricing{" "}
                <AiOutlineArrowRight className="inline-block pl-2 text-3xl" />
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full h-full">
          <img className="w-full h-full" src={hero} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
