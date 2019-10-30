import React, { Component } from 'react'
import classes from './Competencia.module.css'
import AndroidIcon from '@material-ui/icons/Android';
import BrushIcon from '@material-ui/icons/Brush';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';

class Competencia extends Component {


    render() {
        let icon = "";
        switch (this.props.Icono) {
            case "Android":
                icon = (<AndroidIcon htmlColor="whitesmoke" fontSize="large" style={{ marginTop: "36px" }} color="white" ></AndroidIcon>)
                break;
            case "Desktop":
                icon = (<DesktopMacIcon htmlColor="whitesmoke" fontSize="large" style={{ marginTop: "36px" }} color="white" ></DesktopMacIcon>)
                break;
            case "Brush":
                icon = (<BrushIcon htmlColor="whitesmoke" fontSize="large" style={{ marginTop: "36px" }} color="white" ></BrushIcon>)
                break;
        }

        return (
            <div className={classes.Container}>
                <div className={classes.Circulo}>
                    {icon}
                </div>
                <div>
                    <h2>
                        {this.props.Nombre}
                    </h2>
                    <p>{this.props.Desc}</p>
                </div>
            </div>

        )
    }
}

export default Competencia