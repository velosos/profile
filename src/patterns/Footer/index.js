import React from 'react'
import styles from '../../../styles/Home.module.css'
import MailOutlineIcon from '@material-ui/icons/MailOutline';


const Footer = () => {
    return (
        <div>
        <footer className={styles.footer}>
        <MailOutlineIcon/>
            {' '}
            <a
            target="_blank"
            rel="noopener noreferrer"
            > 
             othiagoveloso@gmail.com
            </a>
        </footer>                    
        </div>
    )
}

export default Footer;