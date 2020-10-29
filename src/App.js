import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './Components/NavigationBar';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
import Sidebar from './Components/Sidebar';
import { SurveyContainer } from './SurveyContainer';
import { TestTreeContainer } from './TestTreeContainer';
import LayoutTest from './Pages/LayoutTest';
import { LayoutContainer } from './LayoutContainer';
import SurveyCreator from './Components/sjs/SurveyCreator';
import BDragDropExample from './Components/DragDrop/BDragDropExample';
import YouTubeView from './Pages/YouTubeView';
import SurveyWrapper from './Components/sjs/SurveyWrapper'
import SurveyWrapperSimple from './Components/sjs/SurveyWrapperSimple'

function App() {
  return (
     <AppStyled>
     <Router>
        <NavigationBar />
        <Sidebar />
          <Switch>
            <Route exact path="/"   component={SurveyCreator} />
            <Route path="/about"    component={LayoutContainer} />
            <Route path="/builder"  component={SurveyCreator} />
            <Route path="/struct"   component={TestTreeContainer} />
            <Route path="/dragdrop" component={BDragDropExample} />
            <Route path="/youtube"  component={SurveyWrapper} />
            <Route path="/home"     component={SurveyCreator} />
            <Route path="/layout"   component={LayoutContainer} />
            <Route path="/showtest" component={SurveyWrapperSimple} />
            <Route component={NoMatch} />
          </Switch>
    </Router> 
    </AppStyled>
  );
}

export default App;

const AppStyled = styled.div`
    .surveyEditor {
      padding-left: 50px;
      height: 900px;
    }

    .svd_toolbar_dropdown_select {
      font-size: 1em;
      padding: 
    }

    .svd_commercial_container {
      display: none;
    }
    .svd_commercial_product {
        display: none;
    }
    
    .svg_svd_icon {
      display: none;
    }

    .nested-wrapper {
        max-width: 1200px;
        margin: auto;
        outline: solid red 1px;
        padding: 10px;
        max-height: auto;
    }
`;
