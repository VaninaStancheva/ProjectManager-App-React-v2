import './single-project.css'
import DashboardProjectCard from "../dashboard-components/dashboard-project-card/dash-single-project.tsx";
import {Fab} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function SingleProjectComponent() {
    return (
        <div className="single-project">
            <h2 className="dashboard-title">Project Name</h2>
            <DashboardProjectCard/>
            <div className="dashboard-title-button">
                <h2 className="dashboard-title">Projects</h2>
                <Fab className="createBtn" variant="extended" size="medium" color="primary" aria-label="add">
                    <AddIcon/>
                    Create Project
                </Fab>
            </div>
        </div>
    )
}