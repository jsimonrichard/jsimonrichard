import React, { useState, useEffect } from 'react';
import './index.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import { StyledLink } from './components/core';
import Home from './Home';

function App() {
  // Handle scrolling
  const [fillHeaderBG, setFillHeaderBG] = useState(false)
  const headerScrollHandler = e => {
    setFillHeaderBG( window.scrollY != 0 );
  }

  // Add the scrolling event listener
  useEffect(()=>{
    window.addEventListener("scroll", headerScrollHandler);
  },[]);

  // Render the app
  return (
    <div className="App min-h-screen">
      <BrowserRouter>
        <header className={"fixed p-6 w-screen text-3xl font-bold z-10 "
                                    + (fillHeaderBG ? "bg-white" : "bg-transparent")}>
            J. Simon Richard
        </header>

        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <footer className="bg-gray-200">
          <div className="flex flex-row lg:flex-row flex-wrap container mx-auto">
            <div className="p-10 flex-shrink">
              <StyledLink to="/" className="text-xl font-bold">Home</StyledLink>

              <StyledLink to="/#about">About</StyledLink>
              <StyledLink to="/#education">Education</StyledLink>
              <StyledLink to="/#work">Work Experiences</StyledLink>
              <StyledLink to="/#skills">Skills</StyledLink>
              <StyledLink to="/#interest">Interests</StyledLink>
            </div>

            <div className="flex-initial p-10">
              <h2 className="text-xl font-bold">Contact Me</h2>
              <StyledLink to="mailto: jsimonrichard@gmail.com">jsimonrichard@gmail.com</StyledLink>
            </div>
          </div>
          
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;  