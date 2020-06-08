import React from "react";
import { FaArrowDown } from "react-icons/fa";

import banner from "../../images/ban.jpg";
import {
  BannerStyles,
  BannerContent,
  BannerImage,
  ArrowDown,
} from "../../styles/StyledUIElements/BannerStyles";

const Banner = () => {
  return (
    <BannerStyles>
      <BannerContent>
        <h1>Welcome to the GiftShop</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, minima
          iusto magnam saepe cupiditate labore placeat incidunt! Quae vel
          necessitatibus modi quis, nobis repellendus exercitationem! Nihil
          consectetur nam ipsum. Libero.
        </p>

        <ArrowDown>
          <FaArrowDown />
        </ArrowDown>
      </BannerContent>
      <BannerImage>
        <img
          src={banner}
          alt=""
          style={{
            height: "auto",
            width: "100%",
            maxWidth: "750px",
          }}
        />
      </BannerImage>
    </BannerStyles>
  );
};

export default Banner;
