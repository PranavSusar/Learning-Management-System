import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import { useParams } from "react-router-dom";
import Webcam from "react-webcam";

const courses = [
    {
        id: 1,
        title: "IMA 211 PROBABILITY STATISTICS AND RANDOM PROCESSES",
        faculty: "Dr. Asha Sebastian",
    },
    {
        id: 2,
        title: "ICS 211 DESIGN AND ANALYSIS OF ALGORITHMS",
        faculty: "Dr. Nandini J. Warrier",
    },
    {
        id: 3,
        title: "ICS 212 OPERATING SYSTEMS",
        faculty: "Dr. Shajulin Benedict",
    },
    {
        id: 4,
        title: "ICS 213 DATABASE MANAGEMENT SYSTEMS",
        faculty: "Dr. Mirza Galib Anwarul",
    },
    {
        id: 5,
        title: "ICS 214 IT WORKSHOP III",	
        faculty: "Dr. Selvi C",
    },
    {
        id: 6,
        title: "ISC 212 QUANTUM COMPUTING AND SECURITY",
        faculty: "Dr. Rubell Marion Lincy G",
    },
    {
        id: 7,
        title: "ICS 215 DATA STRUCTURES II",
        faculty: "Dr. Jobin Jose",
    },
    {
        id: 8,
        title: "IHS 111 COMMUNICATION SKILLS",
        faculty: "Dr. Gayathri",
    },
    {
        id: 9,
        title: "IHS 121 PERSONALITY DEVELOPMENT",
        faculty: "Dr. Josit Mariya",
    },
    {
        id: 10,
        title: "IEC 111 ELECTRONIC CIRCUITS & MEASUREMENTS",
        faculty: "Dr. G. Narendra Kumar Reddy",
    },
    {
        id: 11,
        title: "IHS 112 FOREIGN LANGUAGE",
        faculty: "Dr. Lakshmi",
    },
    {
        id: 12,
        title: "IMA121 Calculus and Linear Algebra",
        faculty: "Dr. A. Balu",
    },
];

const CourseDesc = () => {
	// Course data (replace with actual data)
	const { title } = useParams();
	const [isCameraOpen, setCameraOpen] = useState(false);
	const [isSubmitting, setSubmitting] = useState(false);

	const courseData = {
		title,
		// Fetch course details based on the title
	};

	const webcamRef = React.useRef(null);

    const getFacultyName = (courseTitle) => {
        const course = courses.find((course) => course.title === courseTitle);
        return course ? course.faculty : "Unknown Faculty";
    };

    const facultyName = getFacultyName(courseData.title)

	const startCamera = () => {
		setCameraOpen(true);
	};

	const closeCamera = () => {
		setCameraOpen(false);
	};

	const handleSubmit = () => {
		// Implement your attendance submission logic here
		setSubmitting(true);

		// Example: Stop the camera after submission
		if (webcamRef.current) {
			webcamRef.current.video.srcObject.getTracks().forEach((track) => {
				track.stop();
			});
		}

		// Implement your submission logic (e.g., send data to the server)
		// After submission, you can set isSubmitting to false or handle the behavior accordingly.
	};

	return (
		<div className="bg-indigo-600 w-full h-screen">
			<Navbar />
			<div className="container mx-auto p-4">
				<h1 className="text-6xl font-bold text-white mb-4 text-left mt-28">
					{courseData.title}
				</h1>
                <h2 className="text-4xl text-white mb-2">Faculty: {facultyName}</h2>
				<div className="container mx-auto p-4">
					<button
						onClick={startCamera}
						className="bg-white text-black font-bold py-4 px-6 text-3xl rounded-lg hover:bg-gray-500"
					>
						Take Attendance
					</button>
				</div>
			</div>

			{isCameraOpen && (
				<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-75 bg-gray-900">
					<div className="bg-white p-4 rounded-lg shadow-lg">
						<Webcam
							audio={false}
							ref={webcamRef}
							screenshotFormat="image/jpeg"
							videoConstraints={{ facingMode: "user" }}
						/>
						<div className="text-center mt-4">
							<button
								onClick={closeCamera}
								className="bg-red-600 text-white py-2 px-4 rounded-lg mr-4"
							>
								Close Camera
							</button>
							<button
								onClick={handleSubmit}
								disabled={isSubmitting}
								className={`bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 ${
									isSubmitting ? "opacity-50 cursor-not-allowed" : ""
								}`}
							>
								Submit Attendance
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CourseDesc;
