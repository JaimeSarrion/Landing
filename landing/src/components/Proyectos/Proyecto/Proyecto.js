import React, { Component } from 'react'
import classes from './Proyecto.module.css'

class Proyecto extends Component {

    onClickHandler = () => {
        window.location.href = this.props.Uri;
    }

    render() {
        return (
            <div onClick={this.onClickHandler} className={classes.FlipCard}>
                <div className={classes.FlipCardInner}>
                    <div className={classes.FlipCardFront}>
                        <img src={this.props.Imagen} alt="Avatar" className={classes.Imagen}></img>
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