import React from 'react';
import { TerminalAnimated, TerminalLink } from './components/terminal';

import { DynamicAge } from './components/core';
import jungleBackground from './img/jungleBackground.jpg';
import jungleBackgroundMobile from './img/jungleBackgroundMobile.jpg';
import profile from "./img/simon.jpg";

export default function Home(props) {
  return (
    <>
      <Hero />
      <About />

      <Education />
      <Work />
      <Skills />
      <Interests />
    </>
  );
}

function Hero(props) {
  // Get background image
  const backgroundImage = window.innerWidth >= 650 ? jungleBackground : jungleBackgroundMobile;

  // Render
  return (
    <section className="w-screen hero-height p-4 grid bg-cover bg-left-top bg-no-repeat"
      style={{backgroundImage: `url(${backgroundImage})`}}>
      <TerminalAnimated
        className="place-self-center max-w-screen-md mx-auto  min-h-96 mt-20 mb-20"
        command="whoami" start="onload">

        <br />
        Hi, my name is J. Simon Richard. I'm an aspiring full-stack developer
        with a wide range 
        of <TerminalLink>interests</TerminalLink> and <TerminalLink>skills</TerminalLink>.
        There's a lot I don't know, but when I'm faced with something new
        I'm good at learning it quickly.

        <br/><br/>

        I'm graduating high school this year, but I've already had some
        great <TerminalLink>education</TerminalLink> and <TerminalLink>work</TerminalLink> experiences.
      </TerminalAnimated>
    </section>
  );
}

//Photo by <a href="https://unsplash.com/@conscious_design?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
//Conscious Design</a> on <a href="https://unsplash.com/s/photos/4k-background-willough-tree?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
//Unsplash</a>


function About(props) {
  return (
    <section id="about" className="w-screen bg-white about-bg-shape -mt-12">
      <div className="container mx-auto grid lg:grid-cols-2 p-10 gap-8">
        <div className="self-center">
          <img src={profile} className="mx-auto w-auto h-auto max-h-96 rounded-full" />
        </div>
        <div className="my-auto">
          <h1 className="text-3xl">About</h1>
          <br />

          <p className="mb-2 indent">
            Welcome to my online resume! My name is Simon Richard, and I’m
            a <DynamicAge startDate={new Date(2003, 7, 3)} /> year-old self-taught programmer.
            I live in North-East Ohio and currently have an internship at Integrated
            Mill Systems Inc. In the fall, I’m also planning to attend Cleveland
            State University.
          </p>
          
          <p className="mb-2 indent">
            Since my early childhood, I’ve been interested in making things and
            learning how things work. I love engineering, math, physics, robotics,
            and computer science.
          </p>

          <p className="mb-2 indent">
            I started programming
            about <DynamicAge startDate={new Date(2012, 2, 15)}/> years ago. My
            first language was Processing (on Khan Academy), but since then I
            have added many more languages and frameworks to my programming tool
            box. Keep scrolling to learn more...
          </p>

        </div>
      </div>
    </section>
  );
}

function SectionTemplate(props) {
  return (
    <section id={props.id} className="pt-4 mb-18">
      <div className="bg-terminal-dark-blue text-white">
        <div className="container mx-auto px-10 py-4">
          <h1 className="text-5xl sm:text-7xl">{props.title}</h1>
        </div>
      </div>

      <div className="container mx-auto p-10">
        {props.children}
      </div>
    </section>
  );
}

function Education(props) {
  return (
    <SectionTemplate id="education" title="Education">
      <div className="mb-8 text-center">
        <h2 className="text-4xl">Associate of Science</h2>
        <h4 className="text-xl text-gray-500">Lakeland Community College -&nbsp;May&nbsp;2021</h4>

        Outstanding Mathematics Student Award<br />
        Finalist for the Provost’s Award
      </div>
      
      <div className=" text-center">
        <h2 className="text-3xl sm:text-4xl">High School Honors Diploma</h2>
        <h4 className="text-xl text-gray-500">iSTEM Geauga Early College High School -&nbsp;May&nbsp;2021</h4>
      </div>

    </SectionTemplate>
  );
}

function Work(props) {
  return (
    <SectionTemplate id="work" title="Employment">

    </SectionTemplate>
  );
}

function Skills(props) {
  return (
    <SectionTemplate id="skills" title="Skills">

    </SectionTemplate>
  );
}

function Interests(props) {
  return (
    <SectionTemplate id="interests" title="Interests">
      
    </SectionTemplate>
  );
}