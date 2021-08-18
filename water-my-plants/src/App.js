import React from 'react';
import { Route } from 'react-router-dom';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AddPlantForm from './components/AddPlantForm.js'
import PlantList from './components/PlantList'
import Plant from './components/Plant'




import './App.css';
import Home from './components/Home'

function App() {
  return (

    <div className="App">
        <header>
        <h1>Water My Plants</h1>
          <p>
            Never forget when it's time to feed your foliage and quench your
            plants' thirst.
          </p>
        </header>
                  <Route exact path='/signIn' component={SignIn} />
                  <Route path='/sign-up' component={SignUp}/>
                  <Route exact path='/add-plant' component={AddPlantForm} />
                 
                  <Route exact path='/plant-list' component={PlantList}/>
                  
                  {/* to view an individual plant based on its id*/}
                  <Route path='/plant/:id' component={Plant}/>
                  <Route exact path='/' component={Home}/>
    </div>
  );
}

export default App;