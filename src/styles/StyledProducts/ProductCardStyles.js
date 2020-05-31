import styled from "styled-components";

export const ProductCardStyle = styled.div`
  box-sizing: border-box;
  max-width: 150px;
  height: 200px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  background: white;
  color: black;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    transform: translateX(30deg);
  }
`;
