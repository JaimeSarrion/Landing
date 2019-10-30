import React, { Component } from 'react'
import classes from './header.module.css'

class Header extends Component {

    render() {
        return (
           
            <div className={classes.Header}>
                <h2 className={classes.Titulo}>Jaime Sarrión</h2>.
                <div className={classes.HeaderBotones}>

                </div>
                <a className={[classes.Button,classes.HeaderButton].join(' ')}>¿WHO I AM?</a>
                <a className={[classes.Button,classes.HeaderButton, classes.RightButton].join(' ')}>MY PROJECTS</a>
            </div>
        )
    }
}

export default Header