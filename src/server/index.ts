import axios from "axios";
import config from "config";

const getImageAvatarUrl = () => {
  return axios.get(config.api_randomuser);
};

const getHoroscopeUser = () => {
  return axios.get(config.api_horoscope);
};

const server = {
  getImageAvatarUrl,
  getHoroscopeUser
};

export default server;
