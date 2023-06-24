import {useState} from "react";

export const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="container">
            <div className="row">
            <div className="col"></div>
                <div className="col">
                    <h2>Sign In</h2>
                
                        <form onSubmit={submitForm}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="email" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="password" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="checkbox" />
                                    <label className="form-check-label" htmlFor="checkbox">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                  
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
};