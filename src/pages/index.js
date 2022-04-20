import * as React from "react";
import { css } from '@emotion/react';
import { AnimatedTerminal, TerminalLink } from "../components/terminal";
import { StaticImage } from "gatsby-plugin-image";

// markup
const IndexPage = () => {
  return (
    <main>
      <section css={css`
        width: 100vw;
        min-height: 100vh;
        display: grid;
      `}>
        <StaticImage css={css`grid-area: 1/1`}
          alt=""
          src="../images/jungleBackground.jpg"
          transformOptions={{cropFocus: "northwest"}}/>

        <div css={css`
          grid-area: 1/1;
          position: relative;
          place-items: center;
          display: grid;
        `}>
          <AnimatedTerminal command="whoami" start="onmount" styles={css`
            width: 80%;
          `}>
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
      </section>
      
    </main>
  )
}

export default IndexPage
