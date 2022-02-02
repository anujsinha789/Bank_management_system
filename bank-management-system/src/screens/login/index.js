import React from "react";
import { Checkbox } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import LoginIcon from "@mui/icons-material/Login";
import style from "./style.module.css";
import { authenticateUser } from "../../redux/actions/authentication";

function Login() {
	const [checked, setChecked] = React.useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { isAuthenticated, loading, username } = useSelector((state) => ({
		isAuthenticated: state.authentication.isAuthenticated,
		loading: state.authentication.loading,
		username: state.authentication.username,
	}));

	const handleFormSubmit = (event) => {
		event.preventDefault();
		const data = {
			emailId: event.target[0].value,
			password: event.target[1].value,
		};
		dispatch(authenticateUser(data));
	};

	React.useEffect(() => {
		if (isAuthenticated && !loading && username.length > 0) {
			navigate("/userDashboard", { replace: true });
		}
	}, [isAuthenticated]);

	return (
		<div className={style.root}>
			<div>
				<Backdrop
					sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
					open={loading}
				>
					<CircularProgress color="inherit" />
				</Backdrop>
			</div>
			<div className={style.login_form_container}>
				<div className={style.avatar_container}>
					<div className={style.login_avatar}>
						<h2 className={style.login_text}>Login</h2>
						<LoginIcon style={{ height: "5vh", width: "5vw" }} />
					</div>
				</div>
				<div className={style.error_msg_container}>
					<span className={style.error_msg}>
						{isAuthenticated !== null &&
							!isAuthenticated &&
							"Incorrect Username or Password!"}
					</span>
				</div>
				<div className={style.login_form}>
					<form className={style.form_style} onSubmit={handleFormSubmit} method="POST">
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
							<button type="submit" className="btn btn-success">
								Login
							</button>
						</div>
					</form>
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
