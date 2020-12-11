import React from "react";
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType, // need to fix any
    deleteAffairCallback: (_id: number) => void// need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        return props.deleteAffairCallback(props.affair._id);
    };// need to fix

    return (
        <div>
            <span className={`priority_${props.affair.priority}`}>{props.affair.name}</span>
            <button className="deleteBtn" onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
