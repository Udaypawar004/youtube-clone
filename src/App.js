import React from 'react'
import { AppContext } from './context/contextApi.js'

import header from "./components/header.jsx"
import feed from "./components/feed.jsx"
import searchResult from "./components/searchResult.jsx"
import videoDetails from "./components/videoDetails.jsx"

const App = () => {
  return (
    <AppContext>
      <div className="text-3xl">App</div>
    </AppContext>
  );
};

export default App