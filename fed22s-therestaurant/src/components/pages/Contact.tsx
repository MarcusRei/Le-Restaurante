import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faMobile } from "@fortawesome/free-solid-svg-icons";
import { OpenHours } from "../OpenHours/OpenHours";

export const Contact = () => {
  return (
    <div className="flex-column align-center gap-large">
      <span className="spacing medium"></span>
      <section className="flex-row gap-small">
        <button className="frontpage-button">
          <FontAwesomeIcon icon={faMobile} /> 08 - 89677
        </button>
        <button className="frontpage-button">
          <FontAwesomeIcon icon={faMailBulk} /> contact@lerestaurante.se
        </button>
      </section>

      <OpenHours />
    </div>
  );
};
