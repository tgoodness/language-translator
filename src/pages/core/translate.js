import { useReducer } from "react";
import { init, reducer } from "../../reducer/post";
import * as type from "../../reducer/action-type";
import { Translate } from "../../services/api";

function Request(text, source, destination) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch({ type: type.CLOSE_ALERT });
  };

  const [state, dispatch] = useReducer(reducer, init);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      dispatch({ type: type.VALIDATE, message: "All fields are required" });
      return;
    }

    dispatch({ type: type.LOADING });
    const params = { text, source, destination };
    Translate(params).then(
      (res) => {
        if (res.status === 200) {
          dispatch({
            type: type.SUCCESS,
            payload: res.data[0].translations[0].text,
          });
        } else {
          dispatch({ type: type.FAILED, message: res });
        }
      },
      (error) => {
        dispatch({ type: type.ERROR, message: error });
      }
    );
  };

  return [state, handleSubmit, handleClose];
}

export default Request;
