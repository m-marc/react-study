import React, {useState} from 'react'
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {requestsAPI} from "./RequestsAPI";

function Request() {
    const [checked, setChecked] = useState<boolean>(false)
    const [response, setResponse] = useState<string>()

    const onClickHandle = () => {
        requestsAPI.sendStatus(checked)
            .then( res => {
                console.log(res)
                setResponse(res.data.errorText)
            })
            .catch( error => {
                console.log({...error})
                setResponse(error.response.data.errorText)
            })
    }

    return <div>
        <SuperCheckbox
            checked={checked}
            onChange={(e) => {setChecked(e.target.checked)}}
        />
        <SuperButton
            onClick={onClickHandle}>
            Send request
        </SuperButton>
        {response && <p>Server response: {response}</p>}
    </div>
}

export default Request