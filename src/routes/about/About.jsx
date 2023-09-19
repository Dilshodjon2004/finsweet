import React from "react";
import AboutUs from "../../components/about-us/About";
import { styles } from "../../util/style";
const About = () => {
  return (
    <div className={`${styles.container} sm:py-32 py-16`}>
      <AboutUs />
    </div>
  );
};

export default About;
