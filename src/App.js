import React from 'react';

import './App.css';

import MyGallery from '../src/pages/work/work';


import Header from '../src/components/header/header.co';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <MyGallery />
      </div>
    </div>
  );
}

export default App;
