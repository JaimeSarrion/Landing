import React, { Component } from 'react'
import classes from './Redes.module.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


class Redes extends Component {


    render() {
        return (
            <div className={classes.Redes}>
                <h3 className={classes.Titulo}>
                    Redes Sociales
                </h3>
                <a href='https://github.com/JaimeSarrion' className={classes.Circulo}>
                    <GitHubIcon fontSize="large" htmlColor="whitesmoke" fontSize="large" style={{ marginTop: "36px" }} color="white"/>
                </a>
                <a href='https://www.linkedin.com/in/jaime-sarrion-sahuquillo/' className={classes.Circulo}>
                    <LinkedInIcon htmlColor="whitesmoke" fontSize="large" style={{ marginTop: "36px" }} color="white"/>
                </a>
            </div>
        )
    }
}

export default Redes