import React, { Component } from 'react'
import Imagen from '../components/Imagen/Imagen'
import classes from './Layout.module.css'
import Proyectos from '../components/Proyectos/Proyectos'
import Competencias from '../components/Competencias/Competencias'
import Presentacion from '../components/Presentacion/Presentacion'
import Redes from '../components/Redes/Redes'
import { Element } from 'react-scroll'

class Layout extends Component {

    render() {
        return (
            <div className={classes.Pagina}>

                <Imagen />
                <Competencias />
                <Element name="presentacion">
                    <Presentacion />
                </Element>
                 <Element name="proyectos">
                    <Proyectos />
                </Element>
                <Redes /> 

            </div>
        )
    }
}

export default Layout