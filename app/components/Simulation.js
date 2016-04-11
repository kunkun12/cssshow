import React from 'react';
import ReactDom from "react-dom"
var ratio =window.devicePixelRatio||1;

const styles={
    phoneContainer: {
        position: "relative",
        overflow:"hidden",
        width: 365/ratio+"px",
        height: 752/ratio+"px",
        margin: "0 auto"
    },
    phoneimg:{
        width: "100%"
    },
    phonebg:{
        position:"absolute",
        width: 340/ratio+"px",
        height: 640/ratio+"px",
        top: 40/ratio+"px",
        left: 12/ratio+"px",
        backgroundColor: "#FFF"
    },
    content: {
        width: "100px",
        height: "50px",
        backgroundColor:"#ff4081",
        position: "absolute",
        top: "50%",
        left: 0,
        right: 0,
        margin: "0 auto"
    }
}


class Simulation extends React.Component {
     constructor(props) {
        super(props);
            this.state={
            }
           
        }
        
        buttonclick(){
            
        }
    render() {
        return (
            <div>
                <div style={styles.phoneContainer}>
                <div style={styles.phonebg}>
                <div style={styles.content} className={this.props.cssname} onAnimationEnd={this.props.animationEnd}></div>
                </div>
                <img style={styles.phoneimg} src={require("../images/phone.png")}/>
                </div>
            </div>
        );
    }
}






export default Simulation;



/* 第一次 render */
// getDefaultProps  
// getInitialState  
// componentWillMount  
// render  
// componentDidMount  
//  第二次 render 
// componentWillReceiveProps  
// shouldComponentUpdate  
// componentWillUpdate  
// render  
// componentDidUpdate  