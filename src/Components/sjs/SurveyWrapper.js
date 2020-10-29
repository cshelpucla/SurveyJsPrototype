import React from 'react';
import * as Survey from "survey-react";
import styled from 'styled-components';
//import './style.css'
import tods1 from '../Tests/tod-s1.json'
import demodata from '../Tests/demographics.json'

class SurveyWrapper extends React.Component {
  
  myCss = {
    rating: {
        root: "myclass"
    },
    navigationButton: "button btn-lg"
  };

  json = {  showProgressBar: "top",
            //goNextPageAutomatic: false,
            showNavigationButtons: true,
            //showTimerPanel: "top",
            //maxTimeToFinishPage: 100,
            //maxTimeToFinish: 25000,
            //firstPageIsStarted: true,
            //startSurveyText: "Start Quiz",
            "logo": "wps-logo.png",
            "logoWidth": 60,
            "logoHeight": 60,
            pages:[]}
  
   setupPageSelector(survey) {
    var selector = document.getElementById('pageSelector');
    for (var i = 0; i < survey.visiblePages.length; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = "Page " + (
        i + 1);
        selector.add(option);
    }
  } 

  buildTest(pageKeys, qdata = false) {
    let tods = tods1      
    let keys = pageKeys
    let qidx = 1
    console.log("keys",keys)
    
    keys.forEach(key => {      
    
      let pg = tods[key]
      console.log("json from test",pg)

      let testpage = {
        "name": key,
        "title": "Test 5: Word / Reading Fluency : " + key,    
        "elements": [ ]
      }
      
      pg.forEach(e => {      

        let cnt = (qdata ? 2 : 1 ) 
        let s = (qdata ? 2 : 0 ) 
        let g = []
        e.slice(s).forEach(e => { g.push({value:cnt, text:e}); cnt = cnt + 1 })

        testpage.elements.push (          
            {"type": "rating",
              "name": (qdata ? e[0] : ""+qidx ) ,
              "titleLocation": ( qdata ? "left":"left"),
              "hideNumber": false,
              "correctAnswer": 4,
              "rateValues": g
            }
          )  
          qidx = qidx + 1
      });  
      
      this.json.pages.push(testpage)    
    })

    console.log("Letters json:", this.json)
  }


  buildTest2() {
    let tods = tods1
      
    let keys = Object.keys(tods)
    console.log("keys",keys)
        
    let key = "page17"
    let pg = tods[key]
    console.log("json from video test",pg)

    
    pg.forEach(e => {      
      let testpage = {
        "name": key,
        "title": "Test Page with Videos : Videos as pictures : " + key,    
        "elements": [ ]
      }
      testpage.elements.push (          
      {
        "type": "panel",
        "name": "panel1",
        "elements": [
          {
          "type": "imagepicker",
          "name": "question2",
          "titleLocation": "hidden",
          "contentMode": "video",
          "choices": [
            {
            "value": e.slice(1,2),
            "imageLink": e.slice(0,1)
            },
          ]
          },
          {
          "type": "rating",
          "name": "question1",
          "titleLocation": "hidden",
          "hideNumber": true,
          "defaultValue": 1,
          "correctAnswer": 5,
          "rateValues": e.slice(1,5),
          startWithNewLine: false,
          }
        ]
        },

        )  
        this.json.pages.push(testpage)    
      });
    console.log("Letters json:", this.json)
  }

  buildTest3() {
    let tods = tods1
      
    let keys = ["page5","page6","page7","page8","page9","page10","page11","page12"]
    let idx  = 1
    let qidx = 500

    keys.forEach(key => {      
        let pg = tods[key]
        let testpage = {
          "name": key,
          "title": "Test 99:Picture Word tests : " + key,    
          "elements": [ ]
        }

        pg.forEach(e => {      
          let r=[]
          let val = 1
          e.forEach(p => {      
              r.push({ "value": ""+val, "imageLink": "/img/TOD-C/cuts"+idx+"/"+p })
              val++
          })

          testpage.elements.push (                    
              {
                "type": "imagepicker",
                "name": "question"+ qidx,    
                "titleLocation": "hidden",
                "hideNumber": false,              
                "choices": r,
                "imageWidth": 110,
                "imageHeight": 110,
              }  
            )  
          qidx = qidx + 1  
          console.log("run:", qidx)
        });  
        this.json.pages.push(testpage)    
        idx++
    })

    console.log("test5 json",this.json) 
  }

