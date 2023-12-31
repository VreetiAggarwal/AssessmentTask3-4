import client from "./client";

export const createUser = async (userInfo) => {
  try {
    const { data } = await client.post("/user/create", userInfo);
    return data;
  } catch (err) {
    console.log(err);
  }
};

//for sign in function
export const signInUser = async (userInfo) => {
  try {
    const data = await client.post("/user/sign", userInfo);
    return data;
  } catch (err) {
    console.log(err);
  }
};

//for forgot password function
export const forgotPwd = async (userInfo) => {
  try {
    console.log(userInfo.email);
    const data = await client.post("/user/forgotPassword", userInfo);
    return data;
  } catch (err) {
    console.log(err);
  }
};
