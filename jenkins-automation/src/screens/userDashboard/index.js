import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import Navbar from "../../components/atomic/Navbar/navbar";
import CustomizedSnackbars from "../../components/atomic/snackbar";
import { logoutUser, resetData } from "../../redux/actions/authentication";
import style from "./style.module.css";
import SideDrawer from "../../components/atomic/Drawer/index";
import { setDrawerClose } from "../../redux/actions/drawerActions";

function UserDashboard() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [snackbarDisplay, setSnackbarDisplay] = React.useState(false);

	const handleLogout = () => {
		dispatch(setDrawerClose("userDashboard"));
		dispatch(logoutUser());
		dispatch(resetData());
		setTimeout(() => {
			navigate("/", { replace: true });
		}, 2000);
	};

	const handleSnackbarClose = () => {
		setSnackbarDisplay(false);
	};

	const { username } = useSelector((state) => ({
		username: state.authentication.username,
	}));

	React.useEffect(() => {
		setSnackbarDisplay(true);
	}, [username]);

	return (
		<div className={style.root}>
			<CustomizedSnackbars
				open={snackbarDisplay}
				handleClose={handleSnackbarClose}
				severity={username.length !== 0 ? "success" : "error"}
				message={
					username.length !== 0
						? `Successfully logged in as ${username}`
						: `Logging you out!`
				}
			/>
			<div className={style.navbarContainer}>
				<Navbar />
			</div>
			<div className={style["content-wrapper"]}>
				<SideDrawer handleLogout={handleLogout}>
					<Typography paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
						enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
						imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
						Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio
						morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing
						bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
						Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris
						commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
						vivamus at augue. At augue eget arcu dictum varius duis at consectetur
						lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
						faucibus et molestie ac.
					</Typography>
					<Typography paragraph>
						Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
						eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
						neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
						tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed
						odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
						tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
						gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
						et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
						tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
						eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
						posuere sollicitudin aliquam ultrices sagittis orci a.
					</Typography>
				</SideDrawer>
				{/* <div className={style.col_1}>col_1</div>
				<div className={style.col_2}>col_2</div> */}
			</div>
		</div>
	);
}

export default UserDashboard;
