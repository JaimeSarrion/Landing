import React, { Component } from 'react'
import classes from './Imagen.module.css'
import Header from '../header/header'
import imagen from '../../images/header.jpg'

class Imagen extends Component {

    render() {
        return (
            <div className={classes.HeaderImagen}>
                <Header></Header>
                <img alt="" className={classes.Imagen} src={imagen}></img>
            </div>
        )
    }

}


export default Imagen