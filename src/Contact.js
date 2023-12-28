import Footer from "./Footer";
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";


const Contact = () => {
    const [cc, setCity] = useState([]);

    const [id, setId] = useState()
    const [firstName, setFname] = useState()
    const [lastName, setLname] = useState()
    const [email, setEmail] = useState()
    const [phoneNumber, setPhone] = useState()
    const [city, setCi] = useState()
    const [course, setCourse] = useState()
    const [check, setCheck] = useState(0)
    

    useEffect(() => {
        axios.get('https://localhost:7162/api/Cities')
            .then((response) => {
                setCity(response.data);
            })
            .catch((err) => {
                console.log(err.message);
            })


    }, [])


    const AddContact = () =>{
        axios.post('https://localhost:7162/api/Contacts',{id,firstName,lastName,email,phoneNumber,city,course,check
        })
        .then((response)=>{
            alert("Thank your Posting")
            window.location.reload();
        })
        .catch((err)=>{
            console.log(err.message);
        })
    }

    const handlechange = (e) =>{
        if(e.target.checked)
        {
            setCheck(1);
        }
        else
        {
            setCheck(0);
        }
    }
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#FFF5E5' }}>
                <div style={{ maxWidth: '30%', padding: '80px 15px' }} className="left-info">
                    <div style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
                        <div style={{ fontSize: '0.9rem', width: '120%' }}>
                            <h5 style={{ fontSize: '40px', fontWeight: 'bold' }}>Get in Touch</h5>
                            <p >Don't want to use the contact form? no problem, you can
                                always reach us via email, phone.</p>
                            <div className="mb-5">
                                <h6 style={{ fontSize: '30px', fontWeight: 'bold' }}>OFFICE</h6>
                                <p className="d-flex flex-column"><span className="contact-info__item mb-2">
                                    2nd Floor, Johar Complex, Tilak Road Rishikesh
                                </span>
                                </p>
                            </div>
                            <div className="mb-5">
                                <h6 className="contact-info__title-2 mb-3" style={{ fontSize: '20px', fontWeight: 'bold' }}>CONTACT INFO</h6>
                                <p className="d-flex flex-column"><span className="contact-info__item mb-2"><i className="fa fa-envelope" aria-hidden="true"></i><span className="mx-2">maancomputerservices2008@gmail.com</span></span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ maxWidth: '30%' }} className="image-container">

                    <form className="row g-3" onSubmit={AddContact}>
                        {/* <div className="col-md-6">
                            <label className="form-label">Id</label>
                            <input type="text" className="form-control" onChange={(e)=> setId(e.target.value)} />
                        </div> */}
                        <div className="col-md-6">
                            <label className="form-label">First Name</label>
                            <input type="text"  className="form-control" onChange={(e)=> setFname(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Last Name</label>
                            <input type="text"  className="form-control" onChange={(e)=> setLname(e.target.value)} />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Email</label>
                            <input type="email"  className="form-control" placeholder="Enter Your Email" onChange={(e)=> setEmail(e.target.value)} />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Phone Number</label>
                            <input type="number"  className="form-control" placeholder="Enter your Number" onChange={(e)=> setPhone(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">City</label>
                            <select className="form-select"  onChange={(e)=> setCi(e.target.value)}>
                                <option>--Select your city--</option>
                                {
                                    cc.map((ct) =>{
                                        return(
                                            
                                            <option key={ct.id}>{ct.name}</option>
                                        )
                                    }
                                    )
                                }
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Courses</label>
                            <select className="form-select"  onChange={(e)=> setCourse(e.target.value)}>
                                <option>--Select your courses--</option>
                                <option>Basic</option>
                                <option>Advacnced</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input"  type="checkbox" checked={check === 1 ? true : false} onChange={(e)=> handlechange(e)} value={check} />
                                <label className="form-check-label">
                                    Get Notified
                                </label>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <input type="submit" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Contact;