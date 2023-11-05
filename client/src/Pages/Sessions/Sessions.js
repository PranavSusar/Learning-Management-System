import React from "react";
import Col from "../../Components/Col";
import Row from "../../Components/Row";
import Container from "../../Components/Container";
import DashboardWrapper from "../../Components/DashboardWrapper";
import ProfileWrapper from "../../Components/ProfileWrapper";

const Sessions = () => {
	return (
		<Container>
			<Row>
				<Col size="md-6 sm-12">
					<ProfileWrapper />
				</Col>
				<Col>
					<DashboardWrapper />
				</Col>
			</Row>
		</Container>
	);
};

export default Sessions;
