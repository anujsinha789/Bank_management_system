import React from "react";
import { Link } from "react-router-dom";
import bank_img from "../../assets/bank_img.jpg";
import style from "./style.module.css";
function LandingPage() {
  return (
    <div className={style.root}>
      <div className={style["content-wrapper"]}>
        <div className={style["image-container"]}>
          {/* <img src={bank_img} height={300} width={400}></img> */}
        </div>
        <div className={style["heading-container"]}>
          <span className={style.heading}>Bank Management System</span>
        </div>
        <div className={style["description-container"]}>
          <span className={style.description}>
            All your banking services at one place!
          </span>
        </div>
        <div className="style.get-started-btn-container">
          <Link to="/login">
            <button type="button" class="btn btn-info">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
