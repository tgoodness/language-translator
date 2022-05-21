import { API_URL } from "./url";
import { AuthHeader } from "./config";
import axios from "axios";

export const Languages = async () => {
  return await axios.get(`${API_URL}/languages?api-version=3.0`);
};

export const Translate = async ({ text, destination, source }) => {
  return await axios.post(`${API_URL}/translate`, [{ text }], {
    params: {
      "api-version": "3.0",
      from: source,
      to: destination,
    },
    headers: {
      "Ocp-Apim-Subscription-Key": "13067c6465c64b4192f69d1a1da0837d",
      "Ocp-Apim-Subscription-Region": "eastus",
      "Content-type": "application/json",
    },
  });
};
