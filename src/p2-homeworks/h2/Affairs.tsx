import React from "react";
import Affair from "./Affair";
import {AffairType, FilterType} from "./HW2";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>,
    setFilter: (filter: FilterType) => void,
    deleteAffairCallback: (_id: number) => void,
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        return props.setFilter("all");
    }; // need to fix
    const setHigh = () => {
        return props.setFilter("high");
    };
    const setMiddle = () => {
        return props.setFilter("middle");
    };
    const setLow = () => {
        return props.setFilter("low");
    };

    return (
        <div className="affairList">

            {mappedAffairs}
            <div className="filterBtns">
                <button className="priority priority-filter" onClick={setAll}>All</button>
                <button className="priority_high priority-filter" onClick={setHigh}>High</button>
                <button className="priority_middle priority-filter" onClick={setMiddle}>Middle</button>
                <button className="priority_low priority-filter" onClick={setLow}>Low</button>
            </div>

        </div>
    );
}

export default Affairs;
