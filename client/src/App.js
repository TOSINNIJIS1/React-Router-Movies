import React, { useState } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList";
import Movies from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (

    <Router>
    <div>
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes</div>
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" component={Movies} />
    </div>  
    </Router>
  );
};

export default App;
