import Lady from "../assets/lady.png";
function Index() {
    return (
        <div>
            
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={Lady} alt="Lady" />

          <div className="app-description">
            <h2>Say no more to language hassle</h2>

            <h5>
              Professional translation scaled by technology and enhanced by
              human experts.
            </h5>
          </div>
        </div>

        <div className="col-md-6">
          <h4>Language Translator</h4>

          <div className="lang-text-container">
            <div className="languages-container">
              <h6>
                English <span>@</span>
              </h6>
              <h6>
                <span>-</span>
              </h6>
              <h6>
                Hausa<span>-</span>
              </h6>
            </div>
          </div>

          <div className="result">
            <h5>Result</h5>
            <div></div>
          </div>

          <button>Translate</button>
        </div>
      </div>
            </div>
             </div>
  );
}

export default Index;
