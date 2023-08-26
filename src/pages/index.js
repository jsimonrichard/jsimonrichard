import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { AnimatedTerminal, TerminalLink } from "../components/terminal";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { Layout } from "../components/layout";
import {
  Container,
  mediaQueryMedium,
  Paragraph,
  tightContainerStyles,
  DynamicAge,
  mediaQueryLarge,
  LineHeader,
  ClassicLink,
  FullScreen,
} from "../components/core";
import { Timeline, TimelineItem } from "../components/timeline";
import { useStaticQuery, graphql } from "gatsby";

// markup
const IndexPage = () => {
  // Catch when the page scrolls
  const [fillHeader, setFillHeader] = useState(false);
  const headerScrollHandler = (e) => {
    setFillHeader(window.scrollY !== 0);
  };

  useEffect(() => {
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
    docker: "https://www.docker.com/",
    git: "https://git-scm.com/",
    java: "https://www.java.com/en/",
    linux: "https://www.linux.org/",
    mongodb: "https://www.mongodb.com/",
    python: "https://www.python.org/",
    pytorch: "https://pytorch.org/",
    react: "https://reactjs.org/",
    rust: "https://www.rust-lang.org/",
  };

  return (
    <Layout fillHeader={fillHeader}>
      <FullScreen
        css={css`
          display: grid;
        `}
      >
        {/* modified from https://unsplash.com/photos/enK1Q14Dt6s */}
        <StaticImage
          css={css`
            grid-area: 1/1;
            mask-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 1) 60%,
              rgba(0, 0, 0, 0) 100%
            );
          `}
          alt=""
          src="../images/jungleBackground2.jpg"
          objectPosition="0% 0%"
          placeholder="blurred"
        />

        <div
          css={css`
            grid-area: 1/1;
            position: relative;
            place-items: center;
            display: grid;
          `}
        >
          <AnimatedTerminal
            command="whoami"
            startDelay={800}
            styles={tightContainerStyles}
          >
            <br />
            My name is J. Simon Richard. I'm an aspiring researcher / entrepreneur /
            full-stack developer with a wide range of{" "}
            <TerminalLink to="#interests">interests</TerminalLink> and{" "}
            <TerminalLink to="#skills">skills</TerminalLink>.
            <br />
            <br />
            I've had some
            great <TerminalLink to="#education">
              education
            </TerminalLink> and <TerminalLink to="#work">work</TerminalLink>{" "}
            experiences since the start of my programming journey around. I am currently
            working on a Bachelor's Degree in Computer Science and Mathematics at
            Cleveland State University.
          </AnimatedTerminal>
        </div>
      </FullScreen>

      <Container
        id="about"
        css={css`
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
        `}
      >
        <StaticImage
          src="../images/profile.jpg"
          alt="J. Simon Richard"
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
          `}
        />

        <div>
          <h2>About</h2>

          <Paragraph>
            Welcome to my online resume! My name is Simon Richard, and I’m an{" "}
            <DynamicAge startDate={new Date(2003, 7, 3)} /> year-old self-taught
            programmer. I live in North-East Ohio and am currently attending
            Cleveland State University as a Computer Science and Mathematics
            Major.
          </Paragraph>

          <Paragraph>
            Since my early childhood, I’ve been interested in making things and
            learning how things work. I love engineering, math, physics,
            robotics, and computer science.
          </Paragraph>

          <Paragraph>
            I started programming about{" "}
            <DynamicAge startDate={new Date(2012, 2, 15)} /> years ago. My first
            language was Processing (on Khan Academy), but since then I have
            added many more languages and frameworks to my programming tool box.
            My current favorite is{" "}
            <ClassicLink
              href="https://www.rust-lang.org/"
              css={css`
                display: inline;
              `}
            >
              Rust
            </ClassicLink>
            .
          </Paragraph>
        </div>
      </Container>

      <Container id="work">
        <LineHeader>Work Experiences</LineHeader>

        <Timeline>
          <TimelineItem date="August 2023 - Present">
            <h2
              css={css`
                margin: 0px;
              `}
            >
              Computer Peer Teacher Coordinator
            </h2>
            <h3
              css={css`
                margin: 0px;
              `}
            >
              Cleveland State University
            </h3>

            <p>
              As the coordinator of the Computer Peer Teacher (CPT) program, I hired new CPTs,
              trained and managed a team of 6 CPTs (not including myself), improved IT infrastructure,
              led the organization of computer science events, coordinated with faculty, and
              coordinated with our sister program (the Engineering Peer Teachers).
            </p>

            <ClassicLink href="https://engineering.csuohio.edu/advising/computer-peer-teachers-cpts">
              The CPT Program
            </ClassicLink>

            <ClassicLink href="https://www.csuohio.edu/">
              Cleveland State University
            </ClassicLink>

          </TimelineItem>
          <TimelineItem date="May 2023 - August 2023">
            <h2
              css={css`
                margin: 0px;
              `}
            >
              Algorithms Research & Development Internship
            </h2>
            <h3
              css={css`
                margin: 0px;
              `}
            >
              MIM Software Inc.
            </h3>

            <p>
              I reproduced two adaptations of a state-of-the-art segmentation model for use
              in the medical domain, fine-tuned those models on in-house CT data, performed
              ablation studies, and presented my findings to the research team at MIM (including
              the company's Chief Science Officer).
            </p>

            <ClassicLink href="https://www.mimsoftware.com/">
              MIM Software
            </ClassicLink>

          </TimelineItem>
          <TimelineItem date="October 2022 - August 2023">
            <h2
              css={css`
                margin: 0px;
              `}
            >
              Computer Peer Teacher
            </h2>
            <h3
              css={css`
                margin: 0px;
              `}
            >
              Cleveland State University
            </h3>

            <p>
              As a Computer Peer Teacher (CPT), I help students with questions
              primarily related to Python, Java, and C. I have also helped
              organize computer science events.
            </p>

            <ClassicLink href="https://engineering.csuohio.edu/advising/computer-peer-teachers-cpts">
              The CPT Program
            </ClassicLink>

            <ClassicLink href="https://www.csuohio.edu/">
              Cleveland State University
            </ClassicLink>
          </TimelineItem>

          <TimelineItem date="May 2022 - August 2022">
            <h2
              css={css`
                margin: 0px;
              `}
            >
              Software Engineering Internship
            </h2>
            <h3
              css={css`
                margin: 0px;
              `}
            >
              MIM Software Inc.
            </h3>

            <p>
              I contributed to a large, 1M+ line code base and made a measurable
              impact through the features I implemented. One of these features
              will allow MIM to drop support for a version that is three major
              versions behind the current release.
            </p>

            <ClassicLink href="https://www.mimsoftware.com/">
              MIM Software
            </ClassicLink>
          </TimelineItem>

          <TimelineItem date="July 2020 - January 2022">
            <h2
              css={css`
                margin: 0px;
              `}
            >
              Software Development Internship
            </h2>
            <h3
              css={css`
                margin: 0px;
              `}
            >
              Integrated Mill Systems Inc. - The IMS Innovation Group
            </h3>

            <p>
              I worked with the IMS Innovation Group at Integrated Mill Systems
              Inc. on the development of a stand-alone data-logging device. This
              device utilized several technologies including python scripting,
              web design, networking, containerization, Rust, and MongoDB.
            </p>

            <ClassicLink href="http://integratedmillsystems.com">
              Integrated Mill Systems
            </ClassicLink>

            <ClassicLink href="http://integratedmillsystems.com/all-services/innovation-group/">
              IMS Innovation Group
            </ClassicLink>
          </TimelineItem>

          <TimelineItem date="December 2019 - April 2021">
            <h2
              css={css`
                margin: 0px;
              `}
            >
              Peer Math Tutoring
            </h2>
            <h3
              css={css`
                margin: 0px;
              `}
            >
              Lakeland Community College
            </h3>

            <p>
              I tutored other students in the area of mathematics up to and
              including Calculus 3, both online and in-person.
            </p>

            <ClassicLink href="https://www.lakelandcc.edu/">
              Lakeland Community College
            </ClassicLink>
          </TimelineItem>
        </Timeline>
      </Container>

      <Container id="education">
        <LineHeader>Education</LineHeader>

        <div
          css={css`
            margin-bottom: 3rem;
          `}
        >
          <h2>Bachelor's Degree in Computer Science and Mathematics</h2>
          <p>
            Cleveland State University
            -&nbsp;Expected&nbsp;graduation:&nbsp;May&nbsp;2025
          </p>
          <p>
            <strong>GPA:</strong> 4.0
          </p>
        </div>

        <hr
          css={css`
            height: 1px;
            border-width: 0;
            background-color: black;
          `}
        />

        <div
          css={css`
            margin-bottom: 3rem;
          `}
        >
          <h2>Associate of Science</h2>
          <p>Lakeland Community College -&nbsp;May&nbsp;2021</p>
          <p>
            <strong>GPA:</strong> 4.0
          </p>
          <ul>
            <li>Outstanding Mathematics Student Award</li>
            <li>Finalist for the Provost’s Award</li>
          </ul>
        </div>

        <hr
          css={css`
            height: 1px;
            border-width: 0;
            background-color: black;
          `}
        />

        <div
          css={css`
            margin-bottom: 3rem;
          `}
        >
          <h2>High School Honors Diploma</h2>
          <p>iSTEM Geauga Early College High School -&nbsp;May&nbsp;2021</p>
          <p>
            <strong>GPA:</strong> 4.0
          </p>
        </div>
      </Container>

      <Container id="skills">
        <LineHeader>Skills</LineHeader>

        <div
          css={css`
            display: grid;
            grid-gap: 2rem;
            justify-content: center;
            grid-template-columns: repeat(3, minmax(0, 1fr));

            ${mediaQueryMedium(css`
              grid-template-columns: repeat(4, minmax(0, 1fr));
              grid-gap: 3rem;
            `)}

            ${mediaQueryLarge(css`
              grid-template-columns: repeat(5, minmax(0, 1fr));
              grid-gap: 4rem;
            `)}
          `}
        >
          {skills.allFile.edges.map((edge) => {
            let {
              name,
              childImageSharp: { gatsbyImageData },
            } = edge.node;
            return (
              <div
                css={css`
                  display: flex;
                  justify-items: center;
                  align-items: center;
                `}
              >
                <a href={skillsURLs[name]} target="_blank" rel="noreferrer" css={css`
                  -webkit-filter: grayscale(100%);
                  -moz-filter: grayscale(100%);
                  filter: grayscale(100%);
                  transition: all 0.5s ease;

                  :hover {
                    -webkit-filter: grayscale(0%);
                    -moz-filter: grayscale(0%);
                    filter: grayscale(0%);
                  }
                `}>
                  <GatsbyImage image={gatsbyImageData} alt={name} />
                </a>
              </div>
            );
          })}
        </div>
      </Container>

      <Container
        id="interests"
        css={css`
          margin-bottom: 4rem;
        `}
      >
        <LineHeader>Other Interests and Accomplishments</LineHeader>

        <ul>
          <li>
            I am a four-time presenter at Youngstown State University’s Pi Mu
            Epsilon Math Conference for Undergrads
          </li>
          <li>
            Other interests of mine include academic research, machine learning, reading and writing,
            mathematics, singing, and piano.
          </li>
        </ul>
      </Container>
    </Layout>
  );
};

export default IndexPage;
