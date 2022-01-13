import React from "react"; 
import "../styles/login.css"

function login() {
    return (
        <div className ="login">
            <h1>Login/Sign up</h1>
            <form id="login" method="post">
                <label> First Name</label>
                <input placeholder="Please enter first name..." type="text" />
                <label> Last Name</label>
                <input placeholder="Please enter last name..." type="text"/>
                <label> Email</label>
                <input placeholder="Please enter email..." type="text"/>
                <label> Password</label>
                <input placeholder="Please enter Password..." type="text"/>
                <button type="Login"> Login </button>
            </form>
            
            
        </div>
    )
}

export default login
