import React from 'react';
import "./footer.css"


export default function Footer(){
    return(
        <div className= 'footer'>
            <ul className='ulFooter'>
                <li className='contactListItemFooter'><a href=""><p>GitHub</p></a></li>
                <li className='contactListItemFooter'><a href=""><p>LinkedIn</p></a></li>
                <li className='contactListItemFooter'><a href=""><p>Facebook</p></a></li>
            </ul>

        </div>
    )
    
}