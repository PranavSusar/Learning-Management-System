import React, { Component } from "react";
import Col from "../../Components/Col";
import Row from "../../Components/Row";
import Container from "../../Components/Container";
import Profile from "../../Components/Profile";
import DashboardWrapper from "../../Components/DashboardWrapper";

class User extends Component {
  // Setting our component's initial state
  // state = {
  //   books: [],
  //   title: "",
  //   author: "",
  //   synopsis: ""
  // };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-6 sm-12">
            <Profile />
          </Col>
          <Col>
            <DashboardWrapper />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default User;
