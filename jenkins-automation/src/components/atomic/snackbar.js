/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef((props, ref) => (
	<MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

export default function CustomizedSnackbars(props) {
	return (
		<Stack spacing={2} sx={{ width: "100%" }}>
			<Snackbar open={props.open} autoHideDuration={6000} onClose={props.handleClose}>
				<Alert onClose={props.handleClose} severity={props.severity} sx={{ width: "100%" }}>
					{props.message}
				</Alert>
			</Snackbar>
		</Stack>
	);
}
