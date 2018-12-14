import {} from '../sass/base.sass';
import {} from './css.sass';
import React from 'react';
import {} from "react-highlight/node_modules/highlight.js/styles/monokai.css"
import Highlight from 'react-highlight';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import {RadioButton,RadioButtonGroup} from 'material-ui/RadioButton';
import {Popover,PopoverAnimationDefault} from 'material-ui/Popover';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import PopoverAnimationFromTop from 'material-ui/lib/popover/popover-animation-from-top';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/CheckBox';
import Sass from "Sass";
import autoprefixer from 'autoprefixer';
import postcss      from  'postcss';
import copy from 'copy-to-clipboard';
import Simulation from "./Simulation.js"
import  injectTapEventPlugin from "react-tap-event-plugin";
import sasses from "./sassSource";
const styles = {
          root: {
            display: 'flex',
            marginTop:"50px",
            flexWrap: 'wrap',
            btdisEnable:false,
            justifyContent: 'space-around',
          },
          item:{
            flex:1
          },
          bts:{
                alignSelf: "center",
                flex:1
          },
          highlight:{
            maxHeight: (752/window.devicePixelRatio||1)+"px",
            width: "360px",
            overflow: "scroll",
            fontSize: "14px"
          },
          btlabel:{
            "textTransform": "none"
          },
          copiedpopoverstyle:{
            padding: "10px"
          },
          autoprefixcheck: {
                  marginBottom: 16,
                }
};

class App extends React.Component {
     constructor(props) {
            injectTapEventPlugin();
            super(props);
            this.state={
                cssname:"bounceInDown",
                selectedvalue:1,
                styleformat:"css",
                autoprefix:false,
                copypopoveropen:false,
                anchorEl:null,
                sass:"",
                css:"",
                prefixercss:'',
                csscode:""
            }
        }
        //定义私有的属性
        style=null;
        
        componentDidMount(){
             
        }
        getMenueItems(){
            var cssnames=Object.keys(sasses);
            return cssnames.map((item,index)=>{
                return  <MenuItem value={item} key={index} primaryText={item} />
            })

        }
        sass2css(cssname){
          //通过sass.js 实现将sass 文件转为css https://github.com/medialize/sass.js/
           var result = Sass.compile(sasses[cssname],{
            style: Sass.style.expanded,
            indent:'    ',
            indentedSyntax:true
           },(data)=>{
              var atomcss = data.text,
                  head = document.head || document.getElementsByTagName('head')[0];
                  if(!this.style){
                      this.style = document.createElement('style');
                      this.style.type = 'text/css';
                      head.appendChild(this.style);
                  }
                  postcss([ autoprefixer ]).process(atomcss).then((result)=> {
                     result.warnings().forEach(function (warn) {
                          console.warn(warn.toString());
                      });
                      this.style.innerHTML=result.css;
                      this.setState({
                        sass:sasses[cssname],
                        css:atomcss,
                        selectedvalue:cssname,
                        prefixercss:result.css
                   });
                  this.setState({
                    csscode:this.state.styleformat=='sass'?sasses[cssname]:this.state.autoprefixer?result.css:atomcss
                  });
                

              });                
                
           });

            //以前的版本是 通过 node 后端实现
            // //需要后后台服务
            // fetch('/sass', {
            //       method: 'POST',
            //       headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //       },
            //       body: JSON.stringify({
            //         name: sasses[cssname]
            //       })
            //     })
            // .then((respone)=> respone.json())
            // .then((data)=>{
            //     this.setState({
            //         sass:sasses[cssname],
            //         css:data.data,
            //         selectedvalue:cssname
            //     })  
            //     var css = data.data,
            //     head = document.head || document.getElementsByTagName('head')[0];
            //     if(!this.style){
            //         this.style = document.createElement('style');
            //         this.style.type = 'text/css';
                   
            //         head.appendChild(this.style);
            //     }
            //      this.style.innerHTML= css;
              
            // })
        }
        buttonclick(){
              this.setState({
                selectedvalue:this.state.cssname,
                btdisEnable:true
              })
        }
        goToGitHub(){
          location.href='https://github.com/kunkun12/cssshow';
        }
        animationEnd(){
          setTimeout(()=>{
            this.setState({
                selectedvalue:"",
                btdisEnable:false
            });
          },500)
            
        }
        handleChange = (event, index, value) =>{
                this.setState({cssname:value});
                this.sass2css(value);

        }
        copyHander(event){
          //将代码复制到粘贴板
              this.setState({
                    copypopoveropen: true,
                    anchorEl: event.currentTarget,
                });
              setTimeout(()=>{
                  this.setState({
                    copypopoveropen: false,
                });
              },1000);
           copy(this.state.csscode);
        }
        autoPrefixerck(event,value){
            this.setState({autoprefixer:value});
            if(this.state.styleformat==='css'){
                this.state.csscode=value?this.state.prefixercss:this.state.css;
            }
        }
        cssStyleChnaged=(event,value)=>{
          this.setState({styleformat:value});
          this.state.csscode=value=="sass"?this.state.sass:this.state.css;
          this.setState({autoprefixer:false})
        }
       componentDidMount(){
           this.sass2css(this.state.cssname);
       }
      
