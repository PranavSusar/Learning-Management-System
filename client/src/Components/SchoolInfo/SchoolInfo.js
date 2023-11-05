import React from "react";
import "./SchoolInfo.css";
import Col from "../Col"
import Logo from '../../Pages/Logo'

const SchoolInfo = () => (
  <div className="SchoolInfo row">
      <Col xs={12} md={8}>
        <Logo />
        <h1>Indian Institute of Information Technology Kottayam</h1>
        <h3>Class ID: NWEVA201711FSF3</h3>
      </Col>
      {/* <Col xs={6} md={4}>
        <h2>Fall 2023 - Spring 2024</h2>
      </Col> */}
    </div>
);

export default SchoolInfo;
