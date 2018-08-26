import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';





class Azz extends React.Component {

  constructor(props) {
    super(props);
    


  }

  
    shouldComponentUpdate = (nextProps, nextState) => {
      console.log(' 2 -------- SHOULD UPDATE -------------')
      
      
    }

    componentDidUpdate = () => {
        console.log(' 3 -------- did  UPDATE -------------')
        
        
      }

    componentWillReceiveProps = () => {
        
        console.log('1 -------- will received props   -------------')
        console.log(this.props)
        console.log('1 -------- will received props   -------------')
        
        
      } 



   







render(){
  console.log('RENDERING AZZ')
 
    return (    
    <div ref='map' className={'map'}></div>
        
)
}


}






export default Azz