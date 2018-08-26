import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import SortBy from 'sort-by';
import EscapeRegExp from 'escape-string-regexp';






export default class Sidebar extends Component {

    constructor(props) {
        super(props);
        // this.handleLoginClick = this.handleLoginClick.bind(this);
        // this.handleLogoutClick = this.handleLogoutClick.bind(this);
        // this.state = {isLoggedIn: false};
        
        this.state = {
            query: ''
        }
    
    
    
        this.updateQuery = this.updateQuery.bind(this);
        this.clearQuery = this.clearQuery.bind(this);
        // this.populateInfoWindow = this.populateInfoWindow.bind(this);
      }

    updateQuery = (query) => {
        this.setState({query: query.trim()})

    }

    clearQuery = () => {
        this.setState({query: ''})
    }



    // componentWillReceiveProps(){
    //   //console.log('RECEIVING PROPS'+this.props.sidebarVisible)
    // }
  
    render() {
      const { sidebarVisible, locations, updateVisibleLocations } = this.props
      const {query} = this.state;
      let showingLocations

      if (query){
          const match = new RegExp(EscapeRegExp(query),'i');
          showingLocations = locations.filter((location)=>match.test(location.title))
          //console.log(showingLocations)
          updateVisibleLocations(showingLocations)
          
      }else{
         showingLocations = locations;
          //console.log(showingLocations)
         updateVisibleLocations(showingLocations)
      }
      //showingLocations.sort(SortBy('location.id'));
        
      //

  
      return (
       
      true
      
        
      )
    }
  }