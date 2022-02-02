/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { Link } from "react-router-dom";
import bankImg from "../../assets/bank_img.jpg";
import style from "./style.module.css";

function LandingPage() {
	return (
		<div className={style.root}>
			<div className={style["content-wrapper"]}>
				<div className={style["image-container"]}>
					<img src={bankImg} height={250} width={300} alt=""></img>
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
						<button type="button" className="btn btn-info">
							Get Started
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
