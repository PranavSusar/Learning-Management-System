import React, { useState, useEffect } from "react";
import "./HomeworkWrapper.css";
import HomeworkListing from "../../Components/HomeworkListing";
import ViewAllBtn from "../../Components/ViewAllBtn";
import API from "../../utils/API";

const HomeworkWrapper = () => {
  const [courseworks, setCourseworks] = useState([]);

  // When the component mounts, list all sessions and update courseworks state
  useEffect(() => {
    getCourseworks();
  }, []);

  // Getting all courseworks from the database
  const getCourseworks = () => {
    API.getCourseworks()
      .then((res) => {
        setCourseworks(res.data);
      });
  };

  return (
    <div className="hwwrapper">
      <h2>Homework Assignments</h2>
      {!courseworks.length ? (
        <h4 className="text-center">No Homework to Display</h4>
      ) : (
        courseworks.map((coursework) => (
          <HomeworkListing
            key={coursework.id} // Make sure to provide a unique key
            title={coursework.title}
            description={coursework.description}
            dueDate={coursework.dueDate}
          />
        ))
      )}
      {/* <ViewAllBtn /> */}
    </div>
  );
}

export default HomeworkWrapper;

