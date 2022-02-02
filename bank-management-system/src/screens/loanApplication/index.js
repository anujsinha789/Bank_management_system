import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import MuiAlert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import style from "./style.module.css";
import { validateLoanApplicationData } from "../../redux/actions/loanApplication";
import { logoutUser, resetData } from "../../redux/actions/authentication";

const Alert = React.forwardRef((props, ref) => (
	<MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));
function LoanApplication() {
	const [data, setData] = React.useState({
		loan_type: "",
		loan_amount: "",
		loan_apply_date: "",
		loan_issue_date: "",
		rate_of_interest: "",
		loan_duration: "",
	});
	const [snackbarOpen, setSnackbarOpen] = React.useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { userId, loading, loanType, status, message } = useSelector((state) => ({
		userId: state.authentication.userId,
		loading: state.loanApplication.loading,
		loanType: state.loanApplication.loan_type,
		status: state.loanApplication.status,
		message: state.loanApplication.message,
	}));

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleOptionChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		data.userId = userId;
		dispatch(validateLoanApplicationData(data));
	};

	const handleSnackbarClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setSnackbarOpen(false);
	};

	const handleLogout = () => {
		dispatch(logoutUser());
		dispatch(resetData());
		navigate("/", { replace: true });
	};
	React.useEffect(() => {
		if (status === "Success") {
			if (!loading) {
				if (loanType === "Education")
					navigate("/educationLoanApplication", { replace: true });
				else navigate("/personalLoanApplication", { replace: true });
			}
		}
	}, [loanType, loading, status]);

	React.useEffect(() => {
		if (status.length > 0 && status !== "Success") {
			if (!loading) {
				setSnackbarOpen(true);
			}
		}
	}, [message, loading, status]);

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
			<Stack spacing={2} sx={{ width: "100%" }}>
				<Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
					<Alert onClose={handleSnackbarClose} severity="error" sx={{ width: "100%" }}>
						{message}
					</Alert>
				</Snackbar>
			</Stack>
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
								<a
									className="nav-link active"
									aria-current="page"
									href="/userDashboard"
								>
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" onClick={handleLogout} href="/">
									Logout
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className={style.registration_header_container}>
				<span className={style.header_text}> Loan Application Form </span>
			</div>
			<div className={style.signup_form_container}>
				<form
					style={{
						height: "100%",
						width: "100%",
					}}
					onSubmit={handleFormSubmit}
					method="POST"
				>
					<div className={style.loan_type_container}>
						<label htmlFor="loan_type" className={style.label_style}>
							{" "}
							Loan Type :{" "}
						</label>
						<select
							name="loan_type"
							id="loan_type_options"
							value={data.loan_type}
							onChange={handleOptionChange}
						>
							<option value="Personal">Personal Loan</option>
							<option value="Education">Education Loan</option>
							<option value="Home">Home Loan</option>
						</select>
					</div>
					<br />
					<div className={style.loan_amount_container}>
						<label htmlFor="loan_amount" className={style.label_style}>
							Loan Amount :{" "}
						</label>
						<input
							className={style.textfeild_style}
							name="loan_amount"
							placeholder="Loan Amount"
							type="number"
							value={data.loan_amount}
							required="true"
							onChange={handleChange}
						/>
					</div>
					<br />
					<div className={style.loan_info}>
						<div className={style.loan_apply_date}>
							<label
								htmlFor="loan_apply_date"
								className={style.label_style_single_row}
							>
								{" "}
								Loan Apply Date :{" "}
							</label>
							<input
								className={style.textfeild_style_single_row}
								name="loan_apply_date"
								type="date"
								value={data.loan_apply_date}
								required="true"
								onChange={handleChange}
							/>
						</div>
						<div className={style.loan_issue_date}>
							<label
								htmlFor="loan_issue_date"
								className={style.label_style_single_row}
							>
								{" "}
								Loan Issue Date :{" "}
							</label>
							<input
								className={style.textfeild_style_single_row}
								name="loan_issue_date"
								type="date"
								value={data.loan_issue_date}
								required="true"
								onChange={handleChange}
							/>
						</div>
					</div>
					<br />
					<div className={style.loan_interest_rate_info}>
						<div className={style.rate_of_interest}>
							<label
								htmlFor="rate_of_interest"
								className={style.label_style_single_row}
							>
								{" "}
								Rate of Interest :{" "}
							</label>
							<input
								className={style.textfeild_style_single_row}
								name="rate_of_interest"
								type="number"
								value={data.rate_of_interest}
								required="true"
								onChange={handleChange}
							/>
						</div>
						<div className={style.loan_duration}>
							<label htmlFor="loan_duration" className={style.label_style_single_row}>
								{" "}
								Loan Duration :{" "}
							</label>
							<input
								className={style.textfeild_style_single_row}
								name="loan_duration"
								type="number"
								value={data.loan_duration}
								required="true"
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className={style.btn_container}>
						<button type="submit" className="btn btn-success">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default LoanApplication;
