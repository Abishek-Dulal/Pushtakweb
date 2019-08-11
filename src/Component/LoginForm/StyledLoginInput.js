import React from 'react'
import darkcss from "./login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function StyledLoginInput(props) {
    let css = darkcss;
    return (
        <div className={css.inputformgap}>
            <div>
                <FontAwesomeIcon icon={props.icon} className={css.inputicon} ></FontAwesomeIcon>
                <input type={props.type} placeholder={props.placeholder} className={css.inputform}></input>
            </div>
            <hr className={css.inputhr}></hr>
        </div>
    )
}

export default StyledLoginInput;
