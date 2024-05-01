import React from "react";
import { css } from "@emotion/react";
import { ClassicLink } from "../components/core";

const PrintableResumeAmazon = () => {
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
              <p>(440) 749 4115</p>
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
              <li>Technical Writing</li>
              <li>Personal Organization</li>
              <li>Teamwork</li>
              <li>Leadership</li>
            </ul>
          </div>

          <div css={css`
            & > ul {
              margin-top: 0rem;
            }
          `}>
            <h2>Technical Skills</h2>

            <strong>Programming Languages</strong>
            <ul>
              <li>Python</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Rust</li>
              <li>C Programming</li>
              <li>SQL</li>
            </ul>

            <strong>Tools</strong>
            <ul>
              <li>Git</li>
              <li>Docker</li>
              <li>Linux</li>
              <li>Jupyter</li>
            </ul>

            <strong>Frameworks</strong>
            <ul>
              <li>PyTorch</li>
              <li>ReactJS</li>
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
          Computer science student with over a decade of programming experience seeking a Summer 2024 software engineering internship. Eager to leverage my skills for software development, algorithm design, and problem-solving on impactful projects in a collaborative work environment.
        </p>

        <h2>Work Experience</h2>
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
              Computer Peer Teacher (CPT) Coordinator at Cleveland State University
              (Cleveland,&nbsp;OH)
            </h3>
            <h4>August 2023 - Present</h4>
            <ul>
              <li>Hire, train, and manage a team of eight CPTs; manage employee time sheets</li>
              <li>Make data-driven decisions regarding hiring and tutoring assignments</li>
              <li>Improve IT infrastructure and cybersecurity posture</li>
              <li>Lead the organization of seven computer science events and coordinate with faculty and with our sister program, the Engineering Peer Teachers</li>
            </ul>

          </div>
          <div>
            <h3>
              Algorithm Research & Development Intern at MIM Software Inc.
              (Beachwood,&nbsp;OH)
            </h3>
            <h4>May 2023 - August 2023</h4>
            <ul>
              <li>
                Reproduced two adaptations of a state-of-the-art medical image segmentation model,
                fine-tuned neural networks on in-house CT data, and conducted ablation studies,
                which demonstrates skill in the machine learning research field
              </li>
              <li>
                Presented my findings to the research team and the company's Chief Science Officer
              </li>
              <li>A publicly released co-op report is available upon request</li>
            </ul>
          </div>
          <div>
            <h3>
              Computer Peer Teacher (CPT) at Cleveland State University
              (Cleveland,&nbsp;OH)
            </h3>
            <h4>October 2022 - August 2023</h4>
            <ul>
              <li>
                Provided 1-on-1 assistance to computer science students; answered questions primarily related to Python, Java,
                and C
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
              <li>Contributed to a 1M+ line code base, adding several GUI features and enabling support for a legacy file format (which will allow the company to drop support for older versions of their flagship product)</li>
              <li>Participated in biweekly stand-up meetings as a part of the Agile development process</li>
              <li>A publicly released co-op report is available upon request</li>
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
                using Python / Bash Scripting, Docker, Rust, and sockets
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

        <h2>Relevant Projects</h2>
        <ul css={css`margin-top: 0em`}>
          <li>
            <strong>Quantum Machine Learning (Honors Thesis):</strong> Research which classical and quantum hybrid models are best suited for graph learning tasks. Expected publication in 2024.
          </li>
          <li>
            <strong>Math Project on Mixed Volumes:</strong> Use computer-assisted methods to explore and prove inequalities related to mixed-volumes. Expected publication in 2024.
          </li>
          <li>
            <strong>Published Work:</strong> "Making the Transition to Post-Quantum Cryptography." The Downtown Review. Vol. 9. Iss. 2 (2023). Available at: <ClassicLink href="https://engagedscholarship.csuohio.edu/tdr/vol9/iss2/4">https://engagedscholarship.csuohio.edu/tdr/vol9/iss2/4</ClassicLink>
          </li>
        </ul>

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

          {/*<div>
            <em>iSTEM Early College High School (Painesville, OH)</em>
            <h3>High School Honors Diploma</h3>
            <h4>Graduated in May 2021, GPA: 4.0</h4>
          </div>*/}
        </div>

        {/* <h2>Accomplishments</h2>
        <ul>
          <li>
            Four-time presenter at Youngstown State University's Pi Mu Epsilon
            Math Conference for Undergrads
          </li>
        </ul> */}

        {/* <h2>Interests</h2>
        <ul
          css={css`
            column-count: 2;
            margin-top: 0.3rem;
          `}
        >
          <li>Deep interest in academic research, with a focus on machine learning and its applications</li>
          <li>Passionate about mathematics, exploring complex problems and innovative solutions</li>
          <li>
            Developed an online game based on microservice architecture and designed for scalability as a personal project.
            Utilized Rust, Docker, and TypeScript, and implemented continuous integration (CI) with GitLab
          </li>
        </ul> */}
      </div>
    </main>
  );
};

export default PrintableResumeAmazon;
