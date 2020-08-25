import React from 'react'
import styled from 'styled-components';
import {BrowserRouter, Switch, Route } from 'react-router-dom'

import Builder from './Pages/Builder.jsx';
import About from './Pages/About.jsx';
import Runner from './Pages/Runner.jsx';
import Home from './Pages/Home.jsx';
import LayoutTest from './Pages/LayoutTest.js';
import FormikView from './components/FormikView.js';
import ReelContainer from './components/sjs/ReelContainer.jsx';
import { Survey } from 'survey-react';
import SurveyCreator from './components/sjs/SurveyCreator.js';
import {SurveyContainer} from './SurveyContainer'


const Main = () => {
    return (
            <div>                
                    <Switch>                        
                        <Route path='/builder' component={ ReelContainer }/>
                        <Route path='/viewer' component={ LayoutTest }/>
                        <Route path='/home' component={ FormikView }/>
                        <Route path='/about' component={ LayoutTest }/>
                        <Route path='/home' component={ SurveyContainer }/>
                    </Switch>                
            </div>
    );
}

export default Main;

const MainStyled = styled.main`
    h1 {
        background-color: gold;
        font-size: 75px;
    }

    display: flex;
    //grid-gap: 1px;
    //grid-template-columns: repeat(12, 1fr);
    //grid-auto-rows: minmax(25px, auto);  
`