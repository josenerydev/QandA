import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Grid } from './styles/Layout';
import GlobalStyles from './styles/GlobalStyles';

import Header from './shared/Header';
import HomePage from './features/HomePage';
import QuestionPage from './features/QuestionPage';


function App() {
  return (
    <>
      <GlobalStyles />
      <Grid>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/questions" component={QuestionPage} />
          </Switch>
        </BrowserRouter>
      </Grid>
    </>
  );
}

export default App;
