import { FunctionComponent, useState } from "react";
import styles from "./Login.module.scss";
import { Input, Button } from "antd";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { login } from "./authSlice";
// import { login } from "../app/reducers/authSlice";

const Desktop: FunctionComponent = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch()

  const token = useAppSelector(state => state.auth.token)
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)
  console.log("token",token)
  // const error = useAppSelector(state => state.auth.error)


  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleClick = () => {
    if(!username || !password) {
      alert("Username or password is mising")
      return
    }
    dispatch(login({
      username, password
    }))
    if (isAuthenticated)
    {
      alert("Login successfully!")
    }
  }

  return (
    <div className={styles.desktop9}>
      <form className={styles.mindPortalParent}>
        <div className={styles.mindPortal}>
          <b className={styles.mind}>MIND</b>
          <span className={styles.span}>{` `}</span>
          <span className={styles.portal}>PORTAL</span>
        </div>
        <div className={styles.usernamePasswordParent}>
          <Input
            className={styles.username}
            placeholder="Username"
            bordered={true}
            onChange={handleUsernameChange}
          />
          <Input
            className={styles.password}
            placeholder="Password"
            bordered={true}
            onChange={handlePasswordChange}
          />
        </div>
        <div className={styles.loginTextParent}>
          <Button type="primary" className={styles.loginText} onClick={handleClick}>
            LOGIN
          </Button>
          <div className={styles.alreadyHaveAccountContainer}>
            <span
              className={styles.alreadyHaveAccount}
            >{`Already have account? `}</span>
            <span className={styles.loginHere}>Login here</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Desktop;
