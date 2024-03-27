import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Logo } from "./Logo/Logo";

export const Footer = () => {
  return (
    <footer className="flex-row align-center">
      <div className="logo-wrapper footer">
        <Logo></Logo>
      </div>
      <section>
        <article className="address">
          <div>Adressvägen 7</div>
          <div>Stockholm 191 91</div>
        </article>
      </section>

      <section>
        <a href="https://about.meta.com/?campaign_id=10823226391&extra_1=s%7Cc%7C456266717494%7Ce%7Cfacebook%27%7C&placement=&creative=456266717494&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D10823226391%26adgroupid%3D108018426698%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D9062456%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjw1YCkBhAOEiwA5aN4AcTp4O7thfP2P90JMcYmyVxgJA3vlpEvq9t88SjrqvAX3OdkNsWJphoCYccQAvD_BwE">
          <FontAwesomeIcon icon={faFacebook} />
        </a>

        <a href="https://about.meta.com/?campaign_id=10823226391&extra_1=s%7Cc%7C456266717494%7Ce%7Cfacebook%27%7C&placement=&creative=456266717494&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D10823226391%26adgroupid%3D108018426698%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D9062456%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjw1YCkBhAOEiwA5aN4AcTp4O7thfP2P90JMcYmyVxgJA3vlpEvq9t88SjrqvAX3OdkNsWJphoCYccQAvD_BwE">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </section>
    </footer>
  );
};
