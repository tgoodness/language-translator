import Logo from "../assets/logo.png";
import LAogo from "../assets/logo.png";
function header() {
  return (
    <div className="header">
      <div>
        <img src={Logo} alt="Logo" />
      </div>

      <div>
        <span>
          Student <img src={Logo} alt="Logo" />
        </span>
      </div>
    </div>
  );
}

export default header;
