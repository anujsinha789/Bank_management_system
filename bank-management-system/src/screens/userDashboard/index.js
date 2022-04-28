import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
			<div className={style.navbarContainer}>
				<ResponsiveAppBar />
			</div>
			<div className={style["content-wrapper"]}>
				{/* <div className={style.col_1}>col_1</div>
				<div className={style.col_2}>col_2</div> */}
			</div>
		</div>
	);
}

export default UserDashboard;
