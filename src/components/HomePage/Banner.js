import React from "react";

import banner from "../../images/banner.jpg";
import {
  BannerStyles,
  BannerContent,
} from "../../styles/StyledUIElements/BannerStyles";

const Banner = () => {
  return (
    <BannerStyles>
      <img src={banner} alt="" />
      <BannerContent>
        <h1>Welcome to the GiftShop</h1>
      </BannerContent>
    </BannerStyles>
  );
};

export default Banner;
