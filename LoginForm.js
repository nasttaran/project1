import React from "react";

function LoginForm(){
    return(
       <form>
        <div className="form-inner">
            <h2>Login</h2>
            {/* ERoRR! */}
        </div>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name"/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Name</label>
                <input type="password" name="password" id="password"/>
            </div>
            <input type="submit" value="login"/>
       </form>
    )
}

export default LoginForm;