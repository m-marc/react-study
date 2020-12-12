import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from "./h5.module.css";

function Header(props:any) {
    return (
        <div className={`${s.header} ${props.menuToggle ? s.header_active : ''}`}>
            {/*add NavLinks*/}
            <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.active}>PreJunior</NavLink>
            <NavLink to={PATH.JUNIOR} activeClassName={s.active}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.active}>Junior+</NavLink>
        </div>
    );
}

export default Header;
