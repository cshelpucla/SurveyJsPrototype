import React from 'react';
import styled from 'styled-components';
import SurveyCreator from './components/sjs/SurveyCreator';
import PopulateTree from './components/PopulateTree';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 7em;
  margin-right: 2em;
  margin-bottom: 2em;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);  
`;
export const TestStruct = () => (
  <GridWrapper>        
        <PopulateTree/>
  </GridWrapper>
)

const SurveyStyled = styled.div`
    .nested-wrapper {
        display: flex;
    }
`