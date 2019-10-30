import React, { Component } from 'react'
import classes from './header.module.css'

class Header extends Component {

    render() {
        return (
           
            <div className={classes.Header}>
                <h2 className={classes.Titulo}>Jaime Sarrión</h2>.
                <div className={classes.HeaderBotones}>

                </div>
                <button className={[classes.Button,classes.HeaderButton].join(' ')}>¿WHO I AM?</button>
                <button className={[classes.Button,classes.HeaderButton, classes.RightButton].join(' ')}>MY PROJECTS</button>
            </div>
        )
    }
}

export default Header