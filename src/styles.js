import styled from "styled-components";
import Background from "./assets/bg-image.png";

export const Container = styled.div`
  background-image: url("${Background}");
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const ContainerItems = styled.main`
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 61px 61px 0px 0px;
  padding: 50px 36px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const H1 = styled.h1`
  font-size: 34px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0px;
  text-align: center;
  margin-bottom: 80px;
  color: #ffffff;
`;

export const InputLabel = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.40799999237060547px;
  text-align: left;
  color: #eeeeee;
  margin-left: 25px;
`;

export const Input = styled.input`
  border-radius: 14px;
  background: #ffffff40;
  box-shadow: 0px 4px 4px 0px #00000040;
  padding: 15px 20px 15px 25px;
  width: 342px;
  height: 58px;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0px;
  border: none;
  outline: none;
  margin-bottom: 34px;
`;

export const Button = styled.button`
  width: 342px;
  height: 74px;
  border-radius: 14px;
  background: #000000cc;
  color: #ffffff;
  border: none;
  cursor: pointer;
  font-size: 17px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.8;
  }
`;

export const ArrowImg = styled.img`
  width: 22.95px;
  height: 18.93px;
`;
