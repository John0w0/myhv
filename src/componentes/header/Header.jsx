import React from 'react';
import "./header.css"
import fotopersonal from './R.png';

import {Smartphone,LocationOn,EmailOutlined,AlternateEmailSharp} from '@mui/icons-material';


export default function Header(){
    return(
        <div className='header'>
            <div className='headerPhoto'>
                <img src={fotopersonal
                } alt="foto-personal" className={"headerPhotoImg"} />
            </div>
            <div className='headerNombres'>
                <h1>JOHN CESAR CARRILLO GUARNIZO</h1>
                <p>Aprendiz en Tecnologia en Analisis y Desarrollo de Software</p>
            </div>
            <div className='headerContacto'>
                <ul className='contactList'>
                    <li className='contactListItem'><p><Smartphone/></p> <p>(+57) 3124731092</p></li>
                    <li className='contactListItem'><p><LocationOn/></p> <p>Pereira / Risaralda - Colombia</p></li>
                    <li className='contactListItem'><p><EmailOutlined/></p> <p>cesarcarrig8@gmail.com</p></li>
                    <li className='contactListItem'><p><AlternateEmailSharp/></p> <p>john.carrillo@soy.sena.edu.co</p></li>
                </ul>
            </div>
        </div>
    )
}