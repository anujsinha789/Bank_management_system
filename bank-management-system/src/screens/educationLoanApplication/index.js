/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import style from "./style.module.css";
import { logoutUser, resetData } from "../../redux/actions/authentication";

function EducationLoanApplication() {
	const [data, setData] = React.useState({
		course_fee: "",
		course: "",
		father_name: "",
		father_occupation: "",
		father_total_exp: "",
		father_exp_with_current_company: "",
		ration_card_number: "",
		annual_income: "",
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(logoutUser());
		dispatch(resetData());
		navigate("/", { replace: true });
	};

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
	return (
		<div className={style.root}>
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
				<span className={style.header_text}> Education Loan Details </span>
			</div>
			<div className={style.signup_form_container}>
				<form
					style={{
						height: "100%",
						width: "100%",
					}}
				>
					<div className={style.input_style}>
						<label htmlFor="course_fee" className={style.label_style}>
							{" "}
							Course Fee :{" "}
						</label>
						<input
							className={style.textfeild_style}
							name="course_fee"
							placeholder="Course Fee"
							type="number"
							value={data.course_fee}
							required="true"
							onChange={handleChange}
							style={{ width: "85%" }}
						/>
					</div>
					<div className={style.input_style}>
						<label htmlFor="course" className={style.label_style}>
							{" "}
							Course :{" "}
						</label>
						<input
							className={style.textfeild_style}
							name="course"
							placeholder="Course"
							type="text"
							value={data.course}
							required="true"
							onChange={handleChange}
							style={{ width: "89%" }}
						/>
					</div>
					<div className={style.input_style}>
						<label htmlFor="father_name" className={style.label_style}>
							{" "}
							Father Name :{" "}
						</label>
						<input
							className={style.textfeild_style}
							name="father_name"
							type="text"
							value={data.father_name}
							required="true"
							onChange={handleChange}
							style={{ width: "84%" }}
						/>
					</div>
					<div className={style.input_style}>
						<label htmlFor="father_occupation" className={style.label_style}>
							{" "}
							Father's Occupation :{" "}
						</label>
						<input
							className={style.textfeild_style}
							name="father_occupation"
							type="text"
							value={data.father_occupation}
							required="true"
							onChange={handleChange}
							style={{ width: "76%" }}
						/>
					</div>
					<div className={style.input_style}>
						<label htmlFor="father_total_exp" className={style.label_style}>
							{" "}
							Father's Total Experience :{" "}
						</label>
						<input
							className={style.textfeild_style}
							name="father_total_exp"
							type="text"
							value={data.father_total_exp}
							required="true"
							onChange={handleChange}
						/>
					</div>
					<div className={style.input_style}>
						<label
							htmlFor="father_exp_with_current_company"
							className={style.label_style}
							style={{ fontSize: "1.0rem" }}
						>
							{" "}
							Father's Exp with Current Company:{" "}
						</label>
						<input
							className={style.textfeild_style}
							name="father_exp_with_current_company"
							type="number"
							value={data.father_exp_with_current_company}
							required="true"
							onChange={handleChange}
						/>
					</div>
					<div className={style.input_style}>
						<label htmlFor="ration_card_number" className={style.label_style}>
							{" "}
							Ration Card Number :{" "}
						</label>
						<input
							className={style.textfeild_style}
							name="ration_card_number"
							type="number"
							value={data.ration_card_number}
							required="true"
							onChange={handleChange}
							style={{ width: "77%" }}
						/>
					</div>
					<div className={style.input_style}>
						<label htmlFor="ration_card_number" className={style.label_style}>
							{" "}
							Annual Income :{" "}
						</label>
						<input
							className={style.textfeild_style}
							name="annual_income"
							type="number"
							value={data.annual_income}
							required="true"
							onChange={handleChange}
							style={{ width: "82%" }}
						/>
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

export default EducationLoanApplication;
