import styled, { keyframes } from "styled-components";
import { mediaQueries } from "../global/theme";

export const BannerStyles = styled.div`
  @media ${mediaQueries.mobileLarge} {
    background: ${({ theme }) => theme.backgroundColorPink};
    min-height: 75vh;
    width: 100vw;
    margin: 0 30px;
    /* padding: 2rem; */
    max-width: 1110px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
  }

  @media ${mediaQueries.mobileSmall} {
    background: ${({ theme }) => theme.backgroundColorPink};
    height: 75vh;
    width: 100%;
    margin: 0 30px;
    max-width: 500px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    border-radius: 20px;
  }
`;

const animatedGradient = keyframes`
     0% {
    background-position: 0%;
  }
  100% {
    background-position: 100%;
  }
`;
export const BannerContent = styled.section`
  padding: 1.6rem;
  width: 100%;

  h1 {
    @media ${mediaQueries.mobileLarge} {
      font-size: 3.5rem;
      background: radial-gradient(
        circle,
        #6b2e43 0%,
        #a558b3 20%,
        #dd92b8 40%,
        #c27d45 60%,
        #a397b9 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 400%;
      animation: ${animatedGradient} 5s linear infinite alternate;
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

export const BannerImage = styled.div`
  @media ${mediaQueries.mobileSmall} {
    display: none;
  }
  & img {
    width: 100%;
    height: auto;
  }
`;

const downmovement = keyframes`
 from {
  transform: translateY(0);
  }

  to {
    transform: translateY(20px);
  }
`;

export const ArrowDown = styled.div`
  display: inline-block;
  font-size: 1.5rem;
  animation: ${downmovement} 2s linear infinite alternate;
`;
