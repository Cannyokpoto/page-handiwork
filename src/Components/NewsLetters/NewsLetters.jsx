import React from 'react';
import './NewsLetters.css';


function NewsLetters(){
    return(
        <div className='news-letters'>
            <p>Get our latest update and offers  by subscribing to our <span>Newsletter</span></p>
            <form>
                <input type="email" placeholder='Enter email' />
                <button type='submit'>Subscribe</button>
            </form>
        </div>
    )
}

export default NewsLetters;