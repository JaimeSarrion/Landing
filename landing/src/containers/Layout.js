import React, { Component } from 'react'
import Imagen from '../components/Imagen/Imagen'
import classes from './Layout.module.css'
import Proyectos from '../components/Proyectos/Proyectos'
import Competencias from '../components/Competencias/Competencias'

class Layout extends Component {



    render() {
        return (
            <div className={classes.Pagina}>
                <div className={classes.Imagen}>
                    <Imagen></Imagen>
                </div>
                <div className={classes.Competencias}>
                    <Competencias></Competencias>
                </div>

                <div className={classes.Redes}>
                    <h2>Redes sociales</h2>
                </div>
                <div>
                    <h2>Quien soy</h2>
                </div>
                <div className={classes.Contenido}>
                    <Proyectos></Proyectos>
                </div>
            </div>
        )
    }
}

export default Layout