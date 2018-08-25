import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'reset-css';
import { BrowserRouter, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'
import Map from './components/map'





class App extends Component {

  constructor(props) {
    super(props);
    this.updateVisibleLocations = this.updateVisibleLocations.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.sidebarLocationClick = this.sidebarLocationClick.bind(this);
    
    // this.handleLogoutClick = this.handleLogoutClick.bind(this);
     this.state = {
  sidebarVisible: true,
  center:{lat: 40.0420784, lng: 9.0921147},
  //map: {},
  activeLocation: {},
  visibleLocations: [],
  locations: [
    {id:0,title: 'Villasimius - Campulongu', location: {lat: 39.127868, lng: 9.506965},thumbnail:''},
    {id:1,title: 'Villasimius - Porto giunco', location: {lat: 39.11293148, lng: 9.51855074},thumbnail:''},
    {id:2,title: 'Villasimius - Simius', location: {lat: 39.12807541, lng: 9.53031797},thumbnail:''},
    {id:3,title: 'Villasimius - Punta Molentis', location: {lat: 39.13340402, lng: 9.55628425},thumbnail:''},
    {id:4,title: 'Villasimius - Spiaggia del riso', location: {lat: 39.12001361, lng: 9.50928573},thumbnail:''},
    {id:5,title: 'Chia - Su Giudeu', location: {lat: 38.88334699, lng: 8.86205559},thumbnail:''},
    {id:6,title: 'Chia - Sa Colonia', location: {lat: 38.89450386, lng: 8.87810593},thumbnail:''},
    {id:7,title: 'Teulada - Tuerredda', location: {lat: 38.8946125, lng: 8.81306458},thumbnail:''},
    {id:8,title: 'Teulada - Porto Pino', location: {lat: 38.94770201, lng: 8.62018492},thumbnail:''},
    {id:9,title: 'Arbus - Piscinas', location: {lat: 39.53827221, lng: 8.45206793},thumbnail:''},
    {id:10,title: 'Arbus - Pistis', location: {lat: 39.68795321, lng: 8.4536045},thumbnail:''},
    {id:11,title: 'Sinis - Is Arutas', location: {lat: 39.95095475, lng: 8.4012766},thumbnail:''},
    {id:12,title: 'Sinis - San Salvatore', location: {lat: 39.88224882, lng: 8.43636781},thumbnail:''},
    {id:13,title: 'Sinis - Sa Mesa Longa', location: {lat: 40.0459637, lng: 8.39917611},thumbnail:''},
    {id:14,title: 'Stintino - La pelosa', location: {lat: 40.96528623, lng: 8.20943712},thumbnail:''},
    {id:15,title: 'Stintino - Le Saline', location: {lat: 40.90667335, lng: 8.23576223},thumbnail:''},
    {id:16,title: 'Palau - Isola dei Gabbiani', location: {lat: 41.19394581, lng: 9.31601904},thumbnail:''},
    {id:17,title: 'Palau - La Sciumara', location: {lat: 41.18302982, lng: 9.37383403},thumbnail:''},
    {id:18,title: 'La Maddalena - Spargi', location: {lat: 41.23094657, lng: 9.34249749},thumbnail:''},
    {id:19,title: 'La Maddalena - Budelli', location: {lat: 41.27914399, lng: 9.35610631},thumbnail:''},
    {id:20,title: 'Costa Smeralda - Pevero', location: {lat: 41.11228006, lng: 9.5465519},thumbnail:''},
    {id:21,title: 'Costa Smeralda - Capriccioli', location: {lat: 41.07892258, lng: 9.55196308},thumbnail:''},
    {id:22,title: 'Costa Smeralda - Liscia Ruya', location: {lat: 41.07156427, lng: 9.52883926},thumbnail:''},
    {id:23,title: 'Baunei - Cala Goloritzè', location: {lat: 40.10895911, lng: 9.68895389},thumbnail:''},
    {id:24,title: 'Baunei - Cala Mariolu', location: {lat: 40.12376906, lng: 9.67662664},thumbnail:''},
    {id:25,title: 'Muravera - Costa Rei', location: {lat: 39.24698189, lng: 9.57238579},thumbnail:''},
    {id:26,title: 'Muravera - Cala Sinzias', location: {lat: 39.19848583, lng: 9.5628504},thumbnail:''}
  
  ]
  
  }
    
    
  }




 
 




  updateVisibleLocations = (Locations) => {
   
      
    if (this.state.visibleLocations.length != Locations.length){
      this.setState({visibleLocations: Locations})
      
    }
    
    }


    toggleSidebar = () => {
      this.state.sidebarVisible ? this.setState({sidebarVisible: false}): this.setState({sidebarVisible: true})
    }

    sidebarLocationClick = (location) => {
        //console.log(location)
        
         this.setState({activeLocation: location})
         //console.log(this.markers)
        // console.log(this.state)
        
        //console.log(this.state.activeLocation1)
      }
  
  render() {
    
  const {center, activeLocation, sidebarVisible, locations, visibleLocations } = this.state
  //const sidebarLocationClick = this.sidebarLocationClick
     
   

    return (
      <div className="App">      
           
            {/* <div className='sidebar' id="appSidebar">
            <div className="tophead">
             <h3>HEWADER</h3>
            </div>
            sidebar
            <input id='searchInput' type='text' placeholder='Enter location'/>
            </div> */}
            <Sidebar sidebarVisible={sidebarVisible} locations={locations} sidebarLocationClick={this.sidebarLocationClick} updateVisibleLocations={this.updateVisibleLocations}/>
            <section className='mapContainer'> 
            <div className="tophead">
              <nav><button onClick={this.toggleSidebar}> Toggle menu</button></nav>
            </div>            
            <Map locations={locations}  center={center} activeLocation={activeLocation} visibleLocations={visibleLocations} /> 
              
              {/* <div ref='map' className={'map'}>
                pippo
              </div> */}
            </section>
            <section className={'locationPanel'}> location data here </section>
             

            
      </div>
      
         
    );
  }
}

export default App;
