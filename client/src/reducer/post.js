import * as type from './action-type';
import util from "../helpers/util";

export const init = {
  loading: false,
  open: false,
  message: "",
  success: false,
  payload: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case type.LOADING:
      return { ...state, loading: true };
    case type.SUCCESS:
      return {
        loading: false,
        open: false,
        message: "",
        success: true,
        payload: action.payload,
      };
    case type.FAILED:
      return {
        loading: false,
        open: true,
        message: action.message,
        success: false,
      };
    case type.ERROR:
      return {
        loading: false,
        open: true,
        message: util.requestError(action.message),
        success: false,
      };
    case type.CLOSE_ALERT:
      return { ...state, open: false };

    case type.VALIDATE:
      return {
        loading: false,
        open: true,
        message: action.message,
        success: false,
      };
    default:
      return state;
  }
};
