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
