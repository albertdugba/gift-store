import styled from "styled-components";

export const Button = styled.button`
  outline: none;
  border: none;
  display: block;
  padding: 0.7rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  max-width: 200px;
  border-radius: 5px;
  background-size: 300% 300%;
  margin: auto;

  transition: 0.5s;
  color: white;

  &:hover {
    background-position: right center;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  }
`;

export const SecondaryBtn = styled(Button)`
  background-image: linear-gradient(
    to right,
    #a88a94 0%,
    #b47e91 50%,
    #f7d9e4 100%
  );
`;
