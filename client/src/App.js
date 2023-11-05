import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*Styles*/
import "./App.css";

/* import all components */
import Username from "./Pages/Username";
import Dashboard from "./Pages/Dashboard/layout";
import Password from "./Pages/Password";
import Recovery from "./Pages/Recovery";
import PageNotFound from "./Pages/PageNotFound";
import Home from "./Pages/Home";
import Attendance from "./Pages/Attendance/Attendance";
import Grades from "./Pages/Grades/Grades";
import Sessions from "./Pages/Sessions/Sessions";
import AdminDisplaySessions from './admin/DisplaySessions';
import AdminAddSession from "./admin/AddSession";
import User from "./Pages/User/User";
import CourseDesc from "./Pages/Course/CourseDesc";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/username" element={<Username />} />
				<Route exact path="/password" element={<Password />} />
				<Route exact path="/recovery" element={<Recovery />} />
				<Route exact path="/dashboard" element={<Dashboard />} />
				<Route exact path="/attendance" element={<Attendance />} />
				<Route exact path="/grades" element={<Grades />} />
				<Route exact path="/user:id" element={<User />} />
				<Route exact path="/course/:title" element={<CourseDesc />} />
				<Route exact path="/sessions" element={<Sessions />} />
				<Route exact path="/AdminDisplaySessions" element={<AdminDisplaySessions />} />
				<Route exact path="/AdminAddSession" element={<AdminAddSession />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
