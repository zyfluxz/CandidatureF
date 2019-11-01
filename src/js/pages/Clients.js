import React from "react";
import Table from "./Table";


export default class Clients extends React.Component {
 
  constructor(props){
    super(props);
    this.clients= [];
    this.list= [
      {
        firstName: "Fares",
        lastName: "Baatour",
        adress: "Tunisia"
      },
      {
        firstName: "Fares",
        lastName: "Baatour",
        adress: "Tunisia"
      },
      {
        firstName: "Fares",
        lastName: "Baatour",
        adress: "Tunisia"
      }
      ]; 
      
  } 
 
  render() {
    console.log("clients");
    
   
    
    return (
        
            <div>
              <Table/>  
            </div>
      
    );
  }
}

