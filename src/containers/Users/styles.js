import styled from "styled-components";
import Background from "../../assets/bg-image-2.png";

export const Container = styled.div`
  background-image: url("${Background}");
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;

export const Image = styled.img`
  margin-top: 83px;
  margin-bottom: 30px;
`;

export const ContainerItems = styled.main`
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  backdrop-filter: blur(45px);
  border-radius: 61px 61px 0px 0px;
  padding: 50px 36px;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 150px);
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

export const Button = styled.button`
  width: 342px;
  height: 74px;
  border-radius: 14px;
  background: transparent;
  color: #ffffff;
  border: 1px solid #ffffff;
  cursor: pointer;
  font-size: 17px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-top: 120px;

  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.8;
  }

  img {
    transform: rotateY(180deg);
  }
`;

export const ArrowImg = styled.img`
  width: 22.95px;
  height: 18.93px;
`;

export const User = styled.li`
  width: 342px;
  height: 58px;
  border-radius: 14px;
  background: #ffffff40;
  box-shadow: 0px 4px 4px 0px #00000040;
  padding: 15px 20px 15px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  p {
    color: #ffffff;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0px;
    text-align: left;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
