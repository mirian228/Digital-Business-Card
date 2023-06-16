import profilePic from "../images/pic.png";
import emailIcon from "../images/Icon.png"
import linkedin from "../images/Vector.png"
function Header() {
  return (
    <header className="header">
      <img src={profilePic} alt="Profile Picture" className="profilePicture" />
      <h1 className="header--name">Mirian Surmanidze</h1>
      <h2 className="header--job">Full-Stack Developer</h2>
      <h3 className="header--website">github.com/mirian228</h3>
      <div className="header--buttons">
        <button className="header--buttons--email">
          <img src={emailIcon} alt="email icon" className="header--buttons--email--icon"></img>
          <a>Email</a>
        </button>
        <button className="header--buttons--linkedin">
          <img src={linkedin} alt="linkedin icon" className="header--buttons--linkedin--icon"></img>
          <a>LinkedIn</a>
        </button>
      </div>
    </header>
  );
}

export default Header;
