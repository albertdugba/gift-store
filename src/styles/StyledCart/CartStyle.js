import styled from "styled-components";

export const CartContainer = styled.section`
  width: 750px;
  height: 425px;
  /* background: #ece4e4; */
  margin: 80px auto;
  box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  & img {
    margin-right: 50px;
  }
`;

export const CartItemTitle = styled.div`
  height: 60px;
  padding: 20px 30px;
  color: purple;
`;

export const CartItem = styled.div`
  padding: 20px 30px;
  height: 120px;
  display: flex;

  &:nth-child(3) {
    border-top: 1px solid #e1e8ee;
    border-bottom: 1px solid #e1e8ee;
  }
`;

export const CartItemName = styled.div`
  padding-top: 10px;
  margin-right: 60px;
  width: 115px;
`;

export const CartButton = styled.div`
  position: relative;
  padding-top: 30px;
  margin-right: 60px;
`;

export const CartItemQuantity = styled.div`
  padding-top: 20px;
  margin-right: 60px;
`;

export const CartItemPrice = styled.div`
  width: 83px;
  padding-top: 27px;
  text-align: center;
  font-size: 16px;
  color: #43484d;
  font-weight: 300;
`;
