import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';






export default class LeftSidebar extends Component {
    state = { visible: false }
  
    handleButtonClick = () => this.setState({ visible: !this.state.visible })
  
    handleSidebarHide = () => this.setState({ visible: false })
  
    render() {
      const { visible } = this.state
  
      return (
       
        <div>
        
        
        SIDEBAR
        
        
          </div>
      
        
      )
    }
  }