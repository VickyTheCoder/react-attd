import { useState } from "react";

import { useNavigate } from "react-router-dom";

function LoginForm(){
    const [usr, setUsr] = useState("");
    const [pwd, setPwd] = useState("");
    const navigate = useNavigate();

    const usrTyped = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsr(event.target.value);
    }

    const pwdTyped = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPwd(event.target.value);
    }

    const loginNow = (id: string, pwd: string) => {
        if (id === pwd){
            // alert("Passed");
            navigate("/active");
        }
        else{
            alert("Failed")
        }
    }
    return (<div>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input 
                    type="email"
                    value={usr}
                    onChange={usrTyped}
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input 
                    type="password"
                    value={pwd} 
                    onChange={pwdTyped}
                    className="form-control" 
                    id="exampleInputPassword1" 
                    placeholder="Password"/>
                </div>
                <input type="text" className="form-control" id="exampleInputPassword1" hidden/>
                
                <button type="submit" className="btn btn-primary" onClick={() => loginNow(usr, pwd)}>Submit</button>
            </form>
        </div>);
}

export default LoginForm;