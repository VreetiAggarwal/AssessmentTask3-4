import { useState } from "react";
import { forgotPwd } from "../../api/auth";
import classes from "./Login.module.css";

//TASK 4 --> Page for Password Recovery Email using Nodemailer

export default function Password() {
  const [userInfo, setUserInfo] = useState({
    email: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (email) => {
    const user = await forgotPwd({ email });
    console.log(user);

    if (!user) {
      const err = "Invalid email!";
      setErrorMsg(err);
    } else {
      const err = "Email sent";
      setErrorMsg(err);
    }
  };

  const handleChange = async (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleLogin(userInfo.email);
  };

  return (
    <div className={classes.pg}>
      <div className={classes.login}>
        <div className={classes.container}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.title}>
              <h1 className={classes.title}>Password Recovery</h1>
            </div>
            <div class={classes.content}>
              <div class={classes.input}>
                <input
                  className={classes.col}
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
              <div></div>
              <button className={classes.btn2}>Send mail</button>
            </div>
            {errorMsg && <p className={classes.p}>{errorMsg}</p>}
            <p className={classes.p}></p>
          </form>
        </div>
      </div>
    </div>
  );
}
