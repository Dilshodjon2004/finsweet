import React from "react";
import { styles } from "../../util/style";
const Card = ({ icon, title, info }) => {
  return (
    <div className="bg-white text-start lg:p-[48px] md:p-[30px] sm:p-[15px] p-[10px]">
      <img src={icon} className="pt-5" alt="icon" />
      <h6
        className={`${styles.heading6} sm:text-[22px] md:text-[24px] text-[18px] pt-[25px] pb-[12px]`}
      >
        {title}
      </h6>
      <p className={`${styles.paragraph2} opacity-70`}>{info}</p>
    </div>
  );
};

export default Card;
