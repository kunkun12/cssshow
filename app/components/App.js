import {} from '../sass/base.sass';
import {} from './css.sass';
import React from 'react';
import {} from "react-highlight/node_modules/highlight.js/styles/monokai.css"
import Highlight from 'react-highlight';
import RaisedButton from 'material-ui/lib/raised-button';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import AppBar from 'material-ui/lib/app-bar';
import Simulation from "./Simulation.js"
import  injectTapEventPlugin from "react-tap-event-plugin";
                            injectTapEventPlugin();
var classobj={
    a:`
.bounce-enter
    opacity: 0
    animation: bounceInDown 0.5s
    animation-fill-mode: both
.bounce-leave
    animation: bounceOutUp 0.5s
    animation-fill-mode: both
@keyframes bounceInDown
    0%
        opacity: 0
        transform: translateY(-500px)
    60%
        opacity: 0.7
        transform: translateY(30px)
    80%
        opacity: 0.8
        transform: translateY(-10px)
    100%
        opacity: 1
        transform: translateY(0)
@keyframes bounceOutUp
    0%
        opacity: 1
        transform: translateY(0px)
    20%
        transform: translateY(-10px)
    40%
        transform: translateY(30px)
    100%
        transform: translateY(-500px)`
}

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  item:{
    flex:1
  }
};

class App extends React.Component {
     constructor(props) {
        super(props);
            this.state={
                acss:"",
                bcss:"",
                cssname:"",
                selectedvalue:1
            }
           
        }
        style=1;
        componentDidMount(){
             fetch('/sass', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    name: classobj.a
                  })
                })
            .then((respone)=> respone.json())
            .then((data)=>{
                this.setState({
                    acss:classobj.a,
                    bcss:data.data
                })  
                var css = data.data,
                head = document.head || document.getElementsByTagName('head')[0],
                style = document.createElement('style');
                style.type = 'text/css';
                if (style.styleSheet){
                  style.styleSheet.cssText = css;
                } else {
                  style.appendChild(document.createTextNode(css));
                }
                head.appendChild(style);
                console.log(style)
            })
        }
        buttonclick(){
            if(this.state.cssname=="bounce-enter"){
                this.setState({
                    cssname:"bounce-leave"
                })
            }else{
                 this.setState({
                    cssname:"bounce-enter"
                })
            }
        }
    handleChange = (event, index, value) => this.setState({selectedvalue:value});
    render() {
        return (
            <div>
             <div style={styles.root} >
                   <Highlight style={styles.item}>
                    {this.state.acss}
                  </Highlight>
                  <Highlight style={styles.item}>
                    {this.state.bcss }
                  </Highlight>
              <Simulation cssname={this.state.cssname} >
               </Simulation>
            </div>
                <SelectField  value={this.state.selectedvalue} onChange={this.handleChange} >
                      <MenuItem value={1} primaryText="Never"/>
                      <MenuItem value={2} primaryText="Every Night"/>
                      <MenuItem value={3} primaryText="Weeknights"/>
                      <MenuItem value={4} primaryText="Weekends"/>
                      <MenuItem value={5} primaryText="Weekly"/>
                </SelectField>
               <RaisedButton label="Play"  secondary={true} onMouseDown={this.buttonclick.bind(this)} />
            </div>
           
        );
    }
}
 

export default App;

