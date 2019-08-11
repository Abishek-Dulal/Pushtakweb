import React, { useState } from 'react'
import StyledLoginInput from './StyledLoginInput';
import darkcss from "./login.module.css";
import { faMobile, faLock } from "@fortawesome/free-solid-svg-icons";



function LoginForm() {
    let css = darkcss;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let changeUsername = (e) => {
        setUsername(e.target.value);
    }

    let changePassword = (e) => {
        setPassword(e.target.value);
    }

    let submit = (e) => {
        e.preventDefault();
        console.log(username + " " + password);

    }


    return (
        <div className={css.inputdiv}>
            <form onSubmit={submit}>
                <img src={process.env.PUBLIC_URL + '/images/open-book.svg'} className={css.loginformImg} alt="logo" />
                <StyledLoginInput type="text" placeholder="Mobile no" icon={faMobile} name={username} valcallback={changeUsername}></StyledLoginInput>
                <StyledLoginInput type="password" placeholder='Password' icon={faLock} name={password} valcallback={changePassword}></StyledLoginInput>
                <p className={`${css.forgetlabel} ${css.inputformgap}`} >forget Password?</p>
                <button type="submit" className={`${css.loginbutton} ${css.inputformgap}`}  >Log in</button>
            </form>
        </div>
    )
}

export default LoginForm;