    render() {
        return (
            <MuiThemeProvider>
            <div>
              <AppBar title="css show" iconElementRight={
                  <FlatButton  
                  label="GitHub" 
                  linkButton={true}
                  labelStyle={styles.btlabel}
                  href="https://github.com/kunkun12/cssshow"
                  secondary={true}>
                  </FlatButton>} >
              </AppBar>
              <div style={styles.root} >
                <div style={styles.item}>
                  <Simulation cssname={this.state.selectedvalue} animationEnd={this.animationEnd.bind(this)}>
                   </Simulation>
                </div>
                <div style={styles.bts}>
                    <SelectField  width={200} value={this.state.cssname} onChange={this.handleChange.bind(this)} >
                         {this.getMenueItems()}
                    </SelectField>
                     <RaisedButton 
                         label="RePlay"  
                         labelStyle={styles.btlabel}
                         disabled={this.state.btdisEnable} 
                         primary={true} 
                         onMouseDown={this.buttonclick.bind(this)} >
                     </RaisedButton>
                </div>
                <div style={styles.item}>
                    <div style={{"display":'flex'}}>
                       <div style={{"flex":'1'}}>
                        <RadioButtonGroup name="shipSpeed" onChange={this.cssStyleChnaged.bind(this)} defaultSelected={this.state.styleformat}>
                          <RadioButton value="css" label="css">
                          </RadioButton>
                          <RadioButton value="sass" label="sass">
                          </RadioButton>
                        </RadioButtonGroup>
                        </div>
                        {this.state.styleformat==="css"?<div style={{"flex":'1'}}>
                         <Checkbox
                          label="autoprefixer"
                          defaultChecked={this.state.autoprefixer}
                          onCheck={this.autoPrefixerck.bind(this)}
                          style={styles.autoprefixcheck}
                          />
                        </div>:""}
                        
                        <div style={{"flex":'1'}}>
                          <RaisedButton label="copy code"  labelStyle={styles.btlabel}  onMouseDown={this.copyHander.bind(this)} >
                              <Popover
                                  open={this.state.copypopoveropen}
                                  anchorEl={this.state.anchorEl}
                                  anchorOrigin={{"horizontal":"middle","vertical":"bottom"}}
                                  targetOrigin={{"horizontal":"middle","vertical":"top"}}
                                  
                                >
                                <div style={styles.copiedpopoverstyle}>
                                  copied
                                </div>
                           </Popover>

                          </RaisedButton>
                        </div>
                    </div>
                    <div style={styles.highlight}>
                      <Highlight >
                        {this.state.csscode}
                      </Highlight>
                    </div>
                </div>
              </div>
              </div>
          </MuiThemeProvider>
           
        );
    }
}



export default App;

