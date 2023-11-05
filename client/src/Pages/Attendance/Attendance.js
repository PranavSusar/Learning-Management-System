import React from "react";
import Col from "../../Components/Col";
import Row from "../../Components/Row";
import Container from "../../Components/Container";

// import DashboardWrapper from "../../Components/DashboardWrapper";
import ProfileWrapper from "../../Components/ProfileWrapper";
import Navbar from "../../Components/Navbar";

const Attendance = () => {
	return (
		<div className="bg-indigo-600 w-full h-screen flex-col">
			<div className="nav-bar">
				<Navbar />
			</div>
			<div className="content">
				<Container>
					<Row>
						<Col size="md-6 sm-12">
							<ProfileWrapper />
						</Col>
						{/* <Col>
						<DashboardWrapper />
					</Col> */}
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default Attendance;
