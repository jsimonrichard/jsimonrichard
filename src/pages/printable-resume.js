import React from 'react';
import { css } from '@emotion/react';
import { ClassicLink } from '../components/core';

const PrintableResume = () => {
  return (
    <main css={css`
      height: 100%;
      width: 100%;
      position:absolute;
      top: 0px;
      bottom: 0px;

      font-size: 10pt;
      background-color: white;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      padding: 1rem 0rem;
      box-sizing: border-box;

      & > * {
        padding: 0rem 1rem;
      }

      @page {
        size: auto;
        margin: 0;
      }
    `}>
      <div css={css`
        max-width: 30%;
        border-right: 1px solid #AAA;

        display: flex;
        flex-direction: column;
      `}>

        <div>
          <h1 css={css`margin: 0rem; font-size: 2.5rem; line-height: 100%;`}>
            J.<span css={css`font-size: 0.8rem;`}> </span>Simon
            Richard
          </h1>
          <em>Undergraduate Student</em>
        </div>

        <div css={css`
          flex: 1 auto;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          height: 100%;

          & > * > h2 {
            border-bottom: 1px solid #AAA;
          }
        `}>
    
          <div>
            <h2>Contact</h2>

            <p>
              Painesville, OH 44077<br/>
              (440) 749-4115<br/>
              <ClassicLink href="mailto:jsimonrichard@gmail.com">jsimonrichard@gmail.com</ClassicLink>
              <ClassicLink href="https://jsimonrichard.com">https://jsimonrichard.com</ClassicLink>
            </p>
          </div>

          <div>
            <h2>Soft Skills</h2>

            <ul>
              <li>Problem Solving</li>
              <li>Communication</li>
              <li>Organization</li>
            </ul>
          </div>

          <div>
            <h2>Proficient with...</h2>

            <ul>
              <li>Rust</li>
              <li>Linux</li>
              <li>ReactJS</li>
              <li>Python</li>
              <li>Java</li>
              <li>Git</li>
              <li>Docker</li>
              <li>MongoDB</li>
              <li>Redis</li>
            </ul>
          </div>

        </div>
      </div>
      
      <div css={css`
        h2 {
          margin-top: 2.5rem;
          margin-bottom: 0rem;
        }
        p {
          margin-top: 0rem;
        }
      `}>
        <h2 css={css`margin-top: 0rem !important;`}>Objective</h2>
        <p>
          To secure a challenging co-op for the Summer of 2023 that will expand my programming and/or mathematical skill set and give me exposure to industries impacted by Computer Science. 
        </p>
        
        <h2>Employment</h2>
        <div css={css`
          & > div {
            margin-bottom: 1.3rem;

            & > * {
              margin: 0rem;
            }

            h4 {
              color: #555;
              font-weight: normal;
            }
          }
        `}>

          <div>
            <h4>May 2022 - August 2022</h4>
            <h3>Software Engineer Intern at MIM Software Inc.</h3>
            <ul>
              <li>Contributed to a 1M+ line code base</li>
              <li>Made a measurable impact by implementing sought-after features</li>
            </ul>
          </div>

          <div>
            <h4>July 2020 - December 2021</h4>
            <h3>Software Development Intern at Integrated Mill Systems Inc.</h3>

            <ul>
              <li>
                Developed a stand-along data-logging device that utilized technologies
                including Python / Bash Scripting, Docker, Rust, and sockets
              </li>
              <li>Released two alpha versions of the product (packaged as a custom ISO for the Raspberry Pi)</li>
            </ul>
          </div>

          <div>
            <h4>December 2019 - May 2021</h4>
            <h3>Peer Tutor at Lakeland Community College</h3>

            <ul>
              <li>Tutored students taking math classes up to and including Calculus 3</li>
              <li>Worked both in-person and online</li>
            </ul>
          </div>
          
        </div>


        <h2>Education</h2>
        <div css={css`
          & > div {
            margin-bottom: 1rem;

            * {
              margin: 0rem;
            }
            h4 {
              color: #555;
              font-style: italic;
              font-weight: normal;
            }
          }
        `}>

          <div>
            <em>Cleveland State University (Cleveland, OH)</em>
            <h3>Bachelor of Science in Computer Science and Mathematics</h3>
            <h4>Expected Graduation in May 2025, GPA: 4.0</h4>
          </div>

          <div>
            <em>Lakeland Community College (Kirtland, OH)</em>
            <h3>Associate of Science</h3>
            <h4>Graduated in May 2021, GPA: 4.0</h4>
          </div>

          <div>
            <em>iSTEM Early College High School (Painesville, OH)</em>
            <h3>High School Honors Diploma</h3>
            <h4>Graduated in May 2021, GPA: 4.0</h4>
          </div>

        </div>
    
        <h2>Other Interests and Accomplishments</h2>
        <ul>
          <li>Four-time presenter at Youngstown State University's Pi Mu Epsilon Math Conference for Undergrads</li>
          <li>Other interests of mine include academic research, math, amateur rocketry, robotics, singing, and piano</li>
        </ul>
      </div>
    </main>
  );
}

export default PrintableResume;