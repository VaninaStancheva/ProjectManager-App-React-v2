import './nav-bar.css';
import ic_polymer_24px from '../../assets/ic_polymer_24px.svg';

export default function NavBar() {
    return (
        <nav className="nav-bar">
            <div className="nav-bar-title-container">
                <img src={ic_polymer_24px} alt="logo"/>
                <h1 className="nav-title">AppStack</h1>
            </div>
            <ul className="nav-bar-list">
            <div className="nav-bar-list-item-container">
                    <i className="projectsIcon fa-solid fa-house"></i>
                    <li className="nav-item">Projects</li>
                </div>
                <div className="nav-bar-list-item-container">
                    <i className="projectsIcon fa-solid fa-user-group"></i>
                    <li className="nav-item">Users</li>
                </div>
                <div className="nav-bar-list-item-container">
                    <i className="projectsIcon fa-solid fa-clipboard-user"></i>
                    <li className="nav-item">Teams</li>
                </div>
            </ul>
        </nav>
    )
}