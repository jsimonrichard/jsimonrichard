import * as React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import Helmet from "react-helmet"
import { FullScreen } from "../components/core";
import { css } from "@emotion/react";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Not Found - J. Simon Richard</title>
      </Helmet>

      <FullScreen css={css`
        justify-content: center;
        align-content: center;
      `}>
        <h1 css={css`
          width: fit-content;
          height: fit-content;
        `}>404 Not Found :(</h1>
      </FullScreen>
      
    </Layout>
  )
}

export default NotFoundPage
