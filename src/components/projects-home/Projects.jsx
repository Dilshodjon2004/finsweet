import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { styles } from "../../util/style";
import image1 from "../../assets/home/img-1.png";
import image2 from "../../assets/home/img-2.png";

const Projects = () => {
  return (
    <div className={`${styles.container} ${styles.paddingY}`}>
      <div className={`${styles.flexBetween}`}>
        <h2 className={` sm:${styles.heading4} ss:${styles.heading5}  `}>
          View our projects
        </h2>
        <Link
          to="/pricing"
          className={`hidden ss:block ${styles.btn} text-center gap-[16px] text-darkBlue  transition-all duration-500`}
        >
          <button>
            View Pricing
            <AiOutlineArrowRight className="inline-block pl-2 text-3xl" />
          </button>
        </Link>
      </div>
      <div class="grid grid-rows-2 grid-cols-2 gap-4 h-auto">
        <div class="row-span-2">
          <div class="relative cursor-pointer overlay-wrapper h-full">
            <img
              className="w-full h-full object-cover"
              src={image1}
              alt="card"
            />
            <div class="absolute overlay w-0 top-0 h-full overflow-hidden  transition-all ease-in-out duration-500">
              <div className="h-full  flex items-center place-content-end flex-col pb-[70px] px-10">
                <h1 className={`${styles.heading6} text-white`}>
                  Workhub office Webflow Webflow Design
                </h1>
                <p
                  className={`${styles.paragraph2} text-white pt-[16px] pb-[40px]`}
                >
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam
                </p>
                <Link to="/work" className={`${styles.btn} text-yellow`}>
                  View project
                  <AiOutlineArrowRight className="inline-block pl-2 text-3xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div class="relative cursor-pointer overlay-wrapper">
          <img
            className="w-full h-full object-contain"
            src={image2}
            alt="card"
          />
          <div class="absolute overlay-special w-0 top-0 h-full overflow-hidden  transition-all ease-in-out duration-500">
            <div className="h-full  flex items-center place-content-end flex-col pb-[70px]">
              <h1 className={`${styles.heading6} text-white`}>
                Workhub office Webflow Webflow Design
              </h1>
              <p className={`${styles.paragraph2} text-white`}>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam{" "}
              </p>
              <Link to="/work" className={`${styles.btn} text-yellow`}>
                View project
                <AiOutlineArrowRight className="inline-block pl-2 text-3xl" />
              </Link>
            </div>
          </div>
        </div>

        <div class="relative cursor-pointer overlay-wrapper">
          <img
            className="w-full h-full object-contain"
            src={image1}
            alt="card"
          />
          <div class="absolute overlay-special w-0 top-0 h-full overflow-hidden  transition-all ease-in-out duration-500">
            <div className="h-full  flex items-center place-content-end flex-col pb-[70px]">
              <h1 className={`${styles.heading6} text-white`}>
                Workhub office Webflow Webflow Design
              </h1>
              <p className={`${styles.paragraph2} text-white`}>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam
              </p>
              <Link to="/work" className={`${styles.btn} text-yellow`}>
                View project
                <AiOutlineArrowRight className="inline-block pl-2 text-3xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
