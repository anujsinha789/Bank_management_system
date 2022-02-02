export const validateEducationLoanData = (data) => ({
	type: "VALIDATE_EDUCATION_LOAN_DATA",
	payload: data,
});

export const educationLoanDataValidationStart = (data) => ({
	type: "EDUCATION_LOAN_DATA_VALIDATION_START",
	payload: data,
});

export const educationLoanDataValidationFailed = (data) => ({
	type: "EDUCATION_LOAN_DATA_VALIDATION_FAILED",
	payload: data,
});

export const educationLoanDataValidationSuccess = (data) => ({
	type: "EDUCATION_LOAN_DATA_VALIDATION_SUCCESS",
	payload: data,
});
