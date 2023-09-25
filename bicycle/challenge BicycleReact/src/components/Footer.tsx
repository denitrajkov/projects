import FooterList from "./FooterList";

type Props = {};

export default function Footer({}: Props) {
  const eventInfo = [
    "Enter Now",
    "Enter Info",
    "Course Map",
    "Race Pack",
    "Results",
    "FAQs",
    "Am I Regisstered?",
  ];
  const registartion = [
    "Volunteers",
    "Gallery",
    "Press",
    "Results",
    "Privacy Policy",
    "Service Plus",
    "Contacts",
  ];
  const shedule = [
    "Gallery",
    "About",
    "Videos",
    "Results",
    "FAQs",
    "FAQs",
    "Volunteers",
  ];
  return (
    <footer className="container-fluid bg-light py-5">
      <div className="row">
        <div className="col-3">
          <h5>Social share</h5>
          <ul className="d-flex list-unstyled ">
            <li className="mr-2 ">
              <a href="https://www.facebook.com/" target="blank">
                <i className="fab fa-facebook-f btn-warning text-white socialIcons"></i>
              </a>
            </li>

            <li className="mr-2">
              <a href="https://www.instagram.com/ " target="blank">
                <i className="fab fa-instagram  btn-warning text-white socialIcons"></i>
              </a>
            </li>
            <li className="mr-2">
              <a href="https://twitter.com/" target="blank">
                <i className="fab fa-twitter  btn-warning text-white socialIcons"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" target="blank">
                <i className="fab fa-linkedin-in  btn-warning text-white socialIcons"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <h5>Event info</h5>
          <ul className="p-0 list-unstyled">
            {eventInfo.map((item, index) => (
              <FooterList key={index} text={item} />
            ))}
          </ul>
        </div>
        <div className="col-3">
          <h5>Registration</h5>
          <ul className="p-0 list-unstyled">
            {registartion.map((item, index) => (
              <FooterList key={index} text={item} />
            ))}
          </ul>
        </div>
        <div className="col-3">
          <h5>Shedule</h5>
          <ul className="p-0 list-unstyled">
            {shedule.map((item, index) => (
              <FooterList key={index} text={item} />
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
