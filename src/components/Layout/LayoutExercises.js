import { H1 } from "../Texts/H1/H1";
import { LayoutStyled } from "./LayoutExercisesStyled";
import NavBar from "./NavBar/NavBar";

const LayoutExercises = ({ children, title, subtitle }) => {
  return (
    <>
      <NavBar />
      <LayoutStyled>
        <H1>{title}</H1>
        <h2>{subtitle}</h2>
        {children}
      </LayoutStyled>
    </>
  );
};

export default LayoutExercises;
