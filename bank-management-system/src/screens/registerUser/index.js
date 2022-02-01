import React from "react";
import { Checkbox } from "@material-ui/core";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import LoginIcon from "@mui/icons-material/Login";

function RegisterUser() {
  const [data, setData] = React.useState({
    name: "",
    username: "",
    password: "",
    guardian_type: "Father",
    guardian_name: "",
    address: "",
    citizenship: "Indian",
    state: "state_1",
    country: "India",
    gender: "Male",
    martial_status: "single",
    email: "",
    contact: "",
    date_of_birth: "",
    account_type: "Saving",
  });
  const [error, setError] = React.useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleOptionChange = ({ currentTarget: select }) => {
    setData({ ...data, [select.name]: select.value });
  };

  const handleBtnClick = () => {
    console.log(data);
  };

  return (
    <div className={style.root}>
      <div className={style.registration_header_container}>
        <span className={style.header_text}> Registration Form </span>
      </div>
      <div className={style.signup_form_container}>
        <form
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={style.form_left}>
            <div className={style.input_style}>
              <label for="name" className={style.label_style}>
                Name :{" "}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={style.textfeild_style}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className={style.input_style}>
              <label for="email" className={style.label_style}>
                Username :{" "}
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className={style.textfeild_style}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className={style.input_style}>
              <label for="email" className={style.label_style}>
                Password :{" "}
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={style.textfeild_style}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className={style.guardian_info}>
              <div className={style.guardian_type}>
                <label
                  for="guardian_type"
                  className={style.label_style_single_row}
                >
                  Guardian Type :{" "}
                </label>
                <select
                  name="guardian_type"
                  id="guardian_options"
                  value={data.guardian_type}
                  onChange={handleOptionChange}
                >
                  <option value="father">Father</option>
                  <option value="husband">Husband</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div className={style.guardian_name}>
                <label
                  for="guardian_name"
                  className={style.label_style_single_row}
                >
                  Guardian Name :{" "}
                </label>
                <input
                  type="text"
                  id="guardian_name"
                  name="guardian_name"
                  className={style.textfeild_style_single_row}
                  onChange={handleChange}
                />
              </div>
            </div>
            <br />
            <div className={style.input_style}>
              <label for="address" className={style.label_style}>
                Address :{" "}
              </label>
              <textarea
                type="text"
                id="address"
                name="address"
                rows="4"
                cols="50"
                className={style.textarea_style}
                onChange={handleChange}
              />
            </div>
            <div className={style.citizenship_info}>
              <div className={style.citizenship}>
                <label
                  for="citizenship"
                  className={style.label_style_single_row}
                >
                  Citizenship:{" "}
                </label>
                <select
                  name="citizenship"
                  id="citizenship"
                  value={data.citizenship}
                  onChange={handleOptionChange}
                >
                  <option value="Indian">Indian</option>
                  <option value="American">American</option>
                  <option value="Canadian">Canadian</option>
                </select>
              </div>
              <div className={style.state}>
                <label for="state" className={style.label_style_single_row}>
                  State :{" "}
                </label>
                <select
                  name="state"
                  id="state"
                  value={data.state}
                  onChange={handleOptionChange}
                >
                  <option value="State_1">State_1</option>
                  <option value="State_2">State_2</option>
                  <option value="State_3">State_3</option>
                </select>
              </div>
            </div>
          </div>
          <div className={style.form_right}>
            <div className={style.gender_info}>
              <div className={style.country}>
                <label for="country" className={style.label_style_single_row}>
                  Country :{" "}
                </label>
                <select
                  name="country"
                  id="country"
                  value={data.country}
                  onChange={handleOptionChange}
                >
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                </select>
              </div>
              <div className={style.gender}>
                <label for="gender" className={style.label_style_single_row}>
                  Gender :{" "}
                </label>
                <select
                  name="gender"
                  id="gender"
                  value={data.gender}
                  onChange={handleOptionChange}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className={style.martial_status}>
                <label
                  for="martial_status"
                  className={style.label_style_single_row}
                >
                  Martial:{" "}
                </label>
                <select
                  name="martial_status"
                  id="martial_status"
                  value={data.martial_status}
                  onChange={handleOptionChange}
                >
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                </select>
              </div>
            </div>
            <br />
            <div className={style.input_style}>
              <label for="email" className={style.label_style}>
                Email :{" "}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={style.textfeild_style}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className={style.input_style}>
              <label for="contact" className={style.label_style}>
                Contact :{" "}
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                className={style.textfeild_style}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className={style.citizenship_info}>
              <div className={style.citizenship}>
                <label
                  for="date_of_birth"
                  className={style.label_style_single_row}
                >
                  {" "}
                  DOB :{" "}
                </label>
                <input
                  className={style.textfeild_style_single_row}
                  name="date_of_birth"
                  type="date"
                  onChange={handleChange}
                  //   value={data.loan_apply_date}
                  required="true"
                  //   onChange={handleChange}
                />
              </div>
              <div className={style.state}>
                <label
                  for="date_of_birth"
                  className={style.label_style_single_row}
                >
                  {" "}
                  Registration Date :{" "}
                </label>
                <input
                  className={style.textfeild_style_single_row}
                  name="date_of_birth"
                  type="date"
                  onChange={handleChange}
                  //   value={data.loan_apply_date}
                  required="true"
                  //   onChange={handleChange}
                />
              </div>
            </div>
            <br />
            <div className={style.account_type}>
              <label
                for="account_type"
                className={style.label_style_single_row}
              >
                Account Type :{" "}
              </label>
              <select
                name="account_type"
                id="account_type"
                value={data.account_type}
                style={{ width: "20%", fontFamily: "consolas" }}
                onChange={handleOptionChange}
              >
                <option value="Savings">Savings</option>
                <option value="Salary">Salary</option>
              </select>
            </div>
            <div className={style.next_btn_container}>
              <button
                type="button"
                class="btn btn-success"
                style={{ width: "150px", height: "40px" }}
                onClick={handleBtnClick}
              >
                Go To Next Page
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterUser;
