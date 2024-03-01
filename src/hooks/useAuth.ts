import { AuthType } from "../models";
import { getStorage } from "../utils";

const useAuth = () => {
  const user = getStorage("token") as AuthType;
  return user;
};
export default useAuth;
