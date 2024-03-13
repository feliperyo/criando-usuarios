import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 74px;
  border-radius: 14px;
  background: ${(props) => (props.isTransparent ? "transparent" : "#000000cc")};
  color: #ffffff;
  border: ${(props) => (props.isTransparent ? "1px solid #ffffff" : "none")};
  cursor: pointer;
  font-size: 17px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-top: 130px;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.8;
  }

  img {
    transform: ${(props) => (props.isTransparent ? "rotateY(180deg)" : "")};
  }
`;
