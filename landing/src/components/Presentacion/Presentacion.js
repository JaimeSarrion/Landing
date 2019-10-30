import React, { Component } from 'react'
import classes from './Presentacion.module.css'

class Presentacion extends Component {
    render() {

        return (
            <div className={classes.Container}>
                <h3 className={classes.Titulo}>
                    What's up guys?
                </h3>
                <p className={classes.Texto}>So you're a tough guy. Like it really rough guy. Just can't get enough guy.Chest always so puffed guy.I'm that bad type.Make your mama sad type.
Make your girlfriend mad tight.
Might seduce your dad type.
I'm the bad guy, duh.
I'm the bad guy.
I like it when you take control.
Even if you know that you don't.
Own me, I'll let you play the role.
I'll be your animal.
My mommy likes to sing along with me.
But she won't sing this song.
If she reads all the lyrics.
She'll pity the men I know.</p>
            </div>
        )
    }
}


export default Presentacion