import React from "react";
import { styles } from "../../util/style";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import womanImg from "../../assets/home/woman.png";
import Card from "../Features-card-home/Card";
import { featureCardInfo } from "../../util/constants";
const Features = () => {
  return (
    <div
      className={`${styles.container} ${styles.paddingY} text-center bg-grey`}
    >
      <p>Features</p>
      <h2
        className={`${styles.heading2} ss:text-[48px] rs:text-[35px] rs:leading-[50px] xs:text-[24px] xs:leading-[35px] lg:w-[45%] md:w-[55%] sm:w-[70%] ss:w-[90%] w-[100%] mx-auto pt-[12px] pb-[47px]`}
      >
        Design that solves problems, one product at a time
      </h2>
      <div className="grid sm:grid-cols-3 ss:grid-cols-2 grid-rows-2 gap-4">
        {featureCardInfo.map((element, id) => (
          <Card
            key={id}
            icon={element.icon}
            title={element.title}
            info={element.info}
          />
        ))}
      </div>

      <div className={`${styles.flexBetween} flex-col md:flex-row md:items-start gap-5 py-[110px]`}>
        <div className="text-start md:w-[45%] w-full pt-0">
          <h3 className={`${styles.heading3} md:w-[70%] md:text-[38px] text-[20px] w-full text-center`}>What our clients say about us</h3>
          <p className={`${styles.paragraph1} opacity-70 md:w-[70%] w-full text-center pt-[16px]`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
          </p>
        </div>
        <div className="w-[80%] text-start">
          <h5 className={styles.heading5}>
            "The best agency we’ve worked with so far. They understand our
            product and are able to add new features with a great focus."
          </h5>
          <div className={`${styles.flexBetween} pt-[48px]`}>
            <div className="flex gap-3">
              <img src={womanImg} className="rounded-full" alt="woman" />
              <div>
                <h6 className={`${styles.label2}`}>Jenny Wilson</h6>
                <p>Vice President</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-3 rounded-full  hover:bg-iconBlue hover:text-white transition-all ease-in-out duration-100 ">
                <BsChevronLeft className="text-[22px] opacity-60 hover:opacity-100 " />
              </button>
              <button className="p-3 rounded-full  hover:bg-iconBlue hover:text-white transition-all ease-in-out duration-100 ">
                <BsChevronRight className="text-[22px] opacity-60 hover:opacity-100 " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
