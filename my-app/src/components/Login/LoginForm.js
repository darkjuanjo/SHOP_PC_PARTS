import React from "react"

function LoginForm() {
       return (           
        <form>
            <div className='form-inner'>   
                <div className="form-group">
                       <label htmlFor="name"><span className="user">Username:</span> </label>
                    <input type="text" name="name" id="name" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="password"><span className="user">Password:</span> </label>
                    <input type="password" name="password" id="password" />
                </div>            
            </div>        
        </form>  
        
        
    )
}
export default LoginForm;
    