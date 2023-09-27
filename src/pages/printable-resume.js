import React from "react";
import { css } from "@emotion/react";
import { ClassicLink } from "../components/core";

const PrintableResume = () => {
  return (
    <main
      css={css`
        height: 100%;
        width: 100%;
        position: absolute;
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
      `}
    >
      <div
        css={css`
          max-width: 25%;
          border-right: 1px solid #aaa;

          display: flex;
          flex-direction: column;
        `}
      >
        <div>
          <h1
            css={css`
              margin: 0rem;
              font-size: 2.5rem;
              line-height: 100%;
            `}
          >
            J.
            <span
              css={css`
                font-size: 0.8rem;
              `}
            >
              {" "}
            </span>
            Simon Richard
          </h1>
        </div>

        <div
          css={css`
            flex: 1 auto;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            height: 100%;

            & > * > h2 {
              border-bottom: 1px solid #aaa;
            }
          `}
        >
          <div>
            <h2>Contact</h2>

            <p
              css={css`
                text-indent: -2rem;
                margin-left: 2rem;
                p {
                  margin-bottom: 0px;
                  margin-top: 0px;
                }
              `}
            >
              <p>Painesville, OH 44077</p>
              <p>(440) 749-4115</p>
              <ClassicLink href="mailto:jsimonrichard@gmail.com">
                jsimonrichard@gmail.com
              </ClassicLink>
              <ClassicLink href="https://jsimonrichard.com">
                https://jsimonrichard.com
              </ClassicLink>
              <ClassicLink href="https://www.linkedin.com/in/jsimonrichard/">
                https://linkedin.com/
                <wbr />
                in/jsimonrichard/
              </ClassicLink>
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
            <h2>Proficient in...</h2>

            <ul>
              <li>Python</li>
              <li>ReactJS</li>
              <li>Java</li>
              <li>Rust</li>
              <li>Linux</li>
              <li>Git</li>
              <li>Docker</li>
            </ul>
          </div>

          <div>
            <h2>Some experience with...</h2>

            <ul>
              <li>C Programming</li>
              <li>Jupyter</li>
              <li>PyTorch</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        css={css`
          h2 {
            margin-top: 0.6rem;
            margin-bottom: 0rem;
          }
          p {
            margin-top: 0rem;
          }
        `}
      >
        <h2
          css={css`
            margin-top: 0rem !important;
          `}
        >
          Objective
        </h2>
        <p>
          To secure a challenging co-op for the summer of 2024 that will expand
          my programming, research, and mathematics skill sets and give me exposure to
          industries impacted by Computer Science.
        </p>

        <h2>Experience</h2>
        <div
          css={css`
            & > div {
              margin-bottom: 0.8rem;

              & > * {
                margin: 0rem;
              }

              h4 {
                color: #555;
                font-weight: normal;
              }

              h3 {
                font-weight: bold;
                font-size: 10pt;
              }
            }
          `}
        >
          <div>
            <h3>
              Computer Peer Teacher Coordinator at Cleveland State University
              (Cleveland,&nbsp;OH)
            </h3>
            <h4>August 2023 - Present</h4>
            <ul>
              <li>Hired new CPTs</li>
              <li>Trained and managed a team of 6 CPTs (not including myself)</li>
              <li>Led the organization of computer science events</li>
              <li>Improved IT infrastructure</li>
              <li>Coordinated with faculty and with our sister program, the Engineering Peer Teachers</li>
            </ul>

          </div>
          <div>
            <h3>
              Algorithm Research & Development Intern at MIM Software Inc.
              (Beachwood,&nbsp;OH)
            </h3>
            <h4>May 223 - August 2023</h4>
            <ul>
              <li>
                Reproduced two adacan 2 red and 4 blue rooks be placed on an 8 × 8 board so
                that no two rooks can attack one anotptations of a state-of-the-art medical image segmentation model
              </li>
              <li>
                Fine-tuned neural networks on in-house CT data
              </li>
              <li>Conducted ablation studies</li>
              <li>
                Presented my findings to the research team and the company's Chief Science Officer
              </li>
            </ul>
          </div>
          <div>
            <h3>
              Computer Peer Teacher at Cleveland State University
              (Cleveland,&nbsp;OH)
            </h3>
            <h4>October 2022 - August 2023</h4>
            <ul>
              <li>
                Reinforced students' programming education and answered questions primarily related to Python, Java,
                and C.
              </li>
              <li>Helped organize computer science events</li>
            </ul>
          </div>

          <div>
            <h3>
              Software Engineer Intern at MIM Software Inc. (Beachwood,&nbsp;OH)
            </h3>
            <h4>May 2022 - August 2022</h4>
            <ul>
              <li>Contributed to a 1M+ line code base</li>
              <li>
                Made a measurable impact by implementing sought-after features,
                including one that will allow MIM to drop support for a software
                version that is three major versions behind the latest release
              </li>
            </ul>
          </div>

          <div>
            <h3>
              Software Development Intern at Integrated Mill Systems Inc.
              (Willoughby,&nbsp;OH)
            </h3>
            <h4>July 2020 - December 2021</h4>

            <ul>
              <li>
                Developed a PLC data-logging service for the Raspberry Pi
                using Python / Bash Scripting, Docker, Rust, and sockets.
              </li>
              <li>
                Built a locally served ReactJS application to visualize that data
              </li>
              <li>
                Released two alpha versions of the product (packaged as an
                ISO for the Raspberry Pi)
              </li>
            </ul>
          </div>

          {/*
          <div>
            <h3>
              Peer Tutor at Lakeland Community College (Kirtland,&nbsp;OH)
            </h3>
            <h4>December 2019 - May 2021</h4>

            <ul>
              <li>
                Tutored students taking math classes up to and including
                Calculus 3
              </li>
            </ul>
          </div> */}
        </div>

        <h2>Education</h2>
        <div
          css={css`
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 0.3rem;

            & > div {
              margin-bottom: 0.5rem;

              * {
                margin: 0rem;
              }
              h4 {
                color: #555;
                font-style: italic;
                font-weight: normal;
              }
            }
          `}
        >
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

        {/* <h2>Accomplishments</h2>
        <ul>
          <li>
            Four-time presenter at Youngstown State University's Pi Mu Epsilon
            Math Conference for Undergrads
          </li>
        </ul> */}

        <h2>Interests</h2>
        <ul
          css={css`
            column-count: 3;
            margin-top: 0.3rem;
          `}
        >
          <li>Academic Research</li>
          <li>Machine Learning</li>
          <li>Mathematics</li>
          <li>Reading and Writing</li>
          <li>Singing</li>
          <li>Piano</li>
        </ul>
      </div>
    </main>
  );
};

export default PrintableResume;
