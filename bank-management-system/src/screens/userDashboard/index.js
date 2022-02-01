import React from "react";
import { Link } from "react-router-dom";
import bank_img from "../../assets/bank_img.jpg";
import { useSelector, useDispatch } from "react-redux";
import style from "./style.module.css";
function UserDashboard() {
  const { username } = useSelector((state) => ({
    username: state.authentication.username,
  }));

  return (
    <div className={style.root}>
      <div className={style["content-wrapper"]}>
        <div className={style["image-container"]}>
          {/* <img src={bank_img} height={300} width={400}></img> */}
        </div>
        <div className={style["heading-container"]}>
          <span className={style.heading}>Hello {username}</span>
        </div>
        <div className={style["description-container"]}>
          <span className={style.description}>What would you like to do?</span>
        </div>
        <div className={style.btn_container}>
          <Link to="/loanApplication">
            <button type="button" class="btn btn-info">
              Apply for a loan
            </button>
          </Link>
          <div
            style={{
              padding: "0.5rem",
              fontFamily: "consolas",
              fontWeight: "bold",
            }}
          >
            {" "}
            OR{" "}
          </div>
          <Link to="/editUserDetails">
            <button type="button" class="btn btn-success">
              Edit User details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
