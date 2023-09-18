import './App.css';
import React, { useEffect} from 'react';
import Landing from './components/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Register from './components/auth/Register';
import Login from './components/auth/Login';





const App = () => { 
  useEffect(() => {
    
  }, []);

  return(
    <div className="App">
      <Router>
        
          <Routes>
          <Route exact path='/' element={<Register/>}/>
          </Routes>
            <Routes>
            <Route exact path='/login' element={<Login/>}/>
            </Routes>
            <Routes>
            <Route exact path='/landing' element={<Landing/>}/>
            </Routes>
            
            
            
          
          
            
        
      </Router>
      
       
       
        <Container>

          {/* <Alert/>
          <Switch>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/profile/:id' component={Profile}/>
            <PrivateRoute exact path='/dashboard' component={Dashboard}/>
            <PrivateRoute exact path='/edit-profile' component={EditProfile}/> 
          </Switch>  */}
        </Container>
     
      
    </div>
    )}


export default App;