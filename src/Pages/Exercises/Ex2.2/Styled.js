import styled from "styled-components";

export const Styled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  .set {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: white;
    padding: 5px;
    border-radius: 999px;
    label {
      padding-left: 15px;
    }
    input {
      border: 1px solid rgb(46, 46, 46);
      font-size: 1.6em;
      width: 90px;
      outline-width: 0;
      padding-left: 15px;
      border-radius: 999px;
    }
  }
  .currentSentence {
    display: flex;
    flex-direction: gap;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 0 auto;
    padding: 5px 15px;
    border-radius: 999px;
    background-color: white;
    p {
      font-size: 1em;
      margin: 0;
      padding: 0;
    }
    span {
      font-weight: bold;
    }
  }

  .locker {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    gap: 10px;
    min-height: 100px;
    margin: 0 auto;
    padding: 10px;
    border: 2px solid rgb(46, 46, 46);
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0.1);
    .ledContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      gap: 10px;
      button {
        color: rgb(46, 46, 46);
        border: 2px solid rgb(46, 46, 46);
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
        aspect-ratio: 1/1;
        height: 30px;
        border-radius: 40px;
        outline: none;
      }
      .increment {
        margin-top: -50%;
      }
      .decrement {
        margin-bottom: -50%;
      }
      .led {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 3em;
        width: 50px;
        border-radius: 20px;
        background-color: black;
      }
    }
  }
  .lockerDisabled {
    user-select: none;
    opacity: 0.5;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    gap: 10px;
    min-height: 100px;
    margin: 0 auto;
    padding: 10px;
    border: 2px solid rgb(46, 46, 46);
    border-radius: 30px;
    background-color: rgba(255, 255, 255, 0.5);
    .ledContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      gap: 10px;
      button {
        color: rgb(46, 46, 46);
        border: 2px solid rgb(46, 46, 46);
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
        aspect-ratio: 1/1;
        height: 30px;
        border-radius: 40px;
        outline: none;
      }
      .increment {
        margin-top: -50%;
      }
      .decrement {
        margin-bottom: -50%;
      }
      .led {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 3em;
        width: 50px;
        border-radius: 20px;
        background-color: black;
      }
    }
  }
`;
