import { useState } from "react";
import { Icon } from "@iconify/react";
import CircularProgress from "@mui/material/CircularProgress";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Lady from "../assets/lady.png";
import Header from "./Header";
import Alert from "../components/Alert";
import translate from "./core/translate";
import logicHandler from "./core/LogicHandler";
import { langs } from "./core/languages";
import "./styles/index.scss";

function Index() {
  const [text, setText] = useState("");
  const [source, setSource] = useState("en");
  const [destination, setDestination] = useState("fr");
  const [state, handleSubmit, handleClose] = translate(
    text,
    source,
    destination
  );

  const [open, handleCopy, handleCloseC] = logicHandler();

  return (
    <div className='container'>
      <Header />
      <div className='row app'>
        <div className='col-md-6'>
          <div className='app-description'>
            <div className='lady-img animate__animated animate__fadeInDown'>
              <img src={Lady} alt='Lady' width='500' className='img-fluid' />
            </div>
            <div className='animate__animated animate__fadeInLeft'>
              <h2>Say no more to language hassle</h2>
              <h6>
                Professional translation scaled by technology and enhanced by
                human experts.
              </h6>
            </div>
          </div>
        </div>

        <div className='col-md-6'>
          <div className='translator'>
            <h4>Language Translator</h4>

            <div className='lang-text-container animate__animated animate__fadeInRight'>
              <>
                <div className='languages-container'>
                  <select
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                  >
                    {Object.keys(langs).map((key, i) => {
                      return key !== destination ? (
                        <option value={key} key={i}>
                          {langs[key]}
                        </option>
                      ) : null;
                    })}
                  </select>

                  <h6>
                    <Icon icon='ant-design:swap-right-outlined' height='25' />
                  </h6>
                  <select
                    onChange={(e) => setDestination(e.target.value)}
                    value={destination}
                  >
                    {Object.keys(langs).map((key, i) => {
                      return key !== source ? (
                        <option value={key} key={i}>
                          {langs[key]}
                        </option>
                      ) : null;
                    })}
                  </select>
                </div>
                <textarea
                  placeholder='Type to translate'
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
              </>
            </div>

            <div className='result'>
              <h5>Result</h5>
              <div className='content'>
                {state.loading ? (
                  // <Spinner color='light-blade' />
                  <div className='text-center p-3'>
                    <CircularProgress />
                  </div>
                ) : (
                  <>
                    <h6>{state.payload}</h6>

                    {state.payload && (
                      <h6>
                        <CopyToClipboard
                          text={state.payload}
                          onCopy={handleCopy}
                        >
                          <span>
                            COPY TEXT
                            <Icon icon='ic:sharp-content-copy' height='25' />
                          </span>
                        </CopyToClipboard>
                      </h6>
                    )}
                  </>
                )}
              </div>
            </div>

            <button
              className='btn btn-danger animate__animated animate__bounceIn'
              onClick={handleSubmit}
            >
              Translate
            </button>
          </div>
        </div>
      </div>

      <Alert open={state.open} msg={state.message} onClose={handleClose} />
      <Alert open={open} msg='Copied' onClose={handleCloseC} />
    </div>
  );
}

export default Index;
