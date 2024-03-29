import React from 'react';
import { useNavigate } from "react-router-dom";
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

const Signup = () => {

    const textStyle = {
        color: '#243C54',
        fontWeight: 'bold',
    };

    const loginStyle = {
        color: '#FFFFFF',
        fontWeight: 'bold',
    };

    const containerStyle = {
        position: 'relative',
        backgroundColor: '#243C54',
        width: '100vw',
        height: '100vh',
        paddingLeft: 0,
    };

    const navigate = useNavigate();

    return (
        <div>
            <div className="container-fluid" style={containerStyle}>

                <MDBRow>

                    <MDBCol col='10' md='6' className='d-flex flex-column align-items-center' style={{ background: '#FFFFFF', height: '100vh' }}>
                        <img className='image-fluid' href="#" src="https://amplify-erpconnect-dev-135834-deployment.s3.amazonaws.com/brand.png" width="400" alt="" />
                        <h1 className='display-1' style={textStyle}>ERPConnect</h1>
                    </MDBCol>

                    <MDBCol col='4' md='6' style={containerStyle}>

                        <div className="d-flex flex-column ms-5 mt-5">

                            <div className="text-center">
                                <h1 className="mt-1 mb-5 mt-5 pb-1" style={loginStyle}>Sign up</h1>
                            </div>

                            <div className="container d-flex flex-column justify-content-center">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 mb-5">
                                        <MDBInput
                                            type="text"
                                            id="username"
                                            className="form-control"
                                            placeholder="Username"
                                            style={{ width: '100%' }}
                                        />
                                    </div>

                                    <div className="col-md-10 mb-5">
                                        <MDBInput
                                            type="password"
                                            id="password"
                                            className="form-control"
                                            placeholder="Password"
                                        />
                                    </div>

                                    <div className="col-md-10 mb-5">
                                        <MDBInput
                                            type="password"
                                            id="confirmPassword"
                                            className="form-control"
                                            placeholder="Confirm Password"
                                        />
                                    </div>

                                    <MDBBtn 
                                        className="col-md-4 mb-1" 
                                        style={{ color: '#243C54', background: 'white', border: 'none', height: '40px' }}
                                        onClick={() => navigate('/Login')}
                                    >Sign up</MDBBtn>
                                </div>
                            </div>

                            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mt-4">

                                <p class="text-muted mb-0">Already have an account?</p>
                                <MDBBtn 
                                    outline 
                                    className='mx-2' 
                                    color='#FFFFFF' 
                                    style={{ color: '#FFFFFF', fontWeight: 'bold', border: 'none', height: '40px' }}
                                    onClick={() => navigate('/Login')}
                                >Log in</MDBBtn>

                            </div>

                        </div>

                    </MDBCol>

                </MDBRow>
            </div>
        </div>
    );
}

export default Signup;