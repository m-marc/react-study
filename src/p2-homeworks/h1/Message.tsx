import React from "react";
import messageStyle from "./Message.module.css";

interface PropsTypeMessage {
    avatar: string
    name: string
    message: string
    time: string
}
function Message(props: PropsTypeMessage) {
    return (
        <div className={messageStyle.messageApp}>
            <div className={messageStyle.messageWrapper}>
                <div className={messageStyle.message__avatar}>
                    <img src={props.avatar} alt="Your avatar"/>
                </div>
                <div className={messageStyle.messageBody}>
                    <div className={messageStyle.message__username}>
                        {props.name}
                    </div>
                    <div>
                        {props.message}
                    </div>
                    <div className={messageStyle.message__time}>
                        {props.time}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Message;
