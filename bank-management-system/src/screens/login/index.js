import React from "react";
import { Checkbox } from "@material-ui/core";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import LoginIcon from "@mui/icons-material/Login";

function Login() {
  const [checked, setChecked] = React.useState(false);
  return (
    <div className={style.root}>
      <div className={style.login_form_container}>
        <div className={style.avatar_container}>
          <div className={style.login_avatar}>
            <h2 className={style.login_text}>Login</h2>
            <LoginIcon style={{ height: "5vh", width: "5vw" }} />
          </div>
        </div>
        <div className={style.login_form}>
          <div className={style.email_input_container}>
            <input
              className={style.email_input}
              name="email"
              placeholder="Email"
              autoComplete="off"
              type="Email"
              required="true"
            />
          </div>
          <div className={style.password_input_container}>
            <input
              className={style.password_input}
              name="password"
              placeholder="Password"
              type="password"
              required="true"
            />
          </div>
          <div className={style.btn_container}>
            <div className={style.rememeberMeCheckbox}>
              <Checkbox
                checked={checked}
                onChange={() => {
                  setChecked(() => !checked);
                }}
                inputProps={{ "aria-label": "Remember Me" }}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                style={{ color: "black" }}
              />
              Remember Me
            </div>
            <button type="button" class="btn btn-success">
              Login
            </button>
          </div>
          <div className={style.footer_container}>
            <span className={style.footer_text}>
              New Member ? <Link to="/signup">Sign-up</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
