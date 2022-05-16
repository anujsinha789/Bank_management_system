/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import HandymanIcon from "@mui/icons-material/Handyman";
import InfoIcon from "@mui/icons-material/Info";
import HelpIcon from "@mui/icons-material/Help";
import LanguageIcon from "@mui/icons-material/Language";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { setDrawerClose } from "../../../redux/actions/drawerActions";

const drawerWidth = 240;

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
	const { children, handleLogout } = props;
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	const { isDrawerOpen, username } = useSelector((state) => ({
		isDrawerOpen: state.drawerState.isDrawerOpen,
		username: state.authentication.username,
	}));

	const handleDrawerClose = () => {
		dispatch(setDrawerClose("userDashboard"));
	};

	const drawerItems = [
		{
			id: 1,
			itemText: "Home",
			icon: <HomeIcon />,
			onClick: () => {},
			hasSubmenu: false,
		},
		{
			id: 2,
			itemText: "Integrate",
			icon: <HandymanIcon />,
			onClick: () => {},
			hasSubmenu: true,
			submenuItems: ["Jenkins", "Github", "Gitlab"],
		},
		{
			id: 3,
			itemText: "About",
			icon: <InfoIcon />,
			onClick: () => {},
			hasSubmenu: false,
		},
		{
			id: 4,
			itemText: "Q&A",
			icon: <HelpIcon />,
			onClick: () => {},
			hasSubmenu: false,
		},
		{
			id: 5,
			itemText: "Langauge",
			icon: <LanguageIcon />,
			onClick: () => {},
			hasSubmenu: false,
		},
		{
			id: 6,
			itemText: "Logout",
			icon: <LogoutIcon />,
			onClick: handleLogout,
			hasSubmenu: false,
		},
	];

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
				<List
					style={{
						height: "90%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					{drawerItems.map((item) => (
						<Accordion
							expanded={item.hasSubmenu && expanded === item.itemText}
							onChange={handleChange(item.itemText)}
							onClick={item.onClick}
							style={{
								backgroundColor: "#bbdefb",
								width: "90%",
								borderRadius: "10px",
								marginBottom: "0.3rem",
							}}
						>
							<AccordionSummary
								expandIcon={item.hasSubmenu ? <ExpandMoreIcon /> : null}
								aria-controls="panel1bh-content"
								id="panel1bh-header"
							>
								{item.icon}
								<Typography style={{ paddingLeft: "0.75rem" }}>
									{item.itemText}
								</Typography>
							</AccordionSummary>
							{item.hasSubmenu && (
								<AccordionDetails style={{ backgroundColor: "#fff" }}>
									{item.submenuItems.map((menuItem, index) => (
										<ListItem key={index}>
											<ListItemButton onClick={() => {}}>
												{/* <ListItemIcon>{item.icon}</ListItemIcon> */}
												<ListItemText primary={menuItem} />
											</ListItemButton>
										</ListItem>
									))}
								</AccordionDetails>
							)}
						</Accordion>
					))}
				</List>
				<Divider />
			</Drawer>
			<Main open={isDrawerOpen}>{children}</Main>
		</Box>
	);
}
