import util from '../helpers/util';
import * as type from './';

export const init = {
  loading: false,
  open: false,
  message: '',
  payload: {},
  success: false,
  code: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case type.LOADING:
      return { ...state, open: false };
    case type.SUCCESS:
      return {
        loading: false,
        open: false,
        message: 'success',
        payload: action.payload,
        success: true,
        code: action.code,
      };
    case type.FAILED:
      return {
        ...state,
        loading: false,
        open: true,
        message: action.message.data.message,
        code: action.code,
      };
    case type.ERROR:
      return {
        ...state,
        loading: false,
        open: true,
        message: util.requestError(action.message),
        code: action.code,
      };
    case type.CLOSE_ALERT:
      return { ...state, open: false };
    default:
      return state;
  }
};
