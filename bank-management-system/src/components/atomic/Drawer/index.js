/* eslint-disable react/prop-types */
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import HandymanIcon from "@mui/icons-material/Handyman";
import InfoIcon from "@mui/icons-material/Info";
import HelpIcon from "@mui/icons-material/Help";
import LanguageIcon from "@mui/icons-material/Language";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { setDrawerClose } from "../../../redux/actions/drawerActions";
import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;

const drawerItems = [
	{
		id: 1,
		itemText: "Home",
		icon: <HomeIcon />,
	},
	{
		id: 2,
		itemText: "Integrate",
		icon: <HandymanIcon />,
	},
	{
		id: 3,
		itemText: "About",
		icon: <InfoIcon />,
	},
	{
		id: 4,
		itemText: "Q&A",
		icon: <HelpIcon />,
	},
	{
		id: 5,
		itemText: "Langauge",
		icon: <LanguageIcon />,
	},
	{
		id: 6,
		itemText: "Logout",
		icon: <LogoutIcon />,
	},
];

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create("margin", {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	})
);

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	height: "15vh",
	justifyContent: "flex-end",
}));

const useStyles = makeStyles({
	paper: {
		background: "#33bfff",
	},
});

export default function SideDrawer(props) {
	const theme = useTheme();
	const dispatch = useDispatch();
	const classes = useStyles();

	const { isDrawerOpen, username } = useSelector((state) => ({
		isDrawerOpen: state.drawerState.isDrawerOpen,
		username: state.authentication.username,
	}));

	const handleDrawerClose = () => {
		dispatch(setDrawerClose("userDashboard"));
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<Drawer
				classes={{ paper: classes.paper }}
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
				variant="persistent"
				anchor="left"
				open={isDrawerOpen}
			>
				<DrawerHeader>
					<div
						style={{
							width: "80%",
							height: "100%",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							backgroundColor: "none",
						}}
					>
						<Avatar sx={{ width: 56, height: 56 }} alt={username}></Avatar>
						<Typography>{username}</Typography>
					</div>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List style={{ height: "60%" }}>
					{drawerItems.map((item, index) => (
						<ListItem key={item.id}>
							<ListItemButton>
								<ListItemIcon>{item.icon}</ListItemIcon>
								<ListItemText primary={item.itemText} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<Divider />
			</Drawer>
			<Main open={isDrawerOpen}>{props.children}</Main>
		</Box>
	);
}
