import './dashboard.css';
import NavBar from "../../components/nav-bar/Nav-bar.tsx";
import {Link} from "react-router";
import {Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DashboardSingleCard from "../../components/dashboard-components/dashboard-card/dash-single-card.tsx";
import DashboardProjectCard from "../../components/dashboard-components/dashboard-project-card/dash-single-project.tsx";


export default function Dashboard() {
    return (
        <div className="dashboard">
            <Link to="/dashboard" style={{textDecoration: "none", color: "inherit"}}>
                <NavBar/>
            </Link>
            <div className="dashboard-content">
                <div className="dashboard-card">
                    <h2 className="dashboard-title">Dashboard</h2>
                    <DashboardSingleCard/>
                </div>
                <div className="dashboard-project-card">
                    <h2 className="dashboard-title">Projects</h2>
                    <DashboardProjectCard/>
                </div>
            </div>
            <Fab className="createBtn" variant="extended" size="medium" color="primary" aria-label="add">
                <AddIcon/>
                Create Project
            </Fab>

        </div>
    )
}