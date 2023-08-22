import { Link } from "react-router-dom"

import './../../assets/dashboard.css'

import UserFoto from './../../assets/img/user.jpg'
import Script from "../../assets/script"

const DashboardIndex = (props) => {

    const { showHideSidebar, setShowHideSidebar, widthPage } = Script()

    return (
        <div className="dashboard-wrapper">
            <div className={
                widthPage <= 850 ? 
                        showHideSidebar ? "display-none" : "sidebar-responsive-background"
                    :
                        showHideSidebar ? "display-none" : "display-none"
                }></div>
            <div className={
                widthPage <= 850 ? 
                        showHideSidebar ? "sidebar hide-sidebar-toggle" : "sidebar"
                    :
                        showHideSidebar ? "sidebar" : "sidebar hide-sidebar-toggle"
            }>
                <Link path='/' className="sidebar-title">Dashboard</Link>
                <div className="sidebar-button-wrapper">
                    <button className="btn-sidebar">
                        <span className="btn-icon">
                            <i className="fa-solid fa-home"></i>
                        </span>
                        Home
                    </button>
                    <button className="btn-sidebar">
                        <span className="btn-icon">
                            <i className="fa-solid fa-users"></i>
                        </span>
                        Users
                    </button>
                    <button className="btn-sidebar">
                        <span className="btn-icon">
                            <i className="fa-solid fa-user-plus"></i>
                        </span>
                        Register
                    </button>
                    <button className="btn-sidebar-close" onClick={() => setShowHideSidebar((current) => !current)}>
                        <span className="btn-icon">
                            <i className="fa-solid fa-xmark"></i>
                        </span>
                        Close
                    </button>
                </div>
            </div>

            <div className="content-wrapper">
                <div className="navbar">
                    <span className="sidebar-toggle-button" onClick={() => setShowHideSidebar((current) => !current)}>
                        {
                            widthPage <= 850 ?
                                    <i className="fa-solid fa-bars"></i>
                                :
                                    showHideSidebar ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>
                        }
                    </span>

                    <div className="navbar-right-menu">
                        <div className="dropdown">
                            <button className="btn-dropdown btn-profile">
                                <div className="img-profile">
                                    <img src={UserFoto} height={'50px'} width={'auto'} />
                                </div>
                                <span className="text-profile">
                                    Hi, Apip Rahman Syahidan <i className="fa-solid fa-caret-down ml-1"></i>
                                </span>
                            </button>

                            <div className="dropdown-menu">
                                <Link path="/" className="dropdown-item font-primary">
                                    <span className="dropdown-icon">
                                        <i className="fa-solid fa-gear"></i>
                                    </span>
                                    Settings
                                </Link>
                                <Link path="/" className="dropdown-item font-red">
                                    <span className="dropdown-icon">
                                        <i className="fa-solid fa-power-off"></i>
                                    </span>
                                    Logout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content">
                    { props.page }
                </div>

                <footer>
                    Footer
                </footer>
            </div>
        </div>
    )
}

export default DashboardIndex