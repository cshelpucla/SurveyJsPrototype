import React, { Component } from "react";
//import * as SurveyKo from "survey-knockout";
import * as SurveyJSCreator from "survey-creator";
import "survey-creator/survey-creator.css";
import * as widgets from "surveyjs-widgets";
//import "./surveyeditor.css";
import styled from 'styled-components'

//import "jquery-ui/themes/base/all.css";
//import "nouislider/distribute/nouislider.css";
//import "select2/dist/css/select2.css";
//import "bootstrap-slider/dist/css/bootstrap-slider.css";

//import "jquery-bar-rating/dist/themes/css-stars.css";
//import "jquery-bar-rating/dist/themes/fontawesome-stars.css";

import $ from "jquery";
//import "jquery-ui/ui/widgets/datepicker.js";
//import "select2/dist/js/select2.js";
//import "jquery-bar-rating";

//import "icheck/skins/square/blue.css";
//import "pretty-checkbox/dist/pretty-checkbox.css";

//widgets.icheck(SurveyKo, $);
//widgets.prettycheckbox(SurveyKo);
//widgets.select2(SurveyKo, $);
//widgets.inputmask(SurveyKo);
//widgets.jquerybarrating(SurveyKo, $);
//widgets.jqueryuidatepicker(SurveyKo, $);
//widgets.nouislider(SurveyKo);
//widgets.select2tagbox(SurveyKo, $);
//widgets.signaturepad(SurveyKo);
//widgets.sortablejs(SurveyKo);
//widgets.ckeditor(SurveyKo);
//widgets.autocomplete(SurveyKo, $);
//widgets.bootstrapslider(SurveyKo);

class SurveyCreator extends Component {
  surveyCreator;
  componentDidMount() {
    let options = {  
      showTestSurveyTab: true,
      showEmbededSurveyTab : true,      
      showJSONEditorTab : true,      
      showPagesToolbox: false,
      showPropertyGrid: false, 
      showOptions: false,
      designerHeight: "",
      //questionTypes: ["text", "checkbox", "radiogroup", "dropdown"],
      useTabsInElementEditor: true,
      showElementEditorAsPropertyGrid: false
    };
    
    this.surveyCreator = new SurveyJSCreator.SurveyCreator(
      null,
      options
    );

    this.surveyCreator.saveSurveyFunc = this.saveMySurvey;  

    /*
    this.surveyCreator.tabs().push({
      name: "survey-templates",
      title: "My Custom Tab",
      template: "custom-tab-survey-templates",
      action: () => {
          this.surveyCreator.makeNewViewActive("survey-templates");
      },
      data: {},
    });
    */

    SurveyJSCreator.StylesManager.applyTheme("modern");

    this.surveyCreator.showToolbox = "right";
    //this.surveyCreator.showPropertyGrid = "right";
    this.surveyCreator.rightContainerActiveItem("toolbox");
    //this.surveyCreator.designerHeight = '1200px';
    //this.surveyCreator.questionTypes = ["text", "checkbox", "radiogroup", "dropdown"];


    this.surveyCreator.render("surveyCreatorContainer");
  }

  render() {
    return (
      <div id="surveyCreatorContainer" className="surveyEditor"/>
    );
  }
  
  saveMySurvey = () => {
    console.log(JSON.stringify(this.surveyCreator.text));
  };
}

export default SurveyCreator;

const SurveyStyled = styled.div`
        display: inline;
        outline: solid red 1px;        
        height: 100%;
        width: 100%;
`;