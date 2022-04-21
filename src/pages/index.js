import React, { useState, useEffect } from "react";
import { css } from '@emotion/react';
import { AnimatedTerminal, TerminalLink } from "../components/terminal";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { Layout } from "../components/layout";
import { Container, mediaQueryMedium, Paragraph, tightContainerStyles, DynamicAge, mediaQueryLarge, LineHeader, ClassicLink, FullScreen } from "../components/core";
import { Timeline, TimelineItem } from "../components/timeline";
import { useStaticQuery, graphql } from "gatsby";



// markup
const IndexPage = () => {

  // Catch when the page scrolls
  const [fillHeader, setFillHeader] = useState(false);
  const headerScrollHandler = e => {
    setFillHeader( window.scrollY != 0 );
  }

  useEffect(()=>{
    window.addEventListener("scroll", headerScrollHandler);
  });

  // Get skills images
  const skills = useStaticQuery(graphql`
    query AssetsPhotos {
      allFile(filter: { sourceInstanceName: { eq: "skills" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const skillsURLs = {
    javascript: "https://www.javascript.com/",
    django: "https://www.djangoproject.com/",
    docker: "https://www.docker.com/",
    git: "https://git-scm.com/",
    linux: "https://www.linux.org/",
    micropython: "https://micropython.org/",
    mongodb: "https://www.mongodb.com/",
    python: "https://www.python.org/",
    react: "https://reactjs.org/",
    rust: "https://www.rust-lang.org/"
  }

  return (
    <Layout fillHeader={fillHeader}>
      <FullScreen>

        {/* modified from https://unsplash.com/photos/enK1Q14Dt6s */}
        <StaticImage css={css`
          grid-area: 1/1;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);
        `}
          alt=""
          src="../images/jungleBackground.jpg"
          objectPosition="0% 0%"/>

        <div css={css`
          grid-area: 1/1;
          position: relative;
          place-items: center;
          display: grid;
        `}>
          <AnimatedTerminal command="whoami" startDelay={800} styles={tightContainerStyles}>
            <br />
            Hi, my name is J. Simon Richard. I'm an aspiring full-stack developer /
            DevOps Engineer / entrepreneur with a wide range 
            of <TerminalLink to="#interests">interests</TerminalLink> and <TerminalLink to="#skills">skills</TerminalLink>.
            There's a lot I don't know, but when I'm faced with something new
            I'm good at learning it quickly.

            <br/><br/>

            I'm only a freshman in college, but I've already had some
            great <TerminalLink to="#education">education</TerminalLink> and <TerminalLink to="#work">work</TerminalLink> experiences.
          </AnimatedTerminal>
        </div>
      </FullScreen>
      


      <Container id="about" css={css`
        margin: 4rem auto;

        display: grid;
        justify-items: center;
        align-items: center;

        grid-gap: 1rem;
        padding: 1rem;

        @media (min-width: 1000px) {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        ${mediaQueryMedium(css`
          grid-gap: 2rem;
          padding: 2rem;
        `)}

        ${mediaQueryLarge(css`
          grid-gap: 3rem;
          padding: 3rem;
        `)}
      `}>
    
        <StaticImage
          src="../images/profile.jpg"
          alt="J. Simon Richard"
          aspectRatio={1}
          width={550}
          height={550}
          css={css`
            border-radius: 50%;

            ${mediaQueryMedium(css`
              margin: 2rem;
            `)}

            ${mediaQueryLarge(css`
              margin: 3rem;
            `)}
          `}/>
        
        <div>
          <h2>About</h2>

          <Paragraph>
            Welcome to my online resume! My name is Simon Richard, and I’m
            an <DynamicAge startDate={new Date(2003, 7, 3)} /> year-old self-taught programmer.
            I live in North-East Ohio and am currently attending Cleveland State University as a
            Computer Science and Mathematics Major. I am also a sotware development intern
            at Integrated Mill Systems Inc.
          </Paragraph>

          <Paragraph>
            Since my early childhood, I’ve been interested in making things and
            learning how things work. I love engineering, math, physics, robotics,
            and computer science.
          </Paragraph>

          <Paragraph>
            I started programming
            about <DynamicAge startDate={new Date(2012, 2, 15)}/> years ago. My
            first language was Processing (on Khan Academy), but since then I
            have added many more languages and frameworks to my programming tool
            box.
          </Paragraph>
        </div>
      </Container>


      <Container id="work">
        <LineHeader>Work Experiences</LineHeader>

        <Timeline>
          <TimelineItem date="July 2020 - January 2022">
            <h2 css={css`margin-top: 0px`}>Software Development Internship</h2>
            <h5>Integrated Mill Systems Inc. - The IMS Innovation Group</h5>

            <p>
              I worked with the IMS Innovation Group at Integrated Mill Systems Inc.
              on the development of a stand-alone data-logging device. This device utilized
              several technologies including python scripting, web design, networking,
              containerization, Rust, and MongoDB.
            </p>

            
            <ClassicLink href="http://integratedmillsystems.com">
              Integrated Mill Systems
            </ClassicLink>

            <ClassicLink href="http://integratedmillsystems.com/all-services/innovation-group/">
              IMS Innovation Group
            </ClassicLink>              
          </TimelineItem>

          <TimelineItem date="December 2019 - April 2021">
            <h2 css={css`margin-top: 0px`}>Peer Math Tutoring</h2>
            <h5>Lakeland Community College</h5>

            <p>
              I tutored other students in the area of mathematics up to and including
              Calculus 3, both online and in-person.
            </p>

            <ClassicLink href="https://www.lakelandcc.edu/">
              Lakeland Community College
            </ClassicLink>
          </TimelineItem>
        </Timeline>          
      </Container>


      <Container id="education">
        <LineHeader>Education</LineHeader>

        <div css={css`margin-bottom: 3rem`}>
          <h2>Bachelor's Degree in Computer Science and Mathematics</h2>
          <p>Cleveland State University -&nbsp;Expected&nbsp;graduation:&nbsp;May&nbsp;2025</p>
        </div>

        <div css={css`margin-bottom: 3rem`}>
          <h2>Associate of Science</h2>
          <p>Lakeland Community College -&nbsp;May&nbsp;2021</p>
          <p>
            Outstanding Mathematics Student Award<br />
            Finalist for the Provost’s Award
          </p>
        </div>

        <div css={css`margin-bottom: 3rem`}>
          <h2>High School Honors Diploma</h2>
          <p>iSTEM Geauga Early College High School -&nbsp;May&nbsp;2021</p>
        </div>
      </Container>


      <Container id="skills">
        <LineHeader>Skills</LineHeader>

        <div css={css`
          display: grid;
          grid-gap: 4rem;
          justify-content: center;
          grid-template-columns: repeat(3, minmax(0, 1fr));;

          ${mediaQueryMedium(css`
            grid-template-columns: repeat(4, minmax(0, 1fr));;
          `)}

          ${mediaQueryLarge(css`
            grid-template-columns: repeat(5, minmax(0, 1fr));;
          `)}
        `}>
          
          {skills.allFile.edges.map(edge => {
            let {name, childImageSharp: {gatsbyImageData}} = edge.node;
            return (
              <div css={css`
                display: flex;
                justify-items: center;
                align-items: center;
              `}>
                <a href={skillsURLs[name]} target="_blank">
                  <GatsbyImage image={gatsbyImageData} alt={name}/>
                </a>
              </div>
            );
          })}

        </div>
      </Container>

      <Container id="interests" css={css`margin-bottom: 4rem`}>
          <LineHeader>Other Interests and Accomplishments</LineHeader>

          <ul>
            <li>
              I am a four-time presenter at Youngstown State University’s Pi Mu Epsilon
              Math Conference for Undergrads
            </li>
            <li>
              I am also the sole member of <strong>ProtoKit Electronics, LLC</strong>, a local
              startup company that develops educational robots
            </li>
            <li>
              Other interests of mine include amateur rocketry, singing/piano, and math
            </li>
          </ul>
      </Container>
    </Layout>
  )
}

export default IndexPage
