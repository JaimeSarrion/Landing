import React,{Component} from 'react'
import classes from './Proyectos.module.css'
import Proyecto from './Proyecto/Proyecto'
class Proyectos extends Component {
    state = {
        projects: [
            {
                id: "1",
                Titulo: "Proyecto Argos",
                Desc: "It's about my end-of-career job. What has been done is a 24-hour monitoring system for people at risk using LoRa as communication technology, as well as a series of sensors. ",
                Imagen:"https://github.com/JaimeSarrion/ArgosApp/blob/master/Argos/src/images/ArgosBueno.png?raw=true",
                Uri: "https://github.com/JaimeSarrion/ArgosApp"
            },
            {
                id: "2",
                Titulo: "HBO",
                Desc: "Application made for the University of Alicante. The purpose of the application is to make use of reverse engineering to make an application similar to HBO.",
                Imagen:"https://www.merca2.es/wp-content/uploads/2019/08/logohbo.jpg",                
                Uri: "https://github.com/JaimeSarrion/HBO"
            },
            {
                id: "3",
                Titulo: "Vive Almansa",
                Desc: "Mobile application made with Ionic for the company ViveAlmansa. This is a customer loyalty app.",
                Imagen:"https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/2d/c8/c6/2dc8c6d5-f92e-e2de-0e17-8d378ebcb64c/source/512x512bb.jpg",
                Uri: "https://play.google.com/store/apps/details?id=es.vivealmansa.app&hl=es_419"
            },
            {
                id: "4",
                Titulo: "Grandallapp",
                Desc: "Mobile application made with Android for the HackForGood in the University of Alicante.",
                Imagen:"https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/2d/c8/c6/2dc8c6d5-f92e-e2de-0e17-8d378ebcb64c/source/512x512bb.jpg",
                Uri: "https://github.com/JaimeSarrion/Grandallapp"
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