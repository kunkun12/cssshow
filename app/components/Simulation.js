import React from 'react';




const styles={
    phoneContainer: {
        position: "relative",
        width: "365px",
        height: "752px"
    },
    phonebg:{
        position:"absolute",
        width: "340px",
        height: "640px",
        top: "40px",
        left: "12px",
        backgroundColor: "#FFF"
    },
    content: {
        width: "100px",
        height: "50px",
        backgroundColor:"#ff4081",
        position: "absolute",
        top: "50%",
        left: "0",
        right: "0",
        margin: "0 auto"
    }
}


class Simulation extends React.Component {
     constructor(props) {
        super(props);
            this.state={
            }
           
        }
        componentDidMount(){
           
        }
        buttonclick(){
            
        }
    render() {
        return (
            <div>
                <div style={styles.phoneContainer}>
                <div style={styles.phonebg}>
                <div style={styles.content} className={this.props.cssname}></div>
                </div>
                <img src={require("../images/phone.png")}/>
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