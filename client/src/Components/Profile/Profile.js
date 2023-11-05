// import React from "react";
// import styles from "./Profile.css";

// import avatar from "../../Assets/profile.jpeg";
// // import { Col, Row, Container } from "../../components/Grid";

// const Profile = () => (
//   <div className="ProfileBucket">
//     <div className="notifications"></div>
//     <div className="userPic">
//       <img src={avatar} className={styles.profile_img} alt="avatar" />
//       <h2>Sample User</h2>
//     </div>
//     <div className="userInfo">
//       <div className="userProgress">
//         <h3>YOUR PROGRESS</h3>
//         <ul className="progressBlock">
//           <li><span className="userGrade progLeft">A</span><span className="userGradeText progRight">Academic Average</span></li>
//           <li><span className="userCompletion progLeft">100%</span><span className="userCompletionText progRight">Academic Average</span></li>
//           <li><span className="userOverdue progLeft">0</span><span className="userOverdueText progRight">Academic Average</span></li>
//         </ul>
//       </div>
//       <div className="userAttendance">
//         <h3>YOUR ATTENDANCE</h3>
//         <ul className="progressBlock">
//           <li><span className="userEarly progLeft">15</span><span className="userEarlyDigit progRight">Early</span></li>
//           <li><span className="userPresent progLeft">15</span><span className="userPresentText progRight">Present</span></li>
//           <li><span className="userLate progLeft">1</span><span className="userLateText progRight">Late</span></li>
//           <li><span className="userExcused progLeft">1</span><span className="userExcusedText progRight">Excused</span></li>
//           <li><span className="userAbsent progLeft">1</span><span className="userAbsentText progRight">Absent</span></li>
//         </ul>
//       </div>
//     </div>
//   </div>
// );


// export default Profile;


import React from "react";
import avatar from "../../Assets/profile.jpeg";

const Profile = () => (
  <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
    <div className="w-1/3">
      <img src={avatar} alt="avatar" className="w-32 h-32 rounded-full" />
    </div>
    <div className="w-2/3">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sample User</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-indigo-600">YOUR PROGRESS</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-semibold">A</span>
            <span className="text-gray-600">Academic Average</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-semibold">100%</span>
            <span className="text-gray-600">Academic Average</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-semibold">0</span>
            <span className="text-gray-600">Academic Average</span>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-indigo-600">YOUR ATTENDANCE</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-semibold">15</span>
            <span className="text-gray-600">Early</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-semibold">15</span>
            <span className="text-gray-600">Present</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-semibold">1</span>
            <span className="text-gray-600">Late</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-semibold">1</span>
            <span className="text-gray-600">Excused</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-semibold">1</span>
            <span className="text-gray-600">Absent</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
