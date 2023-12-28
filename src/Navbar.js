import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <>
                <nav className="navbar navbar-expand-lg  navbar-light bg-dark">
                    <div className="container">
                        <Link className="navbar-brand" style={{color:'white'}} to="#">Dev B Infotech</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ms-auto" style={{marginRight: '81px'}}>
                                <li className="nav-item active">
                                    <Link className="nav-link" style={{color:'white'}} to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{color:'white'}} to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{color:'white'}} to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </nav>
            </>
            <Outlet />
        </div>

    )
};

export default Navbar;