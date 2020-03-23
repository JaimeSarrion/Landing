import React, { Component } from 'react'
import classes from './header.module.css'
import { Link } from 'react-scroll'


class Header extends Component {

    render() {
        return (

            <div className={classes.Header}>
                <h2 className={classes.Titulo}>Jaime Sarrión</h2>
                <div className={classes.HeaderBotones}>

                </div>
                <Link
                    to="presentacion"
                    spy={true}
                    smooth={true}
                    duration={1500}
                >
                    <button className={[classes.Button, classes.HeaderButton].join(' ')}>¿WHO I AM?</button>
                </Link>

                <Link
                    to="proyectos"
                    spy={true}
                    smooth={true}
                    duration={1500}
                >
                    <button className={[classes.Button, classes.HeaderButton, classes.RightButton].join(' ')}>MY PROJECTS</button>
                </Link>
            </div>
        )
    }
}

export default Header