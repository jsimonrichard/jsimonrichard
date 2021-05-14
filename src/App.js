import React, { useState, useEffect } from 'react';
import './index.css';
import { TerminalAnimated, TerminalLink } from './components/terminal';

import profile from "./img/simon.jpg";
import jungleBackground from './img/jungleBackground.jpg';
import jungleBackgroundMobile from './img/jungleBackgroundMobile.jpg';

function App() {
  // Get background image
  const backgroundImage = window.innerWidth >= 650 ? jungleBackground : jungleBackgroundMobile;

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
      <header className={"fixed p-6 w-screen text-3xl font-bold z-10 "
                                   + (fillHeaderBG ? "bg-white" : "bg-transparent")}>

          J. Simon Richard

      </header>
      


      <section className="w-screen min-h-75-screen p-6 grid bg-cover bg-left-top bg-no-repeat"
        style={{backgroundImage: `url(${backgroundImage})`}}>
        <TerminalAnimated className="place-self-center w-full max-w-screen-lg mx-auto min-h-96 mt-20 mb-20"
          command="whoami" start="onload">
          
          <br />
          Hi, my name is J. Simon Richard. I'm an aspiring full-stack developer with a wide range of <TerminalLink>interests</TerminalLink> and <TerminalLink>skills</TerminalLink>. There's a lot I don't know, but when I'm faced with something new I'm good at learning it quickly.

          <br/><br/>

          I'm graduating high school this year, but I've already had some great <TerminalLink>education</TerminalLink> and <TerminalLink>work</TerminalLink> experiences. 
        
        </TerminalAnimated>
      </section>



      <section className="w-screen bg-white about-bg-shape -mt-8">
        <div className="container mx-auto grid md:grid-cols-2 p-10 gap-8">
          <div className="self-center">
            <img src={profile} className="mx-auto w-auto h-auto max-h-96 rounded-full" />
          </div>
          <div className="">
            <h1 className="text-3xl">About</h1>

            <br />
            This website is a work-in-progress. Come back later to see more content.
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

//Photo by <a href="https://unsplash.com/@conscious_design?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Conscious Design</a> on <a href="https://unsplash.com/s/photos/4k-background-willough-tree?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  