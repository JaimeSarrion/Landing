import React, { Component } from 'react'
import classes from './Imagen.module.css'
import Header from '../header/header'
import Aux from '../../hoc/Auxiliar'


class Imagen extends Component {

    render() {
        return (
            <div className={classes.HeaderImagen}>
                <Header></Header>
                <img className={classes.Imagen} src="https://mk0athemesdemon3j7s5.kinstacdn.com/wp-content/themes/west/images/header.jpg"></img>
            </div>
        )
    }

}


export default Imagen