import React from 'react'
import './Mycard.css'
const Mycard = ({title, description, url, urlToImage}) => {
    return (
        <div className='mycard'>
            <img className='mycardImg' src={urlToImage} alt="image"/>
            <h1 className='mycardh1'>{title}</h1>
            <p className='mycardp'>{(description).slice(0,150)}</p>
            <a className='mycardpa' href={url}>View Post</a>
        </div>
    )
}

export default Mycard