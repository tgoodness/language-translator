/* eslint-disable no-unused-vars */
/**
 * @author
 *  Tobiloba Akinyemi
 */
const Deebezt = {
  requestError(error) {
    if (error.response) {
      return error.response.data.error.message;
    } else {
      return error.message;
    }
  },
};

export default Deebezt;
