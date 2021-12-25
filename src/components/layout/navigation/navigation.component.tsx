import { Link } from "react-router-dom"

const NavigationComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink" id="mainNav">
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand" to="/">
                    <img src="/assets/img/logo.png" width="60px"/>
                </Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link" to="">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/about">About Me</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/my-work">My Work</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavigationComponent