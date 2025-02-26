import './nav-bar.css';

export default function NavBar() {
    return (
        <nav className="nav-bar">
            <h1 className="nav-title">AppStack</h1>
            <ul className="nav-bar-list">
                <li className="nav-item">Projects</li>
                <li className="nav-item">Users</li>
                <li className="nav-item">Teams</li>
            </ul>
        </nav>
    )
}