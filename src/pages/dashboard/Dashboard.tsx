import './dashboard.css';
import NavBar from "../../components/nav-bar/Nav-bar.tsx";
import {Link} from "react-router";

export default function Dashboard() {
    return (
        <Link to="/dashboard">
            <NavBar />
        </Link>
    )
}