import './dashboard.css';
import NavBar from "../../components/nav-bar/Nav-bar.tsx";
import {Link} from "react-router";
import {Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DashboardSingleCard from "../../components/dashboard-components/dashboard-card/dash-single-card.tsx";


export default function Dashboard() {
    return (
        <div className="dashboard">
            <Link to="/dashboard" style={{textDecoration: "none", color: "inherit"}}>
                <NavBar/>
            </Link>
            <DashboardSingleCard />
                <Fab className="createBtn" variant="extended" size="medium" color="primary" aria-label="add">
                    <AddIcon/>
                    Create Project
                </Fab>

        </div>
    )
}