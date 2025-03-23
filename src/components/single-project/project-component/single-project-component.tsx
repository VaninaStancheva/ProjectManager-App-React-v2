import './single-project.css'
import {Fab} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ProjectCard from "../project-card/project-card.tsx";

export default function SingleProjectComponent() {
    return (
        <div className="single-project">
            <h2 className="dashboard-title">Project Name</h2>
            <ProjectCard />
            <div className="dashboard-title-button">
                <h2 className="dashboard-title">Tasks</h2>
                <Fab className="createBtn" variant="extended" size="medium" color="primary" aria-label="add">
                    <AddIcon/>
                    Create Project
                </Fab>
            </div>
        </div>
    )
}