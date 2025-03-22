import DashboardSingleCard from "../dashboard-card/dash-single-card.tsx";
import {Fab} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DashboardProjectCard from "../dashboard-project-card/dash-single-project.tsx";
import './dashboard-component.css'

export default function DashboardComponent() {
    return (
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
    )
}