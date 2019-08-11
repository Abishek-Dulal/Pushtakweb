import React from 'react'
import StyledLoginInput from './StyledLoginInput';
import darkcss from "./login.module.css";
import { faMobile, faLock } from "@fortawesome/free-solid-svg-icons";



function LoginForm() {
    let css = darkcss;
    return (
        <div className={css.inputdiv}>
            <form>
                <img src={process.env.PUBLIC_URL + '/images/open-book.svg'} className={css.loginformImg} />
                <StyledLoginInput type="input" placeholder="Mobile no" icon={faMobile} ></StyledLoginInput>
                <StyledLoginInput type="password" placeholder='Password' icon={faLock} ></StyledLoginInput>
                <p className={`${css.forgetlabel} ${css.inputformgap}`} >forget Password?</p>
                <button className={`${css.loginbutton} ${css.inputformgap}`} >Log in</button>
            </form>
        </div>
    )
}

export default LoginForm;
