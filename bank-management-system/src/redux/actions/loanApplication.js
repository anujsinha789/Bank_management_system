export const validateLoanApplicationData = (data) => ({
	type: "VALIDATE_LOAN_APPLICATION_DATA",
	payload: data,
});

export const loanApplicationDataValidationStart = (data) => ({
	type: "LOAN_APPLICATION_DATA_VALIDATION_START",
	payload: data,
});

export const loanApplicationDataValidationFailed = (data) => ({
	type: "LOAN_APPLICATION_DATA_VALIDATION_FAILED",
	payload: data,
});

export const loanApplicationDataValidationSuccess = (data) => ({
	type: "LOAN_APPLICATION_DATA_VALIDATION_SUCCESS",
	payload: data,
});
