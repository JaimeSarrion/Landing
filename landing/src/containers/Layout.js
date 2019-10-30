import React, { Component } from 'react'
import Imagen from '../components/Imagen/Imagen'
import classes from './Layout.module.css'
import Proyectos from '../components/Proyectos/Proyectos'
import Competencias from '../components/Competencias/Competencias'
import Presentacion from '../components/Presentacion/Presentacion'

class Layout extends Component {



    render() {
        return (
            <div className={classes.Pagina}>
                <Imagen />
                <Competencias />
                <Presentacion/>
                <Proyectos/>

                <div className={classes.Redes}>
                    <h2>Redes sociales</h2>
                </div>


            </div>
        )
    }
}

export default Layout