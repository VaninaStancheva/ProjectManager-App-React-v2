import './dash-single-project.css'

export default function DashboardProjectCard() {
    return (
        <div className="dashboard-projectCard-container">
            <div className="dashboard-projectCard-content">
                <div className="project-titleIcons-container">
                    <h2 className="dashboard-projectCard-title"> Title </h2>
                    <div className="icons-container">
                        <i className="icons blue fa-solid fa-user-plus fa-flip-horizontal"></i>
                        <i className="icons blue fa-solid fa-pen"></i>
                        <i className="icons red fa-solid fa-trash"></i>
                    </div>
                </div>
                <p className="dashboard-projectCard-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce mollis in nibh a tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce mollis in nibh a tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis in nibh a tristique.
                    Vestibulum ante ipsum primis in faucibus o… </p>
            </div>
        </div>
    )
}