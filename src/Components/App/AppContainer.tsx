import React from "react";
import { graphql } from "react-apollo";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../global-styles";
import { Theme } from "../../theme";
import AppPresenter from "./AppPresenter";
import { IS_LOGGED_IN } from "./AppQueries";

const AppContainer = ({ data }) => (
  <ThemeProvider theme={Theme}>
    <>
      <GlobalStyle />
      <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
    </>
  </ThemeProvider>
);

export default graphql(IS_LOGGED_IN)(AppContainer);
