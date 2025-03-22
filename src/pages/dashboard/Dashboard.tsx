import './dashboard.css';
import NavBar from "../../components/nav-bar/Nav-bar.tsx";
import {Link} from "react-router";
import DashboardComponent from "../../components/dashboard-components/dashboard/dashboard-component.tsx";

export default function Dashboard() {
    return (
        <div className="dashboard">
            <Link to="/dashboard" style={{textDecoration: "none", color: "inherit"}}>
                <NavBar/>
            </Link>
            <DashboardComponent />
        </div>
    )
}