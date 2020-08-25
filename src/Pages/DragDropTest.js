import React, { Component } from 'react';
import styled from 'styled-components';
import { PopulateTree } from '../Components/PopulateTree';
import { TreeViewItems } from "../Data/TreeViewItems";
import MusicIcon from '@material-ui/icons/SurroundSound';
import SettingsIcon from '@material-ui/icons/Settings';
import CalendarIcon from '@material-ui/icons/Schedule';
import { uuid } from "uuidv4";

export default class DragDropTest extends Component {
    state = {
        tasks: [
            {name:"Learn Angular",category:"wip", bgcolor: "yellow"},
            {name:"React", category:"wip", bgcolor:"pink"},
            {name:"Vue", category:"complete", bgcolor:"skyblue"},
            {name:"Learn Angular 2",category:"wip", bgcolor: "yellow"},
            {name:"React 2", category:"wip", bgcolor:"pink"},
            {name:"Vue 2", category:"complete", bgcolor:"skyblue"},
            {name:"Learn Angular 3",category:"wip", bgcolor: "yellow"},
            {name:"React 3", category:"wip", bgcolor:"pink"},
            {name:"Vue 3", category:"complete", bgcolor:"skyblue"}
          ],
        treeData: TreeViewItems  
    }

    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");
       
       let tasks = this.state.tasks.filter((task) => {
           if (task.name == id) {
               task.category = cat;
           }
           return task;
       });

       let entry =  { id: uuid(), name: "Test Entry",labelIcon: MusicIcon, children: [] }
       let newTreeData = this.state.treeData.push(entry);

       this.setState({
           ...this.state,
           tasks,
           newTreeData
       });
       
    }

    render() {
        var tasks = {
            wip: [],
            complete: []
        }

        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <div key={t.name} 
                    onDragStart = {(e) => this.onDragStart(e, t.name)}
                    draggable
                    className="draggable"
                    style = {{backgroundColor: t.bgcolor}}
                >
                    {t.name}
                </div>
            );
        });
        
        let entry =  { id: uuid(), name: "Test Entry",labelIcon: MusicIcon, children: [] }
        this.state.treeData.push(entry)

        return (
            <DragDropTestStyled className="container-drag ">                
                <div className="wip"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "wip")}}>
                    <span className="task-header">WIP</span>
                    {tasks.wip}
                </div>
                <div className="droppable" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "complete")}>
                     <span className="task-header">COMPLETED</span>
                     {tasks.complete}                                          
                     <PopulateTree TestTreeData = {this.state.treeData}/>         
                </div>
                
            </DragDropTestStyled>
        );
    }
}

const DragDropTestStyled = styled.div`
  
  .DragDropTest {
      display: grid;
      grid-gap: 10px;
      margin-top: 0.35em;
      margin-left: 0.5em;
      margin-right: 2em;
      margin-bottom: 2em;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(1, 1fr);    
      max-width: auto;
      background: papayawhip;
      border: 2px solid palevioletred;
      border-radius: 5px;
      padding: 0.25em 1em;
      font-size: 1em;
  }

.container-drag {
  text-align: center;
}

.wip {  
  display: inline-block;
  width: 50%;
  height: 10%;
  background-color: #EEEEEE;
  border-right: 1px dotted;
}

.droppable { 
  display: inline-block;
  width: 50%;
  height: 10%;
  background-color: #9E9E9E;
  border-left: 1px dotted;
}

.draggable {  
  width: 50%;
  height: 10%;
  background-color: yellow;
  margin: 5px auto;
  line-height: 5em;
}

.header {  
  margin: 0;
  padding: 0;
  background-color: #E0E0E0;
  width:50%;
}

.task-header {
  display: inline-block;
  background-color: skyblue;
  width:50%;
}


`;