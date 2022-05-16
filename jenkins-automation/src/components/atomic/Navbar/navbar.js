/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@material-ui/core";
import { logoutUser, resetData } from "../../../redux/actions/authentication";
import { setDrawerClose, setDrawerOpen } from "../../../redux/actions/drawerActions";

const useStyles = makeStyles({
	logoutBtn: {
		padding: "0.5rem",
		borderRadius: "50px",
		width: "95px",
		fontFamily: "consolas",
		"&:hover": {
			backgroundColor: "#bbdefb",
			color: "#000",
			transition: "ease 0.5s",
			border: "none",
			cursor: "pointer",
		},
	},
});
export default function Navbar() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const classes = useStyles();

	const handleLogout = () => {
		dispatch(setDrawerClose("userDashboard"));
		dispatch(logoutUser());
		dispatch(resetData());
		setTimeout(() => {
			navigate("/", { replace: true });
		}, 2000);
	};

	const { username } = useSelector((state) => ({
		username: state.authentication.username,
	}));

	React.useEffect(() => {
		if (username === "" || username.length === 0) navigate("/", { replace: true });
	}, []);

	const handleDrawerOpen = () => {
		dispatch(setDrawerOpen("userDashboard"));
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={handleDrawerOpen}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Welcome to Automated DevSevOps integration tool
					</Typography>
					<div onClick={handleLogout} className={classes.logoutBtn}>
						Logout
					</div>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
