import { useDispatch } from "react-redux";
import { UserType } from "../models";
import { getStorage } from "../utils";
import { signIn } from "../pages/Login/authSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  const user = getStorage("user") as UserType;
  dispatch(signIn(user));
  return user;
};
export default useAuth;
