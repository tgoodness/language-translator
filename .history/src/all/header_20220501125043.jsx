import Logo from "../assets/logo.png";

function header() {
  return (
    <div className="header">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
}

export default header;
