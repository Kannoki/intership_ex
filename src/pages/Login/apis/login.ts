import { setStorge } from "../../../utils";

const login = (username: string, password: string) => {
  const user = { username, password };
  setStorge("user", JSON.stringify(user));
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("login success");
    }, 2000)
  );
};
export default login;
