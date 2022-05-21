import  Logo from "../assets/logo.png";
import StudentAvater  from "../assets/avater.png";
function header() {
  return (
    <div className="header">
      <div>
        <img src={Logo} width="100" alt="Logo" />
      </div>

      <div>
        <span>
          Student <img src={StudentAvater} width="100" alt="Student Avater" />
        </span>
      </div>
    </div>
  );
}

export default header;
