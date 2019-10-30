import React,{Component} from 'react'
import classes from './Proyectos.module.css'
import Proyecto from './Proyecto/Proyecto'
class Proyectos extends Component {
    state = {
        projects: [
            {
                id: "1",
                Titulo: "Proyecto Argos",
                Desc: "Esta es la aplicación presentada como TFG(Trabajo de final de grado) en la Universidad de Alicante. Lo que se ha querido realizar es un sistema de monitorización para personas en riesgo. Este, es un prototipo que mantiene a una persona monitorizada 24 horas con una serie de sensores",
                Imagen:"https://github.com/JaimeSarrion/ArgosApp/blob/master/Argos/src/images/ArgosBueno.png?raw=true",
                Uri: "https://github.com/JaimeSarrion/ArgosApp"
            },
            {
                id: "2",
                Titulo: "HBO",
                Desc: "Esta es una práctica para la asignatura de Ingeniería Web de la Universidad de Alicante. La práctica consistía en hacer una pequeña página web con Laravel, la cual debería ser similar a alguna web que ya existiera, con el fin de intentar replicar algo de lo que desconociamos el código, sus dependencias, clases, etc.",
                Imagen:"https://www.merca2.es/wp-content/uploads/2019/08/logohbo.jpg",                
                Uri: "https://github.com/JaimeSarrion/HBO"
            },
            {
                id: "3",
                Titulo: "Vive Almansa",
                Desc: "So you're a tough guy. Like it really rough guy. Just can't get enough guy.Chest always so puffed guy.I'm that bad type.Make your mama sad type",
                Imagen:"https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/2d/c8/c6/2dc8c6d5-f92e-e2de-0e17-8d378ebcb64c/source/512x512bb.jpg",
                Uri: "https://play.google.com/store/apps/details?id=es.vivealmansa.app&hl=es_419"
            },
            
        ]

    }


    render (){
        let projects = this.state.projects.map(item =>{
            return(
                <Proyecto
                    key={item.id}
                    Titulo = {item.Titulo}
                    Desc = {item.Desc}
                    Uri = {item.Uri}
                    Imagen = {item.Imagen}
                />
            )
        })

        return(
            <div className={classes.Container}>
                <h3 className={classes.Titulo}>
                    My Projects
                </h3>
                <p className={classes.Texto}>This section shows some of my latest projects</p>
                <div className={classes.Proyectos}>
                    {projects}
                </div>
            </div>
        )
    }
}

export default Proyectos