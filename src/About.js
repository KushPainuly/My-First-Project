import { Link } from "react-router-dom";
import Footer from "./Footer";
import logo from './Images/devlogo.png';


const About = () => {
    return (
        <>
            <section className="header2 cid-tjQDC0fgGE" id="header02-0" style={{ backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: '#FFF5E5' }}>
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-12 col-lg col-md-12 left-info">
                            <div className="text-wrapper align-left">
                                <h1 className="mbr-section-title align-left mbr-fonts-style mb-3 display-2"><strong>All you need to Know</strong></h1>
                                <p className="mbr-text align-left mbr-fonts-style display-5">
                                    Where creativity meets code to craft the digital world.</p>
                                <div className="mbr-section-btn mt-3 align-left"><Link className="btn btn-primary display-7" to="/contact">Get Started Now</Link></div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6 image-container">
                            <div className="image-wrapper mt-5">
                                <img className="w-100 " src={logo} alt="Mobirise Website Builder" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section data-bs-version="5.1" className="content7 careerm5 cid-tvL1Lf2EIE" id="content7-g" style={{ paddingTop: '5rem', paddingBottom: '5rem', backgroundPosition: '50% 50%', backgroundRepeat: 'no repeat', backgroundCover: 'cover', position: 'relative', wordWrap: 'break-word' }} >
                <div className="container-fluid" style={{ position: 'relative', wordWrap: 'break-word' }}>
                    <div className="row flex-row-reverse">
                        <div className="col-12 col-lg-7 text-wrap left-info" style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="text-wrapper" style={{ paddingLeft: '160px' }}>
                                <h2 className="mbr-section-title mbr-fonts-style display-2" style={{ marginBottom: '32px' }}>Our top most Priority </h2>
                                <p className="mbr-text mbr-fonts-style display-7 text-center">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid architecto atque
                                    corporis, dicta doloribus eos impedit inventore laudantium odio possimus quae quasi quia
                                    repellendus repudiandae tempore ullam vel velit.
                                </p>
                                <p className="mbr-cit mbr-fonts-style display-6">
                                    "Create, learn, Master"
                                </p>
                                <p className="mbr-name mbr-fonts-style display-7 text-center">
                                    Dev B Infotech
                                </p>
                                <div className="mbr-section-btn">
                                    <Link className="btn btn-primary-outline display-4" to="#">
                                        <span className="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn btn btn-outline-secondary btn-lg px-4" style={{marginLeft: '14px',transform: 'translateX(0)',transition: 'all 0.3s ease-out'}}>Read more</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 text-center" style={{ paddingLeft: '16px', paddingRight: '16px' }}>
                            <div className="image-wrapper" style={{ position: 'relative' }}>
                                <img src="https://assets.entrepreneur.com/content/3x2/2000/1649279368-Ent-2022Python.jpeg" alt="" className="image-container" style={{ height: '420px', objectFit: 'cover', borderRadius: '10px', overflow: 'hidden' }} />
                                <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nJTIwcXVvdGVzfGVufDB8fDB8fHww&w=1000&q=80" className="slideslide" alt="" style={{ height: '420px', objectFit: 'cover', borderRadius: '10px', marginTop: '-320px', marginLeft: '380px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section data-bs-version="5.1" className="content4 careerm5 cid-tvKZOM6hSm" id="content4-7">

                <div className="container-fluid">
                    <div className="row" style={{padding: '0px 16px'}}>
                        <div className="col-12 col-lg-8 card left-info">
                            <div className="image-wrapper">
                                <img src="https://www.researchgate.net/publication/338801424/figure/fig5/AS:850877732630528@1579876468397/Landscape-architecture-students-preparing-for-a-lecture-by-Dr-Burley-concerning-visual.png" alt="" style={{height: '480px', objectFit: 'cover', borderRadius: '10px'}} />
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 card image-container">
                            <div className="card-wrapper" style={{borderRadius: '10px',backgroundColor: '#ff6839', padding: '32px 16px',display: 'flex', flexDirection: 'column', webkitFlex: '1',justifyContent: 'space-between',height: '100%', overflow: 'hidden'}}>
                                <div className="card-date">
                                    <p className="mbr-date mbr-fonts-style display-2" style={{paddingBottom: '64px', position: 'relative', color: '#ffff', textAlign: 'center', fontSize: '3.5rem', lineHeight: '1.16', letterSpacing: '-0.01em'}}>
                                        Our Lectures
                                        <span style={{position: 'absolute',right: '11rem',bottom: '46px',fontSize: '36%'}}>2023</span>
                                    </p>
                                </div>
                                <div className="card-link-wrapper">
                                    <Link to="/home" className="card-link" style={{display: 'inline-flex',alignItems: 'center'}}>
                                        <p className="mbr-link mbr-fonts-style display-5" style={{color: '#ffff', fontSize: '2.2rem', lineHeight: '1.228',textDecoration: 'none'}}>
                                            Coming soon
                                            <span className="mmobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn" style={{position: 'relative',width: '48px',height: '48px',display: 'inline-flex',justifyContent: 'center',alignItems: 'center',fontSize: '60%',marginLeft: '14px',color: '#ffffff',opacity: '0',transform: 'translate(-5px, 5px) rotate(-45deg)',transition: 'all 0.3s ease-out'}}>
                                            </span>
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section data-bs-version="5.1" class="pricing1 cid-tjRuQo193e" id="pricing01-b" style={{ backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', paddingTop: '6rem', paddingBottom: '6rem' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 fade-in">
                            <h2 className="title align-center mbr-fonts-style mb-5 pb-3 display-1 text-center" style={{ color: '#1b224b', fontWeight: '600' }}><strong>Choose Your Courses</strong></h2>

                        </div>
                        <div className="col-12 col-md-6 align-center col-lg-5 left-info">
                            <div className="plan card1" style={{ padding: '3rem', borderRadius: '3rem', boxShadow: '0 0 20px 0 lightgray' }}>
                                <div className="plan-header">
                                    <h6 className="plan-title align-left mbr-fonts-style mb-3 display-2">
                                        <strong>Basic</strong>
                                    </h6>
                                    <div className="plan-price">
                                        <p className="price-term mbr-semibold align-left mbr-fonts-style mb-3 display-7">Pack of 4 langugaes
                                            &nbsp;</p>
                                    </div>
                                </div>
                                <div className="plan-body">
                                    <div className="plan-list mb-4">
                                        <div className="mbr-text mbr-fonts-style display-7">
                                            <ul>
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>Javascript</li>
                                                <li>JQuery</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mbr-section-btn align-left">
                                        <Link to="/contact" className="btn btn-primary display-4">Get
                                            started</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 align-center col-lg-5 image-container">
                            <div className="plan card2" style={{ padding: '3rem', borderRadius: '3rem', boxShadow: '0 0 20px 0 grey' }}>
                                <div className="plan-header">
                                    <h6 className="plan-title align-left mbr-fonts-style mb-3 display-2">
                                        <strong>Advanced</strong>
                                    </h6>
                                    <div className="plan-price">
                                        <p className="price-term mbr-semibold align-left mbr-fonts-style mb-3 display-7">Pack of 4 langugaes
                                            &nbsp;</p>
                                    </div>
                                </div>
                                <div className="plan-body">
                                    <div className="plan-list mb-4">
                                        <div className="mbr-text mbr-fonts-style display-7">
                                            <ul>
                                                <li>React</li>
                                                <li>Sql Server</li>
                                                <li>Microsoft .NET Framework</li>
                                                <li>Node Js</li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div className="mbr-section-btn align-left">
                                        <Link to="/contact" className="btn btn-primary display-4">Get
                                            started</Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
};

export default About;