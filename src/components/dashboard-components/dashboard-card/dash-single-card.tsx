import './dash-single-card.css'
import ic_trending_up_24px from '../../../assets/ic_trending_up_24px.svg'

export default function DashboardSingleCard () {
    return (
            <div className="dashboard-card-container">
                <img className="img" src={ic_trending_up_24px} alt="icon" />
                <div className="dashboard-card-content">
                    <h2 className="dashboard-card-title">3</h2>
                    <p className="dashboard-card-description">Project</p>
                </div>
            </div>
    )
}