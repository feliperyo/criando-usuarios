import styled from "styled-components";
import Background from "../../assets/bg-image.png";

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
  color: #ffffff;
`;

export const ArrowImg = styled.img`
  width: 22.95px;
  height: 18.93px;
`;
