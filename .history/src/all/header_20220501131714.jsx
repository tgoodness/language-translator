import  Logo from "../assets/logo.png";
import StudentAvater  from "../assets/avater.png";
function header() {
  return (
    <div className="header">
      <div>
        <img src={Logo} className="img-" alt="Logo" />
      </div>

      <div>
        <span>
          Student <img src={StudentAvater} alt="Student Avater" />
        </span>
      </div>
    </div>
  );
}

export default header;
