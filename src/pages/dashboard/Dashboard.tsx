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
                <h2 className="dashboard-title">Dashboard</h2>
                <div className="dashboard-card">
                    <DashboardSingleCard/>
                    <DashboardSingleCard/>
                    <DashboardSingleCard/>
                    <DashboardSingleCard/>
                </div>
                <div className="dashboard-title-button">
                    <h2 className="dashboard-title">Projects</h2>
                    <Fab className="createBtn" variant="extended" size="medium" color="primary" aria-label="add">
                        <AddIcon/>
                        Create Project
                    </Fab>
                </div>

                <div className="dashboard-project-card">
                    <DashboardProjectCard/>
                    <DashboardProjectCard/>
                    <DashboardProjectCard/>
                    <DashboardProjectCard/>
                    <DashboardProjectCard/>
                    <DashboardProjectCard/>
                    <DashboardProjectCard/>
                    <DashboardProjectCard/>
                    <DashboardProjectCard/>
                </div>
            </div>
        </div>
    )
}