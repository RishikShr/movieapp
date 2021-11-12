import React from 'react';
import './App.css';
import Header from './components/Header/header';
import MovieCard from './components/Movie/movie';

//import store from './store/store';
//import { Provider } from 'react';

function App() {
  return (
    <div className="App">
     <Header name ='Members'/>
     <MovieCard/>
    </div>
  );
}

export default App;
