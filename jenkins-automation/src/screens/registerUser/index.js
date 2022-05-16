import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import MuiAlert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
import { registerUser } from "../../redux/actions/registerUser";

const Alert = React.forwardRef((props, ref) => (
	<MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));
function RegisterUser() {
	const [snackbarOpen, setSnackbarOpen] = React.useState(false);
	const [data, setData] = React.useState({
		name: "",
		username: "",
		password: "",
		gender: "Male",
		email: "",
		date_of_birth: "",
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { loading, status, message } = useSelector((state) => ({
		loading: state.registerUser.loading,
		status: state.registerUser.status,
		message: state.registerUser.message,
	}));

	React.useEffect(() => {
		if (status.length > 0 && status !== "Success") {
			if (!loading) {
				setSnackbarOpen(true);
			}
		} else if (status.length > 0 && status === "Success") {
			navigate("/userDashboard", { replace: true });
		}
	}, [status.length, loading, message]);

	return <div className={style.root}></div>;
}

export default RegisterUser;
