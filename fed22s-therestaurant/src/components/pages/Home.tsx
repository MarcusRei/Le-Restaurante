import { Logo } from "../Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { OpenHours } from "../OpenHours/OpenHours";

export const Home = () => {
  return (
    <>
      <div className="flex-column align-center">
        <Logo></Logo>
        <p className="frontpage-paragraph">
          En äkta italiensk ristorante med rötter från Trieste. Hos oss får du
          det italienska köket när det är som bäst, i en familjär och trivsam
          miljö. Välkomna att boka bord!
        </p>
        <section className="flex-row gap-small">
          <button className="frontpage-button">
            <FontAwesomeIcon icon={faMobile} /> 08 - 89677
          </button>
          <button className="frontpage-button">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> BORDSBOKNING
          </button>
        </section>

        <OpenHours />
      </div>
    </>
  );
};
