/* Validate User name */
import toast from "react-hot-toast";

/* Validate login page username */

export async function usernameValidate(values) {
	const errors = usernameVerify({}, values);
	return errors;
}

export async function passwordValidate(values)
{
    const errors = passwordVerify({}, values);
    return errors;
}

function passwordVerify(errors = {}, values) {
	const specialCharacters = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>?]+/;
	if (!values.password) {
		errors.password = toast.error("Password Required!");
	} else if (values.password.includes(" ")) {
		errors.password = toast.error("Invalid Password!");
	} else if (values.password.length < 4) {
		errors.password = toast.error("Password must be 4 characters long!");
	} else if (values.password.test(specialCharacters)) {
		errors.password = toast.error("Password must contain special characters!");
	}

    return errors;
}

function usernameVerify(error = {}, values) {
	if (!values.username) {
		error.username = toast.error("Username Required!");
	} else if (values.username.includes(" ")) {
		error.username = toast.error("Invalid username!");
	}

	return error;
}
