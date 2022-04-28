import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import bankImg from "../../assets/bank_img.jpg";
import ResponsiveAppBar from "../../components/atomic/navbar";
import CustomizedSnackbars from "../../components/atomic/snackbar";
import { logoutUser, resetData } from "../../redux/actions/authentication";
import style from "./style.module.css";

function UserDashboard() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [snackbarDisplay, setSnackbarDisplay] = React.useState(false);

	const handleSnackbarClose = () => {
		setSnackbarDisplay(false);
	};

	const handleLogout = () => {
		dispatch(logoutUser());
		dispatch(resetData());
		navigate("/", { replace: true });
	};
	const { username } = useSelector((state) => ({
		username: state.authentication.username,
	}));

	React.useEffect(() => {
		setSnackbarDisplay(true);
	}, []);

	return (
		<div className={style.root}>
			<CustomizedSnackbars
				open={snackbarDisplay}
				handleClose={handleSnackbarClose}
				severity="success"
				message={`Successfully logged in as ${username}`}
			/>
			{/* <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
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
			</nav> */}
			<div className={style.navbarContainer}>
				<ResponsiveAppBar />
			</div>
			<div className={style["content-wrapper"]}>TBD</div>
		</div>
	);
}

export default UserDashboard;
