import React, { Component } from 'react'



class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         clients: [
            {
                firstName: "Martin",
                lastName: "Arthur",
                adress: "Y, Rue X 25522 Rennes"
              },
              {
                firstName: "Dupond",
                lastName: "Eduard",
                adress: "14, Rue Pergolèse 75116 Paris"
              },
              {
                firstName: "Lemaitre",
                lastName: "Christian",
                adress: "Y, Rue Aplha 028262 Marseille"
              }         ],
             adress : '',
             isActive : null
      }
      
   }

   toggleActive = i => {
    
    if (i === this.state.isActive) {
      this.setState({
        isActive: null
      });
    } else {
      this.setState({
        isActive: i
      });
    }
  };
   renderTableData() {
    return this.state.clients.map((client, i) => {
       const { firstName, lastName, adress } = client //destructuring
       return (
          <tr 
          style={
            this.state.isActive === i
              ? { background: '#41fc03' }
              : { background: 'white' }
          }
          key={i}
          onClick={() => this.toggleActive(i)}
          >
             <td onClick={()=>this.setState({adress : adress})}>{firstName}</td>
             <td>{lastName}</td>
             
          </tr>
       )
    })
 }



   render() {
        //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
        
        return (
        <div>
        <h1 id='title'>Liste des clients</h1>
        <table id='clients'>
           <tbody>
           <th >Nom</th>
           <th>Prenom</th>
           
              {this.renderTableData()}
           </tbody>
        </table>
        <p>
            Adresse : {this.state.adress}
        </p>
                    
               
     </div>
      )
   }
}

export default Table;