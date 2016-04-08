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
import sasses from "./sassSource"

const styles = {
          root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          },
          item:{
            flex:1
          },
          bts:{
                alignSelf: "center"
          }
};

class App extends React.Component {
     constructor(props) {
            injectTapEventPlugin();
            super(props);
            this.state={
                cssname:"bounce-leave",
                selectedvalue:1
            }
        }
        //定义私有的属性
        style=null;
        sass="";
        css="";
        componentDidMount(){
             
        }
        getMenueItems(){
            var cssnames=Object.keys(sasses);
            return cssnames.map((item,index)=>{
                return  <MenuItem value={item} key={index} primaryText={item} />
            })

        }
        sass2css(cssname){
            //需要后后台服务
            fetch('/sass', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    name: sasses[cssname]
                  })
                })
            .then((respone)=> respone.json())
            .then((data)=>{
                this.setState({
                    sass:sasses[cssname],
                    css:data.data,
                    selectedvalue:cssname
                })  
                var css = data.data,
                head = document.head || document.getElementsByTagName('head')[0];
                if(!this.style){
                    this.style = document.createElement('style');
                    this.style.type = 'text/css';
                   
                    head.appendChild(this.style);
                }
                 this.style.innerHTML= css;
              
            })
        }
        buttonclick(){
              this.setState({selectedvalue:this.state.cssname})
        }
        animationEnd(){
            this.setState({selectedvalue:""});
        }
        handleChange = (event, index, value) =>{
                this.setState({cssname:value});
                this.sass2css(value);

        }
         componentDidMount(){
             this.sass2css(this.state.cssname);
         }
      
    render() {
        return (
            <div>
             <div style={styles.root} >
                <Simulation cssname={this.state.selectedvalue} animationEnd={this.animationEnd.bind(this)}>
               </Simulation>
               <div style={styles.bts}>
                <SelectField  value={this.state.cssname} onChange={this.handleChange.bind(this)} >
                     {this.getMenueItems()}
                </SelectField>
                 <RaisedButton label="rePlay"  secondary={true} onMouseDown={this.buttonclick.bind(this)} />
               </div>
                   <Highlight style={styles.item}>
                    {this.state.sass}
                  </Highlight>
                  <Highlight style={styles.item}>
                    {this.state.css }
                  </Highlight>
            </div>
            </div>
           
        );
    }
}
 

export default App;

