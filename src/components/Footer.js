import twitterIcon from "../images/Twitter Icon.png";
import facebookIcon from "../images/Facebook Icon.png";
import instagramIcon from "../images/Instagram Icon.png";
import githubIcon from "../images/GitHub Icon.png";
function Footer() {
  return (
    <footer className="footer">
      <img src={twitterIcon} alt="twitter icon" className="footer--twitterIcon"></img>
      <img src={facebookIcon} alt="facebook icon" className="footer--facebookIcon"></img>
      <img src={instagramIcon} alt="instagram icon" className="footer--instagramIcon"></img>
      <img src={githubIcon} alt="github icon" className="footer--githubIcon"></img>
    </footer>
  );
}

export default Footer;
