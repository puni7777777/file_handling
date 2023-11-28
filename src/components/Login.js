import React, { useState } from 'react'
import Axios from 'axios'

export default function Login() {

    const [userReg, setuserReg] = useState('');
    const [passwordReg, setpasswordReg] = useState('');

    const register = () => {
        Axios.post("http://localhost:3001/creds", {
            user: userReg,
            password: passwordReg
        }).then((response)=>{
            console.log(response);
        });
    }

    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <form>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="w-100"></div>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" onChange={(e) => {
                            setuserReg(e.target.value);
                        }}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="w-100"></div>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3"onChange={(e) => {
                            setpasswordReg(e.target.value);
                        }}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-success" onClick={register}>Register</button>
            </form>
            <form>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="w-100"></div>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" onChange={(e) => {
                            setuserReg(e.target.value);
                        }}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="w-100"></div>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3"onChange={(e) => {
                            setpasswordReg(e.target.value);
                        }}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-success" onClick={register}>Sign in</button>
            </form>
        </div>
    )
}
