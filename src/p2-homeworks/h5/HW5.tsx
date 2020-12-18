import React, {useState} from "react";
import Header from "./Header";
import Routes from "./Routes";
import {HashRouter} from "react-router-dom";
import s from "./h5.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAlignJustify} from "@fortawesome/free-solid-svg-icons";

function HW5() {
    const [navStatus, setNavStatus] = useState(false);
    return (
        <div>
            <HashRouter>
                <button className={s.btn} onClick={ () => setNavStatus(!navStatus) }>
                    <FontAwesomeIcon icon={faAlignJustify} size="2x" />
                </button>
                <Header menuToggle={navStatus} />

                <Routes/>

            </HashRouter>
        </div>
    );
}

export default HW5;
