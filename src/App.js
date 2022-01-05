
import './App.css';

import React from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
// import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";



const App =()=> {
  const apikey= 'your api key'
// state={
//  progress:0
// }

//   setProgress =(progress)=>{
//     setState({progress:progress})
//   }
  
    return (
      <div>
         <Router>
        <Navbar/>
         {/* <LoadingBar
        color='#f11946'

        progress={state.progress}
       
      />  */}
        
        <Switch>
          <Route exact path="/"><News apikey={apikey}key="general" pageSize={6} catagory="general"/> </Route>
          <Route exact path="/business"><News apikey={apikey} key="business" pageSize={6} catagory="business"/> </Route>
          <Route exact path="/entertainment"><News apikey={apikey} key="entertainment" pageSize={6} catagory="entertainment"/> </Route>
          <Route exact path="/technology"><News apikey={apikey} key="technology" pageSize={6} catagory="technology"/> </Route>
          <Route exact path="/health"><News apikey={apikey} key="health" pageSize={6} catagory="health"/> </Route>
          <Route exact path="/science"><News apikey={apikey} key="science" pageSize={6} catagory="science"/> </Route>
          <Route exact path="/sports"><News apikey={apikey} key="sports" pageSize={6} catagory="sports"/> </Route>
          
        </Switch>
        </Router>
      </div>
    )
  }

export default App;