import React from 'react'
import styles from '../../../styles/Home.module.css'

export const Card = (props) => {  
    return (
        <a href={props.url} className={styles.card}>
        <h3> {props.icon} {props.title}</h3>
        <p>{props.description}</p>
      </a>
    )
}
export default Card;

