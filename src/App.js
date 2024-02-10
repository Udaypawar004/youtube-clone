import React from 'react'
import { BrowserRouter, Router, Route } from 'react-router-dom'; 

import header from "./components/header.jsx"
import feed from "./components/feed.jsx"
import searchResult from "./components/searchResult.jsx"
import videoDetails from "./components/videoDetails.jsx"
import { AppContext } from './context/contextApi.js'

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <div className='flex flex-col h-full'>
          <header />
          <Router>
            <Route path='/' exact element={<feed />} />
            <Route path='/searchResult/:searchQuery' element={<searchResult />} />
            <Route path='/video/:id' element={<videoDetails />} />
          </Router>
        </div>
      </BrowserRouter>
    </AppContext>
  );
};

export default App