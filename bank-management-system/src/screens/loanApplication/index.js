import React from "react";
import { Checkbox } from "@material-ui/core";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";

function LoanApplication() {
  const [data, setData] = React.useState({
    loan_type: "",
    loan_amount: "",
    loan_apply_date: "",
    loan_issue_date: "",
    rate_of_interest: "",
    duration_of_loan: "",
  });
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (data.loan_type === "Education")
      navigate("/educationLoanApplication", { replace: true });
    else navigate("/personalLoanApplication", { replace: true });
  };

  return (
    <div className={style.root}>
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
            <label for="loan_type" className={style.label_style}>
              {" "}
              Loan Type :{" "}
            </label>
            <select
              name="loan_type"
              id="loan_type_options"
              value={data.loan_type}
              onChange={handleChange}
            >
              <option value="Personal">Personal Loan</option>
              <option value="Education">Education Loan</option>
              <option value="Home">Home Loan</option>
            </select>
          </div>
          <br />
          <div className={style.loan_amount_container}>
            <label for="loan_amount" className={style.label_style}>
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
                for="loan_apply_date"
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
                for="loan_issue_date"
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
                for="rate_of_interest"
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
              <label
                for="loan_duration"
                className={style.label_style_single_row}
              >
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
            <button type="submit" class="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoanApplication;
