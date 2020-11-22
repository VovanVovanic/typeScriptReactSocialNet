import React, { ChangeEvent, FormEvent } from 'react'
import { ActionsType, addDialogMessageAC, changeDialogMessageAC, userMessage } from '../../redux/state'
import classes from './Messages.module.css'

type MessagePropsType = {
  messages: Array<userMessage>;
  newDialogMessage: string;
  dispatch: (action: ActionsType) => void;
};

const Messages: React.FC<MessagePropsType> = ({messages, newDialogMessage, dispatch}) => {


    const msgList = messages.map(({label}, i) => {
        return (
            <li key={i}>
                <span>{label}</span>
            </li>
        )
    })

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value) {
            dispatch(changeDialogMessageAC(e.currentTarget.value));
        }

    }

    const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addDialogMessageAC());
    };
    return (
        <>
        <ul className={classes.Messages}>
            {msgList}
            </ul>
            <form onSubmit={onFormSubmit}>
                <input
                    placeholder='Type your message'
                    value={newDialogMessage}
                    onChange={onInputChange}
                />
                <button>Add Message</button>
            </form>
        </>
    )
}



export default Messages