  buildTest5()
  {
    let tods = tods1
    let keys = ["page14","page15"]

    let qidx = 600
    keys.forEach(key => {      
      let pg = tods[key]
      
      let testpage = {
        "name": key,
        "title": "Test 99:Picture Word tests : " + key,    
        "elements": [ ]
      }

      pg.forEach(e => {      
          testpage.elements.push (                    
            {
              "type": "panel",
              "name": "panel"+qidx,
              "elements": [
              {
                "type": "imagepicker",
                "name": "question1"+qidx,
                "titleLocation": "hidden",
                "choices": [
                {
                  "value": "lion",
                  "imageLink": "/img/TOD-C/cuts1/"+e[0]
                },
                ],
                "imageWidth": 120,
                "imageHeight": 120,
              },
              {
                "type": "rating",
                "name": "question"+qidx,
                "titleLocation": "hidden",
                "hideNumber": true,
                "defaultValue": 1,
                "correctAnswer": 1,
                "rateValues": e.slice(1,5),
                "startWithNewLine": true,
              }]
            })
            qidx++

          })      
          this.json.pages.push(testpage)      
        
        })      
    }

    download(content, fileName, contentType) {
      var a = document.createElement("a");
      var file = new Blob([content], {type: contentType});
      a.href = URL.createObjectURL(file);
      a.download = fileName;
      a.click();
    }
  
  constructor() {
    super()    
    //Survey.StylesManager.applyTheme("orange");    
    Survey.defaultBootstrapMaterialCss.navigationButton = "btn btn-green";
    Survey.defaultBootstrapMaterialCss.rating.item = "btn btn-default my-rating";

    Survey.StylesManager.applyTheme("bootstrap-material");    
    //Survey.StylesManager.applyTheme("modern");    
    //Survey.StylesManager.applyTheme("bootstrap");     
       
    this.json.pages.push ( {
        "name": "clientinfo",
        "title": "Directions",    
        "elements": [demodata[2]]
     })

     this.json.pages.push ( {
      "name": "clientinfo",
      "title": "Client Information",    
      "elements": [demodata[0]]
     })

     this.json.pages.push ( {
      "name": "raterinfo",
      "title": "Rater Information"  ,
      "elements": [demodata[1]]
     })

     this.buildTest(["page1","page2","page3","page4"], false)
     this.buildTest(["page16"], true)
     this.buildTest3()
     this.buildTest5()
     this.buildTest2()
    
     
     console.log(this.json2)
     this.download(JSON.stringify(this.json), 'test.json', 'text/plain');
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
    var model = new Survey.Model(this.json);    
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
export default SurveyWrapper;

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

const SurveyStyled2 = styled.span`

    .sv_q_imgsel_image {
    }    
    
    .sv_q_rating { 
      padding: 0em 0em 0em 0em;
      display: inline-block;
      justify-content: space-between;
      width: 100%;
    }

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

    .sv_q_rating_item2 {
      margin-right: 1em;      
      text-align: top;
      font: bold 24px Arial;
      text-decoration: none;
      
      color: #333333;
      padding: 15px 20px 15px 20px;
      min-height: 2em;
      min-width: 8em;
      max-width: 8em;
    }
    

    .sv_q_rating_item:hover{background-color:green}
    .sv_q_rating_item:focus{background-color:red}

    .sv_q_rating_item2:hover{background-color:yellow}
    .sv_q_rating_item2:focus{background-color:red}

    .sv_q_rating_item2 {
      -webkit-appearance: button;
      -moz-appearance: button;
      appearance: button;
    }

    .sv_q_imgsel {} 

    .sv_p_container div {
      display: flex;
      color: #333333;
    }

    .sq_my_root {
      display: flex;
      color: #333333;
      background-color: #EEAAEE;
    }

    .sv_my_row {display: inline;} 
    
    .sv_q_imagepicker_inline {}

    .sv_q_num { text-align: bottom; padding: 1em; position: none; color: orange; }

    .sv_q_title { text-align: center; color: orange; margin: 0px, 8px, 8px ,0px; 
                  padding: 15px 20px 15px 20px;; position: none;}
`;