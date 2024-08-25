import React from "react";
import { css } from "@emotion/react";
import { ClassicLink, LineHeader, ReferenceList } from "../components/core";
import styled from "@emotion/styled";
import { Timeline } from "../components/timeline";

const TightLineHeader = styled(LineHeader)`
  margin-top: 0.8rem;
  margin-bottom: 0.3rem;
  font-size: 1.12rem;
`;

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
        padding: 1rem;
        box-sizing: border-box;

        @page {
          size: auto;
          margin: 0;
        }
      `}
    >
      <section
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <h1
          css={css`
            margin: 0rem;
            font-size: 1.8rem;
            line-height: 100%;
            text-align: center;
            white-space: nowrap;
          `}
        >
          J. Simon Richard
        </h1>

        <div
          css={css`
            display: flex;
            gap: 0.1rem 1rem;
            justify-content: end;
            flex-wrap: wrap;
          `}
        >
          <span>Painesville, OH 44077</span>
          <span>/</span>
          <span>M: (440) 749 4115</span>
          <span>/</span>
          <span>
            E:{" "}
            <ClassicLink href="mailto:jsimonrichard@gmail.com">
              jsimonrichard@gmail.com
            </ClassicLink>
          </span>
          <ClassicLink href="https://jsimonrichard.com">
            https://jsimonrichard.com
          </ClassicLink>
          <span>/</span>
          <ClassicLink href="https://www.linkedin.com/in/jsimonrichard/">
            https://linkedin.com/
            <wbr />
            in/jsimonrichard
          </ClassicLink>
        </div>
      </section>

      <section>
        <TightLineHeader>Education</TightLineHeader>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            gap: 0.3rem;

            & > div {
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
        </div>
      </section>

      <section>
        <TightLineHeader>Professional Experiences</TightLineHeader>

        <Timeline
          css={css`
            & > div {
              h3 {
                font-size: 0.8rem;
                margin-top: 0rem;
                margin-bottom: 0rem;
              }

              ul {
                margin: 0rem;
              }

              padding-bottom: 0.8rem;
            }

            // & > aside {
            //   transform: translateY(0.5rem) rotate(-45deg);
            // }
          `}
          border="1px solid black"
        >
          <Timeline.Item date="Aug. 2023 - Present">
            <h3>
              Computer Peer Teacher (CPT) Coordinator at Cleveland State
              University (Cleveland,&nbsp;OH)
            </h3>
            {/* <h4>August 2023 - Present</h4> */}
            <ul>
              <li>
                Hire, train, and manage a team of eight CPTs; manage employee
                time sheets, make data-driven decisions regarding hiring and
                tutoring assignments, and improve IT infrastructure and
                cybersecurity.
              </li>
              <li>
                Lead the organization of seven computer science events and
                coordinate with faculty and with our sister program, the
                Engineering Peer Teachers.
              </li>
            </ul>
          </Timeline.Item>
          <Timeline.Item date="May 2023 - Aug. 2023">
            <h3>
              Algorithm Research & Development Intern at MIM Software Inc.
              (Beachwood,&nbsp;OH)
            </h3>
            {/* <h4>May 2023 - August 2023</h4> */}
            <ul>
              <li>
                Reproduced two adaptations of a state-of-the-art medical image
                segmentation model, fine-tuned neural networks on in-house CT
                data, and conducted ablation studies, which demonstrates skill
                in the machine learning research field.
              </li>
              <li>
                Presented my findings to the research team and the company's
                Chief Science Officer.
              </li>
              <li>
                A publicly released co-op report is available upon request.
              </li>
            </ul>
          </Timeline.Item>
          <Timeline.Item date="Oct. 2022 - Aug. 2023">
            <h3>
              Computer Peer Teacher (CPT) at Cleveland State University
              (Cleveland,&nbsp;OH)
            </h3>
            {/* <h4>October 2022 - August 2023</h4> */}
            <ul>
              <li>
                Provided 1-on-1 assistance to computer science students;
                answered questions primarily related to Python, Java, and C;
                helped organize computer science events.
              </li>
            </ul>
          </Timeline.Item>
          <Timeline.Item date="May 2022 - Aug. 2022">
            <h3>
              Software Engineer Intern at MIM Software Inc. (Beachwood,&nbsp;OH)
            </h3>
            {/* <h4>May 2022 - August 2022</h4> */}
            <ul>
              <li>
                Contributed to a 1M+ line code base, adding several GUI features
                and enabling support for a legacy file format (which will allow
                the company to drop support for older versions of their flagship
                product); participated in biweekly stand-up meetings as a part
                of the Agile development process.
              </li>
              <li>
                A publicly released co-op report is available upon request.
              </li>
            </ul>
          </Timeline.Item>
          <Timeline.Item date="Jul. 2020 - Dec. 2021">
            <h3>
              Software Development Intern at Integrated Mill Systems Inc.
              (Willoughby,&nbsp;OH)
            </h3>
            {/* <h4>July 2020 - December 2021</h4> */}
            <ul>
              <li>
                Developed a PLC data-logging service for the Raspberry Pi using
                Python / Bash Scripting, Docker, Rust, and sockets.
              </li>
            </ul>
          </Timeline.Item>
        </Timeline>
      </section>

      <section
        css={css`
          div > ul {
            margin-top: 0rem;
          }
        `}
      >
        <TightLineHeader>Projects</TightLineHeader>

        <div>
          <strong>
            Mixed Volumes - Mathematics Department, Cleveland State University
            (Cleveland, OH)
          </strong>
          <ul>
            <li>
              Use computer-assisted methods to explore and prove inequalities
              related to mixed-volumes.
            </li>
            <li>Expected publication in late 2024.</li>
          </ul>
        </div>
      </section>

      <section>
        <TightLineHeader>Publications</TightLineHeader>

        <ReferenceList>
          <li>
            “Hybrid Quantum or Purely Classical? Assessing the Utility of
            Quantum Feature Embeddings,” Aug. 23, 2024, F1000Research: 13:961,
            [version 1; peer review: awaiting peer review]. doi:{" "}
            <ClassicLink href="https://doi.org/10.12688/f1000research.154428.1">
              10.12688/f1000research.154428.1
            </ClassicLink>
            .
          </li>
          <li>
            “Making the Transition to Post-Quantum Cryptography,” The Downtown
            Review, vol. 9, no. 2, May 2023, [Online]. Available:{" "}
            <ClassicLink href="https://engagedscholarship.csuohio.edu/tdr/vol9/iss2/4">
              https://engagedscholarship.csuohio.edu/tdr/vol9/iss2/4
            </ClassicLink>
          </li>
        </ReferenceList>
      </section>

      <section
        css={css`
          & > ul {
            margin-top: 0rem;
          }
        `}
      >
        <TightLineHeader>Technical Proficiencies</TightLineHeader>
        <div>
          <strong>Programming Languages:</strong> Python, Java, JavaScript,
          Rust, C, SQL
        </div>
        <div>
          <strong>Tools:</strong> Git, Docker, Linux, Jupyter
        </div>
        <div>
          <strong>Frameworks:</strong> PyTorch, ReactJS, SolidJS
        </div>
      </section>
    </main>
  );
};

export default PrintableResume;
