import React from 'react';
import styled from 'styled-components';
import SurveyCreator from './Components/sjs/SurveyCreator';
import LayoutTest from './Pages/LayoutTest';
import { PopulateTree } from './Components/PopulateTree';
import { TreeViewItems } from "./Data/TreeViewItems";

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 0.15em;
  margin-left: 5.45em;
  margin-right: 2em;
  margin-bottom: 2em;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);    
  max-height: 30%;
  grid-border: red;
`;

export const TestTreeContainer = () => {  
  console.log("tree view items",TreeViewItems)
  return (
  <GridWrapper>            
      <PopulateTree TestTreeData = {TreeViewItems}/>    
  </GridWrapper>
  )
}

const SurveyStyled = styled.div`
    .nested-wrapper {
        display: flex;
        overflow-y: auto;
        overflow-y: scroll;
    }
`