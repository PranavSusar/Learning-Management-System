import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";

const DashboardLayout = () => {
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
	return (
		<>
			<div className="bg-indigo-600 w-full h-screen">
				<Navbar /> {/* Include your upper navbar component here */}
				<div className="container mx-auto p-4">
					<h1 className="text-6xl font-semibold mb-4 text-white text-center mt-28">
						My Dashboard
					</h1>
				</div>
				<div className="container mx-auto p-4 flex flex-wrap justify-center">
					{courses.map((course) => (
						<Link
							key={course.title}
							to={`/course/${course.title}`} // Define the URL with the course title
							className="text-decoration-none"
						>
							<div
								key={course.id}
								className="w-64 bg-white rounded-lg shadow-lg p-4 hover:shadow-xl cursor-pointer transition duration-300 m-4"
							>
								<h3 className="text-xl font-semibold text-indigo-600">
									{course.title}
								</h3>
								<p className="text-gray-500">{course.description}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</>
	);
};

export default DashboardLayout;
