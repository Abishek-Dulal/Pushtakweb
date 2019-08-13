import React from 'react'
import SpecialSearch from './SpecialSearch';
import darkcss from "./../../Componentcss/style.module.css";
import { faHome, faHeart, faBook, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBarCurrent() {
    let css = darkcss;
    return (
        <div className={css.navbar}>
            <SpecialSearch></SpecialSearch>
            <FontAwesomeIcon icon={faHome} className={css.nav_img}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faHeart} className={css.nav_img}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faBook} className={css.nav_img}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faBars} className={css.nav_img}></FontAwesomeIcon>
        </div>

    )
}

export default NavBarCurrent;
