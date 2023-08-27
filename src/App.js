import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*Styles*/
import "./App.css";

/* import all components */
import Username from "./Components/Username";
import Dashboard from "./Pages/Dashboard";
import Password from "./Components/Password";
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import Recovery from "./Components/Recovery";
import PageNotFound from "./Components/PageNotFound";
import Reset from "./Components/Reset";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/register" element={<Register />} />
				<Route path="/username" element={<Username />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/recovery" element={<Recovery />} />
				<Route path="/password" element={<Password />} />
				<Route path="/reset" element={<Reset />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
