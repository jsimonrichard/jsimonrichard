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

            <p css={css`
              text-indent: -2rem;
              margin-left: 2rem;
              p {
                margin-bottom: 0px;
                margin-top: 0px;
              }
            `}>
              <p>Painesville, OH 44077</p>
              <p>(440) 749-4115</p>
              <ClassicLink href="mailto:jsimonrichard@gmail.com">jsimonrichard@gmail.com</ClassicLink>
              <ClassicLink href="https://jsimonrichard.com">https://jsimonrichard.com</ClassicLink>
              <ClassicLink href="https://www.linkedin.com/in/jsimonrichard/">https://linkedin.com/in/jsimonrichard/</ClassicLink>
            </p>
          </div>

          <div>
            <h2>Soft Skills</h2>

            <ul>
              <li>Problem Solving</li>
              <li>Communication</li>
              <li>Personal Organization</li>
            </ul>
          </div>

          <div>
            <h2>Proficient with...</h2>

            <ul>
              <li>Python</li>
              <li>ReactJS</li>
              <li>Java</li>
              <li>Rust</li>
              <li>Linux</li>
              <li>Git</li>
            </ul>
          </div>

          <div>
            <h2>Some experience with...</h2>

            <ul>
              <li>Jupyter</li>
              <li>Docker</li>
              <li>MongoDB</li>
              <li>Redis</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div css={css`
        h2 {
          margin-top: 1rem;
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
            margin-bottom: 1rem;

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
            <h3>Software Engineer Intern at MIM Software Inc. (Beachwood, OH)</h3>
            <ul>
              <li>Contributed to a 1M+ line code base</li>
              <li>
                Made a measurable impact by implementing sought-after features, including
                one that will allow MIM to drop support for a software version that is three
                major versions behind the latest release
              </li>
            </ul>
          </div>

          <div>
            <h4>July 2020 - December 2021</h4>
            <h3>Software Development Intern at Integrated Mill Systems Inc. (Willoughby, OH)</h3>

            <ul>
              <li>
                Developed a stand-along data-logging device that utilized technologies
                including Python / Bash Scripting, Docker, Rust, and sockets to receive
                and display data from Programmable Logic Controllers on a locally-served
                web client
              </li>
              <li>Released two alpha versions of the product (packaged as a custom ISO for the Raspberry Pi)</li>
            </ul>
          </div>

          <div>
            <h4>December 2019 - May 2021</h4>
            <h3>Peer Tutor at Lakeland Community College (Kirtland, OH)</h3>

            <ul>
              <li>Tutored students taking math classes up to and including Calculus 3</li>
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
    
        <h2>Accomplishments</h2>
        <ul>
          <li>Four-time presenter at Youngstown State University's Pi Mu Epsilon Math Conference for Undergrads</li>
        </ul>

        <h2>Interests</h2>
        <ul css={css`
          column-count: 3;
        `}>
          <li>Academic Research</li>
          <li>Math</li>
          <li>Amateur Rocketry</li>
          <li>Robotics</li>
          <li>Singing</li>
          <li>Piano</li>
        </ul>
      </div>
    </main>
  );
}

export default PrintableResume;