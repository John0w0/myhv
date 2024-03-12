import React from "react";
import "./main.css"

function Main(){
    return(
        <div className="name">
            <h2>Habilidades</h2>
            <div className="cvMain">
                <ul className="ListaHabilidadesMain">
                    <li>HMTL</li>
                    <li>CSS</li>
                    <li>C++</li>
                    <li>C</li>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>Dart</li>
                    <li>SQL</li>
                </ul>
            </div>
            <h2>Formacion academica Tecnologica</h2>
            <div className="cvMain">
                <p>Tecnologo en Analisis y Desarrollo de Software. SENA</p>

            </div>
            <h2>Experiencia laboral</h2>
            <div className="cvMain">
                <p></p>
            </div>

            <h2>Proyectos desarrollados</h2>
            <div className="cvMain">
                <ul>
                    <li><p>Proyectos GitHub <a href="https://github.com/John0w0/ADSO-2711993"></a></p></li>
                </ul>
            </div>
            <h2>Formacion Complementaria</h2>
            <div className="cvMain">
                <h4>SENA</h4>
                <ul>

                </ul>
            </div>
        </div>
    )
}

export default Main