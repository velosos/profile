import React, {useState} from 'react'
import styles from '../../../styles/Home.module.css'


const Greeting = (props) => {
  let greeting = 'Good morning';
    const time = new Date().getHours();
    if (time > 12) {
      greeting='Good Affternoon';
      } 
    if (time > 18) {
      greeting ='Good evening' ;
      } 
    return (
        <span className={styles.description}>
        {greeting},{props.text}
        </span>
    )
}

export default Greeting;