import React from 'react'
import { userMessage } from '../../redux/state'
import classes from './Messages.module.css'

const Messages: React.FC<{messages: Array<userMessage>}> = ({messages}) => {


    const msgList = messages.map(({label}, i) => {
        return (
            <li key={i}>
                <span>{label}</span>
            </li>
        )
    })
    return (
        <ul className={classes.Messages}>
            {msgList}
        </ul>
    )
}



export default Messages


