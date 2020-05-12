import React, { Fragment } from "react"

import HomePage from "./home"
import { GlobalStyle } from '../styles/global-styles';

const IndexPage = () => (
  <Fragment>
    <GlobalStyle />
    <HomePage />
  </Fragment>
)

export default IndexPage
