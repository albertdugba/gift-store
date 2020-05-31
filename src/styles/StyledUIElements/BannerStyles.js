import styled from "styled-components";
import { mediaQueries } from "../global/theme";

export const BannerStyles = styled.div`
  width: 100%;
  & img {
    width: 100%;
    max-width: 100%;
    min-height: 300px;
    height: 100%;
  }
  z-index: -1;
  position: relative;
`;

export const BannerContent = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: 100%;

  p {
    font-size: 2.3rem;
    color: pink;
  }

  h1 {
    @media ${mediaQueries.mobileLarge} {
      font-size: 4.5rem;
      background: -webkit-linear-gradient(pink, #333);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media ${mediaQueries.mobileSmall} {
      font-size: 2.35rem;
      color: pink;
      background: -webkit-linear-gradient(pink, #333);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;
