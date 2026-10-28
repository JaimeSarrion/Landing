import React, { Component } from 'react'
import Competencia from './Competencia/Competencia'
import classes from './Competencias.module.css'

class Competencias extends Component {

    state = {
        compentencias: [
            {
                id: 1,
                Nombre: "WEB",
                Desc: "Developing Front-end and Back-end with current frameworks such as React, Vue, Angular or Node.",
                Icono: "Desktop"
            },
            {
                id: 2,
                Nombre: "MOBILE",
                Desc: "I have experience developing mobile applications with React Native, Ionic and Android.",
                Icono: "Android"
            },
            {
                id: 3,
                Nombre: "DESIGN",
                Desc: "Experience with Photoshop and wireframing programs.",
                Icono: "Brush"
            },
            {
                id: 4,
                Nombre: "IoT",
                Desc: "I have developed applications with Raspberry, LoRa boards all connected with Arduino sensors",
                Icono: "IoT"
            },
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