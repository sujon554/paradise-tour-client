import React from 'react';
import Bannner from '../Banner/Bannner';
import Blog from '../Blog/Blog';
import DisplayProducts from "../DisplayProducts/DisplayProducts";

import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <DisplayProducts />
      <Bannner />
      <Blog></Blog>
    </div>
  );
};

export default Home;