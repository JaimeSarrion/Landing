import React, { Component } from 'react'
import classes from './Proyecto.module.css'
import hbo from '../../../images/hbo-imagen.png'
import Grandalla from '../../../images/Grandalla-Imagen.png'


class Proyecto extends Component {

    onClickHandler = () => {
        window.location.href = this.props.Uri;
    }

    render() {
        let imagen = ''

        switch (this.props.Titulo) {
            case 'Grandallapp':
                imagen = (<img src={Grandalla} alt="Avatar" className={classes.Imagen}></img>)
                break;
            case 'HBO':
                imagen = (<img src={hbo} alt="Avatar" className={classes.Imagen}></img>)
                break;
            default:
                imagen = <img src={this.props.Imagen} alt="Avatar" className={classes.Imagen}></img>
        }

        return (
            <div onClick={this.onClickHandler} className={classes.FlipCard}>
                <div className={classes.FlipCardInner}>
                    <div className={classes.FlipCardFront}>

                        {imagen}

                    </div>
                    <div className={classes.FlipCardBack}>
                        <h1>{this.props.Titulo}</h1>
                        <p className={classes.Texto}>{this.props.Desc}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Proyecto