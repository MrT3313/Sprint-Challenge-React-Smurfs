//DEPENDENCIES
import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios'

//COMPONENTS 
import NavBar from './components/NavBar'
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

//CSS
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    // GET 
    axios
      .get('http://localhost:3333/smurfs')
      .then( res => {
        console.log(res)
        this.setState( () => (
          {
            smurfs: res.data
          }
        ))
      })
      .catch( err => {
        console.log('TOTAL FAILURE IN GETTING DATA FROM SERVER')
      })
  }

  // POST //
  addSmurf = (e, newSmurf) => {
    e.preventDefault()
    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then( res => {
        console.log( res )
        this.setState( {
          smurfs: [...this.state.smurfs, newSmurf]
        })
      })
      .catch( err => {
        console.log( err )
      })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path='/' 
          render={() => <Smurfs smurfs={this.state.smurfs} /> }
        />
        <Route exact path='/smurf-form'
          render={() => <SmurfForm addSmurf={this.addSmurf}/> }
        />

        
        
      </div>
    );
  }
}

export default App;
