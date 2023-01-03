import axios from "axios";

export const Translate = async (params) => {
  return await axios.post("http://localhost:4000/translate", params);
};
