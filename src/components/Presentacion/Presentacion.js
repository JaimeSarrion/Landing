import React, { Component } from 'react'
import classes from './Presentacion.module.css'

class Presentacion extends Component {
    render() {

        return (
            <div className={classes.Container}>
                <h3 className={classes.Titulo}>
                    What's up?
                </h3>
                <p className={classes.Texto}>
                    My passion, besides music, is computer science. Nowadays, 
                    I am focused on the development of web applications with frameworks such as React, 
                    Vue or Angular, although I also try to explore other branches of computing science, such as Internet of things, 
                    Machine Learning or development of mobile applications.
                </p>
            </div>
        )
    }
}


export default Presentacion