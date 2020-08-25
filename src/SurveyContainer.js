import React from 'react';
import styled from 'styled-components';
import SurveyCreator from './Components/sjs/SurveyCreator';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 7em;
  margin-right: 2em;
  margin-bottom: 2em;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);  
  overflow-y: auto;
`;

export const SurveyContainer = () => (
  <GridWrapper>        
    <SurveyBlock>
        <SurveyCreator/>
    </SurveyBlock>
  </GridWrapper>
)

const SurveyBlock = styled.div`
    .surveyEditor {    
      display: flex;
      height: 100%;
      width: 100%;
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
`