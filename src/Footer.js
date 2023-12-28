import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
        <div className="bg-dark py-4 my-1 border-top">
            <footer className="container d-flex flex-wrap justify-content-between align-items-center  ">
                <div className="col-md-4 d-flex align-items-center">
                    <Link to="/" className="mb-3 me-2 mb-md-0 text-decoration-none lh-1" style={{color:'white'}}>
                        <h4>Dev B Infotech</h4>
                    </Link>
                    <span className="mb-3 mb-md-0  " style={{color:'white'}}>© 2023 Company, Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-start list-unstyled d-flex" style={{marginRight:'-115px'}}>
                    <li  style={{ padding:'2px 16px'}}><Link style={{color:'white'}} to="#"><i className="fa fa-twitter"></i></Link></li>
                    <li  style={{ padding:'2px 16px'}}><Link style={{color:'white'}} to="#"><i className="fa fa-facebook"></i></Link></li>
                    <li  style={{ padding:'2px 16px'}}><Link style={{color:'white'}} to="#"><i className="fa fa-instagram"></i></Link></li>
                </ul>
            </footer>
            </div>
        </>
    )
};

export default Footer;