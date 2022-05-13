import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { logoutUser, resetData } from "../../../redux/actions/authentication";
import { setDrawerOpen } from "../../../redux/actions/drawerActions";

export default function Navbar() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
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
					<Button color="inherit" onClick={handleLogout}>
						Logout
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
