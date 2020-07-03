import styled, { css } from "styled-components";
import formBg from "../../images/cover.jpg";

export const SharedInputStyle = css``;

export const FormContainer = styled.div`
  width: 100%;
  height: 400px;
  max-width: 820px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
`;

export const FormText = styled.div`
  flex: 1.5;
  position: relative;
  width: 100%;
  opacity: 0.7;
  padding: 1.4rem;
  background: url(${formBg}) no-repeat center center/cover;
  /* background: red; */
  top: 0;
  left: 0;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const FormControl = styled.div`
  flex: 1.5;
  background: white;
  color: #000;
`;

export const FormInput = styled.input`
  width: 100%;
  max-width: 500px;
  border: none;
  outline: none;
  border: 1.4px solid black;
`;
