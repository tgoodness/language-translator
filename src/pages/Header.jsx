import Logo from "../assets/logo.png";
import StudentPhoto from "../assets/avater.png";
import aboutMeModal from "./core/ModalHandler";
import AboutMe from "./AboutMe";
import "./styles/header.scss";

function header() {
  const [visible, showModal, handleCancel] = aboutMeModal();
  return (
    <>
      <div className='header animate__animated animate__fadeInDown'>
        <div>
          <img src={Logo} width='100' alt='Logo' />
        </div>

        <div>
          <span onClick={showModal}>
            Student <img src={StudentPhoto} width='100' alt='Student Avater' />
          </span>
        </div>
      </div>
      <AboutMe visible={visible} handleCancel={handleCancel} />
    </>
  );
}

export default header;
