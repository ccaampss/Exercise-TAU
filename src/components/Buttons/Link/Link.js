import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonGoStyled = styled(Link)`
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
  background-color: #2e2e2e;
  border: 0;
  font-size: 1.1sem;
  border-radius: 20px;
  text-decoration: none;
  width: fit-content;
  text-align: center;
  margin: 0;
  padding: 10px 20px;

  color: #fff;
  &:hover {
    background-color: #000;
  }
`;

const ButtonGo = ({ text, to, icon }) => {
  return (
    <ButtonGoStyled to={to}>
      {icon}
      <p>{text}</p>
    </ButtonGoStyled>
  );
};
export default ButtonGo;
