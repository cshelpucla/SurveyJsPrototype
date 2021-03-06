// global dependencies
import React from "react";
//import ResizePanel from "react-resize-panel";
import ResizePanel from "../ResizePanel/ResizePanel.js";
import style from './LayoutTest.css';
import classNames from 'classnames/bind';
import styled from 'styled-components'
import { PopulateTree } from "../Components/PopulateTree.js";
import FormikView from "../Components/FormikView.js";
import surveyConfig from '../Components/sjs/breakfast-survey.json';
import { TreeViewItems } from  "../Data/TreeViewItems"
import SurveyWrapper from "../Components/sjs/SurveyWrapper"

let cx = classNames.bind(style);
/*<DemoTreeFetch id="1" name="Applications" />*/

export default () => (
  <HomeStyled className={cx('container')}>
    <ResizePanel direction="s">
      <div className={cx('header', 'panel')}>
        Top bar
      </div>
    </ResizePanel>
    <div className={cx('body')}>

    <ResizePanel direction="e" style={{ flexGrow: '1' }} >
        <div className={cx('sidebar', 'withMargin', 'panel')}>                    
          <PopulateTree TestTreeData= {TreeViewItems} />
        </div>
    </ResizePanel>
      <div className={cx('content', 'panel')}>
        <div><SurveyWrapper/>   </div>
      </div>
    <ResizePanel direction="w" style={{ flexGrow: '1' }} 
           handleClass={style.customHandle} 
           borderClass={style.customResizeBorder}>
       <div className={cx('sidebar', 'panel')}>
          <div><FormikView/></div>
        </div>
      </ResizePanel>
    </div>

    <ResizePanel direction="n" style={{height: '200px'}}>
      <div className={cx('footer', 'panel')}>
        <div className={cx('footerArea')}>
          <div className={cx('footerAreaContent')}>
            <span>footer area, min height: 100px</span>
          </div>
        </div>
        <div className={cx('footerBottomBar')}>
          bottom bar
        </div>
      </div>
    </ResizePanel>
  </HomeStyled>
);

const HomeStyled = styled.span`
    display: flex;
    margin-top: 0em;
    margin-left: 0em;
    margin-right: 0em;
    margin-bottom: 0em;
    max-height: 90%;
`;


