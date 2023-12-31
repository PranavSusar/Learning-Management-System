import React from "react";
import { NavLink } from "react-router-dom";
import avatar from "../Assets/profile.jpeg";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordValidate } from "../Helper/Validate";

import styles from "../Styles/Login.module.css";

const Password = () => {
	const formik = useFormik({
		initialValues: {
			password: "",
		},
		validate: passwordValidate,
		validateOnBlur: false,
		validateOnChange: false,
		onSubmit: async (values) => {
			console.log(values);
		},
	});

	return (
		<div className="hello">
			<div className="container mx-auto">
				<Toaster position="top-center" reverseOrder={false}></Toaster>
				<div className="flex justify-center items-center h-screen">
					<div className={styles.glass}>
						<div className="title flex flex-col items-center">
							<h4 className="text-5xl font-bold">Hello Again!</h4>
							<span className="py-4 text-xl w-2/3 text-center text-gray-500">
								Explore More by connectiong with us.
							</span>
						</div>

						<form className="py-3" onSubmit={formik.handleSubmit}>
							<div className="profile flex justify-center py-4">
								<img src={avatar} className={styles.profile_img} alt="avatar" />
							</div>

							<div className="textbox flex flex-col items-center gap-6">
								<input
									{...formik.getFieldProps("password")}
									className={styles.textbox}
									type="password"
									placeholder="Password"
								/>
								<NavLink to="/dashboard">
									<button className={styles.btn} type="submit">
										Sign in
									</button>
								</NavLink>
							</div>

							<div className="py-3 text-center flex flex-col">
								<span className="text-gray-500">
									Forgot Password?{" "}
									<NavLink className="text-red-500" to="/recovery">
										Recover now.
									</NavLink>
								</span>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Password;
