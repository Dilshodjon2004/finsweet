import React from "react";
import { Route } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Pricing from "./pricing/Pricing";
import Work from "./work/Work";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";
const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/pricing" component={Pricing} />
      <Route exact path="/work" component={Work} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/contact" component={Contact} />
    </>
  );
};

export default Routes;
