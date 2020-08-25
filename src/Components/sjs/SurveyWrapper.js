import React from 'react';
import * as Survey from "survey-react";
import styled from 'styled-components';

class SurveyWrapper extends React.Component {

  json = {
    "title": "Breakfast Menu Survey",    
    "pages": [
     {
      "name": "First",
      "elements": [
       {
        "type": "radiogroup",
        "name": "eggType",
        "title": "What type of eggs do you prefer?",
        "choices": [
         {
          "value": "overEasy",
          "text": "Over Easy"
         },
         {
          "value": "scrambled",
          "text": "Scrambled"
         },
         {
          "value": "sunnySideUp",
          "text": "Sunny Side Up"
         },
         {
          "value": "chefsSurprise",
          "text": "Surprise Me!"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "beefType",
        "title": "How do u want your steak cooked ?",
        "choices": [
         {
          "value": "rare",
          "text": "Rare"
         },
         {
          "value": "medium",
          "text": "Medium"
         },
         {
          "value": "welldone",
          "text": "Well Done"
         },
         {
          "value": "chefsSurprise",
          "text": "Surprise Me!"
         }
        ]
       }

      ]
     }
    ],
    "sendResultOnPageNext": true,
    "showProgressBar": "top"
   }


  constructor() {
    super()    
    Survey.StylesManager.applyTheme("orange");        
  }

  onValueChanged(result) {
    console.log("value changed!");
  }

  onComplete(result) {
    console.log("Survey Completed! " + result);
    console.log(result.valuesHash);
  }

  render() {        
    
    //console.log(this.props.config);
    var model = new Survey.Model(this.json);

    return (
      <div>
        <SurveyStyled className="surveyjs">
          <Survey.Survey model={model} onComplete={this.onComplete} onValueChanged={this.onValueChanged}/>        
        </SurveyStyled>        
      </div>)
  }
}
export default SurveyWrapper;

const SurveyStyled = styled.span`
    display: flex;
    margin-top: 1em;
    margin-left: 3.5em;
    margin-right: 2em;
    margin-bottom: 5em;
`;