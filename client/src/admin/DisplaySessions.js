import React, { useEffect,useState } from "react";
import API from "../utils/API";

const DisplaySessions = () => {
	const [sessions, setSessions] = useState([]);

	useEffect(() => {
		getSessions();
	}, []);

	const getSessions = () => {
		API.getSessions()
			.then((res) => {
				console.log(res.data);
				setSessions(res.data);
			})
			.catch((error) => {
				console.error("Error fetching sessions: ", error);
			});
	};

	return (
		<div>
			{!sessions.length ? (
				<h4 className="text-center">No Session Record to Display</h4>
			) : (
				sessions.map((session) => (
					<div key={session._id}>
						<p>{session._id}</p>
						<p>{session.title}</p>
						<p>{session.description}</p>
						<p>{session.date}</p>
					</div>
				))
			)}
		</div>
	);
};

export default DisplaySessions;
