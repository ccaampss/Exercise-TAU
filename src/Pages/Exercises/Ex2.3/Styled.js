import styled from "styled-components";

export const Styled = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 50px;
  padding: 5px;
  border-radius: 999px;
  background-color: white;
  gap: 10px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  .name {
    font-size: 1.1em;
    outline-width: 0;
    border: none;
    padding-left: 15px;
    border-radius: 999px;
  }
  .select {
    border: none;
    outline-width: 0;

    font-size: 1.1em;
    border-left: 1px solid rgb(46, 46, 46);
    padding-left: 15px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    aspect-ratio: 1/1;
    height: 80%;
    border: none;
    background-color: white;
    background-color: rgb(46, 46, 46);
    color: white;
    border-radius: 999px;
    padding: 5px;
    cursor: pointer;
    :hover {
      background-color: black;
    }
  }
  .submit {
    height: 100%;
  }
`;
