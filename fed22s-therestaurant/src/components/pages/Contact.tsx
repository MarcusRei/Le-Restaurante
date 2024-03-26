import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faMobile } from "@fortawesome/free-solid-svg-icons";
import { OpenHours } from "../OpenHours/OpenHours";

export const Contact = () => {
  return (
    <div className="flex-column align-center gap-medium">
      <span className="spacing medium"></span>
      <div>
        <div className="flex-row justify-center">
          <h2>Kontakta oss gärna!</h2>
        </div>
        <section className="flex-row gap-small">
          <button className="primary-button">
            <FontAwesomeIcon icon={faMobile} /> 08 - 89677
          </button>
          <button className="primary-button">
            <FontAwesomeIcon icon={faMailBulk} /> contact@lerestaurante.se
          </button>
        </section>
      </div>

      <OpenHours />
    </div>
  );
};
