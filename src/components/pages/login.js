import { useEffect, useState } from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";
import { signInUser, forgotPwd } from "../../api/auth";
import { Navigate, useNavigate } from "react-router-dom";
import smartserv from "../images/smartserv.png";

//TASK 3 --> Login page with Validation and only directs to the dashboard for the given password

export default function Login() {
  const navigate = useNavigate();

  //Setting data of the form
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  //Fetching data from the backend using Axios.
  const handleLogin = async (email, password) => {
    const user = await signInUser({ email, password });
    const admin = "SmartServTest@123";

    if (!user) {
      const err = "Invalid Credentials!";
      setErrorMsg(err);
    } else if (password === "SmartServTest@123") {
      navigate("/home");
    } else {
      const err = "You cannot access the dashboard!";
      setErrorMsg(err);
    }
  };

  const handleChange = async (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userInfo.email);
    handleLogin(userInfo.email, userInfo.password);
  };

  const forgot = async (e) => {
    console.log(userInfo.email);
    forgotPwd(userInfo.email);
  };

  return (
    <div className={classes.bg}>
      <div className={classes.login}>
        <div></div>
        <div className={classes.container}>
          <div className={classes.logo}>
            <img src={smartserv} className={classes.img} />
          </div>
          <form className={classes.form} onSubmit={handleSubmit}>
            <div class={classes.content}>
              <div class={classes.input}>
                <input
                  className={classes.col}
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleChange}
                  placeholder="Username"
                />
              </div>
            </div>
            <div class={classes.content}>
              <div class={classes.input}>
                <input
                  className={classes.col}
                  type="password"
                  name="password"
                  value={userInfo.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <button className={classes.btn}>Login</button>
            </div>
            {errorMsg && <p className={classes.p}>{errorMsg}</p>}
            <p className={classes.p}></p>
          </form>
          <Link className={classes.link} to="/password">
            Forgot your password?{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
