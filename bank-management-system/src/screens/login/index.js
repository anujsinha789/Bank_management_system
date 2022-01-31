import React from "react";
import style from "./style.module.css";

function Login() {
  return (
    <div className={style.root}>
      <div className={style.login_form_container}>
        <div className={style.avatar_container}>
          <div className={style.login_avatar}></div>
        </div>
        <div className={style.login_form}>
          <div className={style.email_input_container}>
            <input
              className={style.email_input}
              name="email"
              placeholder="Email"
              type="Email"
              required="true"
            />
          </div>
          <div className={style.password_input_container}>
            <input
              className={style.password_input}
              name="password"
              placeholder="Password"
              autoComplete="off"
              type="Email"
              required="true"
            />
          </div>
          <div className={style.btn_container}>
            <button type="button" class="btn btn-success">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
