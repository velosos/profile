import React, {useState, useEffect} from 'react'
import styles from '../../../styles/Home.module.css'
import Greeting from '../../components/Greeting'

import { Grow, Box, Avatar, makeStyles } from '@material-ui/core';
import Image from 'next/image'


const Header = ({ name, description, url}) => {
    const [checked, setChecked] = useState(false);


    useEffect(() => {
        setChecked(true);
    }, [])

    return (
        <div className={styles.main}> 
        <Image
        src={url}
        alt={name}
        width={200}
        height={200}
        className={styles.dot}
      />
       
        <Grow in={checked}>    
        <h1 className={styles.title}> 
        <Greeting text=" I'm"/>
        <br/>     
        {name}
        </h1>
        </Grow>   
        
        <p className={styles.description}>
          <code className={styles.code}>{description}</code>
        </p> 
        </div>
    )
}


export default Header;