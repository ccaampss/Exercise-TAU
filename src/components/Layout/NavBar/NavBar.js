import { BsLinkedin, BsGithub } from "react-icons/bs";
import { TbArrowBackUp } from "react-icons/tb";
import ButtonGo from "../../Buttons/Link/Link";
import { LinkIconsStyled, NavBarStyled } from "./NavBarStyled";

const NavBar = ({ hasButton = true }) => {
  return (
    <NavBarStyled>
      <section className="left">
        {hasButton && (
          <ButtonGo text="Go back" to="/" icon={<TbArrowBackUp />} />
        )}
      </section>
      <section className="right">
        <div className="profile">
          <div className="text">
            <p>Anna Camps</p>
            <div className="links">
              <LinkIconsStyled to="https://github.com/ccaampss">
                <BsGithub size={20} />
              </LinkIconsStyled>
              <LinkIconsStyled to="https://www.linkedin.com/in/annnacamps/">
                <BsLinkedin size={20} />
              </LinkIconsStyled>
            </div>
          </div>
          <img
            className="profile__img"
            src="https://avatars.githubusercontent.com/u/94074414?s=64&v=4"
            alt="profile"
          />
        </div>
      </section>
    </NavBarStyled>
  );
};
export default NavBar;
