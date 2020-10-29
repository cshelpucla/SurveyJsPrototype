import React from 'react';
import * as Survey from "survey-react";
import styled from 'styled-components';
//import './style.css'
import testjson from '../Tests/test.json'

class SurveyWrapperSimple extends React.Component {
  
  myCss = {
    rating: {
        root: "myclass"
    },
    navigationButton: "button btn-lg"
  };
  
  constructor() {
    super()    
    //Survey.StylesManager.applyTheme("orange");    
    Survey.defaultBootstrapMaterialCss.navigationButton = "btn btn-green";
    Survey.defaultBootstrapMaterialCss.rating.item = "btn btn-default my-rating";

    //Survey.StylesManager.applyTheme("bootstrap-material");    
    //Survey.StylesManager.applyTheme("modern");    
    Survey.StylesManager.applyTheme("bootstrap");           
  }

  onValueChanged(result) {
    console.log("value changed!");
  }

  onComplete(result) {
    console.log("Survey Completed! " + result);
    console.log(result.valuesHash);
  }

  onAfterRenderQuestion (survey, options) {
    var classes = options.cssClasses

    console.log("after render show classes", classes)
  }

  onUpdateQuestionCssClasses (survey, options) {
        var classes = options.cssClasses         

        console.log("show classes", classes)
        
        //classes.root = "sq-root";
        //classes.title = "sq-title"
        //classes.item = "sq-item";
        //classes.label = "sq-label";
        //classes.type  = "sq-type"
        //classes.row   = ''

        console.log("PAge:", options.question.page)
        let pgArr = ["page4","page14"]
        let pgArr2 = ["page1","page2","page3","page4","page16"]

        
        if (options.question.getType() === "rating") {
          if ( pgArr.indexOf(options.question.page.name) > -1  )  {
             classes.item += " sv_q_rating_item3 myclass"; 
          }
          else if ( pgArr2.indexOf(options.question.page.name) > -1 ) {
             classes.item += " sv_q_rating_item2 myclass";              
          } else {
             classes.item += " sv_q_rating_item3 myclass";            
          }          
        }         
  };
    
  render() {        
    
    //console.log(this.props.config);
    //var model = new Survey.Model(this.json);    

    var model = new Survey.Model(testjson);    

    model.showQuestionNumbers = "onPage";

    return (
      <div>
        <SurveyStyled className="surveyjs">
          <Survey.Survey model={model} 
                         //css={this.myCss} 
                         onComplete={this.onComplete} 
                         onValueChanged={this.onValueChanged}
                         onUpdateQuestionCssClasses={this.onUpdateQuestionCssClasses}
                         onAfterRenderQuestion={this.onAfterRenderQuestion}                                              
                         />        
        </SurveyStyled>        
      </div>)
  }
}
export default SurveyWrapperSimple;

const SurveyStyled = styled.div`
  display:inline-block;
  width:60%;
  height:60%;
  margin-top: 0em;
  margin-left: 12.5em;
  margin-right: 1.5em;
  margin-bottom: 10em;

  .sv_q_rating_item {
    margin-right: 1em;      
    text-align: top;
    font: bold 16px Arial;
    text-decoration: none;
    background-color: #EEEEEE;
    color: #333333;
    padding: 15px 20px 15px 20px;
    min-height: 2em;
    min-width: 8em;
    max-width: 8em;
    border-top: 1px solid #CCCCCC;
    border-right: 1px solid #333333;
    border-bottom: 1px solid #333333;
    border-left: 1px solid #CCCCCC;
    border-radius: 6px;
  }

  .sv_q_rating_item2 {
    margin-right: 1em;      
    text-align: top;
    font: bold 16px Arial;
    text-decoration: none;
    
    color: #333333;
    padding: 15px 20px 15px 20px;
    min-height: 2em;
    min-width: 8em;
    max-width: 8em;
    font: bold 22px Arial;

    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #CCCCCC;
    background-color: white;
  }

  .sv_q_rating_item3 {
    margin-right: 1em;      
    text-align: top;
    font: bold 16px Arial;
    text-decoration: none;
    background-color: #EEEEEE;
    color: #333333;
    padding: 15px 20px 15px 20px;
    min-height: 2em;
    min-width: 9em;
    max-width: 9em;
    border-top: 1px solid #CCCCCC;
    border-right: 1px solid #333333;
    border-bottom: 1px solid #333333;
    border-left: 1px solid #CCCCCC;
    border-radius: 6px;
    border-color: red;
    display: inline-flex;
  }

  .sv_q_rating_item:hover{background-color:green}
  .sv_q_rating_item:focus{background-color:red}

  .sv_q_rating_item2:hover{background-color:yellow}
  .sv_q_rating_item2:focus{background-color:red}

  .sv_q_imgsel:hover{background-color:yellow}
  .sv_q_imgsel:focus{background-color:red}

  .1sv_row { max-height: 10em } 
  .1sv_my_row { max-height: 1em } 

  .matrixtable tr { height: 50px; }
  .matrixtable td:first-child { width: 3%; }
  .matrixtable td:not(:first-child) { width: 1%; }

  .sv_q_imgsel_image2 { width: 50px; }

  .sv_q_num { text-align: bottom; padding: 0em; position: none; color: orange; }

  .sv_q_title { text-align: bottom; color: orange; margin: 0px, 8px, 8px ,0px; 
                padding: 15px 20px 15px 20px;; position: none;}

  .sv_qstn_left { text-align: center; padding: 0em; position: relative; min-width: 24em; color: red;}

  .title_left { text-align: center; padding: 0em; position: relative; min-width: 20%; color: red;}

  .content_left { text-align: center; padding: 0em; position: relative; min-width: 80%; color: red;}
`

