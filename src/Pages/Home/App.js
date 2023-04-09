import { TbNumber1, TbNumber2, TbNumber3, TbNumber4, TbNumber5 } from "react-icons/tb";
import ButtonGo from "../../components/Buttons/Link/Link";
import NavBar from "../../components/Layout/NavBar/NavBar";
import { H1 } from "../../components/Texts/H1/H1";
import "./AppStyled.js";
import { AppStyled } from "./AppStyled.js";

function App() {
  return (
    <>
      <NavBar hasButton={false} />
      <AppStyled>
        <H1>Welcome to Anna's exercises webpage</H1>
        <div className="buttons">
          <ButtonGo
            text="Go to exercise 1.3"
            to="/ex1.3"
            icon={<TbNumber1 />}
          />
          <ButtonGo
            text="Go to exercise 2.2"
            to="/ex2.2"
            icon={<TbNumber2 />}
          />
          <ButtonGo
            text="Go to exercise 2.3"
            to="/ex2.3"
            icon={<TbNumber3 />}
          />
          <ButtonGo
            text="Go to exercise 3.3"
            to="/ex3.3"
            icon={<TbNumber4 />}
          />
          <ButtonGo
            text="Go to exercise 4.3"
            to="/ex4.3"
            icon={<TbNumber5 />}
          />
        </div>
      </AppStyled>
    </>
  );
}

export default App;
