import { useState } from "react";
import "../Styles/Sidebar.css";
import Logo from "../Pages/Logo";
import {
	AiFillDashboard,
	AiFillSignal,
	AiOutlineForm,
	AiFillMedicineBox,
	AiFillCalendar,
	AiOutlineTeam,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const navItems = [
	"Dashboard",
	"Participants",
	"Attendance",
	"Outpass Form",
	"Medical",
	"Leave Form",
];
const Sidebar = () => {
	const [isOpen, setisOpen] = useState(false);
	return (
		<aside className={`sidebar ${isOpen ? "open" : ""}`}>
			<div className="sidebar-inner">
				<header className="sidebar-header">
					<button
						type="button"
						className="sidebar-burger"
						onClick={() => setisOpen(!isOpen)}
					>
						<span>{isOpen ? "X" : <Logo />}</span>
					</button>
				</header>
				<nav className="sidebar-menu">
					<Link to="/dashboard">
						<button className="sidebar-button">
							<AiFillDashboard />
							<p>{navItems[0]}</p>
						</button>
					</Link>
					<Link to="/participants">
						<button className="sidebar-button">
							<AiOutlineTeam />
							<p>{navItems[1]}</p>
						</button>
					</Link>
					<Link to="/attendance">
						<button className="sidebar-button">
							<AiFillSignal />
							<p>{navItems[2]}</p>
						</button>
					</Link>
					<Link to="/outpass">
						<button className="sidebar-button">
							<AiOutlineForm />
							<p>{navItems[3]}</p>
						</button>
					</Link>
					<Link to="/medicalform">
						<button className="sidebar-button">
							<AiFillMedicineBox />
							<p>{navItems[4]}</p>
						</button>
					</Link>
					<Link to="/leaveform">
						<button className="sidebar-button">
							<AiFillCalendar />
							<p>{navItems[5]}</p>
						</button>
					</Link>
					);
				</nav>
			</div>
		</aside>
	);
};
export default Sidebar;
