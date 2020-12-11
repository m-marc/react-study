import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error_input : s.input; // need to fix with (?:)

    return (
        <div className={s.wrapper}>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <button className={s.btn_add} onClick={addUser}>Add new user</button>
            <span className={s.error_msg}>{error}</span>
            <span className={s.total_users}>{`Total users: ${totalUsers}`}</span>
        </div>
    );
}

export default Greeting;
