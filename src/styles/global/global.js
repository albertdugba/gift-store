import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html,
    body{
        margin:0;
        padding:0;
    }

    body{
        box-sizing:border-box;
        font-family:'Sen', sans-serif;
    }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1110px;
  margin: auto;
`;

export const Centered = styled.div`
  text-align: center;
`;

export const CustomContainer = styled.div`
  max-width: 1000px;
  margin: auto;
`;
