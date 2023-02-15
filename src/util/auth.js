import axios from "axios";

const API_KEY = "AIzaSyA8Gn88Ez65pdi3lcdxTWwWE2Dmj2Pl2w0";

const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;
  return token;
};

// export const createUser = async (email, password) => {
//   await authenticate("signUp", email, password);
// };
// export const login = async (email, password) => {
//   await authenticate("signInWithPassword", email, password);
// };

// Here we can simply remove the async and await and return the function derectly
export const createUser = (email, password) => {
  return authenticate("signUp", email, password);
};
export const login = (email, password) => {
  return authenticate("signInWithPassword", email, password);
};
