import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import SortBy from 'sort-by';
import EscapeRegExp from 'escape-string-regexp';






export default class Sidebar extends Component {

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({query: query.trim()})
    }

    clearQuery = () => {
        this.setState({query: ''})
    }



    componentWillReceiveProps(){
      //console.log('RECEIVING PROPS'+this.props.sidebarVisible)
    }
  
    render() {
      const { sidebarVisible, locations } = this.props
      const {query} = this.state;



      let showingLocations

      if (query){
          const match = new RegExp(EscapeRegExp(query),'i');
          showingLocations = locations.filter((location)=>match.test(location.title))
      }else{
          showingLocations = locations;
      }
      //showingLocations.sort(SortBy('location.id'));



  
      return (
       
        <div className={ sidebarVisible ? 'sidebar':'sidebar hidden' } id="appSidebar">
        <div className="tophead">
         <h3>HEWADER </h3>
        </div>
        COMPONENT SIDEBAR
        <input id='searchInput' type='text' placeholder='Enter location' 
        value={ query }
        onChange ={(event) => this.updateQuery(event.target.value)}
        
        />
        <p>{ query }</p>
         <ul className="locations-grid">
                    {
                        showingLocations.map( location => (
                                <li key={ location.id }>
                                    <div className="place">                                        
                                        <div className="place-name">
                                          <h3><a href="#" onClick={()=>this.props.sidebarLocationClick(location) }>{ location.title }</a></h3>  
                                          </div>
                                    </div>
                                </li>
                            )
                        )
                    }
                </ul>
        </div>
      
        
      )
    }
  }