import axios from "axios";

const dataBase = "http://localhost:3001";

export const loginUser = async (user) => {
  let res = await axios.post(dataBase + "/auth/login", user);
  return res;
};

export const registerUser = async (user) => {
  let res = await axios.post(dataBase + "/auth/register", user);
  return res;
};

export const giveOfferts = async () => {
  let res = await axios.get(dataBase + "/offerts");
  return res;
};

export const giveAllCodes = async (user) => {
  let res = await axios.get(dataBase + "/allCodes", user);
  return res;
};

export const giveMinePromotionalCode = async (user) => {
  let res = await axios.get(dataBase + "/mineCodes", user);
  return res;
};

export const generateCode = async (user) => {
  let res = await axios.post(dataBase + "/generateCode", user);
  return res;
};
