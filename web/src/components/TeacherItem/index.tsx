import React from 'react';

import whatsIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/60967470?s=460&u=c443da8b16dc294d8b74d3e8592194eed753045b&v=4" alt="Profile Image"/>
                        <div>
                            <strong>Eduardo Correia</strong>
                            <span>Programação</span>
                        </div>
                    </header>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, ipsum cumque? <br /> <br /> Ducimus nisi eaque saepe, iste alias vel, veritatis doloribus, quibusdam illum dolore officia sed.</p>

                    <footer>
                        <p>
                            Preço/Hora:
                            <strong>R$ 0,50</strong>
                        </p>
                        <button type="button">
                            <img src={whatsIcon} alt="Icone Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem; 