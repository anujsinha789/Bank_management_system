import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import bankImg from "../../assets/bank_img.jpg";
import { logoutUser, resetData } from "../../redux/actions/authentication";
import style from "./style.module.css";

function UserDashboard() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(logoutUser());
		dispatch(resetData());
		navigate("/", { replace: true });
	};
	const { username } = useSelector((state) => ({
		username: state.authentication.username,
	}));

	return (
		<div className={style.root}>
			<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link" onClick={handleLogout} href="/">
									Logout
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className={style["content-wrapper"]}>
				<div className={style["image-container"]}>
					<img src={bankImg} height={225} width={300} alt=""></img>
				</div>
				<div className={style["heading-container"]}>
					<span className={style.heading}>Hello {username}</span>
				</div>
				<div className={style["description-container"]}>
					<span className={style.description}>What would you like to do?</span>
				</div>
				<div className={style.btn_container}>
					<Link to="/loanApplication">
						<button type="button" className="btn btn-info">
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
						<button type="button" className="btn btn-success">
							Edit User details
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default UserDashboard;
