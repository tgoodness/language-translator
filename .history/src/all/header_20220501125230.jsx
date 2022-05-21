import { default as Logo, default as StudentAvater } from "../assets/logo.png";
function header() {
  return (
    <div className="header">
      <div>
        <img src={Logo} alt="Logo" />
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
