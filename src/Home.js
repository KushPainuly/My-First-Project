import Footer from "./Footer";
import './App.css';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <div className="background" style={{backgroundColor: '#FFF5E5'}}>
            <main>
                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="image-container col-10 col-sm-8 col-lg-6">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" className="spinner d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" style={{ maxWidth: "500px", maxHeight: "300px", loading: "lazy" }} />
                        </div>
                        <div className="col-lg-6 left-info">
                            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Ready to React? </h1>
                            <p className="lead">Industries top rated language that is running in the market right now and it will take over soon. Come Join us to learn Industries top skill.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" className="second btn btn-primary btn-lg px-4 me-md-2"><Link to="/about" style={{textDecoration: 'none', color: 'white'}}>Courses</Link></button>
                                <button type="button" className="first btn btn-outline-secondary btn-lg px-4"><Link to="/contact" style={{textDecoration: 'none', color: 'black'}}>Contacts</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            </div>

            <main>
                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-lg-6 left-info">
                            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Want to Fetch queries with ease ? We got you !</h1>
                            <p className="lead">Now Fetching, quering, updating and deleting have become easier with the use of sql server and we are willing to provide this learing to you with top quality experts, you just need to trust us.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2"><Link to="/about" style={{textDecoration: 'none', color: 'white'}}>Courses</Link></button>
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4"><Link to="/contact" style={{textDecoration: 'none', color: 'black'}}>Contacts</Link></button>
                            </div>
                        </div>
                        <div className="image-container col-10 col-sm-8 col-lg-6 spinners">
                            <img src="https://lh3.googleusercontent.com/-v5LSZJbYI7E/YFdIchHdrnI/AAAAAAAAml0/hAwPRbMOpmEtd-0VA27zB4GS9O0a2kUzQCLcBGAsYHQ/w1200-h630-p-k-no-nu/image.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" style={{ maxWidth: "700px", maxHeight: "500px", loading: "lazy" }} />
                        </div>
                    </div>
                </div>
            </main>
            <div className="background" style={{backgroundColor: '#FFF5E5'}}>
            <main>
                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6 image-container spinners">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" style={{ maxWidth: "600px", maxHeight: "400px", loading: "lazy" }} />
                        </div>
                        <div className="col-lg-6 left-info">
                            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Want to master Industry top rated skill ? .NET is all you missing</h1>
                            <p className="lead">Frontend without backend is all you ignoring to raech at your new potential. Come Join us we are providing every material you need to grow your inner coder.
                                                With .NET coding becomes way easier and we want you to master this skill 
                            </p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2"><Link to="/about" style={{textDecoration: 'none', color: 'white'}}>Courses</Link></button>
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4"><Link to="/contact" style={{textDecoration: 'none', color: 'black'}}>Contacts</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            </div>
    
            
            
            <Footer />
        </>
    )
};

export default Home;