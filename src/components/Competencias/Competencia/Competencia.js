import React, { Component } from 'react';
import classes from './Competencia.module.css';
import AndroidIcon from '@mui/icons-material/Android';
import BrushIcon from '@mui/icons-material/Brush';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';

class Competencia extends Component {
  render() {
    let icon = '';
    switch (this.props.Icono) {
      case 'Android':
        icon = (
          <AndroidIcon
            htmlColor='whitesmoke'
            fontSize='large'
            style={{ marginTop: '36px' }}
            color='white'
          ></AndroidIcon>
        );
        break;
      case 'Desktop':
        icon = (
          <DesktopMacIcon
            htmlColor='whitesmoke'
            fontSize='large'
            style={{ marginTop: '36px' }}
            color='white'
          ></DesktopMacIcon>
        );
        break;
      case 'Brush':
        icon = (
          <BrushIcon
            htmlColor='whitesmoke'
            fontSize='large'
            style={{ marginTop: '36px' }}
            color='white'
          ></BrushIcon>
        );
        break;
      case 'IoT':
        icon = (
          <SettingsRemoteIcon
            htmlColor='whitesmoke'
            fontSize='large'
            style={{ marginTop: '36px' }}
            color='white'
          ></SettingsRemoteIcon>
        );
        break;
      default:
        icon = (
          <DesktopMacIcon
            htmlColor='whitesmoke'
            fontSize='large'
            style={{ marginTop: '36px' }}
            color='white'
          ></DesktopMacIcon>
        );
        break;
    }

    return (
      <div className={classes.Container}>
        <div className={classes.ContCirculo}>
          <div className={classes.Circulo}>{icon}</div>
        </div>
        <div>
          <h2>{this.props.Nombre}</h2>
          <p>{this.props.Desc}</p>
        </div>
      </div>
    );
  }
}

export default Competencia;
