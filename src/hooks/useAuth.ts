import { useDispatch } from "react-redux";
import { AuthType, Token } from "../models";
import { getStorage, setStorge } from "../utils";
// import { signIn } from "../pages/Login/authSlice";

const useAuth = () => {
  const user = getStorage("token") as Token;
  return user;
};
export default useAuth;
