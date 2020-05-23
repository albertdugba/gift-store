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
  margin: auto;
`;

export const FixedContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: auto;
`;
