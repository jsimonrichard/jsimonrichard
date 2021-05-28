import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import { TerminalAnimated, TerminalLink } from './components/terminal';
import { DynamicAge, StyledLink, Timeline, TimelineItem, Skill, ScrollArrow } from './components/core';

import jungleBackground from './img/jungleBackground.jpg';
import jungleBackgroundMobile from './img/jungleBackgroundMobile.jpg';
import profile from "./img/simon.jpg";

import lakeland from "./img/work/lakeland.png";
import ims from "./img/work/ims.png";

import pythonLogo from './img/skills/python.png';
import javaScriptLogo from './img/skills/javascript.png';
import linuxLogo from './img/skills/linux.png';
import gitLogo from './img/skills/git.png';
import reactJSLogo from './img/skills/react.png';
import HTMLCSSLogo from './img/skills/html-css.png';
import webDesignLogo from './img/skills/web-design.png';
import dockerLogo from './img/skills/docker.png';
import mongoDBLogo from './img/skills/mongodb.png';
import djangoLogo from './img/skills/django.png';
import micropythonLogo from './img/skills/micropython.png';
import cppLogo from './img/skills/c++.png';

export default function Home(props) {
  return (
    <>
      <Hero />

      <div className="container mx-auto">
        <About />

        <Education />
        <Work />
        <Skills />
        <Interests />
      </div>
    </>
  );
}

function Hero(props) {
  // Get background image
  const backgroundImage = window.innerWidth >= 650 ? jungleBackground : jungleBackgroundMobile;

  // Render
  return (
    <section className="w-screen min-h-screen p-4 grid bg-cover bg-left-top bg-no-repeat hero-bg-fade"
      style={{backgroundImage: `url(${backgroundImage})`}}>
      <TerminalAnimated
        className="place-self-center max-w-screen-md mx-auto min-h-96 mt-20 mb-28 border-4"
        command="whoami" start="onload">

        <br />
        Hi, my name is J. Simon Richard. I'm an aspiring full-stack developer
        with a wide range 
        of <TerminalLink to="#interests">interests</TerminalLink> and <TerminalLink to="#skills">skills</TerminalLink>.
        There's a lot I don't know, but when I'm faced with something new
        I'm good at learning it quickly.

        <br/><br/>

        I'm graduating high school this year, but I've already had some
        great <TerminalLink to="#education">education</TerminalLink> and <TerminalLink to="#work">work</TerminalLink> experiences.
      </TerminalAnimated>
    </section>
  );
}

//Photo by <a href="https://unsplash.com/@conscious_design?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
//Conscious Design</a> on <a href="https://unsplash.com/s/photos/4k-background-willough-tree?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
//Unsplash</a>


function About(props) {
  return (
    <section id="about" className="w-full bg-white about-bg-shape -mt-28">
      <div className="container mx-auto grid lg:grid-cols-2 p-10 gap-8">
        <div className="self-center">
          <img src={profile} className="mx-auto w-auto h-auto max-h-96 rounded-full " />
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
    <section id={props.id} className="pb-18 md:pb-24 bg-white">
      <div className="bg-terminal-dark-blue text-white">
        <div className="container mx-auto px-10 py-4">
          <h1 className="text-4xl sm:text-5xl">
            {props.title}
          </h1>
        </div>
      </div>

      <div className={"container mx-auto p-10 "+props.className}>
        {props.children}
      </div>
    </section>
  );
}

function Education(props) {
  return (
    <SectionTemplate id="education" title="Education">
      <div className="mb-8 text-center">
        <h2 className="text-3xl sm:text-4xl">Associate of Science</h2>
        <h4 className="text-xl text-gray-500">Lakeland Community College -&nbsp;May&nbsp;2021</h4>

        Outstanding Mathematics Student Award<br />
        Finalist for the Provost’s Award
      </div>
      
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl">High School Honors Diploma</h2>
        <h4 className="text-xl text-gray-500">iSTEM Geauga Early College High School -&nbsp;May&nbsp;2021</h4>
      </div>

    </SectionTemplate>
  );
}

