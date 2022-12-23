import axios from "axios";

const dataBase = "http://127.0.0.1:8000";

//Login
export const loginUser = async (user) => {
  let res = await axios.post(dataBase + "/users/login", user);
  return res;
};

//Register
export const registerUser = async (user) => {
  let res = await axios.post(dataBase + "/users/register", user);
  return res;
};

//Logout
export const logOut = async () => {
  let res = await axios.post(dataBase + "/user/logout");
};

//getAllOfferts
export const giveOfferts = async () => {
  let res = await axios.get(dataBase + "/offers");
  return res;
};

// getAllCodes
export const giveAllCodes = async () => {
  let res = await axios.get(dataBase + "/codes");
  return res;
};

//generateNewCode
export const generateCode = async (offer_id) => {
  let res = await axios.post(dataBase + "/code/new", offer_id);
  return res;
};
