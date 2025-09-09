import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faCube,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faApplePay,
  faGooglePay,
  faCcMastercard,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";

export const FirstColumnText = [
  {
    icon: <FontAwesomeIcon icon={faPhone} />,
    title: "Phone: ",
    text: "070 555 55 55",
  },
  {
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    title: "Email: ",
    text: "otterbayco@fake-email.com",
  },
  {
    icon: <FontAwesomeIcon icon={faLocationDot} />,
    title: "Address: ",
    text: (
      <>
        55 Fake Street <br />
        Fakesville 12345 <br />
        Fakeland
      </>
    ),
  },
];

export const SecondColumnIcons = [
  <FontAwesomeIcon icon={faApplePay} size="2x" />,
  <FontAwesomeIcon icon={faGooglePay} size="2x" />,
  <FontAwesomeIcon icon={faCcMastercard} size="2x" />,
  <FontAwesomeIcon icon={faCcVisa} size="2x" />,
];

export const SecondColumnText = [
  {
    title: "Delivery Cost",
    text: "Delivery and return by FakePost 49kr. Home Delivery with FakePost 79kr.",
    icon: <FontAwesomeIcon icon={faTruck} />,
  },
  {
    title: "Free Delivery",
    text: "Free standard shipping and home deliveries within Fakeland when you shop for at least 800kr.",
    icon: <FontAwesomeIcon icon={faTruck} />,
  },
  {
    title: "Returns",
    text: "We have an open purchase period of 30 days from the date you receive the item, provided it is unused and returned in undamaged condition.",
    icon: <FontAwesomeIcon icon={faCube} />,
  },
];
