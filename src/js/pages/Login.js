import React from "react";
import {Link} from 'react-router-dom';

export default class Login extends React.Component {

    onClick(){
        window.location.href="/#/clients";
    }
  render() {
    console.log("login");
    return (
        
            <div>
      <h1>Veuillez vous authentifier</h1>
      
        <label>
          Utilisateur : 
          <input type="text" />
        </label>
        <label>
          Mot de passe : 
          <input type="password" />
        </label>
        <button id="btn" onClick={this.onClick}>Valider</button>
      
      </div>
      
    );
  }
}
