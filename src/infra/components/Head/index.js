import React from 'react';
import HeadNext from 'next/head'
import PropTypes from 'prop-types'

const Head = ({title}) => {
    return(
        <HeadNext>    
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />    
        </HeadNext>
    );
}
Head.prototype = {
    title: PropTypes.string.isRequired,
}


export default Head;