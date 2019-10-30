import React, { Component } from 'react'
import Competencia from './Competencia/Competencia'
import classes from './Competencias.module.css'

class Competencias extends Component {

    state = {
        compentencias: [
            {
                id: 1,
                Nombre: "WEB",
                Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend interdum lacus, eu consequat dolor convallis eu interdum lacus.",
                Icono: "Desktop"
            },
            {
                id: 2,
                Nombre: "MOBILE",
                Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend interdum lacus, eu consequat dolor convallis eu interdum lacus.",
                Icono: "Android"
            },
            {
                id: 3,
                Nombre: "Diseño",
                Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend interdum lacus, eu consequat dolor convallis eu interdum lacus.",
                Icono: "Brush"
            }
        ]
    }

    render() {
        let competencias = this.state.compentencias.map(item => {
            return (
                <Competencia
                    key={item.id}
                    Nombre={item.Nombre}
                    Desc={item.Desc}
                    Icono={item.Icono}
                />
            )
        })
        return (
            <div className={classes.Container}>
                <div />
                {competencias}
                <div />
            </div>
        )
    }
}

export default Competencias