function Work(props) {
  return (
    <SectionTemplate id="work" title="Employment">
      <Timeline>
        <TimelineItem date="July 2020 - Present">
          <h2 className="text-3xl sm:text-4xl">Internship</h2>
          <h4 className="text-xl text-gray-500 mb-4">Integrated Mill Systems - The IMS Innovation Group</h4>
          <p className="mb-2">

            Since last August, I have been working with the IMS Innovation Group
            at Integrated Mill Systems Inc. on the development of a stand-alone
            data-logging device. This device, which has incorporated python scripting,
            web design, networking, and containerization, will hopefully be released
            at the end of this summer. 
          </p>
          
          <a className="block text-blue-700 hover:text-blue-900 hover:underline hover:cursor-pointer"
            href="http://integratedmillsystems.com">
            Integrated Mill Systems
          </a>

          <a className="block text-blue-700 hover:text-blue-900 hover:underline hover:cursor-pointer"
            to="http://integratedmillsystems.com/all-services/innovation-group/">
            IMS Innovation Group
          </a>
        </TimelineItem>

        <TimelineItem date="December 2019 - Apr 2021">
          <h2 className="text-3xl sm:text-4xl">Peer Math Tutoring</h2>
          <h4 className="text-xl text-gray-500 mb-4">Lakeland Community College</h4>
          <p className="mb-2">
            As a math tutor at Lakeland Community College, I helped other students
            work on math homework and study for exams. We were initially able tutor
            in person. After COVID hit, however, we had to shutdown. In
            September, we were able to resume tutoring in a virtual capacity.
          </p>

          <a className="block text-blue-700 hover:text-blue-900 hover:underline hover:cursor-pointer"
            href="https://www.lakelandcc.edu/">
            Lakeland Community College
          </a>
        </TimelineItem>
      </Timeline>
    </SectionTemplate>
  );
}

function Skills(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [noOverflow, setNoOverflow] = useState(true);

  return (
    <SectionTemplate id="skills" title="Skills" className="relative">
      <VisibilitySensor onChange={newValue => {
          if(!isVisible) {
            setIsVisible(newValue);
          }
        }}>

        <div className="flex flex-row items-end overflow-x-auto">
          {!noOverflow && isVisible && <ScrollArrow
            className="absolute right-12 top-60 p-2 bg-gray-600 text-white rounded-md scroll-arrow"/>}

          <Skill name="Python" img={pythonLogo} level={5}
            isVisible={isVisible} />

          <Skill name="Linux" img={linuxLogo} level={4}
            isVisible={isVisible} />

          <Skill name="Git" img={gitLogo} level={4}
            isVisible={isVisible} />
            
          <Skill name="JavaScript" img={javaScriptLogo} level={4}
            isVisible={isVisible} />

          <Skill name="ReactJS" img={reactJSLogo} level={3}
            isVisible={isVisible} />

          <Skill name="HTML/CSS" img={HTMLCSSLogo} level={3}
            isVisible={isVisible} />

          <Skill name="Web&nbsp;Design" img={webDesignLogo} level={3}
            isVisible={isVisible} />

          <Skill name="Docker" img={dockerLogo} level={3}
            isVisible={isVisible} />

          <Skill name="MongoDB" img={mongoDBLogo} level={3}
            isVisible={isVisible} />

          <Skill name="Django/MVC" img={djangoLogo} level={2}
            isVisible={isVisible} />

          <Skill name="MicroPython" img={micropythonLogo} level={2}
            isVisible={isVisible} />

          <VisibilitySensor onChange={setNoOverflow}>
            <Skill name="C++" img={cppLogo} level={2}
            isVisible={isVisible} />
          </VisibilitySensor>
          
        </div>
      </VisibilitySensor>
    </SectionTemplate>
  );
}

function Interests(props) {
  return (
    <SectionTemplate id="interests" title="Interests">
      Coming soon...
    </SectionTemplate>
  );
}