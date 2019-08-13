import React from 'react'
import darkcss from "./../../Componentcss/style.module.css";

function SpecialSearch(props) {
    let css = darkcss;
    return (
        <>
            <input className={css.search_text_input} placeholder="Search..."></input>
        </>
    )
}

export default SpecialSearch;
