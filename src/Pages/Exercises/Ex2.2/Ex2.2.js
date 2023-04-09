// Implement an interface where use can set a combination of a lock. Design the interface to be easy to use. Utilise Material-UI components.

import { Button, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { Styled } from "./Styled";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Confetti from "react-confetti";

const Ex2_2Page = () => {
  const NUMBER_OF_LEDS = 4;
  const initialState = Array(NUMBER_OF_LEDS).fill("0");
  const [combination, setCombination] = useState(initialState);
  const [isCorrectCombination, setIsCorrectCombination] = useState(false);

  const [correctCombination, setCorrectCombination] = useState([
    "1",
    "2",
    "3",
    "4",
  ]);

  useEffect(() => {
    const isCorrectCombination = () => {
      const combinationString = combinationToString(combination);
      const correctCombinationString = combinationToString(correctCombination);
      if (combinationString === correctCombinationString) {
        setIsCorrectCombination(true);
      } else {
        setIsCorrectCombination(false);
      }
    };
    isCorrectCombination();
  }, [combination, correctCombination]);

  //
  const handleNewCorrrectCombination = (e) => {
    const { value } = e.target;
    const newCombination = value.split("");
    if (newCombination.length > NUMBER_OF_LEDS) return;
    // only allow 0-9
    const isNumber = (char) => {
      const charCode = char.charCodeAt(0);
      // utf-8 0 is 48 and 9 is 57
      return charCode >= 48 && charCode <= 57;
    };
    if (!newCombination.every(isNumber)) return;
    setCorrectCombination(newCombination);
  };
  const combinationToString = (combination) => {
    return combination.join("");
  };

  const handleIncrementNumber = (index) => {
    const newCombination = [...combination];
    const number = parseInt(newCombination[index]);
    const newNumber = (number + 1) % 10;
    newCombination[index] = newNumber.toString();
    setCombination(newCombination);
  };

  const handleDecrementNumber = (index) => {
    const newCombination = [...combination];
    const number = parseInt(newCombination[index]);
    const newNumber = (number - 1 + 10) % 10;
    newCombination[index] = newNumber.toString();
    setCombination(newCombination);
  };

  return (
    <Styled>
      <div className="set">
        <label>Correct Combination</label>
        <input
          autoComplete="off"
          label="Current password"
          value={combinationToString(correctCombination)}
          onChange={handleNewCorrrectCombination}
        />
      </div>

      {correctCombination.length !== NUMBER_OF_LEDS ? (
        <>
          <p>Please enter a combination of {NUMBER_OF_LEDS} numbers</p>
          <section className="lockerDisabled">
            {combination.map((led, index) => (
              <article className="ledContainer" key={`${led}-${index}`}>
                <Button
                  className="increment"
                  variant="contained"
                  style={{
                    pointerEvents: "none",
                  }}
                >
                  <IoIosArrowUp size={18} />
                </Button>
                <div className="led">{led}</div>
                <Button
                  className="decrement"
                  variant="contained"
                  style={{
                    pointerEvents: "none",
                  }}
                >
                  <IoIosArrowDown size={18} />
                </Button>
              </article>
            ))}
          </section>
        </>
      ) : (
        <section className="locker">
          {combination.map((led, index) => (
            <article className="ledContainer" key={`${led}-${index}`}>
              <Tooltip title="Increment this number">
                <Button
                  className="increment"
                  variant="contained"
                  onClick={() => handleIncrementNumber(index)}
                >
                  <IoIosArrowUp size={18} />
                </Button>
              </Tooltip>
              <div className="led">{led}</div>
              <Tooltip title="Decrement this number">
                <Button
                  className="decrement"
                  variant="contained"
                  onClick={() => handleDecrementNumber(index)}
                >
                  <IoIosArrowDown size={18} />
                </Button>
              </Tooltip>
            </article>
          ))}
        </section>
      )}

      {isCorrectCombination && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
    </Styled>
  );
};

export default Ex2_2Page;
