import { ReactComponent as PhoneIcon } from "../assets/phone-icon.svg";
import { ReactComponent as EmailIcon } from "../assets/email-icon.svg";
import { ReactComponent as LocationIcon } from "../assets/location-icon.svg";
import ProfilePhoto from "../assets/profile-photo.jpeg";
import TranslateIcon from "../assets/translate-icon.svg";

export default function Header({ myInfo, onTranslate }) {
  return (
    <div className="header">
      <div className="header-profile-photo">
        <img src={ProfilePhoto} alt={myInfo.name} className="profile-photo" />
        <button onClick={onTranslate}>
          <img className="button-translate" src={TranslateIcon} alt="" />
        </button>
      </div>
      <div className="my-info-container">
        <h1>{myInfo.name}</h1>
        <ul>
          <li>
            <PhoneIcon />
            <span>{myInfo.phone}</span>
          </li>
          <li>
            <EmailIcon />
            <span>{myInfo.email}</span>
          </li>
          <li>
            <LocationIcon />
            <span>
              {myInfo.location.city}, {myInfo.location.state},{" "}
              {myInfo.location.country}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
