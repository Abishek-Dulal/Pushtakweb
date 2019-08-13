import React, { useReducer } from 'react'
import StyledLoginInput from './StyledLoginInput';
import darkcss from "./../../Componentcss/style.module.css";
import { faMobile, faLock } from "@fortawesome/free-solid-svg-icons";




function LoginForm() {
    let css = darkcss;

    let initialState = {
        username: "",
        password: "",
    }

    let reducer = (state, action) => {
        switch (action.type) {
            case "changeVal":
                return {
                    ...state,
                    [action.name]: action.payload.target.value
                }
            default:
                return { ...state };

        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);


    let submit = (e) => {
        e.preventDefault();
        console.log(state.username + " " + state.password);
    }


    return (
        <div className={css.inputdiv}>
            <form onSubmit={submit}>
                <img src={require("./../../images/open-book.svg")} className={css.loginformImg} alt="logo" />
                <StyledLoginInput type="text" placeholder="Mobile no" icon={faMobile} name={state.username} valcallback={(e) => { e.persist(); dispatch({ type: "changeVal", name: "username", payload: e }) }}></StyledLoginInput>
                <StyledLoginInput type="password" placeholder='Password' icon={faLock} name={state.password} valcallback={(e) => { e.persist(); dispatch({ type: "changeVal", name: "password", payload: e }) }}></StyledLoginInput>
                <p className={`${css.forgetlabel} ${css.inputformgap}`} >forget Password?</p>
                <button type="submit" className={`${css.loginbutton} ${css.inputformgap}`}  >Log in</button>
            </form>
        </div>
    )
}

export default LoginForm;
