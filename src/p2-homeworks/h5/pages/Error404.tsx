import React from "react";
import s from "../h5.module.css"

function Error404() {
    return (
        <div className={s.wrapper}>
            <h1>404</h1>
            <h3>Page not found!</h3>
            <p>This may not mean anything.<br/>I'm probably working on something that has blown up.</p>
        </div>
    );
}

export default Error404;
