import * as React from "react";
import { Layout } from "../components/layout";
import Helmet from "react-helmet";
import { css } from "@emotion/react";

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Not Found - J. Simon Richard</title>
      </Helmet>

      <div css={css`
        height: 100vh;
        display: grid;
        justify-content: center;
        align-content: center;
      `}>
        <h1 css={css`
          width: fit-content;
          height: fit-content;
        `}>404 Not Found :(</h1>
      </div>
      
    </Layout>
  )
}

export default NotFoundPage
