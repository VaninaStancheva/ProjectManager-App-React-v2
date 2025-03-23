import './dashboard.css';
import NavBar from "../../components/nav-bar/Nav-bar.tsx";
import {Link} from "react-router";
import DashboardComponent from "../../components/dashboard-components/dashboard/dashboard-component.tsx";
import SingleProjectComponent from "../../components/single-project/project-component/single-project-component.tsx";

export default function Dashboard() {
    return (
        <div className="dashboard">
            <Link to="/dashboard" style={{textDecoration: "none", color: "inherit"}}>
                <NavBar/>
            </Link>
            <div className="dashboard-home">
                <DashboardComponent />
            </div>
            <div className="dashboard-singleProject-details">
                <SingleProjectComponent />
            </div>
        </div>
    )
}