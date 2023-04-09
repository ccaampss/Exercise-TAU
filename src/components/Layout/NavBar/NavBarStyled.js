import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkIconsStyled = styled(Link)`
  text-decoration: none;
  color: #404040;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    color: black;
  }
`;

export const NavBarStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d0d0d0;
  padding: 10px;
  .left {
    display: flex;
    justify-content: flex-start;
  }
  .right {
    display: flex;
    justify-content: flex-end;
    .profile {
      display: flex;
      gap: 15px;
      &__img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .text {
        p {
          margin: 0;
        }
        display: flex;
        flex-direction: column;
        gap: 5px;
        .links {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 5px;
        }
      }
    }
  }
`;
