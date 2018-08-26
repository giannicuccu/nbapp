import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'reset-css';
import { BrowserRouter, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'
import Map from './components/map'
import Azz from './components/azz'
import EscapeRegExp from 'escape-string-regexp';


var map = {};


class App extends Component {

  constructor(props) {
    super(props);
    this.updateFilteredLocations = this.updateFilteredLocations.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.sidebarLocationClick = this.sidebarLocationClick.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    // this.clearQuery = this.clearQuery.bind(this);
    
    // this.handleLogoutClick = this.handleLogoutClick.bind(this);
     this.state = {
    sidebarVisible: true,
    center:{lat: 40.0420784, lng: 9.0921147},
    map: {},
    query: '',
    showingLocations: [],
    activeLocation: {},    
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


  componentDidMount = () =>{
    let showingLocations = this.state.locations.map(v => v)
    this.setState({showingLocations})
  }

    //var largeInfowindow = new window.google.maps.InfoWindow();

    //this.renderMarkers(this.props.locations)
    

   
    
    




 
updateQuery = (query) => {

    this.setState({query: query.trim()})
    let showingLocations

  if (query){
      const match = new RegExp(EscapeRegExp(query),'i');
      showingLocations = this.state.locations.filter((location)=>match.test(location.title))
      
      
      
  }else{
     showingLocations =  this.state.locations;
      //console.log(showingLocations)
    
  }

  this.setState({showingLocations: showingLocations})

}

// clearQuery = () => {
//     this.setState({query: ''})
// }



updateFilteredLocations = (showingLocations) => {
   
      
    //if (this.state.visibleLocations.length != Locations.length){
      this.setState({visibleLocations: showingLocations})
      
    //}
    
    }


    toggleSidebar = () => {
      this.state.sidebarVisible ? this.setState({sidebarVisible: false}): this.setState({sidebarVisible: true})
    }

    azzMethod = (location) => {
      console.log('AZZMETHOD')
      console.log(location)
      this.setState({activeLocation: location})
    }

    sidebarLocationClick = (location) => {
        console.log(location)
        
         this.setState({activeLocation: location})
         console.log(this.state)
         
         
        // console.log(this.state)
        
        //console.log(this.state.activeLocation1)
      }

      assignMapToApp = (mymapp) =>{
        console.log('FUCKKKKKKK')
        this.setState({map: mymapp})
      }  
  render() {
    console.log('render App')
    
  const {center, activeLocation, sidebarVisible, locations, visibleLocations, query } = this.state
  //const sidebarLocationClick = this.sidebarLocationClick
  // let showingLocations

  // if (query){
  //     const match = new RegExp(EscapeRegExp(query),'i');
  //     showingLocations = locations.filter((location)=>match.test(location.title))
  //     console.log(showingLocations)
      
      
  // }else{
  //    showingLocations = locations;
  //     //console.log(showingLocations)
  //     console.log(showingLocations)
  // }
   

    return (
      <div className="App">      
           
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
                        this.state.showingLocations.map( location => (
                                <li key={ location.id }>
                                    <div className="place">                                        
                                        <div className="place-name">
                                          <h3>
                                            <a href="# `${ location.title }`" onClick={()=>this.setState({activeLocation: location})}>{ location.title }</a>
                                            </h3>  
                                          </div>
                                    </div>
                                </li>
                            )
                        )
                    }
                </ul>
        </div>
            



            {/* <Sidebar sidebarVisible={sidebarVisible} locations={locations} sidebarLocationClick={this.sidebarLocationClick} updateVisibleLocations={this.updateVisibleLocations}/> */}
            <section className='mapContainer'> 
            <div className="tophead">
              <nav><button onClick={this.toggleSidebar}> Toggle menu</button></nav>
            </div>            
            {/* <Map locations={locations}  center={center} activeLocation={activeLocation} visibleLocations={visibleLocations} />   */}
            <Map assignMapToApp={this.assignMapToApp}/>
            
            {/* <Azz  locations={locations} visibleLocations={visibleLocations}/>  */}
              
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
