import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';






export default class Sidebar extends Component {


    // componentWillReceiveProps(){
    //   console.log('RECEIVING PROPS'+this.props.sidebarVisible)
    // }
  
    render() {
      const { sidebarVisible, locations, sidebarLocationClick } = this.props
  
      return (
       
        <div className={ sidebarVisible ? 'sidebar':'sidebar hidden' } id="appSidebar">
        <div className="tophead">
         <h3>HEWADER </h3>
        </div>
        COMPONENT SIDEBAR
        <input id='searchInput' type='text' placeholder='Enter location'/>

         <ul className="locations-grid">
                    {
                        locations.map( location => (
                                <li key={ location.id }>
                                    <div className="place">                                        
                                        <div className="place-name">
                                          <h3><a href="#" onClick={ () => sidebarLocationClick(location) }>{ location.title }</a></h3>  
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